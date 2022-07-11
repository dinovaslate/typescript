import { location } from './interface';
export class Location {
  constructor(
    public name: string,
    private location: location<string>,
    protected description: string,
    protected type: string
  ) {}
  getLocation(): location<number> {
    return {
      lng: parseFloat(this.location.lng),
      lat: parseFloat(this.location.lat),
    };
  }
  getMarkerContent(): string {
    return `
        <h3>${this.type}: ${this.name}</h3>
        <p>${this.description}</p>
        `;
  }
}

export class User extends Location {
  private static type = 'People';
  constructor(
    name: string,
    description: string,
    location: location<string>,
    public isMarried: boolean
  ) {
    super(name, location, description, User.type);
  }
}
