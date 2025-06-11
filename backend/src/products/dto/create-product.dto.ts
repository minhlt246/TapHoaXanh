export class CreateProductDto {
  name: string;
  price: number;
  discount: number;
  images: string;
  slug: string;
  barcode: string;
  expiry_date: Date;
  origin: string;
  weight_unit: string;
  description?: string;
  quantity: number;
  categoryId: number;
}
