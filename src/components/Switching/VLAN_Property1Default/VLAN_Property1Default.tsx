import { memo, useEffect, useState } from 'react';
import type { FC, ReactElement } from 'react';

import resets from '../../_resets.module.css';
import { Vector3Icon } from './Vector3Icon.js';
import classes from './VLAN_Property1Default.module.css';
import { SlArrowRight } from 'react-icons/sl';
import ReactDomServer from 'react-dom/server'
import { useDispatch, useSelector } from 'react-redux';
import { CounterState, update } from '../../../main';
import { Vlan8021 } from '../Vlan8021/Vlan8021';
import { MACVLAN } from '../MACVLAN/MACVLAN';
import { ProtocolVLAN } from '../ProtocolVLAN/ProtocolVLAN';
import { VLANVPN } from '../VLANVPN/VLANVPN';
import { GVRP } from '../GVRP/GVRP';

interface Props {
  className?: string;
}
/* @figmaId 173:1007 */
export const VLAN_Property1Default: FC<Props> = memo(function VLAN_Property1Default(props = {}) {

  
  const ComponentOne =(): React.ReactNode  => {

    return <Vlan8021/>
   };
   
   
   const ComponentTwo = (): React.ReactNode =>  {
   
    return <MACVLAN/>;
   
   };
  
   const ComponentThree = (): React.ReactNode =>  {
   
    return <ProtocolVLAN/>;
   };
  
   const ComponentFour = (): React.ReactNode =>  {
   
    return <VLANVPN/>;
   
   };
  
   const ComponentFive = (): React.ReactNode =>  {
   
    return <GVRP/>;
   
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
        let key_ = "VLAN-"+i
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
    <button id = "VLAN" className={classes.sidebar_button} onClick={() => {
    const el = document.getElementById('VLAN') as HTMLElement;
    let a = window.getComputedStyle(el);
    if (a.background == 'rgb(13, 89, 127)')
      {

      }
      
    else
      {
        handleUpdate('VLAN') 
        setCurrentComponent(ComponentOne)
      }
    
    }} style={value != 'VLAN' ? {} : {background: '#0D597F', color: 'white', fontWeight: '700'} } >VLAN
        {value != 'VLAN' ? (
          <SlArrowRight style = {{transition: 'transform 0.15s ease-in-out'}} stroke="#c3c3c3" strokeWidth={50} color='#c3c3c3' size={16}/>
        ) : (
          <SlArrowRight style = {{transform: 'rotate(90deg)', transition: 'transform 0.15s ease-in-out'}}  stroke="white" strokeWidth={50} color='white' size={16}/>
        )
        }
        </button>
        {value == 'VLAN' && (
        <div className={classes.div_bar}>
          <button id='VLAN-1' style={{background:'#5AC3F8'}} onClick={() => click1("VLAN-1", ComponentOne)} className={classes.inner_sidebar_button}>•  802.1Q VLAN</button>
          <button id='VLAN-2' onClick={() => click1("VLAN-2", ComponentTwo)}  className={classes.inner_sidebar_button}>•  MAC VLAN</button>
          <button id='VLAN-3' onClick={() => click1("VLAN-3", ComponentThree)}  className={classes.inner_sidebar_button}>•  Protocol VLAN</button>
          <button id='VLAN-4' onClick={() => click1("VLAN-4", ComponentFour)}  className={classes.inner_sidebar_button}>•  VLAN VPN</button>
          <button id='VLAN-5' onClick={() => click1("VLAN-5", ComponentFive)}  className={classes.inner_sidebar_button}>•  GVRP</button>
          
        </div>)}
        
     </>  
  );
});
