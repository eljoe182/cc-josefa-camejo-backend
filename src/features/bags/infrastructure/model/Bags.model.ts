import { BaseEntity, Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

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

  @Column({
    name: 'createdAt',
    type: 'date',
    default: Date.now(),
  })
  createdAt!: Date;

  @Column({
    name: 'updatedAt',
    type: 'date',
    default: Date.now(),
  })
  updatedAt!: Date;
}
