const a = x => document.getElementById(x);

////////// CREATING THE UI ///////////////////

//----------- THE MAIN CONTAINER -------------//
const mainContainer = document.createElement('div')
mainContainer.id = 'mainContainer'
mainContainer.style.height = `${window.innerHeight}px`
mainContainer.style.width = `${window.innerWidth}px`

//----------- THE CHAT CONTAINER -------------//
const chatContainer = document.createElement('div')
chatContainer.classList.add('container')
chatContainer.id = 'chatContainer'
chatContainer.style.height = `${parseInt(mainContainer.style.height)}px`
chatContainer.style.width = `90%`

//----------- FORM STUFF   -------------------//
const formContainer = document.createElement('form')
formContainer.id = 'formContainer'
formContainer.autocomplete = 'off'
formContainer.spellcheck = false
formContainer.onsubmit = e => {
    e.preventDefault()
    sendMessage()   
}

chatContainer.appendChild(formContainer)
//----------- THE SIDE BAR -------------------//
const sideContainer = document.createElement('div')
sideContainer.classList.add('container')
sideContainer.id = 'sideContainer'
sideContainer.style.height = `100%`
sideContainer.style.width = `10%`

//------------ APPENDING STUFF ---------------//
document.body.appendChild(mainContainer)
mainContainer.appendChild(chatContainer)
mainContainer.appendChild(sideContainer)

//----------- TYPE BOX -----------------------//
const typeBox = document.createElement('input')
typeBox.classList.add('chatcont')
typeBox.id = 'typeBox'
typeBox.autofocus = true
typeBox.placeholder = `Enter your message here`
typeBox.style.height = `7.5%`
typeBox.style.width = `100%`

//----------- CHAT BOX -----------------------//
const chatBox = document.createElement('div')
chatBox.classList.add('chatcont')
chatBox.id = 'chatBox'
chatBox.style.height = `92.5%`
chatBox.style.width = `100%`


//----APPEND-----//
formContainer.appendChild(typeBox)
formContainer.appendChild(chatBox)

//------------ SIDE BAR CONTENT ---------------//
const sideName = document.createElement('button')
sideName.classList.add('sidebar')
sideName.id = 'sideName'
sideName.innerText = `CHANGE NAME`
sideName.style.height = `5%`
sideName.style.width = `${sideContainer.style.width}px`

const sideLogo = document.createElement('img')
sideLogo.classList.add('sidebar')
sideLogo.id = 'sideLogo'
sideLogo.src = 'logo.png'
sideLogo.innerText = `HUTAO`
sideLogo.style.height = `15%`
sideLogo.style.width = `${sideContainer.style.width}px`

const sideSpace = document.createElement('div')
sideSpace.classList.add('sidebar')
sideSpace.id = 'sideSpace'
sideSpace.style.height = `10%`
sideSpace.style.width = `${sideContainer.style.width}px`

sideContainer.appendChild(sideLogo)
sideContainer.appendChild(sideSpace)
sideContainer.appendChild(sideName)
// FUCK YALL IM PROGRAMMING IN MINECRAFT FONT

//------------ ADDING MESSAGES-----------//

const addMessage = (sender = {name:'system',color:'white'}, text = 'lorep ipsum') => {

    const boxparent = a('chatBox') ;
    const chatMessage = document.createElement('div')
    const messageName = document.createElement('div')
    const messageText = document.createElement('div')

    messageName.classList.add('messageName')
    messageText.classList.add('messageText')
    chatMessage.classList.add('chatMessages')
    messageText.innerText = text
    messageName.innerText = sender.name ? sender.name : "null"
    messageName.style.color = sender.color ? sender.color : "white"

    chatMessage.appendChild(messageName)
    chatMessage.appendChild(messageText)
    boxparent.appendChild(chatMessage)
}