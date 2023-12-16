import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { PingButton_Property1Default } from './PingButton_Property1Default/PingButton_Property1Default';
import classes from './SystemReboot.module.css';

interface Props {
  className?: string;
}
/* @figmaId 528:1459 */
export const SystemReboot: FC<Props> = memo(function SystemReboot(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.emulatorTpLinkComByHtmlToDesig}>
        <div className={classes.divH2d70d0aec7}>
          <div className={classes.divPanelWrap}>
            <div className={classes.divPanelHeader}>
              <div className={classes.heading3}>
                <div className={classes.systemReboot}>System Reboot</div>
              </div>
            </div>
            <div className={classes.divPanelContentContainer}>
              <div className={classes.divSflowStatusSwitch}>
                <div className={classes.divWidgetWrap}></div>
                <div className={classes.frame34}></div>
              </div>
              <div className={classes.divJumbo}>
                <div className={classes.divWidgetFieldlabelWrap}>
                  <div className={classes.labelJumbo}>Target Unit:</div>
                </div>
                <div className={classes.divWidgetWrap2}>
                  <div className={classes.input}>
                    <div className={classes.allUnit}>All Unit</div>
                  </div>
                </div>
              </div>
              <div className={classes.divJumbo2}>
                <div className={classes.divWidgetTips}>
                  <div className={classes.divContent}>
                    <div className={classes.saveTheCurrentConfigurationBef}>
                      Save the current configuration before reboot
                    </div>
                  </div>
                </div>
              </div>
              <div className={classes.divNotesTitle}>
                <div className={classes.notes}>Notes:</div>
              </div>
              <div className={classes.toAvoidDamageDONOTTurnOffTheDe}>
                To avoid damage, DO NOT turn off the device while rebooting.
              </div>
            </div>
          </div>
          <PingButton_Property1Default
            className={classes.pingButton}
            text={{
              ping: <div className={classes.ping}>Reboot</div>,
            }}
          />
        </div>
        <div className={classes.emulatorTpLinkComByHtmlToDesig2}>
          <PingButton_Property1Default
            className={classes.pingButton2}
            text={{
              ping: <div className={classes.ping2}>System Reboot</div>,
            }}
          />
          <PingButton_Property1Default
            className={classes.pingButton3}
            text={{
              ping: <div className={classes.ping3}>Reboot Schedule</div>,
            }}
          />
        </div>
      </div>
      <div className={classes.divSflowGlobalNotes}>
        <div className={classes.list}>
          <div className={classes.item}></div>
        </div>
      </div>
    </div>
  );
});
