import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { _Property1Variant4 } from './_Property1Variant4/_Property1Variant4';
import classes from './Dot1xConfig.module.css';
import { PingButton_Property1Default } from './PingButton_Property1Default/PingButton_Property1Default';

interface Props {
  className?: string;
  hide?: {
    frame15?: boolean;
    frame152?: boolean;
  };
}
/* @figmaId 615:1369 */
export const Dot1xConfig: FC<Props> = memo(function Dot1xConfig(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.authenticationDot1xMethod}>Authentication Dot1x Method</div>
      <div className={classes.line1}></div>
      <div className={classes.line2}></div>
      <div className={classes.line3}></div>
      <div className={classes.frame16}>
        <div className={classes.method}>Method:</div>
        <div className={classes.method2}>Method:</div>
        <div className={classes.pri1}>Pri1:</div>
        <_Property1Variant4
          className={classes.unnamed}
          hide={{
            frame15: true,
          }}
        />
        <_Property1Variant4
          className={classes.unnamed2}
          hide={{
            frame15: true,
          }}
        />
        <PingButton_Property1Default
          className={classes.pingButton}
          text={{
            ping: <div className={classes.ping}>Apply</div>,
          }}
        />
        <PingButton_Property1Default
          className={classes.pingButton2}
          text={{
            ping: <div className={classes.ping2}>Apply</div>,
          }}
        />
        <div className={classes.default}>default</div>
        <div className={classes.default2}>default</div>
        <div className={classes.accountingDot1xMethod}>Accounting Dot1x Method</div>
        <div className={classes.pri12}>Pri1:</div>
      </div>
    </div>
  );
});
