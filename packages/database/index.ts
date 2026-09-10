import { PrismaClient } from '@prisma/client'

// Enfore only one instance of the prisma client
const globalForPrisma = globalThis as unknown as { prisma: PrismaClient }

export const db = globalForPrisma.prisma || new PrismaClient()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = db

export * from '@prisma/client'