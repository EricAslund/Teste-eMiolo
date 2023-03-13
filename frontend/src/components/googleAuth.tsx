import { useState } from "react";
import axios, { AxiosResponse } from "axios";

import { GoogleLogin, googleLogout} from '@react-oauth/google';
import {Image ,Button,Row,Col} from 'react-bootstrap'


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

    <Row >
      <Col sm={2}>
          <Image src={user.avatar} className="rounded-full"  roundedCircle={true} width={'35px'} style={{margin: '4px'}} />
          </Col >
          <Col sm>
          <h6 style={{fontSize: '1rem'}}>
            {user.name}
          </h6>
          <h6 style={{fontSize: '0.8rem'}} >
            {user.email}
          </h6>
          </Col>
          <Col sm>
          <Button onClick={logOut} variant="dark">Log out</Button>
          </Col>
          </Row>
        </>
      )}
    </div>
  )
}

export default GoogleAuth;