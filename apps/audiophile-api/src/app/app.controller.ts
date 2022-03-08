import {
  CategoriesQuery,
  GetProductsByCategoryIdQuery,
  ProductByIdQuery,
  ProductsQuery,
  ProductsByCategorySlugQuery,
  getSdk,
} from '@sd/audiophile/types';
import { Controller, Get, Post, Put, Param } from '@nestjs/common';

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
  @Post('/order')
  async createOrder() {
    // start transaction
    // orders table
    // customer products in cart go to db orders table
    // make payment
    // send email and/or text that the payment succeeded and the order has been processed
    // end transaction
    // use Fedex or UPS to tell user when order is shipping
    return {
      id: 10425,
      hasSucceeded: true,
    };
  }
  @Put('/order')
  async updateOrder() {
    // product is out of stock
    // only this much of the product is available
  }
}
