import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { ARP_Property1Default } from '../ARP_Property1Default/ARP_Property1Default';
import { DHCPService_Property1Default } from '../DHCPService_Property1Default/DHCPService_Property1Default';
import { Interface_Default } from '../Interface_Default/Interface_Default';
import { RoutingTable_Property1Default } from '../RoutingTable_Property1Default/RoutingTable_Property1Default';
import { StaticRouting_Property1Default } from '../StaticRouting_Property1Default/StaticRouting_Property1Default';
import classes from './SideMenu_Property1Routing.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    dHCPService?: ReactNode;
  };
}
/* @figmaId 112:931 */
export const SideMenu_Property1Routing: FC<Props> = memo(function SideMenu_Property1Routing(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.frame8}>
        <RoutingTable_Property1Default />
        <ARP_Property1Default />
        <Interface_Default />
        <StaticRouting_Property1Default />
        <DHCPService_Property1Default />
      </div>
    </div>
  );
});
