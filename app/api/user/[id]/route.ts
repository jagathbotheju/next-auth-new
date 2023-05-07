import { verifyJwt } from "@/lib/jwt";
import prisma from "@/lib/prisma";
import { JwtPayload } from "jsonwebtoken";
import { NextResponse } from "next/server";

interface ParamProps {
  params: {
    id: number;
  };
}

export async function GET(request: Request, { params }: ParamProps) {
  const accessToken = request.headers.get("Authorization");
  console.log("getting user posts");

  if (accessToken && verifyJwt(accessToken)) {
    const userPosts = await prisma.post.findMany({
      where: {
        authorId: +params.id,
      },
      include: {
        author: {
          select: {
            email: true,
            name: true,
          },
        },
      },
    });
    return NextResponse.json(userPosts);
  } else {
    return NextResponse.json(
      {
        error: "UnAuthorized Access",
      },
      { status: 401 }
    );
  }
}
