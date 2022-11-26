///// importing stuff ///////////
const http = require('http')
const express = require('express')
const socketio = require('socket.io')
const fs = require('fs')

//------------------------------------------//
//----------- configuring the server ----------//
//------------------------------------------//

const app = express()
app.use(express.static('client'))

const server = http.createServer(app)
const io = socketio(server)

//------------------------------------------//
//------------ USER DATA AREA ---------------//
//------------------------------------------//

io.userdata = JSON.parse(fs.readFileSync('data/userdata.json'))

//------------------------------------------//
//------------- importing events --------------//
//------------------------------------------//

const events = new Map()
const eventFolder = fs.readdirSync('./events')
for(file of eventFolder){
    const ev = require(`./events/${file}`)
    events.set(ev.name,ev)   
}
//------------------------------------------//
//------- handling events --------------------//
//------------------------------------------//

io.on('connection' , socket => {
    events.forEach( e => {
        socket.on(e.name, sock => {
            e.execute(sock,socket,io)
        })
    })

    const user = socket.request.connection.remoteAddress;
    const userdata = io.userdata;
    if(!userdata[user]){
        io.userdata[user] = {
            name: `user-${Object.keys(userdata).length}`,
            color:'white'
        }
    }
    const me = userdata[user]
    userdata[user].id = socket.id

    socket.emit('setProfile', {
        name:me.name,
        color:me.color,
        id:me.id
    })
    // io.emit('userConnected',names.get(user))
})

server.listen(8080 , () => {
    console.log('ready!')
})