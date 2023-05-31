import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryModule } from './category/category.module';
import { ManufacturerModule } from './manufacturer/manufacturer.module';
import { ReviewModule } from './review/review.module';
import { CartModule } from './cart/cart.module';
import { ControllerController } from './controller/controller.controller';
import { OrderModule } from './order/order.module';
import { ItemOrderModule } from './item-order/item-order.module';
import { ItemCartModule } from './item-cart/item-cart.module';

@Module({
  imports: [    TypeOrmModule.forRoot({
    type: "mysql",
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'nestgl32023',
    autoLoadEntities: true,
    synchronize: true,
    logging: true
  }), CategoryModule, ManufacturerModule, ReviewModule, CartModule, OrderModule, ItemOrderModule, ItemCartModule],
  controllers: [AppController, ControllerController],
  providers: [AppService],
})
export class AppModule {}
