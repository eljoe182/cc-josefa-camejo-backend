import { BaseEntity, Column, CreateDateColumn, Entity, ObjectID, ObjectIdColumn, UpdateDateColumn } from 'typeorm';

@Entity('bags')
export class Bag extends BaseEntity {
  @ObjectIdColumn({
    name: '_id',
  })
  id!: ObjectID;

  @Column({
    name: 'name',
    type: 'string',
  })
  name!: string;

  @Column({
    name: 'description',
    type: 'string',
  })
  description!: string;

  @Column({
    name: 'price',
    type: 'float',
  })
  price!: number;

  @CreateDateColumn({
    name: 'createdAt',
    insert: true,
    update: false,
    default: () => new Date(),
  })
  createdAt!: Date;

  @UpdateDateColumn({
    name: 'updatedAt',
    insert: true,
    update: true,
    default: () => new Date(),
  })
  updatedAt!: Date;
}
