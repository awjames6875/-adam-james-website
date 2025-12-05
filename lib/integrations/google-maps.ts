/**
 * Google Maps Integration
 * Handles Google Maps API interactions for location pages
 */

import { config } from '@/lib/config';

export interface LocationData {
  name: string;
  address: string;
  lat: number;
  lng: number;
  placeId?: string;
  phone?: string;
  website?: string;
}

export interface MapOptions {
  zoom?: number;
  center?: { lat: number; lng: number };
  mapTypeId?: string;
  styles?: google.maps.MapTypeStyle[];
  disableDefaultUI?: boolean;
  scrollwheel?: boolean;
  draggable?: boolean;
  clickableIcons?: boolean;
}

// Tulsa area locations for Adam James business
export const tulsaLocations: LocationData[] = [
  {
    name: 'Downtown Tulsa',
    address: 'Downtown Tulsa, OK',
    lat: 36.1540,
    lng: -95.9928,
  },
  {
    name: 'Midtown Tulsa',
    address: 'Midtown Tulsa, OK',
    lat: 36.1314,
    lng: -95.9372,
  },
  {
    name: 'South Tulsa',
    address: 'South Tulsa, OK',
    lat: 36.0766,
    lng: -95.9700,
  },
  {
    name: 'East Tulsa',
    address: 'East Tulsa, OK',
    lat: 36.1214,
    lng: -95.9342,
  },
  {
    name: 'West Tulsa',
    address: 'West Tulsa, OK',
    lat: 36.1398,
    lng: -96.0297,
  },
  {
    name: 'North Tulsa',
    address: 'North Tulsa, OK',
    lat: 36.1898,
    lng: -95.9743,
  },
  {
    name: 'Broken Arrow',
    address: 'Broken Arrow, OK',
    lat: 36.0526,
    lng: -95.7969,
  },
  {
    name: 'Jenks',
    address: 'Jenks, OK',
    lat: 36.0229,
    lng: -95.9683,
  },
  {
    name: 'Bixby',
    address: 'Bixby, OK',
    lat: 35.9420,
    lng: -95.8833,
  },
  {
    name: 'Owasso',
    address: 'Owasso, OK',
    lat: 36.2695,
    lng: -95.8547,
  },
  {
    name: 'Sand Springs',
    address: 'Sand Springs, OK',
    lat: 36.1398,
    lng: -96.1086,
  },
  {
    name: 'Sapulpa',
    address: 'Sapulpa, OK',
    lat: 35.9951,
    lng: -96.1136,
  },
  {
    name: 'Glenpool',
    address: 'Glenpool, OK',
    lat: 35.9551,
    lng: -96.0058,
  },
  {
    name: 'Claremore',
    address: 'Claremore, OK',
    lat: 36.3129,
    lng: -95.6163,
  },
  {
    name: 'Catoosa',
    address: 'Catoosa, OK',
    lat: 36.1929,
    lng: -95.7422,
  },
  {
    name: 'Collinsville',
    address: 'Collinsville, OK',
    lat: 36.3681,
    lng: -95.8383,
  },
  {
    name: 'Skiatook',
    address: 'Skiatook, OK',
    lat: 36.3695,
    lng: -96.0086,
  },
  {
    name: 'Coweta',
    address: 'Coweta, OK',
    lat: 35.9514,
    lng: -95.6497,
  },
  {
    name: 'Wagoner',
    address: 'Wagoner, OK',
    lat: 35.9596,
    lng: -95.3697,
  },
  {
    name: 'Verdigris',
    address: 'Verdigris, OK',
    lat: 36.2181,
    lng: -95.6875,
  },
];

