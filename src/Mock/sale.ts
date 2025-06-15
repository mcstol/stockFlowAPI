import {
  CreateSalesDto,
  SaleStatus,
} from 'src/dto/create-sales-dto/create-sales-dto';

export const mockedSales: Array<CreateSalesDto> = [
  {
    id: 'sale-001',
    customerId: 'cust-1', // ID de um cliente mocados
    totalAmount: 209.9,
    saleDate: new Date('2025-05-30T15:00:00Z').toString(),
    status: SaleStatus.COMPLETED,
    items: [
      {
        id: 'saleitem-001',
        saleId: 'sale-001',
        productId: 'prod-001', // ID de um produto mocados
        quantity: 1,
        unitPrice: 89.9,
        subtotal: 89.9,
        product: {
          id: 'prod-001',
          name: 'Camisa Polo',
          price: 89.9,
          stockQuantity: 149,
          category: 'Roupas',
          isActive: true,
          createdAt: new Date().toString(),
          updatedAt: new Date().toString(),
        },
        sale: null,
        createdAt: new Date().toString(),
        updatedAt: new Date().toString(),
      },
      {
        id: 'saleitem-002',
        saleId: 'sale-001',
        productId: 'prod-002',
        quantity: 1,
        unitPrice: 120.0,
        subtotal: 120.0,
        product: {
          id: 'prod-002',
          name: 'Calça Jeans',
          price: 120.0,
          stockQuantity: 79,
          category: 'Roupas',
          isActive: true,
          createdAt: new Date().toString(),
          updatedAt: new Date().toString(),
        },
        sale: null,
        createdAt: new Date().toString(),
        updatedAt: new Date().toString(),
      },
    ],
    customer: {
      id: 'cust-1',
      name: 'Maria Silva',
      email: 'maria@example.com',
      phone: null,
      address: {
        street: 'Rua teste',
        city: 'qualquer',
        state: 'SP',
        zipCode: '1234657',
      },
      createdAt: new Date().toString(),
      updatedAt: new Date().toString(),
    }, // Propriedade mockada para eager loading
    createdAt: new Date('2025-05-30T15:00:00Z').toString(),
    updatedAt: new Date('2025-05-30T15:00:00Z').toString(),
  },
];
