import { db } from '@/libs/db';
import { NextResponse } from 'next/server'

export async function GET() {
    try {
        const result = await db.query('SELECT * FROM product');
        return NextResponse.json(result);
    } catch (error) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}


export async function POST(req) {
    try {
        const { titulo, descripcion, precio } = await req.json();
        const result = await db.query("INSERT INTO product SET ?", { titulo, descripcion, precio });
        console.log(result);
        return NextResponse.json({ titulo, descripcion, precio, id: result.insertId })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: error.message, }, { status: 500 })
    }
}

