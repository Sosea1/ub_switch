import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { _Property1Default } from '../_Property1Default/_Property1Default';
import classes from './SNMP_Property1Variant2.module.css';
import { Vector2Icon } from './Vector2Icon.js';

interface Props {
  className?: string;
}
/* @figmaId 187:769 */
export const SNMP_Property1Variant2: FC<Props> = memo(function SNMP_Property1Variant2(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.frame2}>
        <div className={classes.sNMP}>SNMP</div>
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
                  <div className={classes.textBlock}>Global Config</div>
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
                  <div className={classes.textBlock2}>SNMP v1/v2c</div>
                </li>
              </ul>
            </div>
          ),
        }}
      />
      <_Property1Default
        text={{
          aaaaaaaaa: (
            <div className={classes.aaaaaaaaa3}>
              <ul className={classes.list3}>
                <li>
                  <div className={classes.textBlock3}>SNMP v3</div>
                </li>
              </ul>
            </div>
          ),
        }}
      />
      <_Property1Default
        text={{
          aaaaaaaaa: (
            <div className={classes.aaaaaaaaa4}>
              <ul className={classes.list4}>
                <li>
                  <div className={classes.textBlock4}>Notification</div>
                </li>
              </ul>
            </div>
          ),
        }}
      />
      <_Property1Default
        text={{
          aaaaaaaaa: (
            <div className={classes.aaaaaaaaa5}>
              <ul className={classes.list5}>
                <li>
                  <div className={classes.textBlock5}>RMON</div>
                </li>
              </ul>
            </div>
          ),
        }}
      />
    </div>
  );
});
