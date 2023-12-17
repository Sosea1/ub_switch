import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './IPv6StaticRouting.module.css';

interface Props {
  className?: string;
}
/* @figmaId 577:1161 */
export const IPv6StaticRouting: FC<Props> = memo(function IPv6StaticRouting(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.frame16}>
        <div className={classes.frame22}>
          <div className={classes.noEntriesInThisTable}>No entries in this table.</div>
          <div className={classes.rectangle4}></div>
          <div className={classes.rectangle5}></div>
          <div className={classes.frame17}></div>
        </div>
        <div className={classes.frame21}>
          <div className={classes.index}>Index</div>
          <div className={classes.iPv6Address}>IPv6 Address</div>
          <div className={classes.prefixLength}>Prefix Length</div>
          <div className={classes.nextHop}>Next Hop</div>
          <div className={classes.distance}>Distance</div>
          <div className={classes.metric}>Metric</div>
          <div className={classes.interfaceName}>Interface Name</div>
        </div>
        <div className={classes.total}>Total: 0</div>
        <div className={classes.line3}></div>
        <div className={classes.iPv6StaticRoutingConfig}>IPv6 Static Routing Config</div>
        <div className={classes.link}>
          <div className={classes.spanIcon}></div>
          <div className={classes.add}>Add</div>
        </div>
        <div className={classes.link2}>
          <div className={classes.spanIcon2}></div>
          <div className={classes.delete}>Delete</div>
        </div>
      </div>
    </div>
  );
});
