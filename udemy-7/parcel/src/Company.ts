import { Location } from './user';
import { location } from './interface';

export class Company extends Location {
  private static type = 'Company';
  constructor(
    name: string,
    description: string,
    public catchPhrase: string,
    location: location<string>,
    public specificType: string
  ) {
    super(name, location, description, Company.type);
  }
  getMarkerContent(): string {
    return `
        <h3>${this.type} : ${this.name}</h3>
        <small>${this.specificType}</small>
        <p>${this.catchPhrase}</p><br />

        <p>${this.description}</p>
        `;
  }
}
