import { NextResponse } from "next/server";
import prisma from "@/api-services/utility/prisma"; // We'll create this Prisma instance

// POST - Create a new request
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      name,
      phone,
      address,
      pincode,
      device,
      brand_model,
      device_version,
      issue,
    } = body;
    const newRequest = await prisma.request.create({
      data: {
        name,
        phone,
        address,
        pincode,
        device,
        brand_model,
        device_version,
        issue,
      },
    });

    return NextResponse.json({
      request: newRequest,
      status: 201,
      statusText: "ok",
    });
  } catch (error: any) {
    return NextResponse.json({
      error: error.message,
      status: 500,
      statusText: "error",
    });
  }
}
