import express from 'express';

import { MongoClient } from "mongodb";

// Replace the uri string with your MongoDB deployment's connection string.

const uri = "mongodb://127.0.0.1:27017";

const client = new MongoClient(uri);
const routes = express.Router();


routes.post('/', async (req, res) => {
    async function run() {

        try {
      
          const database = client.db("Teste_eMiolo");
      
          const haiku = database.collection("GuestList");
      
          // create a document to insert
      
          const doc = {
      
            title: req.body.nome,
      
            content: "No bytes, no problem. Just insert a document, in MongoDB",
      
          }
      
          const result = await haiku.insertOne(doc);
      
          console.log(result);
          return res.json(result)
        } finally {
      
          await client.close();
      
        }
      
      }
      
      run().catch(console.dir);
   
});
routes.get('/', async (req, res) => {
    let GuestList
    async function run() {
        try {
          const database = client.db("Teste_eMiolo");
          const movies = database.collection("GuestList");
          // Query for a movie that has the title 'The Room'
          const query = { title: "Record of a Shriqweveled Datum" };
          
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