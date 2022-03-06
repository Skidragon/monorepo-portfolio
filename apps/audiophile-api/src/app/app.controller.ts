import {
  CategoriesQuery,
  GetProductsByCategoryIdQuery,
  ProductItemsByIdQuery,
  getSdk,
} from '@sd/audiophile/types';
import { Controller, Get, Param } from '@nestjs/common';

import { AppService } from './app.service';
import { GraphQLClient } from 'graphql-request';
const client = new GraphQLClient(process.env.GRAPH_CMS_URL);
const sdk = getSdk(client);

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }
  @Get('/categories')
  async getCategories(): Promise<CategoriesQuery> {
    return await sdk.Categories();
  }
  @Get('/category/:id')
  async getProductsByCategoryId(
    @Param('id') id: string
  ): Promise<GetProductsByCategoryIdQuery['category']['products']> {
    const { category } = await sdk.GetProductsByCategoryId({
      id,
    });
    return category.products;
  }
  @Get('/product/items/:id')
  async getProductItemsById(
    @Param('id') id: string
  ): Promise<ProductItemsByIdQuery['product']> {
    const { product } = await sdk.ProductItemsById({
      id,
    });
    return product;
  }
}
