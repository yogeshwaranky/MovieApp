
import { loginModel, LoginModel } from "./login.model";


export interface Model{
   
    loginModel: LoginModel;
}
 
export const model: Model ={
  
    loginModel: loginModel
}