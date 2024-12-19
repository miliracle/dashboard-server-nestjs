import { Module } from '@nestjs/common';
import { OrdersModule } from './orders/orders.module';
import { StripeModule } from './intergrations/stripe/stripe.module';

@Module({
  imports: [OrdersModule, StripeModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
