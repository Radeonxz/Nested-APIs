import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CasesController } from './cases/cases.controller';
import { CasesService } from './cases/cases.service';

@Module({
  imports: [],
  controllers: [AppController, CasesController],
  providers: [AppService, CasesService],
})
export class AppModule {}
