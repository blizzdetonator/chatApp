//-------------- MAIN JS -------------//
//////////// SOCKET AREA  //////////////

const socket = io()

// ///////////socket area////////////////////////

// PROFILE ///////////////
const profile = {
    name:'null',
    color:'white',
    id:0
}
// SET PROFILE ///////////
socket.on('setProfile' , data => {
    profile.name = data.name
    profile.color = data.color
    profile.id = data.id
})
// SET NAME /////////////
socket.on('recieveNameChange', newName => {
    profile.name = newName
})

// SEND MESSAGE /////////
const sendMessage = msg => {
    const input = a('typeBox')
    const text = input.value
    input.value = ""

    socket.emit('createMessage', {
        sender:profile,
        text:text
    })
}

// RECIEVE MESSAGE //////
socket.on('recieveMessage', msg => {
    addMessage({name:msg.sender.name,color:msg.sender.color},msg.text)
    console.log(msg.sender.name,msg.sender.color)
})

// socket.on('userConnected', (name) => {
//     console.log('one connected',name)
//     addSystemMsg({
//         color:'var(--connected)',
//         text:`${name} has connected`
//     })
// })

// const changeName = a('changeName')
// changeName.onclick = () => {
//     const nameReq = prompt('please enter new name')
//     socket.emit('requestNameChange',{
//         old:me.name,
//         new:nameReq,
//         id:socket.id
//     })
// }