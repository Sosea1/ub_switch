import { memo, useEffect, useState } from 'react';
import type { FC, ReactElement } from 'react';

import resets from '../../_resets.module.css';
import classes from './Multicast_Property1Default.module.css';
import { Vector3Icon } from './Vector3Icon.js';
import ReactDomServer from 'react-dom/server'
import { SlArrowRight } from 'react-icons/sl';
import { useDispatch, useSelector } from 'react-redux';
import { CounterState, update } from '../../../main';
import { MulticastIGMPSnooping } from '../MulticastIGMPSnooping/MulticastIGMPSnooping';
import { MLDSnooping } from '../MLDSnooping/MLDSnooping';
import { MVR } from '../MVR/MVR';
import { MulticastFiltering } from '../MulticastFiltering/MulticastFiltering';
import { MulticastInfo } from '../MulticastInfo/MulticastInfo';

interface Props {
  className?: string;
}
/* @figmaId 173:1384 */
export const Multicast_Property1Default: FC<Props> = memo(function Multicast_Property1Default(props = {}) {
  
  const ComponentOne =(): React.ReactNode  => {

    return <MulticastIGMPSnooping/>
   };
   
   
   const ComponentTwo = (): React.ReactNode =>  {
   
    return <MLDSnooping/>;
   
   };
  
   const ComponentThree = (): React.ReactNode =>  {
   
    return <MVR/>;
   };
  
   const ComponentFour = (): React.ReactNode =>  {
   
    return <MulticastFiltering/>;
   
   };
  
   const ComponentFive = (): React.ReactNode =>  {
   
    return <MulticastInfo/>;
   
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
      for (let i = 1; i < 6; i++)
      {
        let key_ = "Multicast-"+i
        if(key_ != key)
        {
         (document.getElementById(key_) as HTMLElement).style.backgroundColor = '#E2F5FF';
        }
       
      }
      
      }
      
      useEffect(() => {
        setCurrentComponent(currentComponent)
        var x = document.getElementById('switching_frame') as HTMLElement;
        x.innerHTML = ReactDomServer.renderToString(currentComponent as ReactElement);
      },[currentComponent])
  

  return (
    <>
    <button id = "Multicast" className={classes.sidebar_button} onClick={() => {
      let test = (document.getElementById("Multicast") as HTMLElement);
      let a = window.getComputedStyle(test);
      if (a.background == 'rgb(13, 89, 127)')
    {

    }
    else
    {
      handleUpdate('Multicast')
      setCurrentComponent(ComponentOne)
    }
    }} style={value != "Multicast" ? {} : {background: '#0D597F', color: 'white', fontWeight: '700'} } >Multicast
        {value != "Multicast" ? (
          <SlArrowRight style = {{transition: 'transform 0.15s ease-in-out'}} stroke="#c3c3c3" strokeWidth={50} color='#c3c3c3' size={16}/>
        ) : (
          <SlArrowRight style = {{transform: 'rotate(90deg)', transition: 'transform 0.15s ease-in-out'}}  stroke="white" strokeWidth={50} color='white' size={16}/>
        )
        }
        </button>
        {value == "Multicast" && (
        <div className={classes.div_bar}>
          <button id='Multicast-1' style={{background:'#5AC3F8'}} onClick={() => click1("Multicast-1", ComponentOne)} className={classes.inner_sidebar_button}>•  IGMP Snooping</button>
          <button id='Multicast-2' onClick={() => click1("Multicast-2", ComponentTwo)}  className={classes.inner_sidebar_button}>•  MLD Snooping</button>
          <button id='Multicast-3' onClick={() => click1("Multicast-3", ComponentThree)}  className={classes.inner_sidebar_button}>•  MVR</button>
          <button id='Multicast-4' onClick={() => click1("Multicast-4", ComponentFour)}  className={classes.inner_sidebar_button}>•  Multicast Filtering</button>
          <button id='Multicast-5' onClick={() => click1("Multicast-5", ComponentFive)}  className={classes.inner_sidebar_button}>•  Multicast Info</button>
          
        </div>)}
        
     </>  
  );
});
