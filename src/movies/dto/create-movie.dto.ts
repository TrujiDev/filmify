import { IsString, IsNotEmpty, IsOptional, IsNumber, Min, Max, IsUrl, IsBoolean } from 'class-validator';

export class CreateMovieDto {
  @IsString()
  @IsNotEmpty({ message: 'El nombre de la película es obligatorio.' })
  name: string;

  @IsString()
  @IsOptional()
  summry?: string;

  @IsNumber()
  @Min(1, { message: 'El rating mínimo es 1.' })
  @Max(5, { message: 'El rating máximo es 5.' })
  rating: number;

  @IsString()
  @IsNotEmpty({ message: 'La categoría es obligatoria.' })
  category: string;

  @IsUrl({}, { message: 'La imagen debe ser una URL válida.' })
  @IsOptional()
  image?: string;

  @IsBoolean()
  @IsOptional()
  isDeleted?: boolean = false;
}
