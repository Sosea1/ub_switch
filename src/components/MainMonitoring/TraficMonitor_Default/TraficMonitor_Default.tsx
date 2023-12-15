import { memo, useEffect, useState } from 'react';
import type { FC, ReactElement } from 'react';

import resets from '../../_resets.module.css';
import classes from './TraficMonitor_Default.module.css';
import { SlArrowDown, SlArrowRight } from 'react-icons/sl';
import ReactDomServer from 'react-dom/server'
import { TraficMonitoring } from '../TraficMonitoring/TraficMonitoring';
import { useDispatch, useSelector } from 'react-redux';
import { CounterState, update } from '../../../main';

interface Props {
  className?: string;
}
/* @figmaId 187:853 */
export const TraficMonitor_Default: FC<Props> = memo(function TraficMonitor_Default(props = {}) {

  const ComponentOne = (): React.ReactNode =>  {
 
    return <TraficMonitoring/>;
   
   };
  
  const [currentComponent, setCurrentComponent] = useState<React.ReactNode>(null);

  const value = useSelector((state: CounterState) => state.value);
  const dispatch = useDispatch();

  const handleUpdate = (key: string) => {
    dispatch(update(key));
  };

  useEffect(() => {
    setCurrentComponent(currentComponent)
    var x = document.getElementById('monitoring_frame') as HTMLElement;
    x.innerHTML = ReactDomServer.renderToString(currentComponent as ReactElement);
  },[currentComponent])

  return (
    <button id = 'TraficMonitor' className={classes.sidebar_button} onClick={() =>{
      const el = document.getElementById('TraficMonitor') as HTMLElement;
      let a = window.getComputedStyle(el);
      if (a.background == 'rgb(13, 89, 127)')
      {
      }
      
    else
      {
        handleUpdate('TraficMonitor') 
        setCurrentComponent(ComponentOne);
      }
      }} style={value != 'TraficMonitor' ? {} : {background: '#0D597F', color: 'white', fontWeight: '700'} } >Traffic Monitor
        </button>
  );
});
