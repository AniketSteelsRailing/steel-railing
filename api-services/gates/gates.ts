// import { NextApiRequest, NextApiResponse } from 'next';
// import { PrismaClient } from '@prisma/client';

// // Initialize Prisma Client
// const prisma = new PrismaClient();


// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   try {
//     const gates = await prisma.gate.findMany();
//     res.status(200).json(gates);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Failed to fetch gates data' });
//   }
// }
