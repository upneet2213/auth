import { NextResponse } from 'next/server';
import { hash } from 'bcrypt';
import { sql } from '@vercel/postgres';

export async function POST(request: Request) {
  try {
    const { email, username, password } = await request.json();
    console.log(email, username, password);
    const hashedPassword = await hash(password, 10);
    const response = await sql`
    INSERT INTO users (email, username, password)
    VALUES (${email}, ${username}, ${hashedPassword})
    
    `;
  } catch (e) {
    console.log({ e });
  }
  return NextResponse.json({
    message: 'success',
  });
}
