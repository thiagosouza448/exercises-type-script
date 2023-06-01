"use strict";
let loginUser = {
    user: 'thiago',
    password: 'thiago0101',
    login(user, password) {
        if (this.user == user && this.password == password) {
            console.log(`User: ${user} login success`);
            // alert(`User: ${user} login success`)
        }
        else {
            // alert('User or passowrd is wrong')
            console.log('User or passowrd is wrong');
        }
    }
};
loginUser.login('thiago', 'thiago0101');
//# sourceMappingURL=desafio.js.map