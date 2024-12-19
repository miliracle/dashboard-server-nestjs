import {
  Controller,
  Post,
  Body,
  Headers,
  Res,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { StripeService } from './stripe.service';
import { CreateStripePaymentDto } from './stripe.interface';

@Controller('/v1/stripe')
export class StripeController {
  constructor(private readonly stripeService: StripeService) {}

  @Post('/payments')
  async createPaymentIntent(
    @Body() body: CreateStripePaymentDto,
    @Headers() headers: Headers,
    @Res() res: Response,
  ) {
    try {
      const paymentInfo = await this.stripeService.createPayment({
        payment: body,
        res,
        origin: headers['origin'],
      });

      return paymentInfo;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }
}
