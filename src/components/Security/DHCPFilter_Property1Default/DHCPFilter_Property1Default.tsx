import { memo, useEffect, useState } from 'react';
import type { FC, ReactElement } from 'react';

import resets from '../../_resets.module.css';
import classes from './DHCPFilter_Property1Default.module.css';
import { Vector3Icon } from './Vector3Icon.js';
import { SlArrowRight } from 'react-icons/sl';
import { CounterState, update } from '../../../main';
import { useDispatch, useSelector } from 'react-redux';
import ReactDomServer from 'react-dom/server'
import { DHCPv4Filter } from '../DHCPv4Filter/DHCPv4Filter';
import { DHCPv6Filter } from '../DHCPv6Filter/DHCPv6Filter';
import { Root, createRoot } from 'react-dom/client';

interface Props {
  className?: string;
}
/* @figmaId 241:738 */
export const DHCPFilter_Property1Default: FC<Props> = memo(function DHCPFilter_Property1Default(props = {}) {
  const ComponentOne =(): React.ReactNode  => {

    return <DHCPv4Filter/>
   };
   
   
   const ComponentTwo = (): React.ReactNode =>  {
   
    return <DHCPv6Filter/>;
   
   };
   
   const [root, setRoot] = useState<Root>()
   
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
        let key_ = "DHCP-"+i
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
    <button id = "DHCP" className={classes.sidebar_button} onClick={() => {
      let test = (document.getElementById("DHCP") as HTMLElement);
      let a = window.getComputedStyle(test);
      if (a.background == 'rgb(13, 89, 127)')
    {

    }
    else
    {
      handleUpdate('DHCP')
      setCurrentComponent(ComponentOne)
    }
    }} style={value != "DHCP" ? {} : {background: '#0D597F', color: 'white', fontWeight: '700'} } >DHCP Filter
        {/* {value != "DHCP" ? (
          <SlArrowRight style = {{transition: 'transform 0.15s ease-in-out'}} stroke="#c3c3c3" strokeWidth={50} color='#c3c3c3' size={16}/>
        ) : (
          <SlArrowRight style = {{transform: 'rotate(90deg)', transition: 'transform 0.15s ease-in-out'}}  stroke="white" strokeWidth={50} color='white' size={16}/>
        )
        } */}
        </button>
        {/* {value == "DHCP" && (
        <div className={classes.div_bar}>
          <button id='DHCP-1' style={{background:'#5AC3F8'}} onClick={() => click1("DHCP-1", ComponentOne)} className={classes.inner_sidebar_button}>•  DHCPv4 Filter</button>
          <button id='DHCP-2' onClick={() => click1("DHCP-2", ComponentTwo)}  className={classes.inner_sidebar_button}>•  DHCPv6 Filter</button>
        </div>)} */}
     </> 
  );
});
