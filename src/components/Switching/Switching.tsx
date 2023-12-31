import { memo, useEffect, useState } from 'react';
import type { FC, ReactElement } from 'react';

import resets from '../_resets.module.css';
import { Basic_Property1Variant2 } from './Basic_Property1Variant2/Basic_Property1Variant2';
import { Diagnose_Property1Default } from './Diagnose_Property1Default/Diagnose_Property1Default';
import { Extercom_logo11Icon } from './Extercom_logo11Icon.js';
import { Image3_Property1Default } from './Image3_Property1Default/Image3_Property1Default';
import { L2functions_Property1Variant3 } from './L2functions_Property1Variant3/L2functions_Property1Variant3';
import { L3functions_Property1Default } from './L3functions_Property1Default/L3functions_Property1Default';
import { Monitoring_Property1Default } from './Monitoring_Property1Default/Monitoring_Property1Default';
import { QoS_Property1Default } from './QoS_Property1Default/QoS_Property1Default';
import { Security_Property1Default } from './Security_Property1Default/Security_Property1Default';
import { SideMenu_Property1Switching } from './SideMenu_Property1Switching/SideMenu_Property1Switching';
import classes from './Switching.module.css';
import { System_Property1Default } from './System_Property1Default/System_Property1Default';
import { useDispatch } from 'react-redux';
import { update } from '../../main';
import ReactDomServer from 'react-dom/server'
import { Port } from './Port/Port';

interface Props {
  className?: string;
  hide?: {
    image3?: boolean;
  };
}
/* @figmaId 66:641 */
export const Switching: FC<Props> = memo(function Switching(props = {}) {

  
  const ComponentOne = (): React.ReactNode =>  {
 
    return <Port/>
   
   };

    const dispatch = useDispatch();

    const handleUpdate = (key: string) => {
      dispatch(update(key));
    };

    const [currentComponent, setCurrentComponent] = useState<React.ReactNode>(null);

    useEffect(() => {
      setCurrentComponent(currentComponent)
      var x = document.getElementById('switching_frame') as HTMLElement;
      x.innerHTML = ReactDomServer.renderToString(currentComponent as ReactElement);
    },[currentComponent])
 

    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
      setIsLoaded(true);
      handleUpdate('Basic') 
      setCurrentComponent(ComponentOne)
   }, []);

  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div id='switching_frame' className={classes.frame14} ></div>
      <SideMenu_Property1Switching
          className={classes.sideMenu}/>
      <div className={classes.mainMenu}>
        
        <Monitoring_Property1Default className={classes.monitoring} />
        <L2functions_Property1Variant3 className={classes.l2functions} />
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
        <div className={classes.exterCom_logo11}>
          <Extercom_logo11Icon className={classes.icon} />
        </div>
      </div>
    </div>
  );
});
