import { IsOptional, IsString, IsNumber, Min, Max, IsBoolean } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class FilterMoviesDto {
    @ApiProperty({
        description: 'Nombre de la película para filtrar',
        required: false,
        example: 'Inception',
    })
    @IsOptional()
    @IsString()
    name?: string;

    @ApiProperty({
        description: 'Rating de la película, entre 1 y 5',
        required: false,
        minimum: 1,
        maximum: 5,
        example: 4,
    })
    @IsOptional()
    @IsNumber()
    @Min(1, { message: 'El rating mínimo es 1.' })
    @Max(5, { message: 'El rating máximo es 5.' })
    rating?: number;

    @ApiProperty({
        description: 'Categoría de la película para filtrar',
        required: false,
        example: 'Ciencia Ficción',
    })
    @IsOptional()
    @IsString()
    category?: string;

    @ApiProperty({
        description: 'Indica si la película está eliminada o no',
        required: false,
        example: false,
    })
    @IsOptional()
    @IsBoolean()
    isDeleted?: boolean;
}
