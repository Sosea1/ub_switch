import { memo, useEffect, useState } from 'react';
import type { FC, ReactElement } from 'react';

import resets from '../../_resets.module.css';
import classes from './StaticRouting_Property1Default.module.css';
import { Vector3Icon } from './Vector3Icon.js';
import { SlArrowRight } from 'react-icons/sl';
import ReactDomServer from 'react-dom/server'

interface Props {
  className?: string;
}
/* @figmaId 230:702 */
export const StaticRouting_Property1Default: FC<Props> = memo(function StaticRouting_Property1Default(props = {}) {
  const ComponentOne =(): React.ReactNode  => {

    return <>1</>
   };
   
   
   const ComponentTwo = (): React.ReactNode =>  {
   
    return <div>2</div>;
   
   };
  
   const ComponentThree = (): React.ReactNode =>  {
   
    return <>3</>;
   };
  
   const ComponentFour = (): React.ReactNode =>  {
   
    return <>4</>;
   
   };

  
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
        let key_ = "StaticRouting-"+i
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
    <button id = "StaticRouting" className={classes.sidebar_button} onClick={() => setIsOpen((prev)=>!prev)} style={!isOpen ? {} : {background: '#0D597F', color: 'white', fontWeight: '700'} } >Static Routing
        {!isOpen ? (
          <SlArrowRight style = {{transition: 'transform 0.15s ease-in-out'}} stroke="#c3c3c3" strokeWidth={50} color='#c3c3c3' size={16}/>
        ) : (
          <SlArrowRight style = {{transform: 'rotate(90deg)', transition: 'transform 0.15s ease-in-out'}}  stroke="white" strokeWidth={50} color='white' size={16}/>
        )
        }
        </button>
        {isOpen && (
        <div className={classes.div_bar}>
          <button id='StaticRouting-1' onClick={() => click1("StaticRouting-1", ComponentOne)} className={classes.inner_sidebar_button}>•  IPv4 Static Routing</button>
          <button id='StaticRouting-2' onClick={() => click1("StaticRouting-2", ComponentTwo)}  className={classes.inner_sidebar_button}>•  IPv6 Static Routing</button>
        </div>)}
        
     </>  
  );
});
