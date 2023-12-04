import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './SystemMonitor_Default.module.css';

interface Props {
  className?: string;
}
/* @figmaId 187:863 */
export const SystemMonitor_Default: FC<Props> = memo(function SystemMonitor_Default(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.systemMonitor}>System Monitor</div>
    </div>
  );
});
