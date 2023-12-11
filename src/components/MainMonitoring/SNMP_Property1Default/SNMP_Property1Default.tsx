import { memo, useEffect, useState } from 'react';
import type { FC, JSXElementConstructor, ReactElement, ReactNode } from 'react';


import classes from './SNMP_Property1Default.module.css';

import { SlArrowRight } from 'react-icons/sl';
import ReactDomServer from 'react-dom/server'
import { createRoot } from 'react-dom/client';
import { _Property1Variant4 } from '../../Diagnosis/_Property1Variant4/_Property1Variant4';
import { PingButton_Property1Default } from '../../Diagnosis/PingButton_Property1Default/PingButton_Property1Default';

interface Props {
  className?: string;
}




export const SNMP_Property1Default: FC<Props> = memo(function SNMP_Property1Default(props = {}) {
  
  
const ComponentOne =(): React.ReactNode  => {

  return <div className={classes.frame19}>
  <div className={classes.ping}>Ping </div>
  <div className={classes.line1}></div>
  <div className={classes.frame16}>
    <div className={classes.destinationIP}>Destination IP: </div>
    <_Property1Variant4 className={classes.unnamed} />
    <div className={classes.dataSize}>Data Size: </div>
    <_Property1Variant4
      className={classes.unnamed2}
      text={{
        _1921681: <div className={classes._1921681}>64</div>,
      }}
    />
    <div className={classes.interval}>Interval: </div>
    <_Property1Variant4
      className={classes.unnamed3}
      text={{
        _1921681: <div className={classes._19216812}>1000</div>,
      }}
    />
    <div className={classes.pingTimes}>Ping Times: </div>
    <_Property1Variant4
      className={classes.unnamed4}
      text={{
        _1921681: <div className={classes._19216813}>10</div>,
      }}
    />
    <PingButton_Property1Default className={classes.pingButton} />
    <div className={classes.frame17}>
      <div className={classes.frame18}>
        <div className={classes.pinging1921681With64BytesOfDat}>
          <div className={classes.textBlock}>Pinging 192.168.0.1 with 64 bytes of data:</div>
          <div className={classes.textBlock2}>Reply from 3001::1234 : bytes=64 time=16ms</div>
          <div className={classes.textBlock3}>Reply from 192.168.0.146 : bytes=64 time=16ms TTL=64</div>
          <div className={classes.textBlock4}>Destination Host Unreachable!</div>
          <div className={classes.textBlock5}>Request Timeout.</div>
        </div>
      </div>
      <div className={classes.packetsSent4Received4LossLoss}>
        <p className={classes.labelWrapper}>
          <span className={classes.label}>Packets: </span>
          <span className={classes.label2}>Sent=4, Received=4, Loss=0 (0%Loss)</span>
        </p>
      </div>
      <div className={classes.maximum2msMinimum1msAverage1ms}>
        <p className={classes.labelWrapper2}>
          <span className={classes.label3}>Maximum</span>
          <span className={classes.label4}>=2ms, Minimum=1ms, Average=1ms</span>
        </p>
        <div className={classes.textBlock6}>
          <p></p>
        </div>
      </div>
    </div>
    <div className={classes.rectangle4}></div>
    <div className={classes.pingResult}>Ping Result</div>
    <div className={classes.oK}>OK</div>
  </div>
</div>;
  
 };
 
 
 const ComponentTwo = (): React.ReactNode =>  {
 
  return <div >Component Two</div>;
 
 };


  const [currentComponent, setCurrentComponent] = useState<React.ReactNode>(null);


  const [isOpen, setIsOpen] = useState(false)


  function click1(key:string, newComponent:any):void {
    let test = (document.getElementById(key) as HTMLElement);
    
    let a = window.getComputedStyle(test);
    if (a.backgroundColor != 'rgb(226, 245, 255)')
    {
      console.log("if done")
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
      if(i != +key)
      {
       (document.getElementById(i.toString()) as HTMLElement).style.backgroundColor = '#E2F5FF';
      }
     
    }
    
    }
    
    useEffect(() => {
      console.log(currentComponent)
      setCurrentComponent(currentComponent)
      var x = document.getElementById('monitoring_frame') as HTMLElement;
      x.innerHTML = ReactDomServer.renderToString(currentComponent as ReactElement);
    },[currentComponent])

  return (
    <>
    <button className={classes.sidebar_button} onClick={() => setIsOpen((prev)=>!prev)} style={!isOpen ? {} : {background: '#0D597F', color: 'white', fontWeight: '700'} } >SNMP
        {!isOpen ? (
          <SlArrowRight style = {{transition: 'transform 0.15s ease-in-out'}} stroke="#c3c3c3" strokeWidth={50} color='#c3c3c3' size={16}/>
        ) : (
          <SlArrowRight style = {{transform: 'rotate(90deg)', transition: 'transform 0.15s ease-in-out'}}  stroke="white" strokeWidth={50} color='white' size={16}/>
        )
        }
        </button>
        {isOpen && (
        <div className={classes.div_bar}>
          <button id='1' onClick={() => click1("1", ComponentOne)} className={classes.inner_sidebar_button}>•  Global Config</button>
          <button id='2' onClick={() => click1("2", ComponentOne)}  className={classes.inner_sidebar_button}>•  SNMP v1/v2c</button>
          <button id='3' onClick={() => click1("3", ComponentTwo)}  className={classes.inner_sidebar_button}>•  SNMP v3</button>
          <button id='4' onClick={() => click1("4", ComponentOne)}  className={classes.inner_sidebar_button}>•  Notification</button>
          <button id='5' onClick={() => click1("5", ComponentOne)}  className={classes.inner_sidebar_button}>•  RMON</button>
          
        </div>)}
        
     </>  
  );
});


