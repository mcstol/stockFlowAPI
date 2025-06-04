// src/products/products.controller.ts
import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { CreateProductDto } from '../dto/create-product-dto/create-product-dto';

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
    return mockedProducts.find((p) => p.id === id);
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
    mockedProducts.push(newProduct); // Adiciona ao array mockado
    return newProduct;
  }
  // Implemente PATCH e DELETE de forma similar
}
