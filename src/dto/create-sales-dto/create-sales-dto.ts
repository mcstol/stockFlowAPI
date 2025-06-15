import { CreateCustomerDto } from '../create-customer-dto/create-customer-dto';
import { CreateProductDto } from '../create-product-dto/create-product-dto';

export enum SaleStatus {
  PENDING = 'PENDING',
  COMPLETED = 'COMPLETED',
  CANCELED = 'CANCELED',
}
class Item {
  id: string;
  saleId: string;
  productId: string;
  quantity: number;
  unitPrice: number;
  subtotal: number;
  product: CreateProductDto;
  sale: string | null;
  createdAt: string;
  updatedAt: string;
}

export class CreateSalesDto {
  id: string;
  customerId: string;
  totalAmount: number;
  saleDate: string;
  status: SaleStatus;
  items: Array<Item>;
  customer: CreateCustomerDto;
  createdAt: string;
  updatedAt: string;
}
