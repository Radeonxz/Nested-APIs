import { Controller, Post, Body } from '@nestjs/common';
import { ProducesService } from './products.service';

@Controller('products')
export class ProducesController {
  constructor(private readonly productsService: ProducesService) {}

  @Post()
  addProduct(
    // @Body() completeBody: {
    //   title: string,
    //   description: string,
    //   price: number
    // }
    @Body('title') prodTitle: string,
    @Body('description') prodDesc: string,
    @Body('price') prodPrice: number,
  ): any {
    const generatedId = this.productsService.insertProduct(
      prodTitle,
      prodDesc,
      prodPrice,
    );
    return { generatedId };
  }
}
