import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './L2PT_Default.module.css';

interface Props {
  className?: string;
}
/* @figmaId 173:1556 */
export const L2PT_Default: FC<Props> = memo(function L2PT_Default(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.l2PT}>L2PT</div>
    </div>
  );
});
