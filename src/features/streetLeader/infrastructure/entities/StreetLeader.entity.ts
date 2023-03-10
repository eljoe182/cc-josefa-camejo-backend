import { BaseEntity, Column, CreateDateColumn, Entity, ObjectID, ObjectIdColumn, UpdateDateColumn } from 'typeorm';

@Entity('street_leaders')
export class StreetLeader extends BaseEntity {
  @ObjectIdColumn({
    name: '_id',
  })
  id!: ObjectID;

  @Column({
    name: 'houseNumber',
    type: 'string',
    nullable: false,
    unique: true,
  })
  houseNumber!: string;

  @Column({
    name: 'documentId',
    type: 'number',
    nullable: false,
    unique: true,
  })
  documentId!: number;

  @Column({
    name: 'name',
    type: 'string',
    nullable: false,
  })
  name!: string;

  @Column({
    name: 'phoneNumber',
    type: 'string',
  })
  phoneNumber!: string;

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
