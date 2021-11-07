import { Controller, Get, HttpCode, Post, Req } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Get()
  findAll(@Req() request: Request): string {
    return `Your request is: ${request}`;
  }
  @Post()
  @HttpCode(204)
  create() {
    return 'method created';
  }
}
