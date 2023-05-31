import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryModule } from './category/category.module';
import { ManufacturerModule } from './manufacturer/manufacturer.module';
import { ReviewModule } from './review/review.module';
import { CartModule } from './cart/cart.module';
import { OrderModule } from './order/order.module';
import { ItemOrderModule } from './item-order/item-order.module';
import { ItemCartModule } from './item-cart/item-cart.module';

@Module({
  imports: [    TypeOrmModule.forRoot({
    type: "mysql",
    host: 'localhost',
    port: 3307,
    username: 'root',
    password: '',
    database: 'ecommerce',
    autoLoadEntities: true,
    entities: ["dist/**/*.entity{.ts,.js}"],
    synchronize: true,
    logging: true
  }), CategoryModule, ManufacturerModule, ReviewModule, CartModule, OrderModule, ItemOrderModule, ItemCartModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
