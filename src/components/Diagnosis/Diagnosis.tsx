import { memo, useEffect, useState } from 'react';
import type { FC, ReactElement } from 'react';

import resets from '../_resets.module.css';
import { _Property1Variant4 } from './_Property1Variant4/_Property1Variant4';
import { Diagnose_Property1Variant3 } from './Diagnose_Property1Variant3/Diagnose_Property1Variant3';
import classes from './Diagnosis.module.css';
import { Extercom_logo11Icon } from './Extercom_logo11Icon.js';
import { L2functions_Property1Default } from './L2functions_Property1Default/L2functions_Property1Default';
import { L3functions_Property1Default } from './L3functions_Property1Default/L3functions_Property1Default';
import { Monitoring_Property1Default } from './Monitoring_Property1Default/Monitoring_Property1Default';
import { NetworkDiagnostics_Property1Va } from './NetworkDiagnostics_Property1Va/NetworkDiagnostics_Property1Va';
import { PingButton_Property1Default } from './PingButton_Property1Default/PingButton_Property1Default';
import { QoS_Property1Default } from './QoS_Property1Default/QoS_Property1Default';
import { Security_Property1Default } from './Security_Property1Default/Security_Property1Default';
import { SideMenu_Property1Diagnosis } from './SideMenu_Property1Diagnosis/SideMenu_Property1Diagnosis';
import { System_Property1Default } from './System_Property1Default/System_Property1Default';
import ReactDomServer from 'react-dom/server'
import { useDispatch } from 'react-redux';
import { update } from '../../main';
import { Ping } from './Ping/Ping';

interface Props {
  className?: string;
}
/* @figmaId 66:981 */
export const Diagnosis: FC<Props> = memo(function Diagnosis(props = {}) {

  const ComponentOne = (): React.ReactNode =>  {
 
    return <Ping/>;
   
   };

    const dispatch = useDispatch();

    const handleUpdate = (key: string) => {
      dispatch(update(key));
    };

    const [currentComponent, setCurrentComponent] = useState<React.ReactNode>(null);

    useEffect(() => {
      setCurrentComponent(currentComponent)
      var x = document.getElementById('diagnosis_frame') as HTMLElement;
      x.innerHTML = ReactDomServer.renderToString(currentComponent as ReactElement);
    },[currentComponent])
 

    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
      setIsLoaded(true);
      handleUpdate('NetworkD') 
      setCurrentComponent(ComponentOne)
   }, []);

  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div id='diagnosis_frame' className={classes.frame14} ></div>
      <div className={classes.mainMenu}>
        <L2functions_Property1Default className={classes.l2functions} />
        <L3functions_Property1Default className={classes.l3functions} />
        <QoS_Property1Default className={classes.qoS} />
        <Security_Property1Default
          className={classes.security}
          classes={{ thenounproject1: classes.thenounproject1 }}
        />
        <System_Property1Default className={classes.system} classes={{ settings1: classes.settings1 }} />
        <Diagnose_Property1Variant3
          className={classes.diagnose}
          classes={{ pngtree_diagnosis_file_icon_pn: classes.pngtree_diagnosis_file_icon_pn }}
        />
        <Monitoring_Property1Default className={classes.monitoring} />
        <div className={classes.exterCom_logo11}>
          <Extercom_logo11Icon className={classes.icon} />
        </div>
      </div>
      <SideMenu_Property1Diagnosis className={classes.sideMenu}/>
    </div>
  );
});
