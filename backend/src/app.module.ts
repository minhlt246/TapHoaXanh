import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ProductsModule } from './products/products.module';
import { CategoriesModule } from './category/categories.module';
import { DatabaseModule } from './database/database.module';

@Module({
imports: [ConfigModule.forRoot({isGlobal: true}), ProductsModule, CategoriesModule,DatabaseModule ],
controllers: [],
providers: [],
})
export class AppModule {}
