import { BaseEntity, Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity('sectors')
export class Sector extends BaseEntity {
  @ObjectIdColumn({
    name: '_id',
  })
  id!: ObjectID;

  @Column({
    name: 'state',
    type: 'string',
  })
  state!: string;

  @Column({
    name: 'municipality',
    type: 'string',
  })
  municipality!: string;

  @Column({
    name: 'parish',
    type: 'string',
  })
  parish!: string;

  @Column({
    name: 'street',
    type: 'string',
  })
  street!: string;
}