// Custom map styles for Adam James branding
export const customMapStyles: google.maps.MapTypeStyle[] = [
  {
    featureType: 'all',
    elementType: 'geometry.fill',
    stylers: [{ weight: '2.00' }],
  },
  {
    featureType: 'all',
    elementType: 'geometry.stroke',
    stylers: [{ color: '#9c9c9c' }],
  },
  {
    featureType: 'all',
    elementType: 'labels.text',
    stylers: [{ visibility: 'on' }],
  },
  {
    featureType: 'landscape',
    elementType: 'all',
    stylers: [{ color: '#f2f2f2' }],
  },
  {
    featureType: 'landscape',
    elementType: 'geometry.fill',
    stylers: [{ color: '#ffffff' }],
  },
  {
    featureType: 'landscape.man_made',
    elementType: 'geometry.fill',
    stylers: [{ color: '#ffffff' }],
  },
  {
    featureType: 'poi',
    elementType: 'all',
    stylers: [{ visibility: 'off' }],
  },
  {
    featureType: 'road',
    elementType: 'all',
    stylers: [{ saturation: -100 }, { lightness: 45 }],
  },
  {
    featureType: 'road',
    elementType: 'geometry.fill',
    stylers: [{ color: '#eeeeee' }],
  },
  {
    featureType: 'road',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#7b7b7b' }],
  },
  {
    featureType: 'road',
    elementType: 'labels.text.stroke',
    stylers: [{ color: '#ffffff' }],
  },
  {
    featureType: 'road.highway',
    elementType: 'all',
    stylers: [{ visibility: 'simplified' }],
  },
  {
    featureType: 'road.arterial',
    elementType: 'labels.icon',
    stylers: [{ visibility: 'off' }],
  },
  {
    featureType: 'transit',
    elementType: 'all',
    stylers: [{ visibility: 'off' }],
  },
  {
    featureType: 'water',
    elementType: 'all',
    stylers: [{ color: '#46bcec' }, { visibility: 'on' }],
  },
  {
    featureType: 'water',
    elementType: 'geometry.fill',
    stylers: [{ color: '#c8d7d4' }],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#070707' }],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.stroke',
    stylers: [{ color: '#ffffff' }],
  },
];

