import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { _Property1Default } from '../_Property1Default/_Property1Default';
import classes from './NetworkDiagnostics_Property1Va.module.css';
import { Vector2Icon } from './Vector2Icon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 260:1350 */
export const NetworkDiagnostics_Property1Va: FC<Props> = memo(function NetworkDiagnostics_Property1Va(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.frame2}>
        <div className={classes.networkDiagnostics}>Network Diagnostics</div>
        <div className={classes.vector2}>
          <Vector2Icon className={classes.icon} />
        </div>
      </div>
      <_Property1Default
        text={{
          aaaaaaaaa: (
            <div className={classes.aaaaaaaaa}>
              <ul className={classes.list}>
                <li>
                  <div className={classes.textBlock}>Ping</div>
                </li>
              </ul>
            </div>
          ),
        }}
      />
      <_Property1Default
        text={{
          aaaaaaaaa: (
            <div className={classes.aaaaaaaaa2}>
              <ul className={classes.list2}>
                <li>
                  <div className={classes.textBlock2}>Tracert</div>
                </li>
              </ul>
            </div>
          ),
        }}
      />
    </div>
  );
});
