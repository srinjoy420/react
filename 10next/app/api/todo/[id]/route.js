import { NextResponse } from "next/server";
import connecttoDatabase from "@/lib/mongodb"
import Todo from "@/models/todo"


export async function GET(request,context) {
    try {
        const {id}=await context.params
        await connecttoDatabase()
        NextResponse.json(
                        {error:"succesfully find the id"},
                        {status:201}
                    )

        
    } catch (error) {
         return NextResponse.json(
                {error:"this filed should be mandetory"},
                {status:500}
            )
        
    }
}