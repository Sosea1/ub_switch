import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './SDMTemplate_Default.module.css';

interface Props {
  className?: string;
}
/* @figmaId 260:1222 */
export const SDMTemplate_Default: FC<Props> = memo(function SDMTemplate_Default(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.sDMTemplate}>SDM Template</div>
    </div>
  );
});
