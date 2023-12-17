import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { Frame15_Property1Variant2 } from '../Frame15_Property1Variant2/Frame15_Property1Variant2';
import classes from './_Property1Variant4.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  hide?: {
    _1921681?: boolean;
  };
}
/* @figmaId 264:1465 */
export const _Property1Variant4: FC<Props> = memo(function _Property1Variant4(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <Frame15_Property1Variant2
        className={classes.frame15}
        hide={{
          _1921681: props.hide?._1921681,
        }}
      />
    </div>
  );
});
