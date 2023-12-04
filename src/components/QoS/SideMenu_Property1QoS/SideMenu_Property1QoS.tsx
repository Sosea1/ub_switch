import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { AutoVoIP_Default } from '../AutoVoIP_Default/AutoVoIP_Default';
import { BandwigthControl_Property1Defa } from '../BandwigthControl_Property1Defa/BandwigthControl_Property1Defa';
import { ClassOfService_Property1Defaul } from '../ClassOfService_Property1Defaul/ClassOfService_Property1Defaul';
import { VioceVLAN_Property1Default } from '../VioceVLAN_Property1Default/VioceVLAN_Property1Default';
import classes from './SideMenu_Property1QoS.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 112:948 */
export const SideMenu_Property1QoS: FC<Props> = memo(function SideMenu_Property1QoS(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.frame8}>
        <ClassOfService_Property1Defaul />
        <BandwigthControl_Property1Defa />
        <VioceVLAN_Property1Default />
        <AutoVoIP_Default />
      </div>
    </div>
  );
});
