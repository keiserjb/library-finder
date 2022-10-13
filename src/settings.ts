// Settings for the map goes inside this file
import mapStyles from './mapStyles';

export const containerStyle = {
  width: '100%',
  height: '100vh'
};

// Center on Kalmar
/* export const center = {
  lat: 56.68,
  lng: 16.33
}; */

// Center on Muncie
export const center = {
  lat: 40.19,
  lng: -85.40
}

// Disable default UI
export const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true
};
