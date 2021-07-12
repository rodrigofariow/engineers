import { Injectable } from '@nestjs/common';
import { Message } from '@engineers/api-interfaces';

@Injectable()
export class AppService {
  getData(): Message {
    return { message: 'Welcome to calendinner-api!' };
  }
}
