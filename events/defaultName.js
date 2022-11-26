module.exports = {
    name:'requestNameChangeDefault',
    execute(data,socket,io){

        var num = Math.floor(Math.random()*300)
        while(io.usernames.has(`user${num}`)){
            num = Math.floor(Math.random()*300)
        }
        io.to(socket.id).emit('recieveNameChange',`user${num}`)
    }
}