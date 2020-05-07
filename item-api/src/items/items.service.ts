import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface';

@Injectable()
export class ItemsService {
  private readonly items: Item[] = [
    {
      id: '123456789',
      name: 'Item 1',
      description: 'This is item 1',
      qty: 100,
    },
    {
      id: '234567890',
      name: 'Item 2',
      description: 'This is item 2',
      qty: 200,
    },
  ];

  findAll(): Item[] {
    return this.items;
  }
}