// Load Google Maps API
export function loadGoogleMapsAPI(): Promise<void> {
  return new Promise((resolve, reject) => {
    if (typeof google !== 'undefined' && google.maps) {
      resolve();
      return;
    }

    if (!config.external.googleMapsApiKey) {
      reject(new Error('Google Maps API key not configured'));
      return;
    }

    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${config.external.googleMapsApiKey}&libraries=places,geometry`;
    script.async = true;
    script.defer = true;

    script.onload = () => resolve();
    script.onerror = () => reject(new Error('Failed to load Google Maps API'));

    document.head.appendChild(script);
  });
}

// Create a map instance
export async function createMap(
  container: HTMLElement,
  options: MapOptions = {}
): Promise<google.maps.Map> {
  await loadGoogleMapsAPI();

  const defaultOptions: google.maps.MapOptions = {
    zoom: options.zoom || 12,
    center: options.center || { lat: 36.1540, lng: -95.9928 }, // Downtown Tulsa
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    styles: customMapStyles,
    disableDefaultUI: options.disableDefaultUI ?? false,
    scrollwheel: options.scrollwheel ?? true,
    draggable: options.draggable ?? true,
    clickableIcons: options.clickableIcons ?? false,
    zoomControl: true,
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false,
    rotateControl: false,
    fullscreenControl: true,
  };

  return new google.maps.Map(container, defaultOptions);
}

// Add a marker to the map
export function addMarker(
  map: google.maps.Map,
  location: LocationData,
  options: {
    icon?: string | google.maps.Icon | google.maps.Symbol;
    title?: string;
    clickable?: boolean;
    onClick?: () => void;
  } = {}
): google.maps.Marker {
  const marker = new google.maps.Marker({
    position: { lat: location.lat, lng: location.lng },
    map,
    title: options.title || location.name,
    icon: options.icon,
    clickable: options.clickable ?? true,
  });

  if (options.onClick) {
    marker.addListener('click', options.onClick);
  }

  return marker;
}

// Add an info window to a marker
export function addInfoWindow(
  marker: google.maps.Marker,
  content: string | HTMLElement
): google.maps.InfoWindow {
  const infoWindow = new google.maps.InfoWindow({
    content,
  });

  marker.addListener('click', () => {
    infoWindow.open(marker.getMap(), marker);
  });

  return infoWindow;
}

// Create a location-specific map
export async function createLocationMap(
  container: HTMLElement,
  locationName: string
): Promise<{ map: google.maps.Map; marker: google.maps.Marker } | null> {
  const location = tulsaLocations.find(
    loc => loc.name.toLowerCase() === locationName.toLowerCase()
  );

  if (!location) {
    console.error(`Location not found: ${locationName}`);
    return null;
  }

  const map = await createMap(container, {
    zoom: 14,
    center: { lat: location.lat, lng: location.lng },
  });

  const marker = addMarker(map, location, {
    title: `Adam James - ${location.name}`,
  });

  // Add info window with business information
  const infoContent = `
    <div style="padding: 10px; font-family: Arial, sans-serif;">
      <h3 style="margin: 0 0 10px 0; color: #1a365d;">Adam James</h3>
      <p style="margin: 0 0 5px 0;"><strong>${location.name}</strong></p>
      <p style="margin: 0 0 5px 0;">${location.address}</p>
      ${location.phone ? `<p style="margin: 0 0 5px 0;"><a href="tel:${location.phone}">${location.phone}</a></p>` : ''}
      <p style="margin: 5px 0 0 0;"><em>Serving the ${location.name} area</em></p>
    </div>
  `;

  addInfoWindow(marker, infoContent);

  return { map, marker };
}

// Get directions between two points
export function getDirections(
  origin: string | google.maps.LatLng,
  destination: string | google.maps.LatLng
): Promise<google.maps.DirectionsResult> {
  return new Promise((resolve, reject) => {
    const directionsService = new google.maps.DirectionsService();

    directionsService.route(
      {
        origin,
        destination,
        travelMode: google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === google.maps.DirectionsStatus.OK && result) {
          resolve(result);
        } else {
          reject(new Error(`Directions request failed: ${status}`));
        }
      }
    );
  });
}

// Display directions on a map
export function displayDirections(
  map: google.maps.Map,
  directionsResult: google.maps.DirectionsResult
): google.maps.DirectionsRenderer {
  const directionsRenderer = new google.maps.DirectionsRenderer({
    suppressMarkers: false,
    polylineOptions: {
      strokeColor: '#1a365d',
      strokeWeight: 4,
      strokeOpacity: 0.8,
    },
  });

  directionsRenderer.setMap(map);
  directionsRenderer.setDirections(directionsResult);

  return directionsRenderer;
}

// Geocode an address to get coordinates
export function geocodeAddress(address: string): Promise<google.maps.LatLng> {
  return new Promise((resolve, reject) => {
    const geocoder = new google.maps.Geocoder();

    geocoder.geocode({ address }, (results, status) => {
      if (status === google.maps.GeocoderStatus.OK && results && results[0]) {
        resolve(results[0].geometry.location);
      } else {
        reject(new Error(`Geocoding failed: ${status}`));
      }
    });
  });
}

// Calculate distance between two points
export function calculateDistance(
  point1: google.maps.LatLng,
  point2: google.maps.LatLng
): number {
  return google.maps.geometry.spherical.computeDistanceBetween(point1, point2);
}

// Find the nearest location to a given point
export function findNearestLocation(
  point: google.maps.LatLng
): LocationData | null {
  let nearestLocation: LocationData | null = null;
  let shortestDistance = Infinity;

  for (const location of tulsaLocations) {
    const locationPoint = new google.maps.LatLng(location.lat, location.lng);
    const distance = calculateDistance(point, locationPoint);

    if (distance < shortestDistance) {
      shortestDistance = distance;
      nearestLocation = location;
    }
  }

  return nearestLocation;
}

export default {
  loadGoogleMapsAPI,
  createMap,
  addMarker,
  addInfoWindow,
  createLocationMap,
  getDirections,
  displayDirections,
  geocodeAddress,
  calculateDistance,
  findNearestLocation,
  tulsaLocations,
  customMapStyles,
};