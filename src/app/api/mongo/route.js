import { NextResponse } from 'next/server';

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.DB_CONN_STRING

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

export async function GET(request) {
  try {
    await client.connect()
    
    const productCol = client.db(process.env.DB_NAME).collection(process.env.DB_COLLECTION_NAME)
    
    const products = await productCol.find().toArray()

    return NextResponse.json(products,{status: 200})
  } catch (e) {
    return NextResponse.json(e,{status: 400})
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}