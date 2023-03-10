import express from 'express';

import { MongoClient } from "mongodb";
import { OAuth2Client } from "google-auth-library";
// Replace the uri string with your MongoDB deployment's connection string.

const uri = "mongodb://127.0.0.1:27017";
const googleClient = new OAuth2Client({
  clientId: process.env.GOOGLE_CLIENT_ID,
});

const client = new MongoClient(uri);
const routes = express.Router();


routes.post('/auth', async (req, res) => {
   
 console.log('got in 2')
  const { token } = req.body;

  const ticket = await googleClient.verifyIdToken({
    idToken: token,
    audience: process.env.GOOGLE_CLIENT_ID,
  });

  
  const payload = ticket.getPayload();
  const database = client.db("Teste_eMiolo");
      
      const haiku = database.collection("GuestList");
      

  let user = await haiku.findOne({ email: payload?.email });
  if (!user) {
   
   try{ 
    const user = await haiku.insertOne({
      email: payload?.email,
      avatar: payload?.picture,
      name: payload?.name,
    });
    console.log(user);

       } finally {
    
       await client.close();
    
      }
    
  }
  res.json({ user, token });
  }

      //   try {
      
      //     const database = client.db("Teste_eMiolo");
      
      //     const haiku = database.collection("GuestList");
      
      //     // create a document to insert
      
      //     const doc = {
      
      //       title: req.body.nome,
      
      //       content: "No bytes, no problem. Just insert a document, in MongoDB",
      
      //     }
      
      //     const result = await haiku.insertOne(doc);
      
      //     console.log(result);
      //     return res.json(result)
      //   } finally {
      
      //     await client.close();
      
      //   }
      //  run().catch(console.dir);
      // } 
   
);
routes.get('/', async (req, res) => {
    let GuestList
    async function run() {
        try {
          const database = client.db("Teste_eMiolo");
          const movies = database.collection("GuestList");
          // Query for a movie that has the title 'The Room'
          const query = { name: "dfghadfh adfgdafg" };
          
          const movie = await movies.findOne(query);
          // since this method returns the matched document, not a cursor, print it directly
          GuestList = movie
          console.log(GuestList);
          return res.json(GuestList)
        } finally {
          await client.close();
        }
      }
      run().catch(console.dir);
    
});

export default routes;