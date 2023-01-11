import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity()
export class Datum {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  name: string;

  @Column()
  quote: string;
}
