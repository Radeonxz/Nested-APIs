import { Injectable } from '@nestjs/common';
import { Case } from './interfaces/case.interface';

@Injectable()
export class CasesService {
  private readonly cases: Case[] = [
    {
      id: '1',
      name: 'Case One',
      description: 'This is case one',
      clients: 1
    },
    {
      id: '2',
      name: 'Case Two',
      description: 'This is case two',
      clients: 2
    }
  ];

  findAll(): Case[] {
    return this.cases;
  }

  findOne(id: string): Case {
    return this.cases.find(Case => Case.id === id);
  }
}
