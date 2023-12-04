import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Interface_Default.module.css';

interface Props {
  className?: string;
}
/* @figmaId 230:718 */
export const Interface_Default: FC<Props> = memo(function Interface_Default(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.interface}>Interface</div>
    </div>
  );
});
