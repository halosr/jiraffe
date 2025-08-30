import { Server, Socket } from "socket.io";

function handleJoinRoom(socket: Socket, io: Server) {
    socket.on("join", ({ roomId, user }) => {
        socket.join(user);
        console.log(`${user} joined ${roomId}`);
        socket.emit("join", { user });
    });
}

export default handleJoinRoom;
