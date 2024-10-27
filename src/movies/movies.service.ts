import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Movie } from './entities/movie.entity';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { FilterMoviesDto } from './dto/filter-movies.dto';

@Injectable()
export class MoviesService {
    constructor(
        @InjectRepository(Movie)
        private readonly movieRepository: Repository<Movie>,
    ) { }

    async findAll(filters?: FilterMoviesDto): Promise<Movie[]> {
        if (!filters) {
            return this.movieRepository.find();
        }

        const query = this.movieRepository.createQueryBuilder('movie');

        if (filters.name) {
            query.andWhere('movie.name ILIKE :name', { name: `%${filters.name}%` });
        }

        if (filters.rating) {
            query.andWhere('movie.rating = :rating', { rating: filters.rating });
        }

        if (filters.category) {
            query.andWhere('movie.category ILIKE :category', { category: `%${filters.category}%` });
        }

        if (filters.isDeleted !== undefined) {
            query.andWhere('movie.isDeleted = :isDeleted', { isDeleted: filters.isDeleted });
        }

        return await query.getMany();
    }

    async create(createMovieDto: CreateMovieDto): Promise<Movie> {
        const movie = this.movieRepository.create(createMovieDto);
        return this.movieRepository.save(movie);
    }

    async findOne(id: string): Promise<Movie> {
        const movie = await this.movieRepository.findOne({ where: { id: Number(id) } });
        if (!movie) {
            throw new NotFoundException(`Movie with ID ${id} not found`);
        }
        return movie;
    }

    async update(id: string, updateMovieDto: UpdateMovieDto): Promise<Movie> {
        await this.findOne(id);
        await this.movieRepository.update(id, updateMovieDto);
        return this.findOne(id);
    }

    async remove(id: string): Promise<void> {
        const movie = await this.findOne(id);
        await this.movieRepository.remove(movie);
    }
}
