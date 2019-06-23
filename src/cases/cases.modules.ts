import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose';
import { CasesController } from './cases.controller';
import { CasesService } from './cases.service';
import { CaseSchema } from './schemas/case.shcema';

@Module({
  imports: [MongooseModule.forFeature([{name: 'Case', schema: CaseSchema}])],
  controllers: [CasesController],
  providers: [CasesService],
})
export class CasesModule {}
