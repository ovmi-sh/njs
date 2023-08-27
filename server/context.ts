import { getAuth, SignedInAuthObject, SignedOutAuthObject } from '@clerk/nextjs/server';
import * as trpc from '@trpc/server';
import { FetchCreateContextFnOptions } from '@trpc/server/adapters/fetch';
import { NextRequest } from 'next/server';

interface AuthContext {
    auth: SignedInAuthObject | SignedOutAuthObject;
}

export const createContextInner = async ({ auth }: AuthContext) => {
    return {
        auth,
    }
}

export const createContext = async ({ req }: FetchCreateContextFnOptions) => {
    return await createContextInner({ auth: getAuth(req as NextRequest) })
}

export type Context = trpc.inferAsyncReturnType<typeof createContext>;