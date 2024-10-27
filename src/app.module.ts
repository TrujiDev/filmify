import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [MoviesModule, ConfigModule.forRoot()],
  controllers: [],
  providers: [],
})
export class AppModule {}
