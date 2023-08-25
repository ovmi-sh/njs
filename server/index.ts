import { publicProcedure, router } from './trpc';

export const appRouter = router({
    getHealthCheck: publicProcedure.query(async () => {
        return 'OK';
    })
});

// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof appRouter;