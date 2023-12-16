import { memo, useEffect, useState } from 'react';
import type { FC, ReactElement } from 'react';

import resets from '../../_resets.module.css';
import classes from './AutoVoIP_Default.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { CounterState, update } from '../../../main';
import ReactDomServer from 'react-dom/server'
import { AutoVoIPGlobalConfig } from '../AutoVoIPGlobalConfig/AutoVoIPGlobalConfig';

interface Props {
  className?: string;
}
/* @figmaId 230:937 */
export const AutoVoIP_Default: FC<Props> = memo(function AutoVoIP_Default(props = {}) {
  const ComponentOne =(): React.ReactNode  => {

    return <AutoVoIPGlobalConfig/>
   };
   
  
    const [currentComponent, setCurrentComponent] = useState<React.ReactNode>(null);
  
  
    const value = useSelector((state: CounterState) => state.value);
 const dispatch = useDispatch();

 const handleUpdate = (key: string) => {
   dispatch(update(key));
 };
  
  
    
      useEffect(() => {
        setCurrentComponent(currentComponent)
        var x = document.getElementById('qos_frame') as HTMLElement;
        x.innerHTML = ReactDomServer.renderToString(currentComponent as ReactElement);
      },[currentComponent])
  

  return (
    <>
    <button id = "AutoVoIP" className={classes.sidebar_button} onClick={() => {
      let test = (document.getElementById("AutoVoIP") as HTMLElement);
      let a = window.getComputedStyle(test);
      if (a.background == 'rgb(13, 89, 127)')
    {

    }
    else
    {
      handleUpdate('AutoVoIP')
      setCurrentComponent(ComponentOne)
    }
    }} style={value != "AutoVoIP" ? {} : {background: '#0D597F', color: 'white', fontWeight: '700'} } >Auto VoIP
        </button>
     </> 
  );
});
