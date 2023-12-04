import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Basic_Property1Default.module.css';
import { Vector3Icon } from './Vector3Icon.js';

interface Props {
  className?: string;
}
/* @figmaId 173:989 */
export const Basic_Property1Default: FC<Props> = memo(function Basic_Property1Default(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.basic}>Basic</div>
      <div className={classes.vector3}>
        <Vector3Icon className={classes.icon} />
      </div>
    </div>
  );
});
