import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './SNMP_Property1Default.module.css';
import { Vector3Icon } from './Vector3Icon.js';

interface Props {
  className?: string;
}
/* @figmaId 187:760 */
export const SNMP_Property1Default: FC<Props> = memo(function SNMP_Property1Default(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.sNMP}>SNMP</div>
      <div className={classes.vector3}>
        <Vector3Icon className={classes.icon} />
      </div>
    </div>
  );
});
