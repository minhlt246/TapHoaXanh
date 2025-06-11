import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { Category } from 'src/category/entities/category.entity';
import { ConflictException } from '@nestjs/common';


@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
   private readonly productRepo: Repository<Product>,
   @InjectRepository(Category)
   private readonly categoryRepo: Repository<Category>,
  ) {}

  async create(dto: CreateProductDto): Promise<Product> {
  const category = await this.categoryRepo.findOne({ where: { id: dto.categoryId } });
  if (!category)
    throw new NotFoundException(`Category id ${dto.categoryId} không tồn tại`);

  const existed = await this.productRepo.findOne({
  where: { barcode: dto.barcode },
});
if (existed) {
  throw new ConflictException(`Barcode ${dto.barcode} đã tồn tại`);
}

const product = this.productRepo.create({ ...dto, category });
return this.productRepo.save(product);

}



  async findAll(): Promise<Product[]> {
    return this.productRepo.find();
  }

  async findOne(id: number): Promise<Product> {
    const product = await this.productRepo.findOne({ where: { id } });
    if (!product) {
      throw new NotFoundException(`Product with id ${id} not found`);
    }
    return product;
  }

  async update(id: number, updateProductDto: UpdateProductDto): Promise<Product> {
    const product = await this.findOne(id);
    const updated = Object.assign(product, updateProductDto);
    return this.productRepo.save(updated);
  }

  async remove(id: number): Promise<void> {
    const result = await this.productRepo.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Product with id ${id} not found`);
    }
  }
}
