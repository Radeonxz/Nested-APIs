import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CasesController } from './cases/cases.controller';
import { CasesService } from './cases/cases.service';
import { CasesModule } from './cases/cases.modules';
import { MongooseModule } from '@nestjs/mongoose';
import config from './config/keys';

@Module({
  imports: [CasesModule, MongooseModule.forRoot(config.mongoURI)],
  controllers: [AppController, CasesController],
  providers: [AppService, CasesService],
})
export class AppModule {}
