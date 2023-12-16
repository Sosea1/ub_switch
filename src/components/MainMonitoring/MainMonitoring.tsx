import { memo, useEffect, useState } from 'react';
import type { FC, JSXElementConstructor, ReactElement, ReactNode } from 'react';


import resets from '../_resets.module.css';
import { Diagnose_Property1Default } from './Diagnose_Property1Default/Diagnose_Property1Default';
import { Extercom_logo11Icon } from './Extercom_logo11Icon.js';
import { Image3_Property1Default } from './Image3_Property1Default/Image3_Property1Default';
import { L2functions_Property1Default } from './L2functions_Property1Default/L2functions_Property1Default';
import { L3functions_Property1Default } from './L3functions_Property1Default/L3functions_Property1Default';
import classes from './MainMonitoring.module.css';
import { Monitoring_Property1Variant3 } from './Monitoring_Property1Variant3/Monitoring_Property1Variant3';
import { QoS_Property1Default } from './QoS_Property1Default/QoS_Property1Default';
import { Security_Property1Default } from './Security_Property1Default/Security_Property1Default';
import { SideMenu_Property1Monitoring } from './SideMenu_Property1Monitoring/SideMenu_Property1Monitoring';
import { SNMP_Property1Variant2 } from './SNMP_Property1Variant2/SNMP_Property1Variant2';
import { System_Property1Default } from './System_Property1Default/System_Property1Default';
import { useDispatch, useSelector } from 'react-redux';
import { CounterState, update } from '../../main';
import { SystemMonitoring } from './SystemMonitoring/SystemMonitoring';
import ReactDomServer from 'react-dom/server'



interface Props {
  className?: string;
  hide?: {
    image3?: boolean;
  };
}


/* @figmaId 1:2 */
export const MainMonitoring: FC<Props> = memo(function MainMonitoring(props = {}) {

  const ComponentOne = (): React.ReactNode =>  {
 
    return <SystemMonitoring/>;
   
   };

    const dispatch = useDispatch();

    const handleUpdate = (key: string) => {
      dispatch(update(key));
    };

    const [currentComponent, setCurrentComponent] = useState<React.ReactNode>(null);

    useEffect(() => {
      setCurrentComponent(currentComponent)
      var x = document.getElementById('monitoring_frame') as HTMLElement;
      x.innerHTML = ReactDomServer.renderToString(currentComponent as ReactElement);
    },[currentComponent])
 

    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
      setIsLoaded(true);
      handleUpdate('SystemMonitor') 
      setCurrentComponent(ComponentOne)
   }, []);

  return (
    
    <div id="monitoring_main" className={`${resets.storybrainResets} ${classes.root}`}>
      <div id='monitoring_frame' className={classes.frame14} >
      </div>
      <SideMenu_Property1Monitoring
        className={classes.sideMenu}
      />
      <div className={classes.mainMenu}>
        <L2functions_Property1Default className={classes.l2functions}/>
        <L3functions_Property1Default className={classes.l3functions} />
        <QoS_Property1Default className={classes.qoS} />
        <Security_Property1Default
          className={classes.security}
          classes={{ thenounproject1: classes.thenounproject1 }}
        />
        <System_Property1Default className={classes.system} classes={{ settings1: classes.settings1 }} />
        <Diagnose_Property1Default
          className={classes.diagnose}
          classes={{ pngtree_diagnosis_file_icon_pn: classes.pngtree_diagnosis_file_icon_pn }}
         />
        <Monitoring_Property1Variant3 className={classes.monitoring} />
        <div className={classes.exterCom_logo11}>
          <Extercom_logo11Icon className={classes.icon} />
        </div>
      </div>
    </div>
  );
});


