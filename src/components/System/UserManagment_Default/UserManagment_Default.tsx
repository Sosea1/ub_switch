import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './UserManagment_Default.module.css';

interface Props {
  className?: string;
}
/* @figmaId 243:1096 */
export const UserManagment_Default: FC<Props> = memo(function UserManagment_Default(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.userManagment}>User Managment</div>
    </div>
  );
});
