import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { CategoriesModule } from 'src/category/categories.module';
import { BrandModule } from 'src/brand/brand.module';

@Module({
  imports: [TypeOrmModule.forFeature([Product]), CategoriesModule, BrandModule],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
