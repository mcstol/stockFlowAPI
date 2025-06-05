import { Controller, Get } from '@nestjs/common';
import { mockedCustumers } from 'src/Mock/customer';

@Controller('customers')
export class CustomersController {
  @Get()
  findAll() {
    return mockedCustumers;
  }
}
