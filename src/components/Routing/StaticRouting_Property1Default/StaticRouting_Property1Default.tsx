import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './StaticRouting_Property1Default.module.css';
import { Vector3Icon } from './Vector3Icon.js';

interface Props {
  className?: string;
}
/* @figmaId 230:702 */
export const StaticRouting_Property1Default: FC<Props> = memo(function StaticRouting_Property1Default(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.staticRouting}>Static Routing</div>
      <div className={classes.vector3}>
        <Vector3Icon className={classes.icon} />
      </div>
    </div>
  );
});
