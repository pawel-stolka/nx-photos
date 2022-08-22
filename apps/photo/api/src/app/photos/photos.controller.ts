import { Controller, Get, Param, Put } from '@nestjs/common';
import { PhotosService } from './photos.service';
import { ApiPhoto } from '@nx-photos/photo/api-model';

@Controller('photos')
export class PhotosController {
  constructor(private photoService: PhotosService) {
    console.log('photos ctrl ctor MD')
  }

  @Get()
  findAll(): ApiPhoto[] {
    const res = this.photoService.getPhotos();
    console.log('getPhotos MD', res);
    return res
  }

  @Put(':photoId/like')
  likePhoto(@Param() params: { photoId: string }): ApiPhoto {
    return this.photoService.likePhoto(params.photoId);
  }

  @Put(':photoId/dislike')
  dislikePhoto(@Param() params: { photoId: string }): ApiPhoto {
    return this.photoService.dislikePhoto(params.photoId);
  }
}
