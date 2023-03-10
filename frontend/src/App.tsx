import React from 'react';
import { Route } from "react-router-dom";
import GoogleAuth from "./components/googleAuth";
import { GoogleOAuthProvider } from '@react-oauth/google';


function App() {
  return (
    <div>
      <GoogleOAuthProvider clientId="618685727072-kguim5llp7jh1gj7qh6kgqmg8q2pi9uk.apps.googleusercontent.com">
        < GoogleAuth />  
      </GoogleOAuthProvider>
    </div>
  );
}

export default App;
