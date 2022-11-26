module.exports = {
    name:'requestNameChange',
    execute(data,socket,io){
        let user = 'f'
        io.usernames.forEach((value,key) => {
            if(value == data.old){
                user=key
            }
        })
        if(io.usernames.has(data.new)){
            console.log('name is taken')
        }else{
            io.usernames.set(user,data.new)
            io.to(data.id).emit('setName',data.new)
        }
    }
}