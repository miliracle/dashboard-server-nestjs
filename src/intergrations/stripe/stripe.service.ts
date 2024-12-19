import { Injectable, Logger } from '@nestjs/common';
import Stripe from 'stripe';
import { CreateStripePaymentDto } from './stripe.interface';

@Injectable()
export class StripeService {
  private readonly logger = new Logger(StripeService.name);
  private readonly stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: '2024-12-18.acacia',
  });

  public async createPayment({
    payment,
    origin,
    res,
  }: {
    payment: CreateStripePaymentDto;
    origin: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    res: any;
  }) {
    this.logger.log(`Creating payment intent for ${payment.priceId}`);
    try {
      // Create checkout sessions from body params.
      const sessions = await this.stripe.checkout.sessions.create({
        line_items: [
          // Provide the Price ID of the product you want to sell
          {
            price: payment.priceId,
            quantity: payment.quantity,
          },
        ],
        mode: 'payment',
        success_url: `${origin}/?success=true`,
        cancel_url: `${origin}/?canceled=true`,
      });

      res.status(303).redirect(sessions.url);
    } catch (error) {
      this.logger.error(`Error creating payment intent: ${error}`);
      throw new Error('Error creating payment intent');
    }
  }
}
