import { BaseEntity, Column, Entity, ObjectIdColumn, CreateDateColumn, UpdateDateColumn, ObjectID } from 'typeorm';

@Entity('paid_information')
export class PaidInfo extends BaseEntity {
  @ObjectIdColumn({
    name: '_id',
  })
  id!: ObjectID;

  @Column({
    name: 'ownerName',
    type: 'string',
    nullable: false,
  })
  ownerName!: string;

  @Column({
    name: 'documentId',
    type: 'string',
    nullable: false,
  })
  documentId!: string;

  @Column({
    name: 'accountType',
    type: 'string',
    nullable: false,
  })
  accountType!: string;

  @Column({
    name: 'bankId',
    type: 'string',
    nullable: false,
  })
  bankId!: string;
  
  @Column({
    name: 'bankName',
    type: 'string',
    nullable: false,
  })
  bankName!: string;

  @Column({
    name: 'accountNumber',
    type: 'string',
  })
  accountNumber!: string;

  @Column({
    name: 'phoneNumber',
    type: 'string',
  })
  phoneNumber!: string;

  @Column({
    name: 'active',
    type: 'boolean',
    default: () => false,
  })
  active!: boolean;

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
