export async function getCurrentLocation(): Promise<GeolocationPosition> {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error('La géolocalisation n\'est pas prise en charge par votre navigateur.'));
      return;
    }

    navigator.geolocation.getCurrentPosition(resolve, reject, {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    });
  });
}

export function createWhatsAppLink(phone: string, service: string, location: GeolocationCoordinates): string {
  const message = encodeURIComponent(
    `Bonjour, je suis intéressé par vos ${service}.\n` +
    `Ma localisation :\n` +
    `https://www.google.com/maps?q=${location.latitude},${location.longitude}`
  );
  return `https://wa.me/${phone}?text=${message}`;
}