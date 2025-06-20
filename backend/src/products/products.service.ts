import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from 'src/category/entities/category.entity';
import { Brand } from 'src/brand/entities/brand.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
    @InjectRepository(Brand)
    private readonly brandRepository: Repository<Brand>,
  ) {}
  async create(createProductDto: CreateProductDto) {
    const product = this.productRepository.create(createProductDto);
    const existCategory = await this.categoryRepository.findOne({ where: { id: createProductDto.categoryId } });
    if (!existCategory) throw new NotFoundException('Cate không tồn tại');
    product.category = existCategory;
    const existBrand = await this.brandRepository.findOne({ where: { id: createProductDto.brandId } });
    if (!existBrand) throw new NotFoundException('brand không tồn tại');
    product.brand = existBrand;
    const saveProduct = this.productRepository.save(product);
    return saveProduct;
  }

  async findAll() {
    return await this.productRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
