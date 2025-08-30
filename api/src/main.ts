import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import * as trpcExpress from '@trpc/server/adapters/express';
import {appRouter} from '../trpc/trpc';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

    app.enableCors({
        origin: "http://localhost:5173",
        credentials: true,
    });

    const trpcHandler = trpcExpress.createExpressMiddleware({
        router: appRouter,
    });

    app.use('/trpc', trpcHandler);

  await app.listen(process.env.PORT ?? 3000);
}

bootstrap();
