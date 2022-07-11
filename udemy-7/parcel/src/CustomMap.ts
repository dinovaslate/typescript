import { Location } from './user';
import { location } from './interface';
export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(query: string, zoom: number, center: location<number>) {
    this.googleMap = new google.maps.Map(document.querySelector(query), {
      zoom,
      center,
    });
  }

  addMarker(Things: Location): CustomMap {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: Things.getLocation(),
      title: Things.name,
      label: {
        text: Things.name,
        color: 'white',
        fontSize: '14px',
      },
    });

    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: Things.getMarkerContent(),
      });

      infoWindow.open(this.googleMap, marker);
    });

    return this;
  }
}
