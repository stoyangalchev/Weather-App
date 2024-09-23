import { memo, useContext, useEffect, useState } from 'react';
import { GoogleMap } from '@react-google-maps/api';
import { WeatherContext } from '../../context/WeatherContextProvider';

function Map({ className }) {
  const { location, searchWeatherByLatLng } = useContext(WeatherContext);
  const [center, setCenter] = useState({ lat: 0, lng: 0 });

  useEffect(() => {

    if (location && typeof location.lat === 'number' && typeof location.lon === 'number') {
      setCenter({ lat: location.lat, lng: location.lon });
    } else {
      console.error('Invalid location coordinates:', location);
    }
  }, [location]);

  const handleClick = (n) => {
    n.preventDefault()
    try {
      const lat = n.latLng.lat();
      const lng = n.latLng.lng();
      console.log("lat")
      console.log(className)
      if (typeof lat === 'number' && typeof lng === 'number') {
        searchWeatherByLatLng({ lat, lng });

      } else {
        console.error('Invalid coordinates:', { lat, lng });
      }
    } catch (error) {
      console.error('Error handling click event:', error);
    }
  };

  return (
    <GoogleMap
      mapContainerClassName={className}
      center={center}
      zoom={10}
      onClick={handleClick}
     
    />
  );
}

export default memo(Map);