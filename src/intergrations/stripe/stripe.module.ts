import { Module } from '@nestjs/common';
import { StripeController } from './stripe.controller';
import { StripeService } from './stripe.service';

@Module({
  exports: [StripeService],
  controllers: [StripeController],
  providers: [StripeService],
})
export class StripeModule {}
