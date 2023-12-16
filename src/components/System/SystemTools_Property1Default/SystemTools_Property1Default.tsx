import { memo, useEffect, useState } from 'react';
import type { FC, ReactElement } from 'react';

import resets from '../../_resets.module.css';
import classes from './SystemTools_Property1Default.module.css';
import { Vector3Icon } from './Vector3Icon.js';
import { SlArrowRight } from 'react-icons/sl';
import { CounterState, update } from '../../../main';
import { useDispatch, useSelector } from 'react-redux';
import ReactDomServer from 'react-dom/server'
import { BootConfig } from '../BootConfig/BootConfig';
import { RestoreConfig } from '../RestoreConfig/RestoreConfig';
import { BackupConfig } from '../BackupConfig/BackupConfig';
import { FirmwareUpgrade } from '../FirmwareUpgrade/FirmwareUpgrade';
import { DHCPAutoInstall } from '../DHCPAutoInstall/DHCPAutoInstall';
import { SystemReboot } from '../SystemReboot/SystemReboot';
import { SystemReset } from '../SystemReset/SystemReset';

interface Props {
  className?: string;
}
/* @figmaId 243:1003 */
export const SystemTools_Property1Default: FC<Props> = memo(function SystemTools_Property1Default(props = {}) {
  const ComponentOne =(): React.ReactNode  => {

    return <BootConfig/>
   };
   
   
   const ComponentTwo = (): React.ReactNode =>  {
   
    return <RestoreConfig/>;
   
   };
  
   const ComponentThree = (): React.ReactNode =>  {
   
    return <BackupConfig/>;
   };

   const ComponentFour = (): React.ReactNode =>  {
   
    return <FirmwareUpgrade/>;
   };

   const ComponentFive = (): React.ReactNode =>  {
   
    return <DHCPAutoInstall/>;
   };

   const ComponentSix = (): React.ReactNode =>  {
   
    return <SystemReboot/>;
   };

   const ComponentSeven = (): React.ReactNode =>  {
   
    return <SystemReset/>;
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
      for (let i = 1; i < 8; i++)
      {
        let key_ = "SystemTools-"+i
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
    <button id = "SystemTools" className={classes.sidebar_button} onClick={() => {
      let test = (document.getElementById("SystemTools") as HTMLElement);
      let a = window.getComputedStyle(test);
      if (a.background == 'rgb(13, 89, 127)')
    {

    }
    else
    {
      handleUpdate('SystemTools')
      setCurrentComponent(ComponentOne)
    }
    }} style={value != "SystemTools" ? {} : {background: '#0D597F', color: 'white', fontWeight: '700'} } >System Tools
        {value != "SystemTools" ? (
          <SlArrowRight style = {{transition: 'transform 0.15s ease-in-out'}} stroke="#c3c3c3" strokeWidth={50} color='#c3c3c3' size={16}/>
        ) : (
          <SlArrowRight style = {{transform: 'rotate(90deg)', transition: 'transform 0.15s ease-in-out'}}  stroke="white" strokeWidth={50} color='white' size={16}/>
        )
        }
        </button>
        {value == "SystemTools" && (
        <div className={classes.div_bar}>
          <button id='SystemTools-1' style={{background:'#5AC3F8'}} onClick={() => click1("SystemTools-1", ComponentOne)} className={classes.inner_sidebar_button}>•  Boot Config</button>
          <button id='SystemTools-2' onClick={() => click1("SystemTools-2", ComponentTwo)}  className={classes.inner_sidebar_button}>•  Restore Config</button>
          <button id='SystemTools-3' onClick={() => click1("SystemTools-3", ComponentThree)}  className={classes.inner_sidebar_button}>•  Backup Config</button>
          <button id='SystemTools-4' onClick={() => click1("SystemTools-4", ComponentFour)}  className={classes.inner_sidebar_button}>•  Firmware Upgrade</button>
          <button id='SystemTools-5' onClick={() => click1("SystemTools-5", ComponentFive)}  className={classes.inner_sidebar_button}>•  DHCP Auto Install</button>
          <button id='SystemTools-6' onClick={() => click1("SystemTools-6", ComponentSix)}  className={classes.inner_sidebar_button}>•  System Reboot</button>
          <button id='SystemTools-7' onClick={() => click1("SystemTools-7", ComponentSeven)}  className={classes.inner_sidebar_button}>•  System Reset</button>
        </div>)}
     </> 
  );
});
