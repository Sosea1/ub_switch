import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './MVR.module.css';
import { PingButton_Property1Default } from './PingButton_Property1Default/PingButton_Property1Default';

interface Props {
  className?: string;
}
/* @figmaId 452:2142 */
export const MVR: FC<Props> = memo(function MVR(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <PingButton_Property1Default
        className={classes.pingButton}
        text={{
          ping: <div className={classes.ping}> MVR Config</div>,
        }}
      />
      <PingButton_Property1Default
        className={classes.pingButton2}
        text={{
          ping: <div className={classes.ping2}>MVR Group Config</div>,
        }}
      />
      <div className={classes.link}>
        <div className={classes.portConfig}>Port Config</div>
      </div>
      <div className={classes.link2}>
        <div className={classes.staticGroupMembers}>Static Group Members</div>
      </div>
      <div className={classes.divPanelHeader}>
        <div className={classes.heading3}>
          <div className={classes.mVRConfig}>MVR Config</div>
        </div>
      </div>
      <div className={classes.divJumbo}>
        <div className={classes.divWidgetFieldlabelWrap}>
          <div className={classes.labelJumbo}>MVR:</div>
        </div>
        <div className={classes.divWidgetTips}>
          <div className={classes.divContent}>
            <div className={classes.enable}>Enable</div>
          </div>
        </div>
      </div>
      <div className={classes.divJumbo2}>
        <div className={classes.divWidgetFieldlabelWrap2}>
          <div className={classes.labelJumbo2}>MVR Mode:</div>
        </div>
        <div className={classes.divWidgetTips2}>
          <div className={classes.divContent2}>
            <div className={classes.compatible}>Compatible</div>
          </div>
        </div>
        <div className={classes.divContent3}>
          <div className={classes.dynamic}>Dynamic</div>
        </div>
      </div>
      <div className={classes.divJumbo3}>
        <div className={classes.divWidgetFieldlabelWrap3}>
          <div className={classes.labelJumbo3}>Maximum Multicast Groups:</div>
        </div>
        <div className={classes.divWidgetTips3}>
          <div className={classes.divContent4}>
            <div className={classes._511}>511</div>
          </div>
        </div>
      </div>
      <div className={classes.divJumbo4}>
        <div className={classes.divWidgetFieldlabelWrap4}>
          <div className={classes.labelJumbo4}>Current Multicast Groups:</div>
        </div>
        <div className={classes.divWidgetTips4}>
          <div className={classes.divContent5}>
            <div className={classes.unnamed}>0</div>
          </div>
        </div>
      </div>
      <PingButton_Property1Default
        className={classes.pingButton3}
        text={{
          ping: <div className={classes.ping3}>Apply</div>,
        }}
      />
      <div className={classes.divJumbo5}>
        <div className={classes.divWidgetFieldlabelWrap5}>
          <div className={classes.labelJumbo5}>Multicast VLAN ID:</div>
        </div>
        <div className={classes.divWidgetTips5}>
          <div className={classes.divContent6}>
            <div className={classes._14096}>(1-4096)</div>
          </div>
        </div>
        <div className={classes.divWidgetWrap}>
          <div className={classes.input}>
            <div className={classes._1518}>1518</div>
          </div>
        </div>
      </div>
      <div className={classes.divJumbo6}>
        <div className={classes.divWidgetFieldlabelWrap6}>
          <div className={classes.labelJumbo6}>Query Response Time:</div>
        </div>
        <div className={classes.divWidgetTips6}>
          <div className={classes.divContent7}>
            <div className={classes.tenthsOfASecond1100}>tenths of a second (1-100)</div>
          </div>
        </div>
        <div className={classes.divWidgetWrap2}>
          <div className={classes.input2}>
            <div className={classes._15182}>1518</div>
          </div>
        </div>
      </div>
    </div>
  );
});
