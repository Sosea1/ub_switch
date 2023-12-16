import { memo, useEffect, useState } from 'react';
import type { FC, ReactElement } from 'react';

import resets from '../../_resets.module.css';
import classes from './ControllerSettings_Default.module.css';
import { CounterState, update } from '../../../main';
import { useDispatch, useSelector } from 'react-redux';
import ReactDomServer from 'react-dom/server'

interface Props {
  className?: string;
}
/* @figmaId 260:1232 */
export const ControllerSettings_Default: FC<Props> = memo(function ControllerSettings_Default(props = {}) {
  const ComponentOne =(): React.ReactNode  => {

    return <>1</>
   };
  
    const [currentComponent, setCurrentComponent] = useState<React.ReactNode>(null);
  
  
    const value = useSelector((state: CounterState) => state.value);
 const dispatch = useDispatch();

 const handleUpdate = (key: string) => {
   dispatch(update(key));
 };
  
      useEffect(() => {
        setCurrentComponent(currentComponent)
        var x = document.getElementById('system_frame') as HTMLElement;
        x.innerHTML = ReactDomServer.renderToString(currentComponent as ReactElement);
      },[currentComponent])
  

  return (
    <>
    <button id = "ControllerSetting" className={classes.sidebar_button} onClick={() => {
      let test = (document.getElementById("ControllerSetting") as HTMLElement);
      let a = window.getComputedStyle(test);
      if (a.background == 'rgb(13, 89, 127)')
    {

    }
    else
    {
      handleUpdate('ControllerSetting')
      setCurrentComponent(ComponentOne)
    }
    }} style={value != "ControllerSetting" ? {} : {background: '#0D597F', color: 'white', fontWeight: '700'} } >Controller Setting
        </button>
     </> 
  );
});
