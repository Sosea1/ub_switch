import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './ServerGroup.module.css';

interface Props {
  className?: string;
}
/* @figmaId 452:5529 */
export const ServerGroup: FC<Props> = memo(function ServerGroup(props = {}) {
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
          <div className={classes.index}>Index</div>
          <div className={classes.serverGroup}>Server Group</div>
          <div className={classes.serverType}>Server Type</div>
          <div className={classes.serverIP}>Server IP</div>
          <div className={classes.operation}>Operation</div>
        </div>
        <div className={classes.total}>Total: 0</div>
        <div className={classes.line3}></div>
        <div className={classes.serverGroupConfig}>
          <div className={classes.textBlock}>Server Group Config</div>
          <div className={classes.textBlock2}>
            <p></p>
          </div>
        </div>
        <div className={classes.link}>
          <div className={classes.spanIcon}></div>
          <div className={classes.add}>Add</div>
        </div>
        <div className={classes.link2}>
          <div className={classes.spanIcon2}></div>
          <div className={classes.delete}>Delete</div>
        </div>
      </div>
    </div>
  );
});
