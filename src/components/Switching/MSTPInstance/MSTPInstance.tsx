import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './MSTPInstance.module.css';
import { PingButton_Property1Default } from './PingButton_Property1Default/PingButton_Property1Default';

interface Props {
  className?: string;
}
/* @figmaId 490:12394 */
export const MSTPInstance: FC<Props> = memo(function MSTPInstance(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.emulatorTpLinkComByHtmlToDesig}></div>
      <div className={classes.emulatorTpLinkComByHtmlToDesig2}>
        <div className={classes.divPanelWrap}>
          <div className={classes.divPanelHeader}>
            <div className={classes.heading3}>
              <div className={classes.regionConfig}>Region Config</div>
            </div>
          </div>
          <PingButton_Property1Default
            className={classes.pingButton}
            text={{
              ping: <div className={classes.ping}>Apply</div>,
            }}
          />
          <div className={classes.divJumbo}>
            <div className={classes.divWidgetFieldlabelWrap}>
              <div className={classes.labelJumbo}>Region Name:</div>
            </div>
            <div className={classes.divWidgetTips}>
              <div className={classes.divContent}></div>
            </div>
            <div className={classes.divWidgetWrap}>
              <div className={classes.input}></div>
            </div>
          </div>
          <div className={classes.divJumbo2}>
            <div className={classes.divWidgetFieldlabelWrap2}>
              <div className={classes.labelJumbo2}>Revision:</div>
            </div>
            <div className={classes.divWidgetTips2}>
              <div className={classes.divContent2}>
                <div className={classes._65535}>(0-65535)</div>
              </div>
            </div>
            <div className={classes.divWidgetWrap2}>
              <div className={classes.input2}></div>
            </div>
          </div>
        </div>
      </div>
      <PingButton_Property1Default
        className={classes.pingButton2}
        text={{
          ping: <div className={classes.ping2}>Instance Port Config</div>,
        }}
      />
      <PingButton_Property1Default
        className={classes.pingButton3}
        text={{
          ping: <div className={classes.ping3}>Instance Config</div>,
        }}
      />
      <PingButton_Property1Default
        className={classes.pingButton4}
        text={{
          ping: <div className={classes.ping4}>Region Config</div>,
        }}
      />
    </div>
  );
});
