import {
  CategoriesQuery,
  GetProductsByCategoryIdQuery,
  ProductByIdQuery,
  ProductsQuery,
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
  @Get('/products')
  async getProducts(): Promise<ProductsQuery> {
    return await sdk.Products();
  }
  @Get('/product/id/:id')
  async getProductById(@Param('id') id: string): Promise<ProductByIdQuery> {
    const data = await sdk.ProductById({
      id,
    });
    return data;
  }
  @Get('products/category/id/:id')
  async getProductsByCategoryId(
    @Param('id') id: string
  ): Promise<GetProductsByCategoryIdQuery> {

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
}
