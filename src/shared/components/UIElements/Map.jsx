import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl-csp';
import './Map.css'
// eslint-disable-next-line import/no-webpack-loader-syntax
import MapboxWorker from 'worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker';
mapboxgl.workerClass = MapboxWorker;
mapboxgl.accessToken = 'pk.eyJ1Ijoia2luZ3dhcjYiLCJhIjoiY2tvMmU0cjlsMHlubDJvbXZncTh2a3NzdyJ9.ZSLvAsAEpgn5tmEn5sLZPQ';

const Map = props => {
    const mapContainer = useRef();
    const { center, zoom } = props;

    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [ center.lng, center.lat ],
            zoom: zoom
        });

        return () => {
            map.remove();
        }
    }, [ center, zoom ]);

    return (
        <div className={`map ${props.className}`} style={props.style}>
            <div className="map-container" ref={mapContainer} />
        </div>
    )
}


export default Map
