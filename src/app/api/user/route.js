import { PrismaClient } from "@prisma/client"
import axios from "axios";
import { NextResponse } from "next/server";

export const POST=async(req,res)=>{
    const data=await req.json();
    console.log('route data',data);
    // const rawResponse = await axios.post(process.env.BASE_URL+"/api/CreateContact",data);
    const prisma=new PrismaClient();
    const result=await prisma.user.create({
data:data })

return NextResponse.json({message:"success",data:result})
    
}


export const GET=async(req,res)=>{
    const prisma=new PrismaClient();
    const data=await prisma.user.findMany();
    return NextResponse.json({message:"success",data:data})
}


export const DELETE=async(req,res)=>{
    const { searchParams  }=new URL(req.url);
    const id=searchParams.get('id');
    // const data=await req.json();
    
    // console.log("deletedata",data);
    // const id = data.params['id'];
     const prisma=new PrismaClient();
     const result=await prisma.user.delete({
         where:{id:parseInt(id)}
     })
 
     return NextResponse.json({message:"Delete Succssfull",data:result})
}

export const PUT=async(req,res)=>{
    const { searchParams  }=new URL(req.url);
    const id=searchParams.get('id');
   const data=await req.json();
    const prisma=new PrismaClient();
    const result=await prisma.user.update({
        where:{id:parseInt(id)},
        data:data
    })
 
    return NextResponse.json({message:"Update Succssfull",data:result})
}

