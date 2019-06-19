import { Injectable } from '@nestjs/common';
import { Case } from './interfaces/case.interface';

@Injectable()
export class CasesService {
  private readonly cases: Case[] = [
    {
      id: '12113131',
      name: 'Case One',
      description: 'This is case one',
      clients: 1
    },
    {
      id: '22222222222',
      name: 'Case Two',
      description: 'This is case two',
      clients: 2
    }
  ];

  findAll(): Case[] {
    return this.cases;
  }
}
