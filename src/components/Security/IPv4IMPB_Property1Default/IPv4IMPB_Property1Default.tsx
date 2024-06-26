import { memo, useEffect, useState } from 'react';
import type { FC, ReactElement } from 'react';

import resets from '../../_resets.module.css';
import classes from './IPv4IMPB_Property1Default.module.css';
import { Vector3Icon } from './Vector3Icon.js';
import { SlArrowRight } from 'react-icons/sl';
import { CounterState, update } from '../../../main';
import { useDispatch, useSelector } from 'react-redux';
import ReactDomServer from 'react-dom/server'
import { IPMACBinding } from '../IPMACBinding/IPMACBinding';
import { ARPDetection } from '../ARPDetection/ARPDetection';
import { IPv4SourceGuard } from '../IPv4SourceGuard/IPv4SourceGuard';
import { Root, createRoot } from 'react-dom/client';

interface Props {
  className?: string;
}
/* @figmaId 241:861 */
export const IPv4IMPB_Property1Default: FC<Props> = memo(function IPv4IMPB_Property1Default(props = {}) {
  const [root, setRoot] = useState<Root>()
  const ComponentOne =(): React.ReactNode  => {

    return <IPMACBinding/>
   };
   
   
   const ComponentTwo = (): React.ReactNode =>  {
   
    return <ARPDetection/>;
   
   };
  
   const ComponentThree = (): React.ReactNode =>  {
   
    return <IPv4SourceGuard/>;
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
      for (let i = 1; i < 4; i++)
      {
        let key_ = "IMPB-"+i
        if(key_ != key)
        {
         (document.getElementById(key_) as HTMLElement).style.backgroundColor = '#E2F5FF';
        }
       
      }
      
      }
      
      useEffect(() => {
        setCurrentComponent(currentComponent)
        var x = document.getElementById('security_frame') as HTMLElement;
        var root1  = createRoot(x)
        setRoot(root1)
        root?.render(currentComponent)
      },[currentComponent])
  

  return (
    <>
    <button id = "IMPB" className={classes.sidebar_button} onClick={() => {
      let test = (document.getElementById("IMPB") as HTMLElement);
      let a = window.getComputedStyle(test);
      if (a.background == 'rgb(13, 89, 127)')
    {

    }
    else
    {
      handleUpdate('IMPB')
      setCurrentComponent(ComponentOne)
    }
    }} style={value != "IMPB" ? {} : {background: '#0D597F', color: 'white', fontWeight: '700'} } >ARP Inspection
        {value != "IMPB" ? (
          <SlArrowRight style = {{transition: 'transform 0.15s ease-in-out'}} stroke="#c3c3c3" strokeWidth={50} color='#c3c3c3' size={16}/>
        ) : (
          <SlArrowRight style = {{transform: 'rotate(90deg)', transition: 'transform 0.15s ease-in-out'}}  stroke="white" strokeWidth={50} color='white' size={16}/>
        )
        }
        </button>
        {value == "IMPB" && (
        <div className={classes.div_bar}>
          <button id='IMPB-1' style={{background:'#5AC3F8'}} onClick={() => click1("IMPB-1", ComponentOne)} className={classes.inner_sidebar_button}>•  IP-MAC Binding </button>
          <button id='IMPB-2' onClick={() => click1("IMPB-2", ComponentTwo)}  className={classes.inner_sidebar_button}>•  ARP Detection</button>
          {/* <button id='IMPB-3' onClick={() => click1("IMPB-3", ComponentThree)}  className={classes.inner_sidebar_button}>•  IPv4 Source Guard</button> */}
        </div>)}
        
     </> 
  );
});
