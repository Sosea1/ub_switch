import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './SpanningTree_Property1Default.module.css';
import { Vector3Icon } from './Vector3Icon.js';

interface Props {
  className?: string;
}
/* @figmaId 173:1477 */
export const SpanningTree_Property1Default: FC<Props> = memo(function SpanningTree_Property1Default(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.spanningTree}>Spanning Tree</div>
      <div className={classes.vector3}>
        <Vector3Icon className={classes.icon} />
      </div>
    </div>
  );
});
