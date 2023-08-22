type GeoLocationLike = {
  latitude?: number | null;
  longitude?: number | null;
}

export function objectHasGeolocation(object?: GeoLocationLike | null) {
  if (!object) return false;

  return !!(object.latitude && object.longitude);
}
