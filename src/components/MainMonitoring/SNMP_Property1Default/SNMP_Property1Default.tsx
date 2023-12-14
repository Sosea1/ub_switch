import { memo, useEffect, useState } from 'react';
import type { FC, JSXElementConstructor, ReactElement, ReactNode } from 'react';


import classes from './SNMP_Property1Default.module.css';

import { SlArrowRight } from 'react-icons/sl';
import ReactDomServer from 'react-dom/server'
import { createRoot } from 'react-dom/client';
import { _Property1Variant4 } from '../../Diagnosis/_Property1Variant4/_Property1Variant4';
import { PingButton_Property1Default } from '../../Diagnosis/PingButton_Property1Default/PingButton_Property1Default';
import { Frame20 } from '../Frame20/Frame20';
import { Frame26 } from '../Frame26/Frame26';
import { Frame27 } from '../Frame27/Frame27';
import { SNMPV1 } from '../SNMPV1/SNMPV1';
import { SNMPV3 } from '../SNMPV3/SNMPV3';
import { Notification } from '../Notification/Notification';
import { RMON } from '../RMON/RMON';
import { Dispatch } from 'redux';
import { useDispatch } from 'react-redux';
import React from 'react';
import { openButton } from '../../../store/actionCreators';

interface Props {
  className?: string;
}




export const SNMP_Property1Default: FC<Props> = memo(function SNMP_Property1Default(props = {}) {
  
  
const ComponentOne =(): React.ReactNode  => {

  return <Frame20/>
 };
 
 
 const ComponentTwo = (): React.ReactNode =>  {
 
  return <SNMPV1/>;
 
 };

 const ComponentThree = (): React.ReactNode =>  {
 
  return <SNMPV3/>;
 };

 const ComponentFour = (): React.ReactNode =>  {
 
  return <Notification/>;
 
 };

 const ComponentFive = (): React.ReactNode =>  {
 
  return <RMON/>;
 
 };

 const [button, setButton] = useState<IButton | {}>()
  const [currentComponent, setCurrentComponent] = useState<React.ReactNode>(null);

  

  const [isOpen, setIsOpen] = useState(false)


  function click1(key:string, newComponent:any):void {
    let test = (document.getElementById(key) as HTMLElement);
    
    let a = window.getComputedStyle(test);
    if (a.backgroundColor != 'rgb(226, 245, 255)')
    {
      test.style.backgroundColor = '#E2F5FF';
      setCurrentComponent(null);
    }
    else
    {
      test.style.backgroundColor = '#5AC3F8';
      setCurrentComponent(newComponent);
    }
    for (let i = 1; i < 6; i++)
    {
      let key_ = "SNMP-"+i
      if(key_ != key)
      {
       (document.getElementById(key_) as HTMLElement).style.backgroundColor = '#E2F5FF';
      }
     
    }
    
    }
    
    useEffect(() => {
      setCurrentComponent(currentComponent)
      var x = document.getElementById('monitoring_frame') as HTMLElement;
      x.innerHTML = ReactDomServer.renderToString(currentComponent as ReactElement);
    },[currentComponent])

  return (
    <>
    <button id = "SNMP" className={classes.sidebar_button} onClick={() => setIsOpen((prev)=>!prev)} style={!isOpen ? {} : {background: '#0D597F', color: 'white', fontWeight: '700'} } >SNMP
        {!isOpen ? (
          <SlArrowRight style = {{transition: 'transform 0.15s ease-in-out'}} stroke="#c3c3c3" strokeWidth={50} color='#c3c3c3' size={16}/>
        ) : (
          <SlArrowRight style = {{transform: 'rotate(90deg)', transition: 'transform 0.15s ease-in-out'}}  stroke="white" strokeWidth={50} color='white' size={16}/>
        )
        }
        </button>
        {isOpen && (
        <div className={classes.div_bar}>
          <button id='SNMP-1' onClick={() => click1("SNMP-1", ComponentOne)} className={classes.inner_sidebar_button}>•  Global Config</button>
          <button id='SNMP-2' onClick={() => click1("SNMP-2", ComponentTwo)}  className={classes.inner_sidebar_button}>•  SNMP v1/v2c</button>
          <button id='SNMP-3' onClick={() => click1("SNMP-3", ComponentThree)}  className={classes.inner_sidebar_button}>•  SNMP v3</button>
          <button id='SNMP-4' onClick={() => click1("SNMP-4", ComponentFour)}  className={classes.inner_sidebar_button}>•  Notification</button>
          <button id='SNMP-5' onClick={() => click1("SNMP-5", ComponentFive)}  className={classes.inner_sidebar_button}>•  RMON</button>
          
        </div>)}
        
     </>  
  );
});


