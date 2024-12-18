import { Module, Logger } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import { PrismaService } from '@utils/prisma.service';

@Module({
  controllers: [OrdersController],
  providers: [OrdersService, PrismaService, Logger],
})
export class OrdersModule {}
