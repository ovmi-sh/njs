import { appRouter } from '@/server';
import { Context, createContext } from '@/server/context';
import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import { NextRequest } from 'next/server';

const handler = (req: NextRequest, ctx: Context) => fetchRequestHandler({
    endpoint: "/api/trpc",
    router: appRouter,
    req,
    createContext: createContext,
    onError({ error, path }) {
        console.error(`>>> tRPC Error on '${path}'`, error);
    },
});

export { handler as GET, handler as POST };
