import { users } from '@/db/schema';
import { protectedProcedure, publicProcedure, router } from './trpc';

import { sql } from '@vercel/postgres';
import { drizzle } from 'drizzle-orm/vercel-postgres';

import { eq } from 'drizzle-orm';
import { migrate } from 'drizzle-orm/vercel-postgres/migrator';

const db = drizzle(sql);

migrate(db, { migrationsFolder: "drizzle" })

export const appRouter = router({
    getHealthCheck: publicProcedure.query(async () => {
        return 'OK';
    }),
    getUsers: publicProcedure.query(async () => {
        return await db.select().from(users);
    }),
    getUser: protectedProcedure.query(async ({ ctx }) => {
        console.log('ctx.auth.userId', ctx.auth.userId);
        return await db.select().from(users).where(eq(users.clerkId, ctx.auth.userId));
    })
});

// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof appRouter;