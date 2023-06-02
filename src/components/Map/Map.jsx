import  { DirectionsRenderer, GoogleMap, Marker} from '@react-google-maps/api';
import { useCallback, useEffect, useState } from 'react';
import { defaultTheme } from './Theme';
const containerStyle = {
    width: '100%',
    height: '400px'
};

export function Map({ center, getCoords, getAdress, orders}) {
    const [map, setMap] = useState(null);
    const [markers, setMarkers] = useState(orders.length > 0 ? [{ id: 2, ...orders[0].locaton }] : []);
    const [directions, setDirections] = useState(null);
      const [distance, setDistance] = useState(null);
    const originMarker = markers[0];
    const destinationMarker = markers[1];

    const calculateDirections = useCallback(() => {
        const directionsService = new window.google.maps.DirectionsService();

        directionsService.route(
            {
                origin: { lat: originMarker.lat, lng: originMarker.lng },
                destination: { lat: destinationMarker.lat, lng: destinationMarker.lng },
                travelMode: 'DRIVING'
            },
            (result, status) => {
                if (status === 'OK') {
                    setDirections(result);
                } else {
                    console.log('Directions request failed:', status);
                }
            }
        );
    }, [markers]);
        
  const calculateDistance = useCallback (() => {
    const distanceMatrixService = new window.google.maps.DistanceMatrixService();
    distanceMatrixService.getDistanceMatrix(
      {
        origins: [{ lat: originMarker.lat, lng: originMarker.lng }],
        destinations: [{ lat: destinationMarker.lat, lng: destinationMarker.lng }],
        travelMode: 'DRIVING'
      },
      (response, status) => {
        if (status === 'OK') {
          const distanceResult = response.rows[0].elements[0];
          setDistance(distanceResult);
        } else {
          console.log('Distance Matrix request failed:', status);
        }
      }
    );
  }, [markers]);
    
    
      useEffect(() => {
        setMarkers(prev => prev.map(place => place.id === 1 ? place = { id: 1, ...center } : place));
      }, [center]);
    
    useEffect(() => {
        if (markers.length > 1)
                calculateDistance();
    }, [calculateDistance, markers.length]);

    useEffect(() => {
        if (markers.length > 1) calculateDirections();
    }, [calculateDirections, markers.length]);
        
    const getAddressFromLatLng = async (latLng) => {
        try {
            const response = await fetch(
                `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latLng.lat},${latLng.lng}&key=${import.meta.env.VITE_GOOGLE_API_KEY}`
            );
            const data = await response.json();
            if (data.results && data.results.length > 0) {
                getAdress(data.results[0].formatted_address);
              }
        } catch (error) {
            console.log('Error fetching address:', error);
        }
    };

    const getUserLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const userLatLng = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    };
                    getCoords(userLatLng);
                    getAddressFromLatLng(userLatLng)
                    setMarkers(prev => [...prev, { id: 1, ...userLatLng }]);
                },
                (error) => {
                    console.log('Error getting user location:', error);
                }
            );
        } else {
            console.log('Geolocation is not supported by this browser.');
        }
    };

    const onLoad = useCallback(function callback(map) {
        getUserLocation()
    setMap(map)
       
    }, [getUserLocation]);
    const onUnmount = useCallback(function callback() {
       setMap(null)
    }, []);

    const showCoords = (e) => {
        getAddressFromLatLng({ lat: e.latLng.lat(), lng: e.latLng.lng() })
        getCoords({ lat: e.latLng.lat(), lng: e.latLng.lng() })
        setMarkers(prev => prev.map(place => place.id === 1 ? place = { id: 1, lat: e.latLng.lat(), lng: e.latLng.lng() } : place));

    };

    return (
        <div style={{ width: '100%', height: '450px', display: 'flex', flexDirection: 'column' }}>
            <GoogleMap
                mapContainerStyle={containerStyle}
                onClick={(e) => showCoords(e)}
                center={center}
                zoom={10}
                onLoad={onLoad}
                onUnmount={onUnmount}
                options={{ styles: defaultTheme }}
            >
                {originMarker && <Marker position={{ lat: originMarker.lat, lng: originMarker.lng }} />}
                {destinationMarker && <Marker position={{ lat: destinationMarker.lat, lng: destinationMarker.lng }} />}
                {directions && <DirectionsRenderer directions={directions} />}
            </GoogleMap>
            {distance && <div><p><b>distance:</b> {distance.distance.text}</p><p><b>time:</b> {distance.duration.text}</p></div>}
        </div>
    );
}
