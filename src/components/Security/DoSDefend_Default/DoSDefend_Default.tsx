import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './DoSDefend_Default.module.css';

interface Props {
  className?: string;
}
/* @figmaId 241:802 */
export const DoSDefend_Default: FC<Props> = memo(function DoSDefend_Default(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.doSDefend}>DoS Defend</div>
    </div>
  );
});
