import { GoogleMap, Marker} from '@react-google-maps/api';
import { useCallback, useRef } from 'react';
import { defaultTheme } from './Theme';
const containerStyle = {
    width: '100%',
    height: '400px'
};

export function Map({center}) {
    const mapRef = useRef(undefined);
    const onLoad = useCallback(function callback(map) {
        mapRef.current = map;
    }, []);
    const onUnmount = useCallback(function callback() {
        mapRef.current = undefined;
    }, []);

    return (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
            onLoad={onLoad}
            onUnmount={onUnmount}
            options={{ styles: defaultTheme }}
        >
            <Marker position={center} />
        </GoogleMap>
    );
}

