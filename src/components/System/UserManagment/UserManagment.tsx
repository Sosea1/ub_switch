import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './UserManagment.module.css';

interface Props {
  className?: string;
}
/* @figmaId 524:1002 */
export const UserManagment: FC<Props> = memo(function UserManagment(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.frame16}>
        <div className={classes.frame22}>
          <div className={classes.rectangle4}></div>
          <div className={classes.rectangle5}></div>
          <div className={classes.frame23}>
            <div className={classes._1}>1</div>
            <div className={classes.admin}>admin</div>
            <div className={classes.admin2}>Admin</div>
          </div>
        </div>
        <div className={classes.frame21}>
          <div className={classes.userID}>User ID</div>
          <div className={classes.username}>Username</div>
          <div className={classes.accessLevel}>Access Level</div>
          <div className={classes.operation}>Operation</div>
        </div>
        <div className={classes.total1}>Total: 1</div>
        <div className={classes.line3}></div>
        <div className={classes.userConfig}>User Config</div>
        <div className={classes.link}>
          <div className={classes.add}>Add</div>
        </div>
        <div className={classes.link2}>
          <div className={classes.delete}>Delete</div>
        </div>
      </div>
    </div>
  );
});
