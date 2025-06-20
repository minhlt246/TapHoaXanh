import { AbstractEntity } from 'src/database/database.entity';
import { Order } from 'src/order/entities/order.entity';
import { Users } from 'src/users/entities/users.entity';
import { Column, Entity, ManyToOne } from 'typeorm';

@Entity('payment')
export class Payment extends AbstractEntity<Payment> {
  @Column()
  payment_method: string;

  @Column()
  payment_status: string;

  @Column()
  paid_at: Date;
  @ManyToOne(() => Order, (order) => order.payment)
  order: Order;
  @ManyToOne(() => Users, (users) => users.payment)
  users: Users;
}
