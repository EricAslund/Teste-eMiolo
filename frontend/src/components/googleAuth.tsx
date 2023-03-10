import { useState } from "react";
import axios, { AxiosResponse } from "axios";


import { GoogleLogin, googleLogout} from '@react-oauth/google';


interface AuthResponse {
  token: string;
  user: User;
}

interface User {
  _id: string;
  name: string;
  email: string;
  avatar: string;
}


const GoogleAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const logOut = () => {
    googleLogout();
    setUser(null);
  }
  const responseGoogle = async (res: any) => {
    console.log('got in 1')
    try {
        console.log('got in 1')
      const result: AxiosResponse<AuthResponse> = await axios.post("http://localhost:3333/auth", {
        token: res.credential,
      });

      setUser(result.data.user);
      console.log(result.data)
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="h-screen w-screen flex items-center justify-center flex-col" >
      
      {!user && (
         <GoogleLogin
         onSuccess={responseGoogle}
         text= "signin_with" 
          onError={() => {
            console.log('Login Failed')
          }}
          
        />
      )}

      {user && (
        <>
          <img src={user.avatar} className="rounded-full" />
          <h1 className="text-xl font-semibold text-center my-5">
            {user.name}
          </h1>
          <h1 className="text-xl font-semibold text-center my-5">
            {user.email}
          </h1>
          <button onClick={logOut}>Log out</button>
        </>
      )}
    </div>
  )
}

export default GoogleAuth;