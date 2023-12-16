import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './FirmwareUpgrade.module.css';
import { PingButton_Property1Default } from './PingButton_Property1Default/PingButton_Property1Default';

interface Props {
  className?: string;
}
/* @figmaId 526:1235 */
export const FirmwareUpgrade: FC<Props> = memo(function FirmwareUpgrade(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.emulatorTpLinkComByHtmlToDesig}>
        <div className={classes.divH2d70d0aec7}>
          <div className={classes.divPanelWrap}>
            <div className={classes.divPanelHeader}>
              <div className={classes.heading3}>
                <div className={classes.firmwareUpgrade}>Firmware Upgrade</div>
              </div>
            </div>
            <div className={classes.divPanelContentContainer}>
              <div className={classes.divSflowStatusSwitch}>
                <div className={classes.divWidgetFieldlabelWrap}>
                  <div className={classes.labelSFlowAgent}>
                    You can upgrade the firmware of the switch using the new upgrade file.
                  </div>
                </div>
                <div className={classes.divWidgetWrap}></div>
              </div>
              <div className={classes.divSflowStatusSwitch2}>
                <div className={classes.divWidgetFieldlabelWrap2}>
                  <div className={classes.labelSFlowAgent2}>
                    Reboot the switch using the backup image after upgrading is completed.
                  </div>
                </div>
                <div className={classes.divWidgetWrap2}></div>
              </div>
              <div className={classes.divJumbo}>
                <div className={classes.divWidgetFieldlabelWrap3}>
                  <div className={classes.labelJumbo}>Firmware Version:</div>
                </div>
                <div className={classes.divWidgetTips}>
                  <div className={classes.divContent}>
                    <div className={classes._11Build20230724Rel60555}>1.0.1 Build 20230724 Rel.60555</div>
                  </div>
                </div>
              </div>
              <div className={classes.divJumbo2}>
                <div className={classes.divWidgetFieldlabelWrap4}>
                  <div className={classes.labelJumbo2}>Image Name:</div>
                </div>
                <div className={classes.divWidgetTips2}>
                  <div className={classes.divContent2}>
                    <div className={classes.backupImage}>Backup Image</div>
                  </div>
                </div>
              </div>
              <div className={classes.divJumbo3}>
                <div className={classes.divWidgetFieldlabelWrap5}>
                  <div className={classes.labelJumbo3}>Hardware Version:</div>
                </div>
                <div className={classes.divWidgetTips3}>
                  <div className={classes.divContent3}>
                    <div className={classes.s550048GP4F1}>S5500-48GP4F 1.0</div>
                  </div>
                </div>
              </div>
              <div className={classes.divJumbo4}>
                <div className={classes.divWidgetFieldlabelWrap6}>
                  <div className={classes.labelJumbo4}>Firmware File:</div>
                </div>
                <div className={classes.divWidgetWrap3}>
                  <div className={classes.input}>
                    <div className={classes.allUnit}>All Unit</div>
                  </div>
                </div>
                <PingButton_Property1Default
                  className={classes.pingButton}
                  text={{
                    ping: <div className={classes.ping}>Browse</div>,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <PingButton_Property1Default
          className={classes.pingButton2}
          text={{
            ping: <div className={classes.ping2}>Upgrade</div>,
          }}
        />
      </div>
      <div className={classes.divSflowGlobalNotes}>
        <div className={classes.divNotesTitle}>
          <div className={classes.notes}>Notes:</div>
        </div>
        <div className={classes.list}>
          <div className={classes.item}>
            <div className={classes._1ItIsRecommendedToBackUpTheCon}>
              <div className={classes.textBlock}>
                1. It is recommended to back up the configurations before upgrading.
              </div>
              <div className={classes.textBlock2}>
                2. Select the appropriate upgrade software version that matches your hardware.
              </div>
              <div className={classes.textBlock3}>3. To avoid damage, DO NOT turn off the device while upgrading.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
