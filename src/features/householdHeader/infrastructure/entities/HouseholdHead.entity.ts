import { BaseEntity, Column, Entity, ObjectID, ObjectIdColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('household_heads')
export class HouseholdHead extends BaseEntity {
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
    name: 'name',
    type: 'string',
    nullable: false,
  })
  name!: string;

  @Column({
    name: 'documentId',
    type: 'number',
    nullable: false,
    unique: true,
  })
  documentId!: number;

  @Column({
    name: 'membersNumber',
    type: 'number',
    default: 1,
  })
  membersNumber!: number;

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
