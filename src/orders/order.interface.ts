import { Product } from '@prisma/client';
import { IsNumber, IsNotEmpty } from 'class-validator';

export class UpdateOrderDto {
  @IsNumber()
  total: number;

  @IsNotEmpty()
  products: Product[];

  @IsNotEmpty()
  userId: number;
}
