import { ManyToOne, PrimaryKey } from '@mikro-orm/core';
import { v4 } from 'uuid';
import { Aircraft } from '../aircraft/aircraft';

import { Pilot } from '../pilot/pilot';

export class Flight {
  @PrimaryKey()
  uuid = v4();

  @ManyToOne(() => Pilot)
  pilot: Pilot;

  @ManyToOne(() => Aircraft)
  aircraft: Aircraft;
}
