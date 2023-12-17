import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { PingButton_Property1Default } from './PingButton_Property1Default/PingButton_Property1Default';
import classes from './VoiceVLANGlobal.module.css';

interface Props {
  className?: string;
}
/* @figmaId 495:13701 */
export const VoiceVLANGlobal: FC<Props> = memo(function VoiceVLANGlobal(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.emulatorTpLinkComByHtmlToDesig}>
        <div className={classes.divPanelWrap}>
          <div className={classes.divPanelHeader}>
            <div className={classes.heading3}>
              <div className={classes.globalConfig}>Global Config</div>
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
              <div className={classes.labelJumbo}>Priority:</div>
            </div>
            <div className={classes.divWidgetWrap}>
              <div className={classes.input}></div>
            </div>
            <div className={classes.divWidgetTips}></div>
          </div>
          <div className={classes.divJumbo2}>
            <div className={classes.divWidgetFieldlabelWrap2}>
              <div className={classes.labelJumbo2}>VLAN ID:</div>
            </div>
            <div className={classes.divWidgetWrap2}>
              <div className={classes.input2}></div>
            </div>
            <div className={classes.divWidgetTips2}>
              <div className={classes.divContent}>
                <div className={classes._24094}>(2-4094)</div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.divSflowStatusSwitch}>
          <div className={classes.divWidgetFieldlabelWrap3}>
            <div className={classes.labelSFlowAgent}>Voice VLAN:</div>
          </div>
          <div className={classes.divWidgetWrap3}>
            <div className={classes.label}>
              <div className={classes.enable}>Enable</div>
              <input style={{cursor: 'pointer', position:'absolute', left:'10px',top:'2px'}} type="checkbox" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
