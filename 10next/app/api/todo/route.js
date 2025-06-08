import { NextResponse } from "next/server";
import connecttoDatabase from "@/lib/mongodb"
import Todo from "@/models/todo"



export async function GET() {
    try {
        await connecttoDatabase()
        const todos= await Todo.find({}).sort({createdAt:-1})
        return NextResponse.json(todos)
    } catch (error) {
        NextResponse.json(
            {error:"failed to fetch todos"},
            {status:500}
        )
    }
    
}
export async function POST(request) {
    try {
        const body=await request.json()
        const {title}=body

        if(!title){
            return NextResponse.json(
                {error:"this filed should be mandetory"},
                {status:500}
            )
        }

        await connecttoDatabase()
        const todo=await todo.create({title})
        return NextResponse.json(todo,{status:201})
    } catch (error) {
         NextResponse.json(
            {error:"failed to create todo"},
            {status:500}
        )
        
    }
    
}
