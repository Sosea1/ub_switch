import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './CloudBasedControllerManagement.module.css';
import { PingButton_Property1Default } from './PingButton_Property1Default/PingButton_Property1Default';

interface Props {
  className?: string;
}
/* @figmaId 543:1622 */
export const CloudBasedControllerManagement: FC<Props> = memo(function CloudBasedControllerManagement(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.emulatorTpLinkComByHtmlToDesig}>
        <div className={classes.divH2d70d0aec7}>
          <div className={classes.divPanelWrap}>
            <div className={classes.divPanelHeader}>
              <div className={classes.heading3}>
                <div className={classes.cloudBasedControllerManagement}>Cloud-Based Controller Management</div>
              </div>
            </div>
            <div className={classes.divPanelContentContainer}>
              <div className={classes.divSflowStatusSwitch}>
                <div className={classes.divWidgetWrap}></div>
              </div>
              <div className={classes.divJumbo}>
                <div className={classes.divWidgetFieldlabelWrap}>
                  <div className={classes.labelJumbo}>Cloud-Based Controller Management:</div>
                </div>
                <div className={classes.divWidgetTips}>
                  <div className={classes.divContent}>
                    <div className={classes.enable}>Enable</div>
                  </div>
                </div>
              </div>
              <div className={classes.divJumbo2}>
                <div className={classes.divWidgetFieldlabelWrap2}>
                  <div className={classes.labelJumbo2}>Connection Status:</div>
                </div>
                <div className={classes.divWidgetTips2}>
                  <div className={classes.divContent2}>
                    <div className={classes.disabled}>Disabled</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.divSflowGlobalNotes}>
              <div className={classes.divNotesTitle}>
                <div className={classes.notes}>Notes:</div>
              </div>
              <div className={classes.list}>
                <div className={classes.item}>
                  <div className={classes.toEnjoyCentralizedManagementOn}>
                    <div className={classes.textBlock}>
                      To enjoy centralized management on Omada Cloud-Based Controller, enable Cloud-Based Controller
                      Management and add the device to the controller via its serial number.
                    </div>
                    <div className={classes.textBlock2}>
                      You can disable this feature if you do not need to manage the device with the Omada Cloud-Based
                      Controller.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.divPanelWrap2}>
          <div className={classes.divPanelHeader2}>
            <div className={classes.heading32}>
              <div className={classes.controllerInformURL}>Controller Inform URL</div>
            </div>
          </div>
          <div className={classes.divJumbo3}>
            <div className={classes.divWidgetFieldlabelWrap3}>
              <div className={classes.labelJumbo3}>Inform URL/IP Address:</div>
            </div>
            <div className={classes.divWidgetWrap2}>
              <div className={classes.input}></div>
            </div>
          </div>
          <div className={classes.divSflowGlobalNotes2}>
            <div className={classes.divNotesTitle2}>
              <div className={classes.notes2}>Notes:</div>
            </div>
            <div className={classes.list2}>
              <div className={classes.item2}>
                <div className={classes.enterTheInformURLOrIPAddressOf}>
                  <div className={classes.textBlock3}>
                    Enter the inform URL or IP address of your controller to tell the device where to discover the
                    controller.
                  </div>
                  <div className={classes.textBlock4}>
                    This feature is commonly used for the device to be managed by the controller in Layer 3 deployments.
                  </div>
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
  );
});
