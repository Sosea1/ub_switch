import { memo, useEffect, useState } from 'react';
import type { FC, ReactElement } from 'react';
import classes from './SFlow_Property1Default.module.css';
import { SlArrowDown, SlArrowRight } from 'react-icons/sl';
import ReactDomServer from 'react-dom/server'
import { SflowAgent } from '../SflowAgent/SflowAgent';
import { SflowCollector } from '../SflowCollector/SflowCollector';
import { SflowSampler } from '../SflowSampler/SflowSampler';
import { useDispatch, useSelector } from 'react-redux';
import { CounterState, update } from '../../../main';

interface Props {
  className?: string;
}
/* @figmaId 187:742 */
export const SFlow_Property1Default: FC<Props> = memo(function SFlow_Property1Default(props = {}) {

  const ComponentOne = (): React.ReactNode =>  {
 
    return <SflowAgent/>;
   
   };
  
   const ComponentTwo= (): React.ReactNode =>  {
   
    return <SflowCollector/>;
   
   };
  
   const ComponentThree = (): React.ReactNode =>  {
   
    return <SflowSampler/>;
   
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
        let key_ = "SFlow-"+i
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
    <button id ="sFlow" className={classes.sidebar_button} onClick={() => {
      handleUpdate('sFlow')
      let test = (document.getElementById("sFlow") as HTMLElement);
      let a = window.getComputedStyle(test);
      if (a.background == 'rgb(13, 89, 127)')
    {
    }
    else
    {
      handleUpdate('sFlow')
      setCurrentComponent(ComponentOne)
    }
  }
     } style={value != 'sFlow' ? {} : {background: '#0D597F', color: 'white', fontWeight: '700'} } >SFlow
        {value != 'sFlow' ? (
          <SlArrowRight style = {{transition: 'transform 0.15s ease-in-out'}} stroke="#c3c3c3" strokeWidth={50} color='#c3c3c3' size={16}/>
        ) : (
          <SlArrowRight style = {{transform: 'rotate(90deg)', transition: 'transform 0.15s ease-in-out'}}  stroke="white" strokeWidth={50} color='white' size={16}/>
        )
        }
        </button>
        {value == 'sFlow' && (
          <div className={classes.div_bar}>
            <button id='SFlow-1' style={{background:'#5AC3F8'}} onClick={() => click1("SFlow-1", ComponentOne)} className={classes.inner_sidebar_button}>•  sFlow Agent</button>
            <button id='SFlow-2' onClick={() => click1("SFlow-2", ComponentTwo)}  className={classes.inner_sidebar_button}>•  sFlow Collector</button>
            <button id='SFlow-3' onClick={() => click1("SFlow-3", ComponentThree)}  className={classes.inner_sidebar_button}>•  sFlow Sampler</button>
          </div>)}
      </>
  );
});
