import {
  CategoriesQuery,
  GetProductsByCategoryIdQuery,
  ProductItemsByIdQuery,
  ProductsByCategorySlugQuery,
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
  @Get('products/category/id/:id')
  async getProductsByCategoryId(
    @Param('id') id: string
  ): Promise<GetProductsByCategoryIdQuery> {
    console.log('testingtestingtestingtestingtestingtestingtesting');

    const data = await sdk.GetProductsByCategoryId({
      id,
    });
    return data;
  }
  @Get('/products/category/slug/:slug')
  async getProductsByCategorySlug(
    @Param('slug') slug: string
  ): Promise<ProductsByCategorySlugQuery> {
    const data = await sdk.ProductsByCategorySlug({ slug });
    console.log(data);
    return data;
  }
  @Get('/product-items/:id')
  async getProductItemsById(
    @Param('id') id: string
  ): Promise<ProductItemsByIdQuery> {
    const data = await sdk.ProductItemsById({
      id,
    });
    return data;
  }
}
