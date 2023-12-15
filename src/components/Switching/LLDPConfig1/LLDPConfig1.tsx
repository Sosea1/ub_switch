import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './LLDPConfig1.module.css';
import { PingButton_Property1Default } from './PingButton_Property1Default/PingButton_Property1Default';

interface Props {
  className?: string;
}
/* @figmaId 490:12812 */
export const LLDPConfig1: FC<Props> = memo(function LLDPConfig1(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.emulatorTpLinkComByHtmlToDesig}>
        <PingButton_Property1Default
          className={classes.pingButton}
          text={{
            ping: <div className={classes.ping}>Global Config</div>,
          }}
        />
        <PingButton_Property1Default
          className={classes.pingButton2}
          text={{
            ping: <div className={classes.ping2}>Port Config</div>,
          }}
        />
        <PingButton_Property1Default
          className={classes.pingButton3}
          text={{
            ping: <div className={classes.ping3}>Local Info</div>,
          }}
        />
        <PingButton_Property1Default
          className={classes.pingButton4}
          text={{
            ping: <div className={classes.ping4}>Neighbor Info</div>,
          }}
        />
      </div>
      <div className={classes.emulatorTpLinkComByHtmlToDesig2}>
        <div className={classes.divPanelWrap}>
          <div className={classes.divPanelHeader}>
            <div className={classes.heading3}>
              <div className={classes.lLDPMEDParametersConfig}>LLDP-MED Parameters Config</div>
            </div>
          </div>
          <PingButton_Property1Default
            className={classes.pingButton5}
            text={{
              ping: <div className={classes.ping5}>Apply</div>,
            }}
          />
        </div>
        <div className={classes.divJumbo}>
          <div className={classes.divWidgetFieldlabelWrap}>
            <div className={classes.labelJumbo}>Device Class:</div>
          </div>
          <div className={classes.divWidgetTips}>
            <div className={classes.divContent}>
              <div className={classes.networkConnectivity}>Network Connectivity</div>
            </div>
          </div>
        </div>
        <div className={classes.divJumbo2}>
          <div className={classes.divWidgetFieldlabelWrap2}>
            <div className={classes.labelJumbo2}>Fast Start Repeat Count:</div>
          </div>
          <div className={classes.divWidgetWrap}>
            <div className={classes.input}></div>
          </div>
          <div className={classes.divWidgetTips2}>
            <div className={classes.divContent2}>
              <div className={classes._110}>(1-10)</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
