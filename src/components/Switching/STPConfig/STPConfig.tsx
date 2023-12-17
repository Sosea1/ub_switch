import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { PingButton_Property1Default } from './PingButton_Property1Default/PingButton_Property1Default';
import classes from './STPConfig.module.css';

interface Props {
  className?: string;
}
/* @figmaId 452:1165 */
export const STPConfig: FC<Props> = memo(function STPConfig(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.emulatorTpLinkComByHtmlToDesig}>
        <PingButton_Property1Default
          className={classes.pingButton}
          text={{
            ping: <div className={classes.ping}>STP Config</div>,
          }}
        />
        <PingButton_Property1Default
          className={classes.pingButton2}
          text={{
            ping: <div className={classes.ping2}>STP Summary</div>,
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
            className={classes.pingButton3}
            text={{
              ping: <div className={classes.ping3}>Apply</div>,
            }}
          />
          <PingButton_Property1Default
            className={classes.pingButton4}
            text={{
              ping: <div className={classes.ping4}>Apply</div>,
            }}
          />
        </div>
        <div className={classes.divPanelHeader2}>
          <div className={classes.heading32}>
            <div className={classes.parametersConfig}>Parameters Config</div>
          </div>
        </div>
        <div className={classes.divJumbo}>
          <div className={classes.divWidgetFieldlabelWrap}>
            <div className={classes.labelJumbo}>Max Age:</div>
          </div>
          <div className={classes.divWidgetTips}>
            <div className={classes.divContent}>
              <div className={classes.seconds640}>seconds (6-40)</div>
            </div>
          </div>
          <div className={classes.divWidgetWrap}>
            <div className={classes.input}></div>
          </div>
        </div>
        <div className={classes.divJumbo2}>
          <div className={classes.divWidgetFieldlabelWrap2}>
            <div className={classes.labelJumbo2}>Forward Delay:</div>
          </div>
          <div className={classes.divWidgetTips2}>
            <div className={classes.divContent2}>
              <div className={classes.seconds430}>seconds (4-30)</div>
            </div>
          </div>
          <div className={classes.divWidgetWrap2}>
            <div className={classes.input2}></div>
          </div>
        </div>
        <div className={classes.divJumbo3}>
          <div className={classes.divWidgetFieldlabelWrap3}>
            <div className={classes.labelJumbo3}>Tx Hold Count:</div>
          </div>
          <div className={classes.divWidgetTips3}>
            <div className={classes.divContent3}>
              <div className={classes.pps120}>pps (1-20)</div>
            </div>
          </div>
          <div className={classes.divWidgetWrap3}>
            <div className={classes.input3}></div>
          </div>
        </div>
        <div className={classes.divJumbo4}>
          <div className={classes.divWidgetFieldlabelWrap4}>
            <div className={classes.labelJumbo4}>Max Hops:</div>
          </div>
          <div className={classes.divWidgetTips4}>
            <div className={classes.divContent4}>
              <div className={classes._140}>(1-40)</div>
            </div>
          </div>
          <div className={classes.divWidgetWrap4}>
            <div className={classes.input4}></div>
          </div>
        </div>
        <div className={classes.divJumbo5}>
          <div className={classes.divWidgetFieldlabelWrap5}>
            <div className={classes.labelJumbo5}>Spanning Tree</div>
          </div>
          <div className={classes.divWidgetTips5}>
            <div className={classes.divContent5}>
              <div className={classes.enable}>Enable</div>
              <input style={{cursor: 'pointer', position:'absolute', left:'-30px',top:'5px'}} type="checkbox" />
            </div>
          </div>
        </div>
        <div className={classes.divJumbo6}>
          <div className={classes.divWidgetFieldlabelWrap6}>
            <div className={classes.labelJumbo6}>Mode:</div>
          </div>
          <div className={classes.divWidgetTips6}></div>
        </div>
        <div className={classes.divJumbo7}>
          <div className={classes.divWidgetFieldlabelWrap7}>
            <div className={classes.labelJumbo7}>CIST Priority:</div>
          </div>
          <div className={classes.divWidgetTips7}>
            <div className={classes.divContent6}>
              <div className={classes._61440InIncrementsOf4096}>(0-61440, in increments of 4096)</div>
            </div>
          </div>
          <div className={classes.divWidgetWrap5}>
            <div className={classes.input5}></div>
          </div>
        </div>
        <div className={classes.divJumbo8}>
          <div className={classes.divWidgetFieldlabelWrap8}>
            <div className={classes.labelJumbo8}>Hello Time:</div>
          </div>
          <div className={classes.divWidgetTips8}>
            <div className={classes.divContent7}>
              <div className={classes.seconds110}>seconds (1-10)</div>
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
