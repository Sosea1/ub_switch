import { memo, useEffect, useState } from 'react';
import type { FC, ReactElement } from 'react';

import resets from '../../_resets.module.css';
import classes from './DHCPService_Property1Default.module.css';
import { Vector3Icon } from './Vector3Icon.js';
import { SlArrowRight } from 'react-icons/sl';
import ReactDomServer from 'react-dom/server'
import { useDispatch, useSelector } from 'react-redux';
import { CounterState, update } from '../../../main';
import { DHCPServer } from '../DHCPServer/DHCPServer';
import { DHCPRelay } from '../DHCPRelay/DHCPRelay';
import { DHCPL2Relay } from '../DHCPL2Relay/DHCPL2Relay';

interface Props {
  className?: string;
}
/* @figmaId 230:685 */
export const DHCPService_Property1Default: FC<Props> = memo(function DHCPService_Property1Default(props = {}) {
  const ComponentOne =(): React.ReactNode  => {

    return <DHCPServer/>
   };
   
   
   const ComponentTwo = (): React.ReactNode =>  {
   
    return <DHCPRelay/>;
   
   };
  
   const ComponentThree = (): React.ReactNode =>  {
   
    return <DHCPL2Relay/>;
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
        let key_ = "DHCPService-"+i
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
    <button id = "DHCPService" className={classes.sidebar_button} onClick={() => {
      let test = (document.getElementById("DHCPService") as HTMLElement);
      let a = window.getComputedStyle(test);
      if (a.background == 'rgb(13, 89, 127)')
    {

    }
    else
    {
      handleUpdate('DHCPService')
      setCurrentComponent(ComponentOne)
    }
    }} style={value != "DHCPService" ? {} : {background: '#0D597F', color: 'white', fontWeight: '700'} } >DHCP Service
        {value != "DHCPService" ? (
          <SlArrowRight style = {{transition: 'transform 0.15s ease-in-out'}} stroke="#c3c3c3" strokeWidth={50} color='#c3c3c3' size={16}/>
        ) : (
          <SlArrowRight style = {{transform: 'rotate(90deg)', transition: 'transform 0.15s ease-in-out'}}  stroke="white" strokeWidth={50} color='white' size={16}/>
        )
        }
        </button>
        {value == "DHCPService" && (
        <div className={classes.div_bar}>
          <button id='DHCPService-1' style={{background:'#5AC3F8'}} onClick={() => click1("DHCPService-1", ComponentOne)} className={classes.inner_sidebar_button}>•  DHCP Service</button>
          <button id='DHCPService-2' onClick={() => click1("DHCPService-2", ComponentTwo)}  className={classes.inner_sidebar_button}>•  DHCP Relay</button>
          <button id='DHCPService-3' onClick={() => click1("DHCPService-3", ComponentThree)}  className={classes.inner_sidebar_button}>•  DHCP L2 Relay</button>
        </div>)}
        
     </>  
  );
});
