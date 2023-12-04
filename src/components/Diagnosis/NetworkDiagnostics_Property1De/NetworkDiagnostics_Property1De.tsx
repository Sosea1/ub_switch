import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './NetworkDiagnostics_Property1De.module.css';
import { Vector3Icon } from './Vector3Icon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 260:1341 */
export const NetworkDiagnostics_Property1De: FC<Props> = memo(function NetworkDiagnostics_Property1De(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.networkDiagnostics}>Network Diagnostics</div>
      <div className={classes.vector3}>
        <Vector3Icon className={classes.icon} />
      </div>
    </div>
  );
});
