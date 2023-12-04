import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './PPPoE_Default.module.css';

interface Props {
  className?: string;
}
/* @figmaId 173:1567 */
export const PPPoE_Default: FC<Props> = memo(function PPPoE_Default(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.pPPoE}>PPPoE</div>
    </div>
  );
});
