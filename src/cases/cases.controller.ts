import { Controller, Body, Param, /*Req, Res,*/ Get, Post, Put, Delete } from '@nestjs/common';
import { CreateCaseDto } from './dto/create-case.dto';
import { CasesService } from './cases.service';
import { Case } from './interfaces/case.interface';
// Express: 1-2
// import { Request, Response } from 'express';

@Controller('cases')
export class CasesController {
  constructor(private readonly casesService: CasesService) {}
  // Express: 2-2
  // @Get()
  // findAll(@Req() req: Request, @Res() res: Response): Response {
  //   console.log(req.url);
  //   return res.send('Hello World');
  // }

  @Get()
  findAll(): Promise<Case[]> {
    return this.casesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id): Promise<Case> {
    return this.casesService.findOne(id);
  }

  @Post()
  create(@Body() createCaseDto: CreateCaseDto): Promise<Case> {
    return this.casesService.create(createCaseDto);
  }

  @Delete(':id')
  delete(@Param('id') id): Promise<Case> {
    return this.casesService.delete(id);
  }

  @Put(':id')
  update(@Body() updateCaseDto: CreateCaseDto, @Param('id') id): Promise<Case> {
    return this.casesService.update(id, updateCaseDto);
  }
}
