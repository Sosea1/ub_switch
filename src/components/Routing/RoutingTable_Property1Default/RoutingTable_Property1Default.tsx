import { memo, useEffect, useState } from 'react';
import type { FC, ReactElement } from 'react';

import resets from '../../_resets.module.css';
import classes from './RoutingTable_Property1Default.module.css';
import { Vector3Icon } from './Vector3Icon.js';
import ReactDomServer from 'react-dom/server'
import { SlArrowRight } from 'react-icons/sl';
import { useDispatch, useSelector } from 'react-redux';
import { CounterState, update } from '../../../main';
import { IPv4Table } from '../IPv4Table/IPv4Table';
import { IPv6Table } from '../IPv6Table/IPv6Table';

interface Props {
  className?: string;
}
/* @figmaId 230:664 */
export const RoutingTable_Property1Default: FC<Props> = memo(function RoutingTable_Property1Default(props = {}) {
  const ComponentOne =(): React.ReactNode  => {

    return  <IPv4Table/>
   };
   
   
   const ComponentTwo = (): React.ReactNode =>  {
   
    return <IPv6Table/>;
   
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
        let key_ = "RoutingTable-"+i
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
    <button id = "RoutingTable" className={classes.sidebar_button} onClick={() => {
      let test = (document.getElementById("RoutingTable") as HTMLElement);
      let a = window.getComputedStyle(test);
      if (a.background == 'rgb(13, 89, 127)')
    {

    }
    else
    {
      handleUpdate('RoutingTable')
      setCurrentComponent(ComponentOne)
    }
    }} style={value != "RoutingTable" ? {} : {background: '#0D597F', color: 'white', fontWeight: '700'} } >Routing Table
        {value != "RoutingTable" ? (
          <SlArrowRight style = {{transition: 'transform 0.15s ease-in-out'}} stroke="#c3c3c3" strokeWidth={50} color='#c3c3c3' size={16}/>
        ) : (
          <SlArrowRight style = {{transform: 'rotate(90deg)', transition: 'transform 0.15s ease-in-out'}}  stroke="white" strokeWidth={50} color='white' size={16}/>
        )
        }
        </button>
        {value == "RoutingTable" && (
        <div className={classes.div_bar}>
          <button id='RoutingTable-1' style={{background:'#5AC3F8'}} onClick={() => click1("RoutingTable-1", ComponentOne)} className={classes.inner_sidebar_button}>•  IPv4 Routing Table</button>
          <button id='RoutingTable-2' onClick={() => click1("RoutingTable-2", ComponentTwo)}  className={classes.inner_sidebar_button}>•  IPv6 Routing Table</button>
        </div>)}
     </>  
  );
});
