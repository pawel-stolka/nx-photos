import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
    console.log('app ctrl ctor MD')
  }
  
  @Get()
  getData() {
    const res = this.appService.getData();
    console.log('getData MD', res);
    return res
  }
}
