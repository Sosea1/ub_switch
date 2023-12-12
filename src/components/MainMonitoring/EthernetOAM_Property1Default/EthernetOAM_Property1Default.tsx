import { memo, useEffect, useState } from 'react';
import type { FC, ReactElement } from 'react';

import resets from '../../_resets.module.css';
import classes from './EthernetOAM_Property1Default.module.css';
import { Vector3Icon } from './Vector3Icon.js';
import { SlArrowDown, SlArrowRight } from 'react-icons/sl';
import ReactDomServer from 'react-dom/server'
import { OAMBasicConfig } from '../OAMBasicConfig/OAMBasicConfig';
import { OAMLinkMonitoring } from '../OAMLinkMonitoring/OAMLinkMonitoring';

interface Props {
  className?: string;
}
/* @figmaId 187:819 */
export const EthernetOAM_Property1Default: FC<Props> = memo(function EthernetOAM_Property1Default(props = {}) {
  
  const ComponentOne = (): React.ReactNode =>  {
 
    return <OAMBasicConfig/>;
   
   };
  
   const ComponentTwo= (): React.ReactNode =>  {
   
    return <OAMLinkMonitoring/>;
   
   };
  
   const ComponentThree = (): React.ReactNode =>  {
   
    return <div >Component Three</div>;
   
   };

   const ComponentFour = (): React.ReactNode =>  {
   
    return <div >Component Four</div>;
   
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
      for (let i = 1; i < 5; i++)
      {
        let key_ = "EthernetOAM-"+i
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
    <button id = "EthernetOAM" className={classes.sidebar_button} onClick={() => setIsOpen((prev)=>!prev)} style={!isOpen ? {} : {background: '#0D597F', color: 'white', fontWeight: '700'} } >EathernetOAM
        {!isOpen ? (
          <SlArrowRight style = {{transition: 'transform 0.15s ease-in-out'}} stroke="#c3c3c3" strokeWidth={50} color='#c3c3c3' size={16}/>
        ) : (
          <SlArrowRight style = {{transform: 'rotate(90deg)', transition: 'transform 0.15s ease-in-out'}}  stroke="white" strokeWidth={50} color='white' size={16}/>
        )
        }
        </button>
        {isOpen && (
          <div className={classes.div_bar}>
            <button id='EthernetOAM-1' onClick={() => click1("EthernetOAM-1", ComponentOne)} className={classes.inner_sidebar_button}>•  Basic Config</button>
            <button id='EthernetOAM-2' onClick={() => click1("EthernetOAM-2", ComponentTwo)}  className={classes.inner_sidebar_button}>•  Link Monitoring</button>
            <button id='EthernetOAM-3' onClick={() => click1("EthernetOAM-3", ComponentThree)}  className={classes.inner_sidebar_button}>•  Remote Failure Indication</button>
            <button id='EthernetOAM-4' onClick={() => click1("EthernetOAM-4", ComponentFour)}  className={classes.inner_sidebar_button}>•  Statistics</button>
          </div>)}
      </>
  );
});
