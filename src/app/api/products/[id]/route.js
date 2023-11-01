import { NextResponse } from "next/server";
import { db } from '@/libs/db';

export async function GET(req, { params }) {
    try {
        const result = await db.query('SELECT * FROM product WHERE id= ?', [params.id]);
        if (result.length === 0) {
            return NextResponse.json({ message: "Producto no Encontrado" }, { status: 404 })
        }
        return NextResponse.json(result[0])
    }
    catch (error) {
        return NextResponse.json({ message: error.message }, { status: 500 })
    }
}

export async function DELETE(req, { params }) {
    try {
        const result = await db.query('DELETE FROM product WHERE id = ?', [params.id]);
        if (result.affectedRows === 0) {
            return NextResponse.json({ message: "El Producto no existe" }, { status: 404 })
        }
        return new Response(null, { status: 204 })
    } catch (error) {
        return NextResponse.json({ message: error.message }, { status: 500 })
    }
}

export async function PUT(req, { params }) {
    try {
        const data = await req.json();
        const result = await db.query('UPDATE product SET ? WHERE id= ?', [data, params.id]);
        if (result.affectedRows === 0) {
            return NextResponse.json({ message: 'Producto no Encontrado' }, { status: 404 })
        }
        const EditProduct = await db.query('SELECT * FROM product WHERE id= ?', [params.id]);
        return NextResponse.json(EditProduct[0]);
    } catch (error) {
        return NextResponse.json({ message: error.message }, { status: 500 })
    }
}
