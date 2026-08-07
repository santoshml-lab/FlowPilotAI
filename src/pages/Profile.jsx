import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

export default function Profile() {
  const [profile, setProfile] = useState({
  full_name: "",
  company: "",
  phone: "",
  address: "",
  avatar_url: "",
});
    
    
    
  
  
  
  


  useEffect(() => {
    loadProfile();
  }, []);

  async function loadProfile() {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    const { data } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", user.id)
      .single();

    if (data) {
      setProfile(data);
    }
  }
  async function uploadAvatar(file) {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const fileName = `${user.id}-${Date.now()}`;

  const { error } = await supabase.storage
    .from("products")
    .upload(fileName, file);

  if (error) {
    alert(error.message);
    return;
  }

  const { data } = supabase.storage
    .from("products")
    .getPublicUrl(fileName);

  setProfile({
    ...profile,
    avatar_url: data.publicUrl,
  });
  }

  async function saveProfile() {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    const { error } = await supabase
      .from("profiles")
      .upsert({
        id: user.id,
        ...profile,
      });

    if (!error) {
      alert("✅ Profile Saved");
    } else {
      alert(error.message);
    }
  }

  return (
    <div style={{ padding: "30px" }}>
      <h1>👤 My Profile</h1>
      <input
  type="file"
  accept="image/*"
  onChange={(e) => uploadAvatar(e.target.files[0])}
/>

<br /><br />

{profile.avatar_url && (
  <img
    src={profile.avatar_url}
    alt="Profile"
    width="120"
    height="120"
    style={{
      borderRadius: "50%",
      objectFit: "cover",
      border: "3px solid #2563eb",
    }}
  />
)}

<br /><br />

      <input
        placeholder="Full Name"
        value={profile.full_name}
        onChange={(e) =>
          setProfile({ ...profile, full_name: e.target.value })
        }
      />

      <br /><br />

      <input
        placeholder="Company"
        value={profile.company}
        onChange={(e) =>
          setProfile({ ...profile, company: e.target.value })
        }
      />

      <br /><br />

      <input
        placeholder="Phone"
        value={profile.phone}
        onChange={(e) =>
          setProfile({ ...profile, phone: e.target.value })
        }
      />

      <br /><br />

      <textarea
        placeholder="Address"
        value={profile.address}
        onChange={(e) =>
          setProfile({ ...profile, address: e.target.value })
        }
      />

      <br /><br />

      <button onClick={saveProfile}>
        💾 Save Profile
      </button>
    </div>
  );
}
