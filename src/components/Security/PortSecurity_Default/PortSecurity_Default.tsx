import { memo, useEffect, useState } from 'react';
import type { FC, ReactElement } from 'react';

import resets from '../../_resets.module.css';
import classes from './PortSecurity_Default.module.css';
import { SlArrowRight } from 'react-icons/sl';
import { CounterState, update } from '../../../main';
import { useDispatch, useSelector } from 'react-redux';
import ReactDomServer from 'react-dom/server'
import { PortSecurity } from '../PortSecurity/PortSecurity';

interface Props {
  className?: string;
}
/* @figmaId 241:792 */
export const PortSecurity_Default: FC<Props> = memo(function PortSecurity_Default(props = {}) {
  const ComponentOne =(): React.ReactNode  => {

    return <PortSecurity/>
   };
   
  
    const [currentComponent, setCurrentComponent] = useState<React.ReactNode>(null);
  
  
    const value = useSelector((state: CounterState) => state.value);
 const dispatch = useDispatch();

 const handleUpdate = (key: string) => {
   dispatch(update(key));
 };

      
      useEffect(() => {
        setCurrentComponent(currentComponent)
        var x = document.getElementById('security_frame') as HTMLElement;
        x.innerHTML = ReactDomServer.renderToString(currentComponent as ReactElement);
      },[currentComponent])
  

  return (
    <>
    <button id = "PortSecurity" className={classes.sidebar_button} onClick={() => {
      let test = (document.getElementById("PortSecurity") as HTMLElement);
      let a = window.getComputedStyle(test);
      if (a.background == 'rgb(13, 89, 127)')
    {

    }
    else
    {
      handleUpdate('PortSecurity')
      setCurrentComponent(ComponentOne)
    }
    }} style={value != "PortSecurity" ? {} : {background: '#0D597F', color: 'white', fontWeight: '700'} } >Port Security
        </button>
     </> 
  );
});
