import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

const MyMap = () => (
  <YMaps>
      <Map 
      defaultState={{ center: [53.689502, 23.834487], zoom: 13}} 
      width="100%"
      height="500px">
      <Placemark defaultGeometry={[53.689502, 23.834487]} />
      </Map>
  </YMaps>
);
export default MyMap;