import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './BootConfig.module.css';
import { PingButton_Property1Default } from './PingButton_Property1Default/PingButton_Property1Default';

interface Props {
  className?: string;
}
/* @figmaId 526:1029 */
export const BootConfig: FC<Props> = memo(function BootConfig(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.frame16}>
        <div className={classes.frame22}>
          <div className={classes.rectangle4}></div>
          <div className={classes.rectangle5}></div>
          <div className={classes.frame23}>
            <div className={classes._1}>1</div>
            <div className={classes.image2Bin}>image2.bin</div>
            <div className={classes.image2Bin2}>image2.bin</div>
            <div className={classes.image1Bin}>image1.bin</div>
            <div className={classes.config1Cfg}>config1.cfg</div>
            <div className={classes.config1Cfg2}>config1.cfg</div>
            <div className={classes.config2Cfg}>config2.cfg</div>
          </div>
        </div>
        <div className={classes.frame21}>
          <div className={classes.unit}>Unit</div>
          <div className={classes.currentStartupImage}>Current Startup Image</div>
          <div className={classes.nextStartupImage}>Next Startup Image</div>
          <div className={classes.backupImage}>Backup Image</div>
          <div className={classes.currentStartupConfig}>Current Startup Config</div>
          <div className={classes.nextStartupConfig}>Next Startup Config</div>
          <div className={classes.nextStartupConfig2}>Next Startup Config</div>
        </div>
        <div className={classes.total1}>Total: 1</div>
        <div className={classes.line3}></div>
        <div className={classes.bootConfig}>Boot Config</div>
        <div className={classes.divPanelHeader}>
          <div className={classes.heading3}>
            <div className={classes.imageTable}>Image Table</div>
          </div>
        </div>
        <div className={classes.divJumbo}>
          <div className={classes.divWidgetFieldlabelWrap}>
            <div className={classes.labelJumbo}>Current Startup Image</div>
          </div>
          <div className={classes.divWidgetTips}></div>
          <div className={classes.labelJumbo2}>Software Version:</div>
          <div className={classes.labelJumbo3}>Flash Version:</div>
          <div className={classes.labelJumbo4}>Image Name:</div>
          <div className={classes.divJumbo2}>
            <div className={classes.divWidgetFieldlabelWrap2}></div>
            <div className={classes.divWidgetTips2}>
              <div className={classes.divContent}>
                <div className={classes._11}>1.0.1</div>
              </div>
            </div>
            <div className={classes.divContent2}></div>
          </div>
          <div className={classes.divJumbo3}>
            <div className={classes.divWidgetFieldlabelWrap3}></div>
            <div className={classes.divWidgetTips3}>
              <div className={classes.divContent3}>
                <div className={classes._13}>1.3.0</div>
              </div>
            </div>
          </div>
          <div className={classes.divJumbo4}>
            <div className={classes.divWidgetFieldlabelWrap4}></div>
            <div className={classes.divWidgetTips4}>
              <div className={classes.divContent4}>
                <div className={classes.image2Bin3}>image2.bin</div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.divJumbo5}>
          <div className={classes.divWidgetFieldlabelWrap5}>
            <div className={classes.labelJumbo5}>Next Startup Image</div>
          </div>
          <div className={classes.divWidgetTips5}></div>
          <div className={classes.divJumbo6}>
            <div className={classes.divWidgetFieldlabelWrap6}>
              <div className={classes.labelJumbo6}>Software Version:</div>
            </div>
            <div className={classes.divWidgetTips6}>
              <div className={classes.divContent5}>
                <div className={classes._112}>1.0.1</div>
              </div>
            </div>
            <div className={classes.divContent6}></div>
          </div>
          <div className={classes.divJumbo7}>
            <div className={classes.divWidgetFieldlabelWrap7}>
              <div className={classes.labelJumbo7}>Flash Version:</div>
            </div>
            <div className={classes.divWidgetTips7}>
              <div className={classes.divContent7}>
                <div className={classes._132}>1.3.0</div>
              </div>
            </div>
          </div>
          <div className={classes.divJumbo8}>
            <div className={classes.divWidgetFieldlabelWrap8}>
              <div className={classes.labelJumbo8}>Image Name:</div>
            </div>
            <div className={classes.divWidgetTips8}>
              <div className={classes.divContent8}>
                <div className={classes.image2Bin4}>image2.bin</div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.divJumbo9}>
          <div className={classes.divWidgetFieldlabelWrap9}>
            <div className={classes.labelJumbo9}>Backup Image</div>
          </div>
          <div className={classes.divWidgetTips9}></div>
          <div className={classes.divJumbo10}>
            <div className={classes.divWidgetFieldlabelWrap10}>
              <div className={classes.labelJumbo10}>Software Version:</div>
            </div>
            <div className={classes.divWidgetTips10}>
              <div className={classes.divContent9}>
                <div className={classes._113}>1.0.1</div>
              </div>
            </div>
            <div className={classes.divContent10}></div>
          </div>
          <div className={classes.divJumbo11}>
            <div className={classes.divWidgetFieldlabelWrap11}>
              <div className={classes.labelJumbo11}>Flash Version:</div>
            </div>
            <div className={classes.divWidgetTips11}>
              <div className={classes.divContent11}>
                <div className={classes._133}>1.3.0</div>
              </div>
            </div>
          </div>
          <div className={classes.divJumbo12}>
            <div className={classes.divWidgetFieldlabelWrap12}>
              <div className={classes.labelJumbo12}>Image Name:</div>
            </div>
            <div className={classes.divWidgetTips12}>
              <div className={classes.divContent12}>
                <div className={classes.image2Bin5}>image2.bin</div>
              </div>
            </div>
          </div>
        </div>
        <PingButton_Property1Default
          className={classes.pingButton}
          text={{
            ping: <div className={classes.ping}>Restore</div>,
          }}
        />
      </div>
    </div>
  );
});
