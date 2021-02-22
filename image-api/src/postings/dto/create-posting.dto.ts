import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreatePostingDto{

    @IsString()
    readonly title: string;

    @IsString()
    readonly author: string;

    @IsString()
    readonly content: string;

    // @IsOptional()//typestack/clas-validator 참고하면 데코레이터들 확인 가능
    // @IsString({each: true})
    // readonly genres: string[];
}
//Data Transportaion Object : 데이터의 유효성검사