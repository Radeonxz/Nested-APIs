import { Controller, Body, Get, Post, Put, Delete } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';

@Controller('items')
export class ItemsController {
  @Get()
  findAll(): string {
    return 'Get all items';
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
