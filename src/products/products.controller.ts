// src/products/products.controller.ts
import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  HttpException,
  Delete,
} from '@nestjs/common';
import { CreateProductDto } from '../dto/create-product-dto/create-product-dto';
import { HttpStatus } from '@nestjs/common';

const mockedProducts: CreateProductDto[] = [
  {
    id: 'prod-001',
    name: 'Camisa Polo',
    price: 89.9,
    stockQuantity: 150,
    category: 'Roupas',
    isActive: true,
    createdAt: '2024-01-10T10:00:00Z',
    updatedAt: '2024-05-15T14:30:00Z',
  },
  {
    id: 'prod-002',
    name: 'Calça Jeans',
    price: 120.0,
    stockQuantity: 80,
    category: 'Roupas',
    isActive: true,
    createdAt: '2024-02-20T11:00:00Z',
    updatedAt: '2024-05-18T10:15:00Z',
  },
];

@Controller('products')
export class ProductsController {
  @Get()
  findAll() {
    return mockedProducts;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return mockedProducts.find((product) => product.id === id);
  }

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    const newProduct = {
      ...createProductDto,
      id: `prod-${Math.random().toString(36)}`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      isActive: true,
    };
    mockedProducts.push(newProduct);
    return newProduct;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateProductDto: CreateProductDto) {
    const index = mockedProducts.findIndex((product) => product.id === id);
    console.log('🚀 ~ ProductsController ~ update ~ index:', index);
    if (index === -1) {
      throw new HttpException('Product not found', HttpStatus.NOT_FOUND);
    }
    const updatedProduct = {
      ...mockedProducts[index],
      ...updateProductDto,
      updatedAt: new Date().toISOString(),
    };
    mockedProducts[index] = updatedProduct;
    return {
      statusCode: HttpStatus.OK,
      message: 'Product updated successfully',
      data: updatedProduct,
    };
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    const index = mockedProducts.findIndex((product) => product.id === id);
    if (index === -1) {
      throw new HttpException('Product not found', HttpStatus.NOT_FOUND);
    }
    mockedProducts.splice(index, 1);
    return {
      statusCode: HttpStatus.OK,
      message: 'Product deleted successfully',
    };
  }
}
