import { IsString, IsNotEmpty, IsOptional, IsNumber, Min, Max, IsUrl, IsBoolean } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateMovieDto {
  @ApiProperty({
    description: 'Nombre de la película',
    example: 'Inception',
  })
  @IsString()
  @IsNotEmpty({ message: 'El nombre de la película es obligatorio.' })
  name: string;

  @ApiProperty({
    description: 'Resumen de la película',
    required: false,
    example: 'Un ladrón que roba secretos corporativos a través del uso de tecnología de sueños compartidos.',
  })
  @IsString()
  @IsOptional()
  summary?: string;

  @ApiProperty({
    description: 'Rating de la película, entre 1 y 5',
    minimum: 1,
    maximum: 5,
    example: 4,
  })
  @IsNumber()
  @Min(1, { message: 'El rating mínimo es 1.' })
  @Max(5, { message: 'El rating máximo es 5.' })
  rating: number;

  @ApiProperty({
    description: 'Categoría de la película',
    example: 'Ciencia Ficción',
  })
  @IsString()
  @IsNotEmpty({ message: 'La categoría es obligatoria.' })
  category: string;

  @ApiProperty({
    description: 'URL de la imagen de la película, debe ser una URL válida',
    required: false,
    example: 'https://example.com/image.jpg',
  })
  @IsUrl({}, { message: 'La imagen debe ser una URL válida.' })
  @IsOptional()
  image?: string;

  @ApiProperty({
    description: 'Indica si la película está eliminada o no. Por defecto es false',
    required: false,
    default: false,
  })
  @IsBoolean()
  @IsOptional()
  isDeleted?: boolean = false;
}