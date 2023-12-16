import { memo, useEffect, useState } from 'react';
import type { FC, ReactElement } from 'react';

import resets from '../../_resets.module.css';
import classes from './SpanningTree_Property1Default.module.css';
import { Vector3Icon } from './Vector3Icon.js';
import { SlArrowRight } from 'react-icons/sl';
import ReactDomServer from 'react-dom/server'
import { useDispatch, useSelector } from 'react-redux';
import { CounterState, update } from '../../../main';
import { STPConfig } from '../STPConfig/STPConfig';
import { PortConfig } from '../PortConfig/PortConfig';
import { MSTPInstance } from '../MSTPInstance/MSTPInstance';
import { STPSecurity } from '../STPSecurity/STPSecurity';

interface Props {
  className?: string;
}
/* @figmaId 173:1477 */
export const SpanningTree_Property1Default: FC<Props> = memo(function SpanningTree_Property1Default(props = {}) {
  const ComponentOne =(): React.ReactNode  => {

    return <STPConfig/>
   };
   
   
   const ComponentTwo = (): React.ReactNode =>  {
   
    return <PortConfig/>;
   
   };
  
   const ComponentThree = (): React.ReactNode =>  {
   
    return <MSTPInstance/>;
   };

   const ComponentFour = (): React.ReactNode =>  {
   
    return <STPSecurity/>;
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
      for (let i = 1; i < 5; i++)
      {
        let key_ = "SpanningTree-"+i
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
    <button id = "SpanningTree" className={classes.sidebar_button} onClick={() => {
      let test = (document.getElementById("SpanningTree") as HTMLElement);
      let a = window.getComputedStyle(test);
      if (a.background == 'rgb(13, 89, 127)')
    {

    }
    else
    {
      handleUpdate('SpanningTree')
      setCurrentComponent(ComponentOne)
    }
    }} style={value != "SpanningTree"  ? {} : {background: '#0D597F', color: 'white', fontWeight: '700'} } >Spanning Tree
        {value != "SpanningTree"  ? (
          <SlArrowRight style = {{transition: 'transform 0.15s ease-in-out'}} stroke="#c3c3c3" strokeWidth={50} color='#c3c3c3' size={16}/>
        ) : (
          <SlArrowRight style = {{transform: 'rotate(90deg)', transition: 'transform 0.15s ease-in-out'}}  stroke="white" strokeWidth={50} color='white' size={16}/>
        )
        }
        </button>
        {value == "SpanningTree" && (
        <div className={classes.div_bar}>
          <button id='SpanningTree-1'  style={{background:'#5AC3F8'}} onClick={() => click1("SpanningTree-1", ComponentOne)} className={classes.inner_sidebar_button}>•  STP Config</button>
          <button id='SpanningTree-2' onClick={() => click1("SpanningTree-2", ComponentTwo)}  className={classes.inner_sidebar_button}>•  Port Config</button>
          <button id='SpanningTree-3' onClick={() => click1("SpanningTree-3", ComponentThree)}  className={classes.inner_sidebar_button}>•  MSTP Instance</button>
          <button id='SpanningTree-4' onClick={() => click1("SpanningTree-4", ComponentFour)}  className={classes.inner_sidebar_button}>•  STP Security</button>
        </div>)}
        
     </>  
  );
});
