import {initTRPC} from "@trpc/server";
import {z} from "zod";
import {TrpcContextService} from "./trpc-context.service";

const t = initTRPC.context<ReturnType<TrpcContextService['getContext']>>().create();

export const appRouter = t.router({
    hello: t.procedure
        .input(z.void())
        .query(({ctx}) => {
            return ctx.appController.getHello()
        }),
});

export type AppRouter = typeof appRouter;
