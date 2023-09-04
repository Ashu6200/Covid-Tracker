import { useState, useMemo, useCallback } from 'react';
import Map, {
  FullscreenControl,
  Marker,
  NavigationControl,
  Popup,
} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import Pin from './Pin';
import { useQuery } from 'react-query';
import { CovidDataType, countryData } from '../assets';
import { useAppDispatch } from '../context/hook';
import axios from 'axios';
import { getCountryData } from '../context/covidSlice';

const MapComponent = () => {
  const dispatch = useAppDispatch();
  const { isLoading, data } = useQuery(
    'countryData',
    () =>
      axios
        .get('https://disease.sh/v3/covid-19/countries')
        .then((res) => res.data),
    {
      onSuccess: () => {
        dispatch(getCountryData(data));
      },
    }
  );
  const [popupInfo, setPopupInfo] = useState<CovidDataType>();
  const createMarker = useCallback(
    (city: CovidDataType, i: number) => {
      return (
        <Marker
          key={i}
          longitude={city?.countryInfo?.long}
          latitude={city?.countryInfo?.lat}
          anchor='bottom'
          onClick={(e) => {
            e.originalEvent.stopPropagation();
            setPopupInfo(city);
          }}
        >
          <Pin />
        </Marker>
      );
    },
    [setPopupInfo]
  );

  const pins = useMemo(
    () => (isLoading ? countryData.map(createMarker) : data.map(createMarker)),
    [createMarker, data, isLoading]
  );
  const typeMap: string = 'globe';
  return (
    <Map
      projection={typeMap}
      mapboxAccessToken='pk.eyJ1IjoiZmFrZXVzZXJnaXRodWIiLCJhIjoiY2pwOGlneGI4MDNnaDN1c2J0eW5zb2ZiNyJ9.mALv0tCpbYUPtzT7YysA2g'
      initialViewState={{
        latitude: 20,
        longitude: 77,
        zoom: 0.5,
      }}
      scrollZoom={false}
      className='w-full h-full'
      mapStyle='mapbox://styles/mapbox/dark-v9'
    >
      <FullscreenControl position='top-left' />
      <NavigationControl position='top-left' />
      {pins}
      {popupInfo && (
        <Popup
          anchor='top'
          longitude={popupInfo?.countryInfo?.long}
          latitude={popupInfo?.countryInfo?.lat}
          onClose={() => setPopupInfo(undefined)}
        >
          <>
            <p className='text-sm font-semibold'>{popupInfo.country}</p>
            <div className='flex flex-col'>
              <span className='text-rose-600 font-semibold'>
                Cases
                <span className='text-black font-semibold'>
                  {' '}
                  : {popupInfo.cases}
                </span>
              </span>
              <span className='text-rose-600 font-semibold'>
                Recovered
                <span className='text-black font-semibold'>
                  : {popupInfo.recovered}
                </span>
              </span>
            </div>
          </>
        </Popup>
      )}
    </Map>
  );
};

export default MapComponent;
