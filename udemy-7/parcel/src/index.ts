import { CustomMap } from './CustomMap';
import { Company } from './Company';
import { User } from './User';
import { Carlot } from './Carlot';
import faker from 'faker';
const user: User = new User(
  faker.name.firstName(),
  'Hello World',
  {
    lng: faker.address.longitude(12),
    lat: faker.address.latitude(12),
  },
  false
);
const carLot: Carlot = new Carlot(
  `${faker.address.cityName()} car park`,
  'Hello World',
  {
    lng: faker.address.longitude(12),
    lat: faker.address.latitude(12),
  },
  13
);

const company: Company = new Company(
  faker.company.companyName(),
  'Hello World',
  faker.company.catchPhrase(),
  {
    lng: faker.address.longitude(12),
    lat: faker.address.latitude(12),
  },
  'Perseroan Terbatas'
);

const customMap = new CustomMap('#map', 1, { lat: 0, lng: 0 });
customMap.addMarker(user).addMarker(company).addMarker(carLot);
