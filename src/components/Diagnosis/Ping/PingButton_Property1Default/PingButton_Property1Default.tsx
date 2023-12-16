import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './PingButton_Property1Default.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 266:1516 */
export const PingButton_Property1Default: FC<Props> = memo(function PingButton_Property1Default(props = {}) {
  return (
    <button
      className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}
    >
      <div className={classes.ping}>Ping</div>
    </button>
  );
});
