import { Category } from "src/category/entities/category.entity";
import { AbstractEntity } from "src/database/database.entity";
import { ProductImage } from "src/product-images/entities/product-image.entity";
import { ProductVariant } from "src/product-variant/entities/product-variant.entity";
import { Column, Entity, ManyToOne, OneToMany } from "typeorm";

@Entity('product')
export class Product extends AbstractEntity<Product> {
    @Column()
    name:string;

    @Column()
    price:number;

    @Column()
    discount:number;

    @Column()
    images:string;

    @Column()
    slug:string;

    @Column({ unique: true })
    barcode:string;

    @Column()
    expiry_date:Date;

    @Column()
    origin:string;

    @Column()
    weight_unit:string;

    @Column({nullable: true})
    description:string;

    @Column()
    quantity:number;

    @ManyToOne(() => Category,(category) => category.product)
    category: Category;

    @OneToMany(() => ProductVariant, (variant) => variant.product)
    variants: ProductVariant[];

    @OneToMany(() => ProductImage, (image) => image.product)
    image: ProductImage;





}
