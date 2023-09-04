import { LineGraph } from '../components/LineGraph';
import MapComponent from '../components/MapComponent';
import Sidebar from '../components/Sidebar';
import WorldCard from '../components/WorldCard';

const Map = () => {
  return (
    <div className='w-full h-full'>
      <div className='flex gap-5 h-full w-full'>
        <Sidebar />
        <div className='p-8 overflow-scroll rounded-2xl backdrop-blur-[3.2px] bg-newBlack w-full'>
          <div className='mapContainer'>
            <div className='firstGridArea bg-black mt-4 rounded-2xl'>
              <MapComponent />
            </div>
            <div className='secondGridArea'>
              <WorldCard />
            </div>
          </div>
          <LineGraph />
        </div>
      </div>
    </div>
  );
};

export default Map;
