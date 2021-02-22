import { Controller, Delete, Get, Param, Post, Put, Patch, Body, Query } from '@nestjs/common';
import { Console } from 'console';
import { CreatePostingDto } from './dto/create-posting.dto';
import { UpdatePostingDto } from './dto/update-posting.dto';
import { Posting } from './entites/posting.entity';
import { PostingService } from './postings.service';

@Controller('postings')//엔드포인트 관리
export class PostingsController {
    
    constructor(private readonly postingService: PostingService){}

    @Get()
    getAll(): Promise<Posting[]> {
        return this.postingService.getAll();
    }


    @Get("search")
    search(@Query("year") searchingYear:string){
        return `We are searching for a movie made after:${searchingYear}`;
    }

    @Get(":id")
    getOne(@Param('id') postId: number): Promise<Posting>{//param데코레이터를 사용하면 url에 있는 id를 원한다는 것을 인식함
        return this.postingService.getOne(postId);
    }

    @Post()
    create(@Body() postData: CreatePostingDto){
        console.log(postData);
       return this.postingService.create(postData);
    }

    @Delete('/:id')
    Remove(@Param('id') postId: number){
        return this.postingService.deleteOne(postId);
    }

    //put은 모두 업데이트, patch는 일부분만 업데이트
    @Patch('/:id')
    patch(@Param('id') postId: number, @Body() updateData: UpdatePostingDto){
        return this.postingService.update(postId, updateData);
    }

}
