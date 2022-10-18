export default class LoginBusinessManager{
    
    static LoginValidator(loginObj){
        let isValid= false;
        if (loginObj && loginObj.username === 'Apo' && loginObj.password ==='123456') {
            isValid = true
        }
        return isValid;
    }
}