// 1. Define the connection parameters
datasource db {
  provider   = "postgresql"
  url        = env("DATABASE_URL")
  extensions = [postgis] // Enables your spatial coordinates database layer
}

// 2. Define what code client it should generate
generator client {
  provider        = "prisma-client-js"
  previewFeatures = ["postgresqlExtensions"] // Required to allow PostGIS
}

// 3. Define your actual tables (Models)
model User {
  id        String   @id @default(uuid()) // Primary key, auto-generated UUID string
  email     String   @unique             // Ensures no two users share an email
  name      String?                       // The "?" means this field is optional (nullable)
  role      Role     @default(USER)       // Uses the Enum defined below
  createdAt DateTime @default(now())      // Automatically saves creation timestamp
  posts     Post                        // A relationship field: A user can have many posts

  @@map("users") // Optional: Maps this model to a lowercase "users" table name in PostgreSQL
}

model Post {
  id        Int      @id @default(autoincrement()) // Incremental integer ID (1, 2, 3...)
  title     String   
  content   String?
  published Boolean  @default(false)
  authorId  String                                 // Foreign key linking to the User model
  author    User     @relation(fields: [authorId], references: [id]) // Establishes the link
}

// Enums allow you to restrict a field to exact predefined choices
enum Role {
  USER
  ADMIN
}
