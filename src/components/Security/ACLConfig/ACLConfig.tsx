import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './ACLConfig.module.css';

interface Props {
  className?: string;
}
/* @figmaId 617:1670 */
export const ACLConfig: FC<Props> = memo(function ACLConfig(props = {}) {
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
          <div className={classes.aCLType}>ACL Type</div>
          <div className={classes.aCLID}>ACL ID</div>
          <div className={classes.aCLName}>ACL Name</div>
          <div className={classes.rules}>Rules</div>
          <div className={classes.operation}>Operation</div>
        </div>
        <div className={classes.total}>Total: 0</div>
        <div className={classes.line3}></div>
        <div className={classes.aCLConfig}>ACL Config</div>
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
