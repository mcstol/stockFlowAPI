import { CreateSupplierDto } from 'src/dto/create-supplier-dto/create-supplier-dto';

export const mockedSuppliers: CreateSupplierDto[] = [
  {
    id: 'supp-1',
    name: 'Eletrônicos Giga',
    contactName: 'Ana Paula',
    email: 'contato@eletronicosgiga.com',
    phone: '1133445566',
    address: {
      street: 'Rua da Inovação',
      number: '300',
      city: 'Campinas',
      state: 'SP',
      zipCode: '13000-000',
    },
    createdAt: '2024-02-20T11:00:00Z',
    updatedAt: '2024-05-18T10:15:00Z',
  },
  {
    id: 'supp-2',
    name: 'Vestuário Conforto',
    contactName: 'Bruno Costa',
    email: 'vendas@vestuarioconforto.com',
    phone: '21987654321',
    address: {
      street: 'Avenida da Moda',
      number: '123',
      city: 'Rio de Janeiro',
      state: 'RJ',
      zipCode: '22000-000',
    },
    createdAt: '2024-02-20T11:00:00Z',
    updatedAt: '2024-05-18T10:15:00Z',
  },
];
