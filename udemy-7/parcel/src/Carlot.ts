import { Location } from './user';
import { location } from './interface';
export class Carlot extends Location {
  private static type = 'Car Parking';
  constructor(
    name: string,
    description: string,
    location: location<string>,
    public Cars: number
  ) {
    super(name, location, description, Carlot.type);
  }
}
