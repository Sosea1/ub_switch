import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './DHCPAutoInstall.module.css';
import { PingButton_Property1Default } from './PingButton_Property1Default/PingButton_Property1Default';

interface Props {
  className?: string;
}
/* @figmaId 528:1405 */
export const DHCPAutoInstall: FC<Props> = memo(function DHCPAutoInstall(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.emulatorTpLinkComByHtmlToDesig}>
        <div className={classes.divH2d70d0aec7}>
          <div className={classes.divPanelWrap}>
            <div className={classes.divPanelHeader}>
              <div className={classes.heading3}>
                <div className={classes.dHCPAutoInstall}>DHCP Auto Install</div>
              </div>
            </div>
            <div className={classes.divPanelContentContainer}>
              <div className={classes.divSflowStatusSwitch}>
                <div className={classes.divWidgetWrap}></div>
              </div>
              <div className={classes.divJumbo}>
                <div className={classes.divWidgetFieldlabelWrap}>
                  <div className={classes.labelJumbo}>DHCP Auto Install:</div>
                </div>
                <div className={classes.divWidgetTips}>
                  <div className={classes.divContent}>
                    <div className={classes.enable}>Enable</div>
                    <input style={{cursor: 'pointer', position:'absolute', left:'-30px',top:'5px'}} type="checkbox" />
                  </div>
                </div>
              </div>
              <div className={classes.divJumbo2}>
                <div className={classes.divWidgetFieldlabelWrap2}>
                  <div className={classes.labelJumbo2}>Auto Save Mode:</div>
                </div>
                <div className={classes.divWidgetTips2}>
                  <div className={classes.divContent2}>
                    <div className={classes.enable2}>Enable</div>
                    <input style={{cursor: 'pointer', position:'absolute', left:'-30px',top:'5px'}} type="checkbox" />
                  </div>
                </div>
              </div>
              <div className={classes.divJumbo3}>
                <div className={classes.divWidgetFieldlabelWrap3}>
                  <div className={classes.labelJumbo3}>Auto Reboot Mode:</div>
                </div>
                <div className={classes.divWidgetTips3}>
                  <div className={classes.divContent3}>
                    <div className={classes.enable3}>Enable</div>
                    <input style={{cursor: 'pointer', position:'absolute', left:'-30px',top:'5px'}} type="checkbox" />
                  </div>
                </div>
              </div>
              <div className={classes.divJumbo4}>
                <div className={classes.divWidgetFieldlabelWrap4}>
                  <div className={classes.labelJumbo4}>Auto Install Retry Count:</div>
                </div>
                <div className={classes.divWidgetWrap2}>
                  <div className={classes.input}>
                    <div className={classes._1}>1</div>
                  </div>
                </div>
              </div>
              <div className={classes.divJumbo5}>
                <div className={classes.divWidgetFieldlabelWrap5}>
                  <div className={classes.labelJumbo5}>Auto Install State:</div>
                </div>
                <div className={classes.divWidgetTips4}>
                  <div className={classes.divContent4}>
                    <div className={classes.stopped}>Stopped</div>
                  </div>
                </div>
              </div>
              <div className={classes.divJumbo6}>
                <div className={classes.divWidgetFieldlabelWrap6}>
                  <div className={classes.labelJumbo6}>Auto Install Persistent Mode:</div>
                </div>
                <div className={classes.divWidgetTips5}>
                  <div className={classes.divContent5}>
                    <div className={classes.enable4}>Enable</div>
                    <input style={{cursor: 'pointer', position:'absolute', left:'-30px',top:'5px'}} type="checkbox" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <PingButton_Property1Default
            className={classes.pingButton}
            text={{
              ping: <div className={classes.ping}>Apply</div>,
            }}
          />
        </div>
      </div>
      <div className={classes.divSflowGlobalNotes}>
        <div className={classes.list}>
          <div className={classes.item}></div>
        </div>
      </div>
      <div className={classes.divNotesTitle}>
        <div className={classes.notes}>Notes:</div>
      </div>
      <div className={classes._1IfAutoInstallFailsToGetTheCon}>
        <div className={classes.textBlock}>
          1. If Auto Install fails to get the configuration file, this procedure will be retried every 10 minutes.
        </div>
        <div className={classes.textBlock2}>
          2. If DHCP Auto Install is enabled and there is no layer 3 interface whose IP address mode is DHCP, the switch
          will choose a layer 3 interface and change its IP address mode to DHCP. The chosen interface is the last
          created interface whose status is up.
        </div>
        <div className={classes.textBlock3}>
          <p></p>
        </div>
      </div>
    </div>
  );
});
