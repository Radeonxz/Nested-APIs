import { Injectable } from '@nestjs/common';
import { Case } from './interfaces/case.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class CasesService {
  constructor(@InjectModel('Case') private readonly caseModel:Model<Case>) {}

  async findAll(): Promise<Case[]> {
    return await this.caseModel.find();
  }

  async findOne(id: string): Promise<Case> {
    return await this.caseModel.findOne({_id: id});
  }

  // async create(case: Case): Promise<Case> {
  //   const newCase = new this.caseModel(case);
  //   return await newCase.save();
  // }
}
