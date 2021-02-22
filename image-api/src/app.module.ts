import { Module } from '@nestjs/common';
import { PostingsModule } from './postings/postings.module';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
//모듈은 기능단위로 나눠놓는다, 모든 모듈이 정의된다
//app.module에는 여러 모듈들이 임포트된 형태가 구조적으로 좋음(controllers, providers는 각 모듈에서 정의)
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'toro7573',
      database: 'test',
      autoLoadEntities: true,
      synchronize: true,
    }),
    PostingsModule],
  controllers: [AppController],//라우터 역할
  providers: [],
})

export class AppModule {}
