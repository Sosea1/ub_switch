import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { _Property1Variant4 } from './_Property1Variant4/_Property1Variant4';
import classes from './HTTPConfig.module.css';
import { PingButton_Property1Default } from './PingButton_Property1Default/PingButton_Property1Default';

interface Props {
  className?: string;
  hide?: {
    frame15?: boolean;
    frame152?: boolean;
    frame153?: boolean;
    frame154?: boolean;
    frame155?: boolean;
    frame156?: boolean;
  };
}
/* @figmaId 598:1959 */
export const HTTPConfig: FC<Props> = memo(function HTTPConfig(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.globalConfig}>Global Config</div>
      <div className={classes.line1}></div>
      <div className={classes.line2}></div>
      <div className={classes.line5}></div>
      <div className={classes.line3}></div>
      <div className={classes.frame16}>
        <div className={classes.hTTP}>HTTP:</div>
        <div className={classes.numberControl}>Number Control:</div>
        <div className={classes.port}>Port:</div>
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
        <PingButton_Property1Default
          className={classes.pingButton3}
          text={{
            ping: <div className={classes.ping3}>Apply</div>,
          }}
        />
          <div className={classes.enable}>Enable
              <input id='main_check' style={{cursor: 'pointer', position: 'absolute', left: '-30px', top: '3px'}}
                     type="checkbox"/>
          </div>
          <div className={classes.sessionConfig}>Session Config</div>
          <div className={classes._165535}>
              <div className={classes.textBlock}>(1-65535)</div>
          <div className={classes.textBlock2}>
            <p></p>
          </div>
        </div>
        <div className={classes.port2}>Port:</div>
        <div className={classes.numberOfAccessUsers}>Number of Access Users</div>
        <div className={classes.line4}></div>
          <div className={classes.enable2}>Enable
              <input id='main_check' style={{cursor: 'pointer', position: 'absolute', left: '-30px', top: '3px'}}
                     type="checkbox"/>
          </div>
          <div className={classes.numberOfAdmins}>Number of Admins:</div>
          <div className={classes.numberOfOperators}>Number of Operators:</div>
        <div className={classes.numberOfPowerUsers}>Number of Power Users:</div>
        <div className={classes.numberOfUsers}>Number of Users:</div>
        <_Property1Variant4
          className={classes.unnamed3}
          hide={{
            frame15: true,
          }}
        />
        <_Property1Variant4
          className={classes.unnamed4}
          hide={{
            frame15: true,
          }}
        />
        <_Property1Variant4
          className={classes.unnamed5}
          hide={{
            frame15: true,
          }}
        />
        <_Property1Variant4
          className={classes.unnamed6}
          hide={{
            frame15: true,
          }}
        />
      </div>
    </div>
  );
});
