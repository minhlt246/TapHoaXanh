import { CartItem } from 'src/cart_item/entities/cart_item.entity';
import { AbstractEntity } from 'src/database/database.entity';
import { Users } from 'src/users/entities/users.entity';
import { Entity, ManyToOne, OneToMany } from 'typeorm';

@Entity('cart')
export class Cart extends AbstractEntity<Cart> {
  @ManyToOne(() => Users, (users) => users.cart)
  users: Users;

  @OneToMany(() => CartItem, (cartItem) => cartItem.cart)
  cartItem: CartItem[];
}
