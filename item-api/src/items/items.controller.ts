import {
  Controller,
  Body,
  Get,
  Post,
  Put,
  Delete,
  Req,
  Res,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateItemDto } from './dto/create-item.dto';

@Controller('items')
export class ItemsController {
  @Get('express')
  findExpress(@Req() req: Request, @Res() res: Response): Response {
    console.log(req.url);
    return res.send('Hello world');
  }

  @Post()
  create(@Body() createItemDto: CreateItemDto): string {
    return `Name: ${createItemDto.name}, Desc: ${createItemDto.description}`;
  }

  @Put()
  update(): string {
    return 'Iten updated';
  }

  @Delete()
  remove() {
    return 'Item deleted';
  }
}
