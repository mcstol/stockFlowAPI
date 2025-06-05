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
import { CreateCustomerDto } from 'src/dto/create-customer-dto/create-customer-dto';
import { mockedCustumers } from 'src/Mock/customer';

@Controller('customers')
export class CustomersController {
  @Get()
  findAll() {
    return mockedCustumers;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return mockedCustumers.find((customer) => customer.id === id);
  }

  @Post()
  create(@Body() createCustomerDto: CreateCustomerDto) {
    const index = mockedCustumers.findIndex(
      (customer) => customer.email === createCustomerDto.email,
    );
    if (index !== -1) {
      throw new HttpException('Email already exists', HttpStatus.CONFLICT);
    }
    const newCustomer = {
      ...createCustomerDto,
      id: `cust-${Math.random().toString(36)}`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    mockedCustumers.push(newCustomer);
    return newCustomer;
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCustomerDto: CreateCustomerDto,
  ) {
    const index = mockedCustumers.findIndex((customer) => customer.id === id);
    if (index === -1) {
      throw new HttpException('Customer not found', HttpStatus.NOT_FOUND);
    }
    const updatedCustomer = {
      ...mockedCustumers[index],
      ...updateCustomerDto,
      updatedAt: new Date().toISOString(),
    };
    mockedCustumers[index] = updatedCustomer;
    return {
      statusCode: HttpStatus.OK,
      message: 'Customer updated successfully',
      data: updatedCustomer,
    };
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    const index = mockedCustumers.findIndex((customer) => customer.id === id);
    if (index === -1) {
      throw new HttpException('Customer not found', HttpStatus.NOT_FOUND);
    }
    mockedCustumers.splice(index, 1);
    return {
      statusCode: HttpStatus.OK,
      message: 'Customer deleted successfully',
    };
  }
}
