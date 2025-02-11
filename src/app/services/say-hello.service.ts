import { inject, Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn:'root'
})
export class SayHelloService {
  // loggerService = inject(LoggerService);
  constructor(private loggerService: LoggerService) { }

  hello() {
    this.loggerService.logger('Hello le monde :D');
  }
}
