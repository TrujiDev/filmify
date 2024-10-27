import { IsOptional, IsString, IsNumber, Min, Max, IsBoolean } from 'class-validator';

export class FilterMoviesDto {
    @IsOptional()
    @IsString()
    name?: string;

    @IsOptional()
    @IsNumber()
    @Min(1, { message: 'El rating mínimo es 1.' })
    @Max(5, { message: 'El rating máximo es 5.' })
    rating?: number;

    @IsOptional()
    @IsString()
    category?: string;

    @IsOptional()
    @IsBoolean()
    isDeleted?: boolean;
}