import { BaseEntity, ObjectID, Column, ObjectIdColumn, CreateDateColumn, UpdateDateColumn, Entity } from 'typeorm';

@Entity('users')
export class User extends BaseEntity {
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
    name: 'email',
    type: 'string',
  })
  email!: string;

  @Column({
    name: 'password',
    type: 'string',
  })
  password!: string;

  @Column({
    name: 'username',
    type: 'string',
    unique: true,
  })
  username!: string;
  
  @Column({
    name: 'active',
    type: 'boolean',
  })
  active!: boolean;

  @CreateDateColumn({
    name: 'createdAt',
    type: 'date',
    insert: true,
    update: false,
    default: () => new Date(),
  })
  createdAt!: Date;

  @UpdateDateColumn({
    name: 'updatedAt',
    type: 'date',
    insert: true,
    update: true,
    default: () => new Date(),
  })
  updatedAt!: Date;
}
