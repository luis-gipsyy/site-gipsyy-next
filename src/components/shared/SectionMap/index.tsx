import React from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import * as Styled from './styles';

interface SectionMapProps {
  longitude: number;
  latitude: number;
}

const SectionMap = ({ longitude, latitude }: SectionMapProps) => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyAm8KzGt0DJgB1njDfN86-WhkjZrW8kPyU',
  });

  return (
    <Styled.Wrapper>
      {isLoaded ? (
        <GoogleMap
          mapContainerClassName="googlemap"
          mapContainerStyle={{
            width: '100%',
            height: '100%',
            border: '1px solid #d1d1d1',
            borderRadius: '3px',
          }}
          center={{
            lat: latitude || -22.7238733,
            lng: longitude || -47.360819612,
          }}
          zoom={15}
        ></GoogleMap>
      ) : (
        <></>
      )}
    </Styled.Wrapper>
  );
};

export default SectionMap;
