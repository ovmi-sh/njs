import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const users = pgTable('users', {
    id: serial('id').primaryKey(),
    clerkId: varchar('clerk_id', { length: 256 }),
    fullName: text('full_name'),
    email: varchar('email', { length: 256 }),
});