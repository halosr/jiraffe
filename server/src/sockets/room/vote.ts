import { Socket, Server } from "socket.io";

function handleVote(socket: Socket, io: Server){
    socket.on("vote", ({vote, user, roomId}) => {
        // perform voting
        console.log(user, "boted", vote, "on", roomId)
    })
}

export default handleVote;