import { memo, useContext, useEffect, useState } from 'react';
import type { FC, ReactElement } from 'react';

import resets from '../../_resets.module.css';
import classes from './SystemMonitor_Default.module.css';
import ReactDomServer from 'react-dom/server'
import { SystemMonitoring } from '../SystemMonitoring/SystemMonitoring';
import { useDispatch, useSelector } from 'react-redux';
import { CounterState, update } from '../../../main';

interface Props {
  className?: string;
}



/* @figmaId 187:863 */
export const SystemMonitor_Default: FC<Props> = memo(function SystemMonitor_Default(props = {}) {

  //-----------------
  const value = useSelector((state: CounterState) => state.value);
  const dispatch = useDispatch();

  const handleUpdate = (key: string) => {
    dispatch(update(key));
  };
 //-----------------

  const ComponentOne = (): React.ReactNode =>  {
 
    return <SystemMonitoring/>;
   
   };
  
  const [currentComponent, setCurrentComponent] = useState<React.ReactNode>(null);


  useEffect(() => {
    setCurrentComponent(currentComponent)
    var x = document.getElementById('monitoring_frame') as HTMLElement;
    x.innerHTML = ReactDomServer.renderToString(currentComponent as ReactElement);
  },[currentComponent])



  return (
    <button id = 'SystemMonitor' className={classes.sidebar_button} onClick={() => {
         //вставляешь id вот этой баттоны
    const el = document.getElementById('SystemMonitor') as HTMLElement;
    let a = window.getComputedStyle(el);
    if (a.background == 'rgb(13, 89, 127)')
      {

      }
      
    else
      {
        handleUpdate('SystemMonitor') 
        setCurrentComponent(ComponentOne);
      }
    
    }
  } 
    //проверяешь value на id вот этой баттоны
    style={value != 'SystemMonitor' ? {} : {background: '#0D597F', color: 'white', fontWeight: '700'} } >System Monitor</button>
  );
});
