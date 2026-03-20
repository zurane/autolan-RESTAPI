require('dotenv').config();

const { PrismaClient } = require('@prisma/client');
const { PrismaPg } = require('@prisma/adapter-pg');
const { Pool } = require('pg');

// Create PostgreSQL connection pool
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});

// Create Prisma adapter (Prisma 7 requirement)
const adapter = new PrismaPg(pool);

// Create Prisma client instance
const prisma = new PrismaClient({ adapter });

module.exports = prisma;