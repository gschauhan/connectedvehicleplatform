import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Set global prefix for APIs
  app.setGlobalPrefix('api/v1');

  // Start the server on port 3000 or environment-specific port
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
