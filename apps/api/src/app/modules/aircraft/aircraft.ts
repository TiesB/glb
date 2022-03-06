import { Collection, ManyToOne, OneToMany, PrimaryKey } from '@mikro-orm/core';
import { v4 } from 'uuid';
import { AircraftType } from '../aircraft-type/aircraft-type';
import { Flight } from '../flight/flight';

export class Aircraft {
  @PrimaryKey()
  uuid = v4();

  @ManyToOne(() => AircraftType)
  type: AircraftType;

  @OneToMany(() => Flight, (flight) => flight.aircraft)
  flights: Collection<Flight>;
}
