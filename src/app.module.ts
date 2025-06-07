import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { CustomersModule } from './customers/customers.module';
import { SuppliersModule } from './suppliers/suppliers.module';

@Module({
  imports: [ProductsModule, CustomersModule, SuppliersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
