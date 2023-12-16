import { memo, useEffect, useState } from 'react';
import type { FC, ReactElement } from 'react';

import resets from '../../_resets.module.css';
import classes from './DoSDefend_Default.module.css';
import { SlArrowRight } from 'react-icons/sl';
import { CounterState, update } from '../../../main';
import { useDispatch, useSelector } from 'react-redux';
import ReactDomServer from 'react-dom/server'

interface Props {
  className?: string;
}
/* @figmaId 241:802 */
export const DoSDefend_Default: FC<Props> = memo(function DoSDefend_Default(props = {}) {
  
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
        var x = document.getElementById('security_frame') as HTMLElement;
        x.innerHTML = ReactDomServer.renderToString(currentComponent as ReactElement);
      },[currentComponent])
  

  return (
    <>
    <button id = "DoS" className={classes.sidebar_button} onClick={() => {
      let test = (document.getElementById("DoS") as HTMLElement);
      let a = window.getComputedStyle(test);
      if (a.background == 'rgb(13, 89, 127)')
    {

    }
    else
    {
      handleUpdate('DoS')
      setCurrentComponent(ComponentOne)
    }
    }} style={value != "DoS" ? {} : {background: '#0D597F', color: 'white', fontWeight: '700'} } >DoS Defend
        </button>
     </> 
  );
});
