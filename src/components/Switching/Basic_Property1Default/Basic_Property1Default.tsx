import { memo, useEffect, useState } from 'react';
import type { FC, ReactElement } from 'react';
import classes from './Basic_Property1Default.module.css';
import { SlArrowRight } from 'react-icons/sl';
import ReactDomServer from 'react-dom/server'
import { useDispatch, useSelector } from 'react-redux';
import { CounterState, update } from '../../../main';
import { Port } from '../Port/Port';
import { DDM } from '../DDM/DDM';
import { LAG } from '../LAG/LAG';
import { MacAddress } from '../MacAddress/MacAddress';

interface Props {
  className?: string;
}

export const Basic_Property1Default: FC<Props> = memo(function Basic_Property1Default(props = {}) {
   
const ComponentOne =(): React.ReactNode  => {

  return <Port/>
 };
 
 
 const ComponentTwo = (): React.ReactNode =>  {
 
  return <DDM/>;
 
 };

 const ComponentThree = (): React.ReactNode =>  {
 
  return <LAG/>;
 };

 const ComponentFour = (): React.ReactNode =>  {
 
  return <MacAddress/>;
 
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
    console.log(a.backgroundColor)
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
      let key_ = "Basic-"+i
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
      <button id='Basic' className={classes.sidebar_button} onClick={() => {
         //вставляешь id вот этой баттоны
    const el = document.getElementById('Basic') as HTMLElement;
    let a = window.getComputedStyle(el);
    if (a.background == 'rgb(13, 89, 127)')
      {
      }
      
    else
      {
        handleUpdate('Basic') 
        setCurrentComponent(ComponentOne)
      }
    
    } } style={value != 'Basic'  ? {} : {background: '#0D597F', color: 'white', fontWeight: '700'} } >Basic
          {value != 'Basic' ? (
            <SlArrowRight style = {{transition: 'transform 0.15s ease-in-out'}} stroke="#c3c3c3" strokeWidth={50} color='#c3c3c3' size={16}/>
          ) : (
            <SlArrowRight style = {{transform: 'rotate(90deg)', transition: 'transform 0.15s ease-in-out'}}  stroke="white" strokeWidth={50} color='white' size={16}/>
          )
          }
          </button>
          {value == 'Basic' && (
          <div className={classes.div_bar}>
            <button id='Basic-1' style={{background:'#5AC3F8'}} onClick={() => click1("Basic-1", ComponentOne)} className={classes.inner_sidebar_button}>•  Port</button>
            <button id='Basic-2' onClick={() => click1("Basic-2", ComponentTwo)}  className={classes.inner_sidebar_button}>•  DDM</button>
            <button id='Basic-3' onClick={() => click1("Basic-3", ComponentThree)}  className={classes.inner_sidebar_button}>•  LAG</button>
            <button id='Basic-4' onClick={() => click1("Basic-4", ComponentFour)}  className={classes.inner_sidebar_button}>•  MAC Address</button>
          </div>)}
          
       </>  
  );
});
