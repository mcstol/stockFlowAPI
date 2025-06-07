class AdressDto {
  street: string;
  number?: string;
  complement?: string;
  city: string;
  state: string;
  zipCode: string;
}
export class CreateSupplierDto {
  id: string;
  name: string;
  contactName?: string;
  email: string;
  phone?: string | null;
  address: AdressDto;
  createdAt: string;
  updatedAt: string;
}
