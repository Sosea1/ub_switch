import { memo, useEffect, useState } from 'react';
import type { FC, ReactElement } from 'react';

import resets from '../../_resets.module.css';
import classes from './ARP_Property1Default.module.css';
import { Vector3Icon } from './Vector3Icon.js';
import { SlArrowRight } from 'react-icons/sl';
import ReactDomServer from 'react-dom/server'
import { useDispatch, useSelector } from 'react-redux';
import { CounterState, update } from '../../../main';
import { ARPTable } from '../ARPTable/ARPTable';
import { StaticARPConfig } from '../StaticARPConfig/StaticARPConfig';
import { GratuitousARP } from '../GratuitousARP/GratuitousARP';
import { ProxyARPConfig } from '../ProxyARPConfig/ProxyARPConfig';

interface Props {
  className?: string;
}
/* @figmaId 230:608 */
export const ARP_Property1Default: FC<Props> = memo(function ARP_Property1Default(props = {}) {
  const ComponentOne =(): React.ReactNode  => {

    return <ARPTable/>
   };
   
   
   const ComponentTwo = (): React.ReactNode =>  {
   
    return <StaticARPConfig/>;
   
   };
  
   const ComponentThree = (): React.ReactNode =>  {
   
    return <GratuitousARP/>;
   };
  
   const ComponentFour = (): React.ReactNode =>  {
   
    return <ProxyARPConfig/>;
   
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
        let key_ = "ARP-"+i
        if(key_ != key)
        {
         (document.getElementById(key_) as HTMLElement).style.backgroundColor = '#E2F5FF';
        }
       
      }
      
      }
      
      useEffect(() => {
        setCurrentComponent(currentComponent)
        var x = document.getElementById('routing_frame') as HTMLElement;
        x.innerHTML = ReactDomServer.renderToString(currentComponent as ReactElement);
      },[currentComponent])
  

  return (
    <>
    <button id = "ARP" className={classes.sidebar_button} onClick={() => {
      let test = (document.getElementById("ARP") as HTMLElement);
      let a = window.getComputedStyle(test);
      if (a.background == 'rgb(13, 89, 127)')
    {

    }
    else
    {
      handleUpdate('ARP')
      setCurrentComponent(ComponentOne)
    }
    }} style={value != "ARP" ? {} : {background: '#0D597F', color: 'white', fontWeight: '700'} } >ARP
        {value != "ARP" ? (
          <SlArrowRight style = {{transition: 'transform 0.15s ease-in-out'}} stroke="#c3c3c3" strokeWidth={50} color='#c3c3c3' size={16}/>
        ) : (
          <SlArrowRight style = {{transform: 'rotate(90deg)', transition: 'transform 0.15s ease-in-out'}}  stroke="white" strokeWidth={50} color='white' size={16}/>
        )
        }
        </button>
        {value == "ARP" && (
        <div className={classes.div_bar}>
          <button id='ARP-1' style={{background:'#5AC3F8'}} onClick={() => click1("ARP-1", ComponentOne)} className={classes.inner_sidebar_button}>•  ARP Table</button>
          <button id='ARP-2' onClick={() => click1("ARP-2", ComponentTwo)}  className={classes.inner_sidebar_button}>•  Static ARP</button>
          <button id='ARP-3' onClick={() => click1("ARP-3", ComponentThree)}  className={classes.inner_sidebar_button}>•  Gratuitous ARP</button>
          <button id='ARP-4' onClick={() => click1("ARP-4", ComponentFour)}  className={classes.inner_sidebar_button}>•  Proxy ARP</button> 
        </div>)}
        
     </>  
  );
});
