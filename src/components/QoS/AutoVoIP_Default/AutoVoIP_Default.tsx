import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './AutoVoIP_Default.module.css';

interface Props {
  className?: string;
}
/* @figmaId 230:937 */
export const AutoVoIP_Default: FC<Props> = memo(function AutoVoIP_Default(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.autoVoIP}>Auto VoIP</div>
    </div>
  );
});
