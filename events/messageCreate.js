module.exports = {
    name:'createMessage',
    execute(msg,socket,io){
        io.emit('recieveMessage',{
            sender:msg.sender,
            text:msg.text
        })
    }
}