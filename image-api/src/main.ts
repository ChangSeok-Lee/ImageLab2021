import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,//사용자의 입력을 알아서 변환해준다.
  }));//유효성 검사를 위한 파이프
  app.enableCors();
  await app.listen(3000);
  
}
bootstrap();
