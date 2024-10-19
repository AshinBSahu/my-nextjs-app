import { NextResponse } from 'next/server';
import mysql from 'mysql2/promise';

// Set up MySQL connection pool
const db = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'app_user',        // Use app_user instead of root
    password: process.env.DB_PASSWORD || 'app_password', // Password for app_user
    database: process.env.DB_NAME || 'my_nextjs_app',
  });

export async function POST(req) {
  const { name } = await req.json();

  try {
    // Insert the name into the database
    const query = 'INSERT INTO names_table (name) VALUES (?)';
    await db.execute(query, [name]);

    // Return a success response
    return NextResponse.json({ message: `Hello, ${name}!` });
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
