import { CreateProductDto } from 'src/dto/create-product-dto/create-product-dto';

export const mockedProducts: CreateProductDto[] = [
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
