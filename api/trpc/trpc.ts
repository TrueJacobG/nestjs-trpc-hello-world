import { initTRPC } from "@trpc/server";
import { z } from "zod";

const t = initTRPC.create();

export const appRouter = t.router({
    hello: t.procedure
        .input(z.void()) // no input
        .query(() => {
            return "Hello World from tRPC + NestJS!";
        }),
});

export type AppRouter = typeof appRouter;
