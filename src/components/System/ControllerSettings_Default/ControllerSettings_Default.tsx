import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './ControllerSettings_Default.module.css';

interface Props {
  className?: string;
}
/* @figmaId 260:1232 */
export const ControllerSettings_Default: FC<Props> = memo(function ControllerSettings_Default(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.controllerSettings}>Controller Settings</div>
    </div>
  );
});
