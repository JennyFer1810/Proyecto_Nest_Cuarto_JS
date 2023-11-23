import { IsDateString, IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString } from "class-validator";

export class CreateTareaDto {

    @IsNumber()
    id: number;
    
    @IsString()
    title_task: string;

    @IsString()
    description: string;

    @IsNumber()
    @IsPositive()
    note: number;

    @IsString()
    @IsOptional()
    asignature?: string;

    @IsDateString()
    @IsNotEmpty()
    deliver_date: string;
    
}
