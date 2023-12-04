import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './EEE_Default.module.css';

interface Props {
  className?: string;
}
/* @figmaId 243:1106 */
export const EEE_Default: FC<Props> = memo(function EEE_Default(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.eEE}>EEE</div>
    </div>
  );
});
