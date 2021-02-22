import { Injectable, NotFoundException } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import { debug } from 'console';
import { Repository } from 'typeorm';
import { CreatePostingDto } from './dto/create-posting.dto';
import { UpdatePostingDto } from './dto/update-posting.dto';
import { Posting } from './entites/posting.entity';


//dependency injection?  개념 정리
@Injectable()
export class PostingService {
    
    constructor(
        @InjectRepository(Posting)
        private readonly postingsRepository: Repository<Posting>,
    ){}

    async getAll(): Promise<Posting[]> {
        return this.postingsRepository.find();
    }

    getOne(id:number): Promise<Posting> {
        return this.postingsRepository.findOne(id);
    }

    async deleteOne(id: number) {
        await this.postingsRepository.delete(id);
    }

    create(PostingData: CreatePostingDto): Promise<Posting>{
        console.log(PostingData);
        const posting = new Posting();
        posting.title = PostingData.title;
        posting.author = PostingData.author;
        posting.content = PostingData.content;
        return this.postingsRepository.save(posting);
    }

    update(id:number, updateData: UpdatePostingDto){
       
    }
}