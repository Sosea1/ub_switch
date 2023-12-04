import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Image3_Property1Default.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  hide?: {
    image3?: boolean;
  };
}
/* @figmaId 66:601 */
export const Image3_Property1Default: FC<Props> = memo(function Image3_Property1Default(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {!props.hide?.image3 && <div className={classes.image3}></div>}
    </div>
  );
});
