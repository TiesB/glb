import { Collection, OneToMany, PrimaryKey, Property } from '@mikro-orm/core';
import { v4 } from 'uuid';
import { Flight } from '../flight/flight';

export class Pilot {
  @PrimaryKey()
  uuid = v4();

  @Property({ length: 255 })
  firstName: string;

  @Property({ length: 255 })
  lastName: string;

  @OneToMany(() => Flight, (flight) => flight.pilot)
  flights: Collection<Flight>;

  get fullname() {
    return this.firstName + this.lastName;
  }
}
