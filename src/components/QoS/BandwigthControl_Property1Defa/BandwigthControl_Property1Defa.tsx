import { memo, useEffect, useState } from 'react';
import type { FC, ReactElement } from 'react';

import resets from '../../_resets.module.css';
import classes from './BandwigthControl_Property1Defa.module.css';
import { Vector3Icon } from './Vector3Icon.js';
import { SlArrowRight } from 'react-icons/sl';
import { CounterState, update } from '../../../main';
import { useDispatch, useSelector } from 'react-redux';
import ReactDomServer from 'react-dom/server'

interface Props {
  className?: string;
}
/* @figmaId 230:883 */
export const BandwigthControl_Property1Defa: FC<Props> = memo(function BandwigthControl_Property1Defa(props = {}) {
  const ComponentOne =(): React.ReactNode  => {

    return <>1</>
   };
   
   
   const ComponentTwo = (): React.ReactNode =>  {
   
    return <div>2</div>;
   
   };
  
  
    const [currentComponent, setCurrentComponent] = useState<React.ReactNode>(null);
  
  
    const value = useSelector((state: CounterState) => state.value);
 const dispatch = useDispatch();

 const handleUpdate = (key: string) => {
   dispatch(update(key));
 };
  
  
    function click1(key:string, newComponent:any):void {
      let test = (document.getElementById(key) as HTMLElement);
      
      let a = window.getComputedStyle(test);
      if (a.backgroundColor != 'rgb(226, 245, 255)')
      {

      }
      else
      {
        test.style.backgroundColor = '#5AC3F8';
        setCurrentComponent(newComponent);
      }
      for (let i = 1; i < 3; i++)
      {
        let key_ = "BandwidthControl-"+i
        if(key_ != key)
        {
         (document.getElementById(key_) as HTMLElement).style.backgroundColor = '#E2F5FF';
        }
       
      }
      
      }
      
      useEffect(() => {
        setCurrentComponent(currentComponent)
        var x = document.getElementById('qos_frame') as HTMLElement;
        x.innerHTML = ReactDomServer.renderToString(currentComponent as ReactElement);
      },[currentComponent])
  

  return (
    <>
    <button id = "BandwidthControl" className={classes.sidebar_button} onClick={() => {
      let test = (document.getElementById("BandwidthControl") as HTMLElement);
      let a = window.getComputedStyle(test);
      if (a.background == 'rgb(13, 89, 127)')
    {

    }
    else
    {
      handleUpdate('BandwidthControl')
      setCurrentComponent(ComponentOne)
    }
    }} style={value != "BandwidthControl" ? {} : {background: '#0D597F', color: 'white', fontWeight: '700'} } >Bandwidth Control
        {value != "BandwidthControl" ? (
          <SlArrowRight style = {{transition: 'transform 0.15s ease-in-out'}} stroke="#c3c3c3" strokeWidth={50} color='#c3c3c3' size={16}/>
        ) : (
          <SlArrowRight style = {{transform: 'rotate(90deg)', transition: 'transform 0.15s ease-in-out'}}  stroke="white" strokeWidth={50} color='white' size={16}/>
        )
        }
        </button>
        {value == "BandwidthControl" && (
        <div className={classes.div_bar}>
          <button id='BandwidthControl-1' style={{background:'#5AC3F8'}} onClick={() => click1("BandwidthControl-1", ComponentOne)} className={classes.inner_sidebar_button}>•  Rate Limit</button>
          <button id='BandwidthControl-2' onClick={() => click1("BandwidthControl-2", ComponentTwo)}  className={classes.inner_sidebar_button}>•  Storm Control</button>
        </div>)}
        
     </> 
  );
});
