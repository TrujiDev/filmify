import { Module } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { MoviesController } from './movies.controller';
import { CloudinaryModule } from 'src/cloudinary/cloudinary.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movie } from './entities/movie.entity';

@Module({
  imports: [
    CloudinaryModule,
    TypeOrmModule.forFeature([Movie])
  ],
  controllers: [MoviesController],
  providers: [MoviesService],
  exports: [MoviesService]
})
export class MoviesModule {}
