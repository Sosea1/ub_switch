import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './SchedulerConfig.module.css';

interface Props {
  className?: string;
}
/* @figmaId 492:13505 */
export const SchedulerConfig: FC<Props> = memo(function SchedulerConfig(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.frame16}>
        <div className={classes.frame22}>
          <div className={classes.noEntriesInThisTable}>No entries in this table.</div>
          <div className={classes.rectangle4}></div>
          <div className={classes.rectangle5}></div>
          <div className={classes.frame17}></div>
        </div>
        <div className={classes.frame21}>
          <div className={classes.queueTCId}>Queue TC-id</div>
          <div className={classes.schedulerType}>Scheduler Type</div>
          <div className={classes.queueWeight}>Queue Weight</div>
          <div className={classes.managementType}>Management Type</div>
        </div>
        <div className={classes.total}>Total: 0</div>
        <div className={classes.line3}></div>
        <div className={classes.schedulerConfig}>Scheduler Config</div>
        <div className={classes.image6}></div>
        <div className={classes.port11}>Port 1/0/1</div>
      </div>
    </div>
  );
});
