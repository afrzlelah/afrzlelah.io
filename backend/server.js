import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";
import mongoose from "mongoose";

const app = express();
const server = http.createServer(app);

app.use(
  cors({
    origin: "https://afrzlelah.github.io/afrzlelah.io/",
    methods: ["GET", "POST"],
  })
);

// KONEKSI KE MONGODB
const mongoURI = "mongodb://localhost:27017/";
mongoose
  .connect(mongoURI)
  .then(() => console.log("✅ Terkoneksi ke MongoDB"))
  .catch((err) => console.error("❌ Gagal konek MongoDB:", err));

// SKEMA & MODEL PESAN
const messageSchema = new mongoose.Schema({
  user: String,
  room: String,
  text: String,
  timestamp: { type: Date, default: Date.now },
});
const Message = mongoose.model("Message", messageSchema);

// DAFTAR USER YANG TERKONEKSI
const connectedUsers = new Map();

// SOCKET.IO SETUP
const io = new Server(server, {
  cors: {
    origin: "https://afrzlelah.github.io/afrzlelah.io/",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`🔌 User connected: ${socket.id}`);

  socket.on("join_room", async ({ user, room }) => {
    socket.join(room);
    connectedUsers.set(socket.id, { user, room });

    console.log(`👤 ${user} joined room: ${room}`);
    console.log("📡 Users connected:", Array.from(connectedUsers.values()));

    const previousMsgs = await Message.find({ room }).sort({ timestamp: 1 });
    socket.emit("previous_msgs", previousMsgs);
  });

  socket.on("send_msg", async (data) => {
    const { user, room, msg } = data;
    const newMsg = new Message({ user, room, text: msg });
    await newMsg.save();
    socket.to(room).emit("receive_msg", newMsg);
  });

  socket.on("disconnect", () => {
    const userData = connectedUsers.get(socket.id);
    if (userData) {
      console.log(
        `❌ User disconnected: ${userData.user} (room: ${userData.room})`
      );
      connectedUsers.delete(socket.id);
    }
    console.log("📡 Users connected:", Array.from(connectedUsers.values()));
  });
});

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`🚀 Server berjalan di http://localhost:${PORT}`);
});
