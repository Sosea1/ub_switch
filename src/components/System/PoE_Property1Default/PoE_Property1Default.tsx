import { memo, useEffect, useState } from 'react';
import type { FC, ReactElement } from 'react';

import resets from '../../_resets.module.css';
import classes from './PoE_Property1Default.module.css';
import { Vector3Icon } from './Vector3Icon.js';
import { SlArrowRight } from 'react-icons/sl';
import { CounterState, update } from '../../../main';
import { useDispatch, useSelector } from 'react-redux';
import ReactDomServer from 'react-dom/server'
import { PoEConfig } from '../PoEConfig/PoEConfig';
import { PoEProfileConfig } from '../PoEProfileConfig/PoEProfileConfig';
import { GlobalConfig } from '../GlobalConfig/GlobalConfig';

interface Props {
  className?: string;
}
/* @figmaId 243:1136 */
export const PoE_Property1Default: FC<Props> = memo(function PoE_Property1Default(props = {}) {
  const ComponentOne =(): React.ReactNode  => {

    return <PoEConfig/>
   };
   
   
   const ComponentTwo = (): React.ReactNode =>  {
   
    return <PoEProfileConfig/>;
   
   };
  
   const ComponentThree = (): React.ReactNode =>  {
   
    return <GlobalConfig/>;
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
        let key_ = "PoE-"+i
        if(key_ != key)
        {
         (document.getElementById(key_) as HTMLElement).style.backgroundColor = '#E2F5FF';
        }
       
      }
      
      }
      
      useEffect(() => {
        setCurrentComponent(currentComponent)
        var x = document.getElementById('system_frame') as HTMLElement;
        x.innerHTML = ReactDomServer.renderToString(currentComponent as ReactElement);
      },[currentComponent])
  

  return (
    <>
    <button id = "PoE" className={classes.sidebar_button} onClick={() => {
      let test = (document.getElementById("PoE") as HTMLElement);
      let a = window.getComputedStyle(test);
      if (a.background == 'rgb(13, 89, 127)')
    {

    }
    else
    {
      handleUpdate('PoE')
      setCurrentComponent(ComponentOne)
    }
    }} style={value != "PoE" ? {} : {background: '#0D597F', color: 'white', fontWeight: '700'} } >PoE
        {value != "PoE" ? (
          <SlArrowRight style = {{transition: 'transform 0.15s ease-in-out'}} stroke="#c3c3c3" strokeWidth={50} color='#c3c3c3' size={16}/>
        ) : (
          <SlArrowRight style = {{transform: 'rotate(90deg)', transition: 'transform 0.15s ease-in-out'}}  stroke="white" strokeWidth={50} color='white' size={16}/>
        )
        }
        </button>
        {value == "PoE" && (
        <div className={classes.div_bar}>
          <button id='PoE-1' style={{background:'#5AC3F8'}} onClick={() => click1("PoE-1", ComponentOne)} className={classes.inner_sidebar_button}>•  PoE Config</button>
          <button id='PoE-2' onClick={() => click1("PoE-2", ComponentTwo)}  className={classes.inner_sidebar_button}>•  PoE Profile</button>
          <button id='PoE-3' onClick={() => click1("PoE-3", ComponentThree)}  className={classes.inner_sidebar_button}>•  PoE Auto Recovery</button>
        </div>)}
     </> 
  );
});
