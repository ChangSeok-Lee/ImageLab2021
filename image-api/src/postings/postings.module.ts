import { Module } from "@nestjs/common";
import { PostingService } from "./postings.service";
import { PostingsController } from "./postings.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import {Posting} from './entites/posting.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Posting])],
    controllers: [PostingsController],
    providers: [PostingService],
})

export class PostingsModule {}