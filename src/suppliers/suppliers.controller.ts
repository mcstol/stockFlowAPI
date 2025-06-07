import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateSupplierDto } from 'src/dto/create-supplier-dto/create-supplier-dto';
import { mockedSuppliers } from 'src/Mock/supplier';

@Controller('suppliers')
export class SuppliersController {
  @Get()
  findAll() {
    return mockedSuppliers;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return mockedSuppliers.find((supplier) => supplier.id === id);
  }

  @Post()
  create(@Body() createSupplierDto: CreateSupplierDto) {
    const newSupplier = {
      ...createSupplierDto,
      id: `supp-${Math.random().toString(36)}`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    mockedSuppliers.push(newSupplier);
    return createSupplierDto;
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSupplierDto: CreateSupplierDto,
  ) {
    const index = mockedSuppliers.findIndex((supplier) => supplier.id === id);
    if (index === -1) {
      throw new HttpException('Supplier not found', HttpStatus.NOT_FOUND);
    }
    const updatedSupplier = {
      ...mockedSuppliers[index],
      ...updateSupplierDto,
      updatedAt: new Date().toISOString(),
    };
    mockedSuppliers[index] = updatedSupplier;
    return {
      statusCode: HttpStatus.OK,
      message: 'Supplier updated successfully',
      data: updatedSupplier,
    };
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    const index = mockedSuppliers.findIndex((supplier) => supplier.id === id);
    if (index === -1) {
      throw new HttpException('Supplier not found', HttpStatus.NOT_FOUND);
    }
    mockedSuppliers.splice(index, 1);
    return {
      statusCode: HttpStatus.OK,
      message: 'Supplier deleted successfully',
    };
  }
}
