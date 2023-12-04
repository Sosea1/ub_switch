import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './PortSecurity_Default.module.css';

interface Props {
  className?: string;
}
/* @figmaId 241:792 */
export const PortSecurity_Default: FC<Props> = memo(function PortSecurity_Default(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.portSecurity}>Port Security</div>
    </div>
  );
});
