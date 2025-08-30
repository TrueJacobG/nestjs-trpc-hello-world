import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import * as trpcExpress from '@trpc/server/adapters/express';
import {appRouter} from '../trpc/trpc';
import {TrpcContextService} from "../trpc/trpc-context.service";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

    app.enableCors({
        origin: "http://localhost:5173",
        credentials: true,
    });

    const trpcContextService = app.get(TrpcContextService);

    app.use(
        '/trpc',
        trpcExpress.createExpressMiddleware({
            router: appRouter,
            createContext: () => trpcContextService.getContext(),
        }),
    );

  await app.listen(process.env.PORT ?? 3000);
}

bootstrap();
