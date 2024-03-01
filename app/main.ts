import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);
  const port = 9890;

  await app.listen(port);
}

bootstrap()
  .then(() => {
    console.log(`App started on: ${process.env.APP_PORT}.`);
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
