diff --git a/pages/profile.js b/pages/profile.js
new file mode 100644
index 0000000..cde5678
--- /dev/null
+++ b/pages/profile.js
@@
+import React, { useState, useEffect } from "react";
+import axios from "axios";
+
+export default function Profile() {
+  const [user, setUser] = useState({ name: "", email: "", bio: "", avatar: "" });
+  const [editing, setEditing] = useState(false);
+  const [avatarFile, setAvatarFile] = useState(null);
+
+  useEffect(() => {
+    axios.get("/api/user").then((res) => setUser(res.data));
+  }, []);
+
+  const handleChange = (e) => {
+    setUser({ ...user, [e.target.name]: e.target.value });
+  };
+
+  const handleAvatarChange = (e) => {
+    const file = e.target.files[0];
+    setAvatarFile(file);
+  };
+
+  const handleSave = async () => {
+    const formData = new FormData();
+    formData.append("name", user.name);
+    formData.append("email", user.email);
+    formData.append("bio", user.bio);
+    if (avatarFile) formData.append("avatar", avatarFile);
+
+    await axios.put("/api/user", formData);
+    setEditing(false);
+  };
+
+  return (
+    <div>
+      <h1>User Profile</h1>
+      {editing ? (
+        <>
+          <input name="name" value={user.name} onChange={handleChange} />
+          <input name="email" value={user.email} onChange={handleChange} />
+          <textarea name="bio" value={user.bio} onChange={handleChange} />
+          <input type="file" accept="image/*" onChange={handleAvatarChange} />
+          <button onClick={handleSave}>Save</button>
+        </>
+      ) : (
+        <>
+          <img src={user.avatar} alt="Profile" width="100" />
+          <p>Name: {user.name}</p>
+          <p>Email: {user.email}</p>
+          <p>Bio: {user.bio}</p>
+          <button onClick={() => setEditing(true)}>Edit</button>
+        </>
+      )}
+    </div>
+  );
+}
