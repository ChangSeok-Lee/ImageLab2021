import { IsNumber, IsString } from 'class-validator';
import {PartialType} from "@nestjs/mapped-types"
import { CreatePostingDto } from './create-posting.dto';
// export class UpdateMovieDto{

//     @IsString()
//     readonly title?: string;//?는 필수가 아님을 의미함

//     @IsNumber()
//     readonly year?: number;

//     @IsString({each: true})
//     readonly generes?: string[];
// }
//Data Transportaion Object : 데이터의 유효성검사


//mapped-types설치 -> 타입을 변환시키고 사용할 수 있게 하는 패키지(DTO 변환을 도와줌)
export class UpdatePostingDto extends PartialType(CreatePostingDto) {}