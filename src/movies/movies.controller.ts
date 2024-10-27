import { Controller, Get, Post, UseInterceptors, UploadedFile, ParseFilePipe, MaxFileSizeValidator, FileTypeValidator } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';

@Controller('movies')
export class MoviesController {
  constructor(
    private readonly cloudinaryService: CloudinaryService
  ) { }
  
  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadImage(
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({ maxSize: 1024 * 1024 * 4 }),
          new FileTypeValidator({fileType: '(png|jpeg|jpg)'}),
        ]
      }),
    ) file: Express.Multer.File) {
    return this.cloudinaryService.uploadFile(file)
  }
}
