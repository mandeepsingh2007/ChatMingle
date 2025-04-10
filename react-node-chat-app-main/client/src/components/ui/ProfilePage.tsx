import React, { useState } from 'react';

const ProfilePage = () => {
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    bio: 'Hello! I love connecting with people.',
    profilePicture: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProfile(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    // Simulate saving logic
    alert('Profile updated!!');
    console.log('Saved Profile:', profile);
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-xl mt-10">
      <h2 className="text-2xl font-semibold mb-4">Edit Profile</h2>

      <div className="mb-4">
        <label className="block text-sm font-medium">Name</label>
        <input
          type="text"
          name="name"
          value={profile.name}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-lg"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium">Email</label>
        <input
          type="email"
          name="email"
          value={profile.email}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-lg"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium">Bio</label>
        <textarea
          name="bio"
          value={profile.bio}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-lg"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium">Profile Picture URL</label>
        <input
          type="text"
          name="profilePicture"
          value={profile.profilePicture}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-lg"
        />
      </div>

      {profile.profilePicture && (
        <div className="mb-4">
          <img
            src={profile.profilePicture}
            alt="Profile Preview"
            className="w-24 h-24 rounded-full object-cover border"
          />
        </div>
      )}

      <button
        onClick={handleSave}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Save Changes
      </button>
    </div>
  );
};

export default ProfilePage;
