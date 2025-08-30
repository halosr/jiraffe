import { Server } from "socket.io";
import handleJoinRoom from "@/sockets/room/join";
import handleVote from "@/sockets/room/vote";

function registerSockets(io: Server) {
    io.on("connection", (socket) => {
        handleJoinRoom(socket, io);
        handleVote(socket, io);

        socket.on("disconnect", () => {
            console.log("Disconnected", socket.id);
        });
    });
}

export default registerSockets;
