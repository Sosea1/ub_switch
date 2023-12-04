import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './_Property1Default.module.css';

interface Props {
  className?: string;
  text?: {
    aaaaaaaaa?: ReactNode;
  };
}
/* @figmaId 187:814 */
export const _Property1Default: FC<Props> = memo(function _Property1Default(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      {props.text?.aaaaaaaaa != null ? (
        props.text?.aaaaaaaaa
      ) : (
        <div className={classes.aaaaaaaaa}>
          <ul className={classes.list}>
            <li>
              <div className={classes.textBlock}>Port</div>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
});
