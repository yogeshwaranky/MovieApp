import { action, Action } from "easy-peasy";

interface LoginState{
    email:string
    
}

interface LoginAction{
    setEmail: Action<this, string>;
}

export interface LoginModel extends LoginState,LoginAction{}

export const loginModel: LoginModel={
email:"",
setEmail: action((state, email) => {
    state.email = email;
}),
};