import { appRouter } from '@/server';
import { Context } from '@/server/context';
import { fetchRequestHandler } from '@trpc/server/adapters/fetch';

const handler = (req: Request, ctx: Context) => fetchRequestHandler({
    endpoint: "/api/trpc",
    req,
    router: appRouter,
    createContext: () => ctx
});

export { handler as GET, handler as POST };
