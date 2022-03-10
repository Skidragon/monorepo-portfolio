import {
  CategoriesQuery,
  GetProductsByCategoryIdQuery,
  ProductByIdQuery,
  ProductsQuery,
  ProductsByCategorySlugQuery,
  getSdk,
  HomeQuery,
} from '@sd/audiophile/types';
import { Controller, Get, Post, Put, Body, Param } from '@nestjs/common';

import { AppService } from './app.service';
import { GraphQLClient } from 'graphql-request';
import { Item } from 'react-use-cart';
const client = new GraphQLClient(process.env.GRAPH_CMS_URL);
const sdk = getSdk(client);
class CreateOrderDto {
  items: Item[];
  total: number;
}
const SHIPPING_PRICE_IN_CENTS = 5000;
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }
  @Get('/home')
  async getHome(): Promise<HomeQuery> {
    return await sdk.Home();
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
  async createOrder(@Body() createOrderDto: CreateOrderDto): Promise<{
    items: Item[];
    total: number;
  }> {
    // start transaction
    // orders table
    // customer products in cart go to db orders table
    // make payment
    // send email and/or text that the payment succeeded and the order has been processed
    // end transaction
    // use Fedex or UPS to tell user when order is shipping
    const data = await this.getProducts();

    const { products } = data;

    const cleanedItems = createOrderDto.items.map((item) => {
      const product = products.find((product) => product.id === item.id);
      return {
        cents: product.cents,
        ...item,
      };
    });

    return {
      items: cleanedItems,
      total:
        cleanedItems.reduce((acc, current) => {
          return acc + current.cents * current.quantity;
        }, 0) + SHIPPING_PRICE_IN_CENTS,
    };
  }
  @Put('/order')
  async updateOrder() {
    // product is out of stock
    // only this much of the product is available
  }
}
