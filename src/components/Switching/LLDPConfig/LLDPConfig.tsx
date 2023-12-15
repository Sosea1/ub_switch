import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './LLDPConfig.module.css';
import { PingButton_Property1Default } from './PingButton_Property1Default/PingButton_Property1Default';

interface Props {
  className?: string;
}
/* @figmaId 490:12724 */
export const LLDPConfig: FC<Props> = memo(function LLDPConfig(props = {}) {
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
        <PingButton_Property1Default
          className={classes.pingButton5}
          text={{
            ping: <div className={classes.ping5}>Statictic Info</div>,
          }}
        />
      </div>
      <div className={classes.emulatorTpLinkComByHtmlToDesig2}>
        <div className={classes.divPanelWrap}>
          <div className={classes.divPanelHeader}>
            <div className={classes.heading3}>
              <div className={classes.globalConfig}>Global Config</div>
            </div>
          </div>
          <PingButton_Property1Default
            className={classes.pingButton6}
            text={{
              ping: <div className={classes.ping6}>Apply</div>,
            }}
          />
          <PingButton_Property1Default
            className={classes.pingButton7}
            text={{
              ping: <div className={classes.ping7}>Apply</div>,
            }}
          />
        </div>
        <div className={classes.divJumbo}>
          <div className={classes.divWidgetFieldlabelWrap}>
            <div className={classes.labelJumbo}>LLDP Forwarding:</div>
          </div>
          <div className={classes.divWidgetTips}>
            <div className={classes.divContent}>
              <div className={classes.enable}>Enable</div>
            </div>
          </div>
        </div>
        <div className={classes.divPanelHeader2}>
          <div className={classes.heading32}>
            <div className={classes.parametersConfig}>Parameters Config</div>
          </div>
        </div>
        <div className={classes.divJumbo2}>
          <div className={classes.divWidgetFieldlabelWrap2}>
            <div className={classes.labelJumbo2}>Transmit Delay:</div>
          </div>
          <div className={classes.divWidgetTips2}>
            <div className={classes.divContent2}>
              <div className={classes.seconds18192}>seconds (1-8192)</div>
            </div>
          </div>
          <div className={classes.divWidgetWrap}>
            <div className={classes.input}></div>
          </div>
        </div>
        <div className={classes.divJumbo3}>
          <div className={classes.divWidgetFieldlabelWrap3}>
            <div className={classes.labelJumbo3}>Reinitialization Delay:</div>
          </div>
          <div className={classes.divWidgetTips3}>
            <div className={classes.divContent3}>
              <div className={classes.seconds110}>seconds (1-10)</div>
            </div>
          </div>
          <div className={classes.divWidgetWrap2}>
            <div className={classes.input2}></div>
          </div>
        </div>
        <div className={classes.divJumbo4}>
          <div className={classes.divWidgetFieldlabelWrap4}>
            <div className={classes.labelJumbo4}>Notification Interval:</div>
          </div>
          <div className={classes.divWidgetTips4}>
            <div className={classes.divContent4}>
              <div className={classes.seconds53600}>seconds (5-3600)</div>
            </div>
          </div>
          <div className={classes.divWidgetWrap3}>
            <div className={classes.input3}></div>
          </div>
        </div>
        <div className={classes.divJumbo5}>
          <div className={classes.divWidgetFieldlabelWrap5}>
            <div className={classes.labelJumbo5}>Fast Start Repeat Count:</div>
          </div>
          <div className={classes.divWidgetTips5}>
            <div className={classes.divContent5}>
              <div className={classes._110}>(1-10)</div>
            </div>
          </div>
          <div className={classes.divWidgetWrap4}>
            <div className={classes.input4}></div>
          </div>
        </div>
        <div className={classes.divJumbo6}>
          <div className={classes.divWidgetFieldlabelWrap6}>
            <div className={classes.labelJumbo6}>LLDP:</div>
          </div>
          <div className={classes.divWidgetTips6}>
            <div className={classes.divContent6}>
              <div className={classes.enable2}>Enable</div>
            </div>
          </div>
        </div>
        <div className={classes.divJumbo7}>
          <div className={classes.divWidgetFieldlabelWrap7}>
            <div className={classes.labelJumbo7}>Transmit Interval:</div>
          </div>
          <div className={classes.divWidgetTips7}>
            <div className={classes.divContent7}>
              <div className={classes.seconds532768}>seconds (5-32768)</div>
            </div>
          </div>
          <div className={classes.divWidgetWrap5}>
            <div className={classes.input5}></div>
          </div>
        </div>
        <div className={classes.divJumbo8}>
          <div className={classes.divWidgetFieldlabelWrap8}>
            <div className={classes.labelJumbo8}>Hold Multiplier:</div>
          </div>
          <div className={classes.divWidgetTips8}>
            <div className={classes.divContent8}>
              <div className={classes._210}>(2-10)</div>
            </div>
          </div>
          <div className={classes.divWidgetWrap6}>
            <div className={classes.input6}></div>
          </div>
        </div>
      </div>
    </div>
  );
});
