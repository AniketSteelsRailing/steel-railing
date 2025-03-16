import { NextResponse, type NextRequest } from "next/server";
import prisma from "@/api-services/utility/prisma"; // We'll create this Prisma instance

// Define a mapping of table names to Prisma model names
const tableMap = {
  gateData: prisma.gates_data,
  windowData: prisma.window_data,
  railingData: prisma.railing_data,
};

const API_KEY = process.env.API_SECRET_KEY || "your-secure-api-key";

export async function GET(req: NextRequest) {
  // const { table } = params;
  const searchParams = req.nextUrl.searchParams;
  const table = searchParams.get("query");
   const authHeader = req.headers.get("Authorization");

  if (!authHeader || authHeader !== `Bearer ${API_KEY}`) {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401 }
    );
  }

  // Check if the table exists in our mapping
  const model = tableMap[table as keyof typeof tableMap];
  try {
    const data = await (model as any).findMany(); // Fetch all records
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: error },
      { status: 500 }
    );
  }
}
