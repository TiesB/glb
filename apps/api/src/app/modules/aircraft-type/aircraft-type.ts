import { Collection, OneToMany, PrimaryKey, Property } from '@mikro-orm/core';
import { v4 } from 'uuid';
import { Aircraft } from '../aircraft/aircraft';

export class AircraftType {
  @PrimaryKey()
  uuid = v4();

  @Property({ length: 255, nullable: false })
  name!: string;

  @Property()
  seats!: number;

  @OneToMany(() => Aircraft, (aircraft) => aircraft.type)
  aircraft: Collection<Aircraft>;
}
