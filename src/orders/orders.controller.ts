import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
} from '@nestjs/common';
import { OrdersService } from './orders.service';
import { Order } from '@prisma/client';
import { UpdateOrderDto } from './order.interface';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get()
  public async orders(): Promise<Array<Order>> {
    try {
      const orders = await this.ordersService.orders({});
      return orders;
    } catch (err) {
      if (err) {
        throw new HttpException('Not found', HttpStatus.NOT_FOUND);
      }
      throw new HttpException('Generic', HttpStatus.BAD_GATEWAY);
    }
  }

  @Patch(':id')
  public async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() order: UpdateOrderDto,
  ): Promise<Order> {
    try {
      return await this.ordersService.updateOrder({
        where: { id },
        data: order,
      });
    } catch (err) {
      if (err) {
        throw new HttpException('Not found', HttpStatus.NOT_FOUND);
      }
      throw new HttpException('Generic', HttpStatus.BAD_GATEWAY);
    }
  }
}
