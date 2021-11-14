import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('cats')
export class CatsController {
  @Get()
  findAll(@Req() request: Request): string {
    return `Your request is ${request}`;
  }
  @Get(':id')
  find(@Req() request: Request): string {
    return `Your request is ${request}`;
  }
}
