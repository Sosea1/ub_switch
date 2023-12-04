import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { Vector3Icon } from './Vector3Icon.js';
import classes from './VioceVLAN_Property1Default.module.css';

interface Props {
  className?: string;
}
/* @figmaId 230:904 */
export const VioceVLAN_Property1Default: FC<Props> = memo(function VioceVLAN_Property1Default(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.voiceVLAN}>Voice VLAN</div>
      <div className={classes.vector3}>
        <Vector3Icon className={classes.icon} />
      </div>
    </div>
  );
});
