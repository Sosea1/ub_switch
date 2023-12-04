import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './TraficMonitor_Default.module.css';

interface Props {
  className?: string;
}
/* @figmaId 187:853 */
export const TraficMonitor_Default: FC<Props> = memo(function TraficMonitor_Default(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.trafficMonitor}>Traffic Monitor</div>
    </div>
  );
});
