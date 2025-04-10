diff --git a/pages/profile.js b/pages/profile.js
new file mode 100644
index 0000000..bcd1234
--- /dev/null
+++ b/pages/profile.js
@@
+import React, { useState, useEffect } from "react";
+import axios from "axios";
+
+export default function Profile() {
+  const [user, setUser] = useState({ name: "", email: "" });
+  const [editing, setEditing] = useState(false);
+
+  useEffect(() => {
+    // Fetch user data from API
+    axios.get("/api/user").then((res) => setUser(res.data));
+  }, []);
+
+  const handleChange = (e) => {
+    setUser({ ...user, [e.target.name]: e.target.value });
+  };
+
+  const handleSave = () => {
+    axios.put("/api/user", user).then(() => setEditing(false));
+  };
+
+  return (
+    <div>
+      <h1>User Profile</h1>
+      {editing ? (
+        <>
+          <input name="name" value={user.name} onChange={handleChange} />
+          <input name="email" value={user.email} onChange={handleChange} />
+          <button onClick={handleSave}>Save</button>
+        </>
+      ) : (
+        <>
+          <p>Name: {user.name}</p>
+          <p>Email: {user.email}</p>
+          <button onClick={() => setEditing(true)}>Edit</button>
+        </>
+      )}
+    </div>
+  );
+}
