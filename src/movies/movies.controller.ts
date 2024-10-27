import { Controller, Get, Post, UseInterceptors, UploadedFile, ParseFilePipe, MaxFileSizeValidator, FileTypeValidator, Body, Param, Patch, Delete, Query } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';
import { MoviesService } from './movies.service';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { FilterMoviesDto } from './dto/filter-movies.dto';
import { Movie } from './entities/movie.entity';

@Controller('movies')
export class MoviesController {
  constructor(
    private readonly moviesService: MoviesService,
    private readonly cloudinaryService: CloudinaryService
  ) { }

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async createMovie(
    @Body() createMovieDto: CreateMovieDto,
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({ maxSize: 1024 * 1024 * 4 }),
          new FileTypeValidator({ fileType: '(png|jpeg|jpg)' }),
        ],
      }),
    ) file: Express.Multer.File,
  ) {
    const uploadResult = await this.cloudinaryService.uploadFile(file);
    createMovieDto.image = uploadResult.secure_url;

    return this.moviesService.create(createMovieDto);
  }

  @Get()
  async findAll(@Query() filters: FilterMoviesDto): Promise<Movie[]> {
    return this.moviesService.findAll(filters);
  }

  @Get(':id')
  async getMovieById(@Param('id') id: string) {
    return this.moviesService.findOne(id);
  }

  @Patch(':id')
  @UseInterceptors(FileInterceptor('file'))
  async updateMovie(
    @Param('id') id: string,
    @Body() updateMovieDto: UpdateMovieDto,
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({ maxSize: 1024 * 1024 * 4 }),
          new FileTypeValidator({ fileType: '(png|jpeg|jpg)' }),
        ]
      }),
    ) file: Express.Multer.File
  ) {
    if (file) {
      const uploadResult = await this.cloudinaryService.uploadFile(file);
      updateMovieDto.image = uploadResult.secure_url;
    }

    return this.moviesService.update(id, updateMovieDto);
  }

  @Delete(':id')
  async deleteMovie(@Param('id') id: string) {
    return this.moviesService.remove(id);
  }
}
