import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { Basic_Property1Default } from '../Basic_Property1Default/Basic_Property1Default';
import { L2PT_Default } from '../L2PT_Default/L2PT_Default';
import { LLDP_Property1Default } from '../LLDP_Property1Default/LLDP_Property1Default';
import { Multicast_Property1Default } from '../Multicast_Property1Default/Multicast_Property1Default';
import { PPPoE_Default } from '../PPPoE_Default/PPPoE_Default';
import { SpanningTree_Property1Default } from '../SpanningTree_Property1Default/SpanningTree_Property1Default';
import { VLAN_Property1Default } from '../VLAN_Property1Default/VLAN_Property1Default';
import classes from './SideMenu_Property1Switching.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}

export const SideMenu_Property1Switching: FC<Props> = memo(function SideMenu_Property1Switching(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.frame8}>
        <Basic_Property1Default />
        <VLAN_Property1Default />
        <Multicast_Property1Default />
        <SpanningTree_Property1Default />
        <LLDP_Property1Default />
        <L2PT_Default />
        <PPPoE_Default />
      </div>
    </div>
  );
});

