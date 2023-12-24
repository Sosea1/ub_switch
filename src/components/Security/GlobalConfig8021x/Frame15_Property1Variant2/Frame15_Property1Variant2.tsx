import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Frame15_Property1Variant2.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 264:1449 */
export const Frame15_Property1Variant2: FC<Props> = memo(function Frame15_Property1Variant2(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes._1921681}>192.168.0.1</div>
    </div>
  );
});
