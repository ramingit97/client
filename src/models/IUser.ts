export interface IUser{
    id:number;
    name:string;
    email:string;
}

export interface IUserResponse{
    user:IUser;
    result:boolean;
}


export interface IRegisterInput{
    name:string;
    email:string;
    password:string;
}

export interface ILoginInput{
    email:string;
    password:string;
}