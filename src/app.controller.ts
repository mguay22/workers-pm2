import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('worker')
  async worker(@Query('cpuTimeMs') cpuTimeMs: string) {
    return this.appService.worker(parseInt(cpuTimeMs));
  }

  @Get('blocking')
  blocking(@Query('cpuTimeMs') cpuTimeMs: string) {
    return this.appService.blocking(parseInt(cpuTimeMs));
  }
}
