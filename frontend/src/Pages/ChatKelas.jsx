// import React, { useState, useEffect } from "react";
// import io from "socket.io-client";

// const socket = io(
//   "https://nodejs-serverless-function-express-gray-nine-92.vercel.app/"
// );

// export default function ChatKelas() {
//   const [room, setRoom] = useState("");
//   const [message, setMessage] = useState("");
//   const [messages, setMessages] = useState([]);
//   const [user, setUser] = useState("");
//   const [isJoined, setIsJoined] = useState(false);
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   useEffect(() => {
//     socket.on("previous_msgs", (previousMessages) => {
//       setMessages(previousMessages);
//     });

//     socket.on("receive_msg", (data) => {
//       setMessages((prevMessages) => [...prevMessages, data]);
//     });

//     return () => {
//       socket.off("previous_msgs");
//       socket.off("receive_msg");
//     };
//   }, []);

//   const joinRoom = () => {
//     if (room !== "" && user !== "") {
//       socket.emit("join_room", { user, room });
//       setIsJoined(true);
//     }
//   };

//   const sendMessage = () => {
//     if (message !== "" && room !== "") {
//       const msgData = { user, room, msg: message };
//       socket.emit("send_msg", msgData);
//       setMessages((prevMessages) => [...prevMessages, msgData]);
//       setMessage("");
//     }
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === "Enter") {
//       if (!isJoined) joinRoom();
//       else sendMessage();
//     }
//   };

//   return (
//     <div
//       className={`flex h-screen ${
//         isDarkMode ? "bg-gray-900 text-gray-100" : "bg-green-50 text-gray-800"
//       }`}
//     >
//       <div className="flex-1 flex flex-col">
//         {isJoined && (
//           <div
//             className={`p-4 border-b flex justify-between items-center ${
//               isDarkMode ? "border-gray-700" : "border-gray-300"
//             }`}
//           >
//             <h2 className="text-xl font-bold">Room: {room}</h2>
//             <button
//               onClick={() => setIsDarkMode(!isDarkMode)}
//               className={`py-1 px-3 rounded-lg ${
//                 isDarkMode ? "bg-gray-700" : "bg-green-600"
//               } text-white`}
//             >
//               {isDarkMode ? "Tema Terang" : "Tema Gelap"}
//             </button>
//           </div>
//         )}

//         <div className="flex-1 overflow-y-auto p-4">
//           {messages.map((msg, index) => (
//             <div
//               key={index}
//               className={`mb-2 ${
//                 msg.user === user ? "text-right" : "text-left"
//               }`}
//             >
//               <div
//                 className={`inline-block rounded-lg p-2 max-w-xs ${
//                   msg.user === user
//                     ? "bg-green-600 text-white"
//                     : isDarkMode
//                     ? "bg-gray-700 text-white"
//                     : "bg-gray-200 text-gray-800"
//                 }`}
//               >
//                 <strong>{msg.user}</strong>: {msg.text || msg.msg}
//               </div>
//             </div>
//           ))}
//         </div>

//         {!isJoined ? (
//           <div className="flex justify-center items-center h-full">
//             <div className="w-80">
//               <input
//                 type="text"
//                 placeholder="Nama"
//                 value={user}
//                 onChange={(e) => setUser(e.target.value)}
//                 onKeyPress={handleKeyPress}
//                 className="w-full p-2 border rounded mb-2"
//               />
//               <input
//                 type="text"
//                 placeholder="Room ID"
//                 value={room}
//                 onChange={(e) => setRoom(e.target.value)}
//                 onKeyPress={handleKeyPress}
//                 className="w-full p-2 border rounded mb-4"
//               />
//               <button
//                 onClick={joinRoom}
//                 className="w-full py-2 bg-green-600 text-white rounded hover:bg-green-700"
//               >
//                 Masuk Room
//               </button>
//             </div>
//           </div>
//         ) : (
//           <div className="flex p-4 border-t">
//             <input
//               type="text"
//               placeholder="Tulis pesan..."
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//               onKeyPress={handleKeyPress}
//               className="flex-1 border rounded-lg p-2 mr-2"
//             />
//             <button
//               onClick={sendMessage}
//               className="py-2 px-4 bg-green-600 text-white rounded-lg hover:bg-green-700"
//             >
//               Kirim
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
