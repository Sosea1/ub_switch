import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { _Property1Variant4 } from './_Property1Variant4/_Property1Variant4';
import { PingButton_Property1Default } from './PingButton_Property1Default/PingButton_Property1Default';
import classes from './Tracert.module.css';

interface Props {
  className?: string;
}
/* @figmaId 543:1742 */
export const Tracert: FC<Props> = memo(function Tracert(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.tracert}>Tracert</div>
      <div className={classes.line1}></div>
      <div className={classes.frame16}>
        <div className={classes.destinationIP}>Destination IP: </div>
        <_Property1Variant4 className={classes.unnamed} />
        <div className={classes.maximumHops}>Maximum Hops:</div>
        <_Property1Variant4
          className={classes.unnamed2}
          text={{
            _1921681: <div className={classes._1921681}>4</div>,
          }}
        />
        <PingButton_Property1Default
          className={classes.pingButton}
          text={{
            ping: <div className={classes.ping}>Tracert</div>,
          }}
        />
        <div className={classes.frame17}>
          <div className={classes.frame35}>
            <div className={classes.frame36}>
              <div className={classes.frame37}>
                <div className={classes._1}>1</div>
                <div className={classes.unnamed3}>*</div>
                <div className={classes.unnamed4}>*</div>
                <div className={classes.unnamed5}>*</div>
                <div className={classes.requestTimedOut}>Request timed out.</div>
              </div>
            </div>
            <div className={classes.frame372}>
              <div className={classes.frame373}>
                <div className={classes._2}>2</div>
                <div className={classes.unnamed6}>*</div>
                <div className={classes.unnamed7}>*</div>
                <div className={classes.unnamed8}>*</div>
                <div className={classes.requestTimedOut2}>Request timed out.</div>
              </div>
            </div>
            <div className={classes.frame362}>
              <div className={classes.frame374}>
                <div className={classes._3}>3</div>
                <div className={classes._1ms}>1ms</div>
                <div className={classes._2ms}>2ms</div>
                <div className={classes._3ms}>3ms</div>
                <div className={classes._19216812}>192.168.0.1</div>
              </div>
            </div>
            <div className={classes.frame363}>
              <div className={classes.frame375}>
                <div className={classes._4}>4</div>
                <div className={classes.unnamed9}>*</div>
                <div className={classes.unnamed10}>*</div>
                <div className={classes.unnamed11}>*</div>
                <div className={classes.requestTimedOut3}>Request timed out.</div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.rectangle4}></div>
        <div className={classes.tracertResult}>Tracert Result</div>
        <div className={classes.oK}>OK</div>
      </div>
      <div className={classes.tracingRouteTo192168100OverAMa}>
        <div className={classes.textBlock}>Tracing route to [192.168.0.100] over a maximum of 4 hops</div>
        <div className={classes.textBlock2}>
          <p></p>
        </div>
      </div>
    </div>
  );
});
