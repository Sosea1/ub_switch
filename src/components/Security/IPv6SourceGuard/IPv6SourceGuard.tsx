import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './IPv6SourceGuard.module.css';

interface Props {
  className?: string;
}
/* @figmaId 620:1911 */
export const IPv6SourceGuard: FC<Props> = memo(function IPv6SourceGuard(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.emulatorTpLinkComByHtmlToDesig}>
        <div className={classes.divH2dE0a38746}>
          <div className={classes.divPanelWrap}>
            <div className={classes.divPanelHeader}>
              <div className={classes.heading3}>
                <div className={classes.iPv6SourceGuardConfig}>IPv6 Source Guard Config</div>
              </div>
            </div>
            <div className={classes.divSflowTemplateTable}>
              <div className={classes.divSflowTemplateTable_statusBa}>
                <div className={classes.spanStatusTotal}></div>
              </div>
              <div className={classes.divScrollXContainer}>
                <div className={classes.divContainer}>
                  <div className={classes.cell}></div>
                  <div className={classes.cell2}>
                    <div className={classes.port}>Port</div>
                  </div>
                  <div className={classes.cell3}>
                    <div className={classes.securityType}>Security Type</div>
                  </div>
                  <div className={classes.cell4}>
                    <div className={classes.lAG}>LAG</div>
                  </div>
                </div>
                <div className={classes.table}></div>
              </div>
            </div>
            <div className={classes.spanSubNavigatorText}>
              <div className={classes.uNIT1}>UNIT1</div>
            </div>
          </div>
          <div className={classes.divSflowCollectorNotes}>
            <div className={classes.divNotesTitle}></div>
            <div className={classes.item}></div>
          </div>
        </div>
      </div>
    </div>
  );
});
