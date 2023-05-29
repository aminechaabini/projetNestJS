import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryModule } from './category/category.module';
import { ManufacturerModule } from './manufacturer/manufacturer.module';

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
  }), CategoryModule, ManufacturerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
