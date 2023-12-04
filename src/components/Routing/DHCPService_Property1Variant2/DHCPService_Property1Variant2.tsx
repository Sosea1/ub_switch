import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { _Property1Default } from '../_Property1Default/_Property1Default';
import classes from './DHCPService_Property1Variant2.module.css';
import { Vector2Icon } from './Vector2Icon.js';

interface Props {
  className?: string;
}
/* @figmaId 230:694 */
export const DHCPService_Property1Variant2: FC<Props> = memo(function DHCPService_Property1Variant2(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.frame2}>
        <div className={classes.dHCPService}>DHCP Service</div>
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
                  <div className={classes.textBlock}>DHCP Service</div>
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
                  <div className={classes.textBlock2}>DHCP Relay</div>
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
                  <div className={classes.textBlock3}>DHCP L2 Relay</div>
                </li>
              </ul>
            </div>
          ),
        }}
      />
    </div>
  );
});
