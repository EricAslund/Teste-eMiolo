import express from 'express';
import User from "./models/user_model";

import { OAuth2Client } from "google-auth-library";



const googleClient = new OAuth2Client({
  clientId: process.env.GOOGLE_CLIENT_ID,
});



const routes = express.Router();


routes.post('/auth', async (req, res) => {
  const { token } = req.body;

  const ticket = await googleClient.verifyIdToken({
    idToken: token,
    audience: process.env.GOOGLE_CLIENT_ID,
  });

  const payload = ticket.getPayload();
      console.log(payload?.email)

  let user = await User.findOne({ email: payload?.email });
  console.log(user)
  if (!user) {
   
   user = await new User({
      email: payload?.email,
      avatar: payload?.picture,
      name: payload?.name,
    });
    console.log(user);

    
       await user.save();
    
      
      
  }
  res.json({ user, token });
  }
  

      
);
routes.get('/', async (req, res) => {
        try {
         
          let user = await User.find();
          // since this method returns the matched document, not a cursor, print it directly
          
          console.log(user);
          return res.json(user)
        } finally {
         
        }
    
    
});

export default routes;