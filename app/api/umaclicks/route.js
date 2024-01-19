import { NextResponse } from "next/server";
import { connectDb } from "@/utils/mongoose";
import click from "./models/click";

export async function GET(){
    connectDb()
    let clicks = await click.find();
    
    return NextResponse.json(
        {
            clicks:clicks[0].counter,
        }
    )
}
export async function POST(){
    connectDb()
    let update = { $inc: { counter: 1 }};
    let condicion={};

    await click.findOneAndUpdate(condicion,update);

    return NextResponse.json(
        {
            ok:"ok",
        }
    )
}