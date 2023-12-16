import { memo, useEffect, useState } from 'react';
import type { FC, ReactElement } from 'react';

import resets from '../_resets.module.css';
import { DHCPService_Property1Variant2 } from './DHCPService_Property1Variant2/DHCPService_Property1Variant2';
import { Diagnose_Property1Default } from './Diagnose_Property1Default/Diagnose_Property1Default';
import { Extercom_logo11Icon } from './Extercom_logo11Icon.js';
import { Image3_Property1Default } from './Image3_Property1Default/Image3_Property1Default';
import { L2functions_Property1Default } from './L2functions_Property1Default/L2functions_Property1Default';
import { L3functions_Property1Variant3 } from './L3functions_Property1Variant3/L3functions_Property1Variant3';
import { Monitoring_Property1Default } from './Monitoring_Property1Default/Monitoring_Property1Default';
import { QoS_Property1Default } from './QoS_Property1Default/QoS_Property1Default';
import classes from './Routing.module.css';
import { Security_Property1Default } from './Security_Property1Default/Security_Property1Default';
import { SideMenu_Property1Routing } from './SideMenu_Property1Routing/SideMenu_Property1Routing';
import { System_Property1Default } from './System_Property1Default/System_Property1Default';
import ReactDomServer from 'react-dom/server'
import { useDispatch } from 'react-redux';
import { update } from '../../main';
import { IPv4Table } from './IPv4Table/IPv4Table';

interface Props {
  className?: string;
  hide?: {
    image3?: boolean;
  };
}
/* @figmaId 66:709 */
export const Routing: FC<Props> = memo(function Routing(props = {}) {
  const ComponentOne = (): React.ReactNode =>  {
 
    return <IPv4Table/>;
   
   };

    const dispatch = useDispatch();

    const handleUpdate = (key: string) => {
      dispatch(update(key));
    };

    const [currentComponent, setCurrentComponent] = useState<React.ReactNode>(null);

    useEffect(() => {
      setCurrentComponent(currentComponent)
      var x = document.getElementById('routing_frame') as HTMLElement;
      x.innerHTML = ReactDomServer.renderToString(currentComponent as ReactElement);
    },[currentComponent])
 

    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
      setIsLoaded(true);
      handleUpdate('RoutingTable') 
      setCurrentComponent(ComponentOne)
   }, []);

  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
       <div id='routing_frame' className={classes.frame14} ></div>
      <SideMenu_Property1Routing
        className={classes.sideMenu}
      />
      <div className={classes.mainMenu}>
        <L2functions_Property1Default className={classes.l2functions} />
        <L3functions_Property1Variant3 className={classes.l3functions} />
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
        <Monitoring_Property1Default className={classes.monitoring} />
        <div className={classes.exterCom_logo11}>
          <Extercom_logo11Icon className={classes.icon} />
        </div>
      </div>
    </div>
  );
});
