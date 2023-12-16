import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './BackupConfig.module.css';

interface Props {
  className?: string;
}
/* @figmaId 526:1194 */
export const BackupConfig: FC<Props> = memo(function BackupConfig(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.emulatorTpLinkComByHtmlToDesig}>
        <div className={classes.divH2d70d0aec7}>
          <div className={classes.divPanelWrap}>
            <div className={classes.divPanelHeader}>
              <div className={classes.heading3}>
                <div className={classes.backupConfig}>Backup Config</div>
              </div>
            </div>
            <div className={classes.divPanelContentContainer}>
              <div className={classes.divSflowStatusSwitch}>
                <div className={classes.divWidgetFieldlabelWrap}>
                  <div className={classes.labelSFlowAgent}>Back up the current startup configuration file.</div>
                </div>
                <div className={classes.divWidgetWrap}></div>
              </div>
              <div className={classes.divSflowAgentAddr}>
                <div className={classes.divWidgetFieldlabelWrap2}>
                  <div className={classes.labelAgentAddress}>Target Unit:</div>
                </div>
                <div className={classes.divWidgetTips}>
                  <div className={classes.divContent}></div>
                </div>
                <div className={classes.divWidgetWrap2}>
                  <div className={classes.input}>
                    <div className={classes.allUnit}>All Unit</div>
                  </div>
                </div>
              </div>
              <div className={classes.divSflowGlobalSubmit}></div>
            </div>
          </div>
          <div className={classes.divSflowGlobalNotes}>
            <div className={classes.divNotesTitle}>
              <div className={classes.notes}>Notes:</div>
            </div>
            <div className={classes.list}>
              <div className={classes.item}>
                <div className={classes.thisMayTakeSeveralMinutesPleas}>
                  This may take several minutes. Please wait without operating the switch.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
