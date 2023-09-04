import { RootState } from '../context/store';
import { useSelector } from 'react-redux';
import { useQuery } from 'react-query';
import axios from 'axios';
import { getWorldData } from '../context/covidSlice';
import { useAppDispatch } from '../context/hook';

const WorldCard = () => {
  const dispatch = useAppDispatch();
  const worldInfo = useSelector((state: RootState) => state.covid.worldData);
  const { isLoading, data } = useQuery(
    'worldData',
    () =>
      axios.get('https://disease.sh/v3/covid-19/all').then((res) => res.data),
    {
      onSuccess: () => {
        dispatch(getWorldData(data));
      },
    }
  );
  return (
    <div className='text-white bg-black p-2 rounded-[10px]'>
      {isLoading ? (
        'Loading...'
      ) : (
        <>
          <p className='text-2xl font-semibold text-white underline mb-2'>
            World Report
          </p>
          <div className='grid grid-cols-2'>
            <span className='text-regalblue font-semibold capitalize'>
              updated
            </span>
            <span className='text-white font-semibold'>
              : {worldInfo?.updated}
            </span>
            <span className='text-regalblue font-semibold capitalize'>
              Cases
            </span>
            <span className='text-white font-semibold'>
              :{worldInfo?.cases}
            </span>
            <span className='text-regalblue font-semibold capitalize'>
              today Cases
            </span>
            <span className='text-white font-semibold'>
              : {worldInfo?.todayCases}
            </span>
            <span className='text-regalblue font-semibold capitalize'>
              deaths
            </span>
            <span className='text-white font-semibold'>
              : {worldInfo?.deaths}
            </span>
            <span className='text-regalblue font-semibold capitalize'>
              recovered
            </span>
            <span className='text-white font-semibold'>
              : {worldInfo?.recovered}
            </span>
            <span className='text-regalblue font-semibold capitalize'>
              today Recovered
            </span>
            <span className='text-white font-semibold'>
              : {worldInfo?.todayRecovered}
            </span>
            <span className='text-regalblue font-semibold capitalize'>
              active
            </span>
            <span className='text-white font-semibold'>
              : {worldInfo?.active}
            </span>
            <span className='text-regalblue font-semibold capitalize'>
              critical
            </span>
            <span className='text-white font-semibold'>
              : {worldInfo?.critical}
            </span>
            <span className='text-regalblue font-semibold capitalize'>
              cases Per One Million
            </span>
            <span className='text-white font-semibold'>
              : {worldInfo?.casesPerOneMillion}
            </span>
            <span className='text-regalblue font-semibold capitalize'>
              deaths Per One Million
            </span>
            <span className='text-white font-semibold'>
              : {worldInfo?.deathsPerOneMillion}
            </span>
            <span className='text-regalblue font-semibold capitalize'>
              tests
            </span>
            <span className='text-white font-semibold'>
              :{worldInfo?.tests}
            </span>
            <span className='text-regalblue font-semibold capitalize'>
              tests Per One Million
            </span>
            <span className='text-white font-semibold'>
              : {worldInfo?.testsPerOneMillion}
            </span>
            <span className='text-regalblue font-semibold capitalize'>
              population
            </span>
            <span className='text-white font-semibold'>
              : {worldInfo?.population}
            </span>
            <span className='text-regalblue font-semibold capitalize'>
              one Case Per People
            </span>
            <span className='text-white font-semibold'>
              : {worldInfo?.oneCasePerPeople}
            </span>
            <span className='text-regalblue font-semibold capitalize'>
              one Death Per People
            </span>
            <span className='text-white font-semibold'>
              : {worldInfo?.oneDeathPerPeople}
            </span>
            <span className='text-regalblue font-semibold capitalize'>
              one Test Per People
            </span>
            <span className='text-white font-semibold'>
              : {worldInfo?.oneTestPerPeople}
            </span>
            <span className='text-regalblue font-semibold capitalize'>
              active Per One Million
            </span>
            <span className='text-white font-semibold'>
              : {worldInfo?.activePerOneMillion}
            </span>
            <span className='text-regalblue font-semibold capitalize'>
              recovered Per One Million
            </span>
            <span className='text-white font-semibold'>
              :{worldInfo?.cases}
            </span>
            <span className='text-regalblue font-semibold capitalize'>
              critical Per One Million
            </span>
            <span className='text-white font-semibold'>
              : {worldInfo?.criticalPerOneMillion}
            </span>
          </div>
        </>
      )}
    </div>
  );
};

export default WorldCard;
