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
];\n\n// Custom map styles for Adam James branding\nexport const customMapStyles: google.maps.MapTypeStyle[] = [\n  {\n    featureType: 'all',\n    elementType: 'geometry.fill',\n    stylers: [{ weight: '2.00' }],\n  },\n  {\n    featureType: 'all',\n    elementType: 'geometry.stroke',\n    stylers: [{ color: '#9c9c9c' }],\n  },\n  {\n    featureType: 'all',\n    elementType: 'labels.text',\n    stylers: [{ visibility: 'on' }],\n  },\n  {\n    featureType: 'landscape',\n    elementType: 'all',\n    stylers: [{ color: '#f2f2f2' }],\n  },\n  {\n    featureType: 'landscape',\n    elementType: 'geometry.fill',\n    stylers: [{ color: '#ffffff' }],\n  },\n  {\n    featureType: 'landscape.man_made',\n    elementType: 'geometry.fill',\n    stylers: [{ color: '#ffffff' }],\n  },\n  {\n    featureType: 'poi',\n    elementType: 'all',\n    stylers: [{ visibility: 'off' }],\n  },\n  {\n    featureType: 'road',\n    elementType: 'all',\n    stylers: [{ saturation: -100 }, { lightness: 45 }],\n  },\n  {\n    featureType: 'road',\n    elementType: 'geometry.fill',\n    stylers: [{ color: '#eeeeee' }],\n  },\n  {\n    featureType: 'road',\n    elementType: 'labels.text.fill',\n    stylers: [{ color: '#7b7b7b' }],\n  },\n  {\n    featureType: 'road',\n    elementType: 'labels.text.stroke',\n    stylers: [{ color: '#ffffff' }],\n  },\n  {\n    featureType: 'road.highway',\n    elementType: 'all',\n    stylers: [{ visibility: 'simplified' }],\n  },\n  {\n    featureType: 'road.arterial',\n    elementType: 'labels.icon',\n    stylers: [{ visibility: 'off' }],\n  },\n  {\n    featureType: 'transit',\n    elementType: 'all',\n    stylers: [{ visibility: 'off' }],\n  },\n  {\n    featureType: 'water',\n    elementType: 'all',\n    stylers: [{ color: '#46bcec' }, { visibility: 'on' }],\n  },\n  {\n    featureType: 'water',\n    elementType: 'geometry.fill',\n    stylers: [{ color: '#c8d7d4' }],\n  },\n  {\n    featureType: 'water',\n    elementType: 'labels.text.fill',\n    stylers: [{ color: '#070707' }],\n  },\n  {\n    featureType: 'water',\n    elementType: 'labels.text.stroke',\n    stylers: [{ color: '#ffffff' }],\n  },\n];\n\n// Load Google Maps API\nexport function loadGoogleMapsAPI(): Promise<void> {\n  return new Promise((resolve, reject) => {\n    if (typeof google !== 'undefined' && google.maps) {\n      resolve();\n      return;\n    }\n\n    if (!config.external.googleMapsApiKey) {\n      reject(new Error('Google Maps API key not configured'));\n      return;\n    }\n\n    const script = document.createElement('script');\n    script.src = `https://maps.googleapis.com/maps/api/js?key=${config.external.googleMapsApiKey}&libraries=places,geometry`;\n    script.async = true;\n    script.defer = true;\n    \n    script.onload = () => resolve();\n    script.onerror = () => reject(new Error('Failed to load Google Maps API'));\n    \n    document.head.appendChild(script);\n  });\n}\n\n// Create a map instance\nexport async function createMap(\n  container: HTMLElement,\n  options: MapOptions = {}\n): Promise<google.maps.Map> {\n  await loadGoogleMapsAPI();\n\n  const defaultOptions: google.maps.MapOptions = {\n    zoom: options.zoom || 12,\n    center: options.center || { lat: 36.1540, lng: -95.9928 }, // Downtown Tulsa\n    mapTypeId: google.maps.MapTypeId.ROADMAP,\n    styles: customMapStyles,\n    disableDefaultUI: options.disableDefaultUI ?? false,\n    scrollwheel: options.scrollwheel ?? true,\n    draggable: options.draggable ?? true,\n    clickableIcons: options.clickableIcons ?? false,\n    zoomControl: true,\n    mapTypeControl: false,\n    scaleControl: false,\n    streetViewControl: false,\n    rotateControl: false,\n    fullscreenControl: true,\n  };\n\n  return new google.maps.Map(container, defaultOptions);\n}\n\n// Add a marker to the map\nexport function addMarker(\n  map: google.maps.Map,\n  location: LocationData,\n  options: {\n    icon?: string | google.maps.Icon | google.maps.Symbol;\n    title?: string;\n    clickable?: boolean;\n    onClick?: () => void;\n  } = {}\n): google.maps.Marker {\n  const marker = new google.maps.Marker({\n    position: { lat: location.lat, lng: location.lng },\n    map,\n    title: options.title || location.name,\n    icon: options.icon,\n    clickable: options.clickable ?? true,\n  });\n\n  if (options.onClick) {\n    marker.addListener('click', options.onClick);\n  }\n\n  return marker;\n}\n\n// Add an info window to a marker\nexport function addInfoWindow(\n  marker: google.maps.Marker,\n  content: string | HTMLElement\n): google.maps.InfoWindow {\n  const infoWindow = new google.maps.InfoWindow({\n    content,\n  });\n\n  marker.addListener('click', () => {\n    infoWindow.open(marker.getMap(), marker);\n  });\n\n  return infoWindow;\n}\n\n// Create a location-specific map\nexport async function createLocationMap(\n  container: HTMLElement,\n  locationName: string\n): Promise<{ map: google.maps.Map; marker: google.maps.Marker } | null> {\n  const location = tulsaLocations.find(\n    loc => loc.name.toLowerCase() === locationName.toLowerCase()\n  );\n\n  if (!location) {\n    console.error(`Location not found: ${locationName}`);\n    return null;\n  }\n\n  const map = await createMap(container, {\n    zoom: 14,\n    center: { lat: location.lat, lng: location.lng },\n  });\n\n  const marker = addMarker(map, location, {\n    title: `Adam James - ${location.name}`,\n  });\n\n  // Add info window with business information\n  const infoContent = `\n    <div style=\"padding: 10px; font-family: Arial, sans-serif;\">\n      <h3 style=\"margin: 0 0 10px 0; color: #1a365d;\">Adam James</h3>\n      <p style=\"margin: 0 0 5px 0;\"><strong>${location.name}</strong></p>\n      <p style=\"margin: 0 0 5px 0;\">${location.address}</p>\n      ${location.phone ? `<p style=\"margin: 0 0 5px 0;\"><a href=\"tel:${location.phone}\">${location.phone}</a></p>` : ''}\n      <p style=\"margin: 5px 0 0 0;\"><em>Serving the ${location.name} area</em></p>\n    </div>\n  `;\n\n  addInfoWindow(marker, infoContent);\n\n  return { map, marker };\n}\n\n// Get directions between two points\nexport function getDirections(\n  origin: string | google.maps.LatLng,\n  destination: string | google.maps.LatLng\n): Promise<google.maps.DirectionsResult> {\n  return new Promise((resolve, reject) => {\n    const directionsService = new google.maps.DirectionsService();\n    \n    directionsService.route(\n      {\n        origin,\n        destination,\n        travelMode: google.maps.TravelMode.DRIVING,\n      },\n      (result, status) => {\n        if (status === google.maps.DirectionsStatus.OK && result) {\n          resolve(result);\n        } else {\n          reject(new Error(`Directions request failed: ${status}`));\n        }\n      }\n    );\n  });\n}\n\n// Display directions on a map\nexport function displayDirections(\n  map: google.maps.Map,\n  directionsResult: google.maps.DirectionsResult\n): google.maps.DirectionsRenderer {\n  const directionsRenderer = new google.maps.DirectionsRenderer({\n    suppressMarkers: false,\n    polylineOptions: {\n      strokeColor: '#1a365d',\n      strokeWeight: 4,\n      strokeOpacity: 0.8,\n    },\n  });\n\n  directionsRenderer.setMap(map);\n  directionsRenderer.setDirections(directionsResult);\n\n  return directionsRenderer;\n}\n\n// Geocode an address to get coordinates\nexport function geocodeAddress(address: string): Promise<google.maps.LatLng> {\n  return new Promise((resolve, reject) => {\n    const geocoder = new google.maps.Geocoder();\n    \n    geocoder.geocode({ address }, (results, status) => {\n      if (status === google.maps.GeocoderStatus.OK && results && results[0]) {\n        resolve(results[0].geometry.location);\n      } else {\n        reject(new Error(`Geocoding failed: ${status}`));\n      }\n    });\n  });\n}\n\n// Calculate distance between two points\nexport function calculateDistance(\n  point1: google.maps.LatLng,\n  point2: google.maps.LatLng\n): number {\n  return google.maps.geometry.spherical.computeDistanceBetween(point1, point2);\n}\n\n// Find the nearest location to a given point\nexport function findNearestLocation(\n  point: google.maps.LatLng\n): LocationData | null {\n  let nearestLocation: LocationData | null = null;\n  let shortestDistance = Infinity;\n\n  for (const location of tulsaLocations) {\n    const locationPoint = new google.maps.LatLng(location.lat, location.lng);\n    const distance = calculateDistance(point, locationPoint);\n    \n    if (distance < shortestDistance) {\n      shortestDistance = distance;\n      nearestLocation = location;\n    }\n  }\n\n  return nearestLocation;\n}\n\nexport default {\n  loadGoogleMapsAPI,\n  createMap,\n  addMarker,\n  addInfoWindow,\n  createLocationMap,\n  getDirections,\n  displayDirections,\n  geocodeAddress,\n  calculateDistance,\n  findNearestLocation,\n  tulsaLocations,\n  customMapStyles,\n};"