import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { _Property1Variant4 } from './_Property1Variant4/_Property1Variant4';
import classes from './Ping.module.css';
import { PingButton_Property1Default } from './PingButton_Property1Default/PingButton_Property1Default';

interface Props {
  className?: string;
}
/* @figmaId 543:1712 */
export const Ping: FC<Props> = memo(function Ping(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.ping}>Ping </div>
      <div className={classes.line1}></div>
      <div className={classes.frame16}>
        <div className={classes.destinationIP}>Destination IP: </div>
        <_Property1Variant4 className={classes.unnamed} />
        <div className={classes.dataSize}>Data Size: </div>
        <_Property1Variant4
          className={classes.unnamed2}
          text={{
            _1921681: <div className={classes._1921681}>64</div>,
          }}
        />
        <div className={classes.interval}>Interval: </div>
        <_Property1Variant4
          className={classes.unnamed3}
          text={{
            _1921681: <div className={classes._19216812}>1000</div>,
          }}
        />
        <div className={classes.pingTimes}>Ping Times: </div>
        <_Property1Variant4
          className={classes.unnamed4}
          text={{
            _1921681: <div className={classes._19216813}>10</div>,
          }}
        />
        <PingButton_Property1Default className={classes.pingButton} />
        <div className={classes.frame17}>
          <div className={classes.frame18}>
            <div className={classes.pinging1921681With64BytesOfDat}>
              <div className={classes.textBlock}>Pinging 192.168.0.1 with 64 bytes of data:</div>
              <div className={classes.textBlock2}>Reply from 3001::1234 : bytes=64 time=16ms</div>
              <div className={classes.textBlock3}>Reply from 192.168.0.146 : bytes=64 time=16ms TTL=64</div>
              <div className={classes.textBlock4}>Destination Host Unreachable!</div>
              <div className={classes.textBlock5}>Request Timeout.</div>
            </div>
          </div>
          <div className={classes.packetsSent4Received4LossLoss}>
            <p className={classes.labelWrapper}>
              <span className={classes.label}>Packets: </span>
              <span className={classes.label2}>Sent=4, Received=4, Loss=0 (0%Loss)</span>
            </p>
          </div>
          <div className={classes.maximum2msMinimum1msAverage1ms}>
            <p className={classes.labelWrapper2}>
              <span className={classes.label3}>Maximum</span>
              <span className={classes.label4}>=2ms, Minimum=1ms, Average=1ms</span>
            </p>
            <div className={classes.textBlock6}>
              <p></p>
            </div>
          </div>
        </div>
        <div className={classes.rectangle4}></div>
        <div className={classes.pingResult}>Ping Result</div>
        <div className={classes.oK}>OK</div>
      </div>
    </div>
  );
});
