import { CreateCustomerDto } from 'src/dto/create-customer-dto/create-customer-dto';

export const mockedCustumers: CreateCustomerDto[] = [
  {
    id: 'cust-1',
    name: 'Maria Silva',
    email: 'maria@example.com',
    phone: '11998765432',
    address: {
      street: 'Rua Principal',
      number: '100',
      city: 'São Paulo',
      state: 'SP',
      zipCode: '01000-000',
    },
    createdAt: '2024-02-20T11:00:00Z',
    updatedAt: '2024-05-18T10:15:00Z',
  },
  {
    id: 'cust-2',
    name: 'Pedro Souza',
    email: 'pedro@example.com',
    phone: null,
    address: {
      street: 'Avenida Secundária',
      number: '50',
      city: 'Rio de Janeiro',
      state: 'RJ',
      zipCode: '20000-000',
    },
    createdAt: '2024-02-20T11:00:00Z',
    updatedAt: '2024-05-18T10:15:00Z',
  },
];
