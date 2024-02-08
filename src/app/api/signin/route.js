import Users from "@/model/user";
import connectMongoDB from "@/database/db";
import { NextResponse } from "next/server";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
import crypto from 'crypto'
const salt = 10;
const privateKey = 'dthe0rhamo4j20';
export async function POST(req) {
    const body = await req.json();
    const { username, password } = body;
    if (!username || !password) {
        return NextResponse.json({ msg: "Invalid fields" }, { status: 400 });
    }
    connectMongoDB();
    const isUserAlreadyPresent = await Users.findOne({ username });
    if (isUserAlreadyPresent) {
        return NextResponse.json({ msg: "User is already present" }, { status: 409 });
    }
    const hashPassword = await bcrypt.hash(password, salt);
    try {
        let user = new Users({ username, password: hashPassword });
        const res = await user.save();
       
        const token = jwt.sign({ username }, privateKey);
        const response = NextResponse.json({ msg: "ok", success: true }, { status: 201 });
        response.cookies.set("token", token, {
            httpOnly: true
        });
        return response;
    } catch (err) {
        return NextResponse.json({ error: err }, { status: 500 });
    }
}