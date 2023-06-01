


type User = {
    user: string,
    password: string, 
    login:(user:string, password:string) => void
}


let loginUser: User= {
    user: 'thiago',
    password: 'thiago0101',
    login(user:string, password:string){
        if(this.user == user && this.password == password){
            console.log(`User: ${user} login success`)
            // alert(`User: ${user} login success`)

        }else{
            // alert('User or passowrd is wrong')
            console.log('User or passowrd is wrong')
        }
    }
}

loginUser.login('thiago', 'thiago0101')


