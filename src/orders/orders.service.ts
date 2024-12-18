import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { Prisma, Order } from '@prisma/client';
import { PrismaService } from '@utils/prisma.service';

@Injectable()
export class OrdersService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly logger: Logger,
  ) {}

  public async orders(filter: Prisma.OrderWhereInput): Promise<Array<Order>> {
    return this.prisma.order.findMany({ where: filter });
  }

  public async updateOrder(params: {
    where: Prisma.OrderWhereUniqueInput;
    data: Prisma.OrderUpdateInput;
  }): Promise<Order> {
    const { data, where } = params;
    this.logger.log(`Updated existing order ${where.id}`);

    try {
      const updatedOrder = await this.prisma.order.update({
        data: {
          ...data,
          updatedAt: new Date(),
        },
        where,
      });

      this.logger.log(
        `Updated for existing order ${updatedOrder.id} successful`,
      );

      return updatedOrder;
    } catch (err) {
      this.logger.log(`Updated for existing order ${where.id} failed`);

      throw new HttpException(err.message, HttpStatus.CONFLICT);
    }
  }
}
