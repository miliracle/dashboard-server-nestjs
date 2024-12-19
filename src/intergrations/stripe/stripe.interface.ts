import { IsNotEmpty, MinLength } from 'class-validator';

export class CreateStripePaymentDto {
  @IsNotEmpty()
  priceId: string;

  @MinLength(1, {
    message: 'Quantity must be at least 1',
  })
  quantity: number;
}
