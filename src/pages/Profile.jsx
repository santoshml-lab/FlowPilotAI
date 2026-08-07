import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

export default function Profile() {
  const [profile, setProfile] = useState({
    full_name: "",
    company: "",
    phone: "",
    address: "",
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
