import clientPromise from '@/lib/mongo_singleton';
import { NextResponse } from 'next/server';

export async function GET(request) {
  try {
    const client = await clientPromise
    
    const productCol = client.db(process.env.DB_NAME).collection('products')
    
    const products = await productCol.find().toArray()

    return NextResponse.json(products,{status: 200})
  } catch (e) {
    return NextResponse.json(e,{status: 400})
  }
}