**ChatMingle App 💬**

A real-time chat application built with the power of the MERN stack (MongoDB, Express.js, React.js, Node.js) and Socket.io for instant messaging capabilities.

**🌟 Features**

Real-time Messaging: Instant message delivery using Socket.io
User Authentication: Secure login and registration system
Modern UI/UX: Clean and responsive design built with React
Avatar Support: Personalized user avatars
Online Status: See who's currently online
Message History: Persistent chat history stored in MongoDB
Emoji Support: Express yourself with emojis
Cross-platform: Works on desktop, tablet, and mobile devices

**🛠️ Tech Stack**
Frontend:

React.js
CSS3
Socket.io-client
Axios for API calls

Backend:

Node.js
Express.js
Socket.io
MongoDB with Mongoose
bcryptjs for password hashing
CORS for cross-origin requests

**🎯 How to Use**

Register: Create a new account with username, email, and password
Set Avatar: Choose or upload your profile avatar
Start Chatting: Select contacts and start real-time conversations
Stay Connected: See online status of your contacts
Message History: All your conversations are saved automatically

**🔌 API Endpoints**

Authentication Routes

POST /api/auth/register - Register new user
POST /api/auth/login - User login
POST /api/auth/setAvatar/:id - Set user avatar

User Routes

GET /api/auth/allusers/:id - Get all users except current user

Message Routes

POST /api/messages/addmsg - Add new message
POST /api/messages/getmsg - Get messages between two users

**🙏 Acknowledgments**

Built following best practices from the MERN stack community
Inspired by modern chat applications like WhatsApp and Telegram
Socket.io documentation and community support
React.js and Node.js communities

⭐ If you found this project helpful, please give it a star! ⭐

Made with ❤️ by Mandeep Singh
