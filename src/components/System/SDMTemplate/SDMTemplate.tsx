import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { PingButton_Property1Default } from './PingButton_Property1Default/PingButton_Property1Default';
import classes from './SDMTemplate.module.css';

interface Props {
  className?: string;
}
/* @figmaId 543:1424 */
export const SDMTemplate: FC<Props> = memo(function SDMTemplate(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.emulatorTpLinkComByHtmlToDesig}>
        <div className={classes.divH2d70d0aec7}>
          <div className={classes.divPanelWrap}>
            <div className={classes.divPanelHeader}>
              <div className={classes.heading3}>
                <div className={classes.sDMTemplateConfig}>SDM Template Config</div>
              </div>
            </div>
            <div className={classes.divPanelContentContainer}>
              <div className={classes.divSflowStatusSwitch}>
                <div className={classes.divWidgetWrap}></div>
              </div>
              <div className={classes.divJumbo}>
                <div className={classes.divWidgetFieldlabelWrap}>
                  <div className={classes.labelJumbo}>Next Template:</div>
                </div>
                <div className={classes.divWidgetTips}>
                  <div className={classes.divContent}>
                    <div className={classes.default}>default</div>
                  </div>
                </div>
              </div>
              <div className={classes.divJumbo2}>
                <div className={classes.divWidgetFieldlabelWrap2}>
                  <div className={classes.labelJumbo2}>Current Template:</div>
                </div>
                <div className={classes.divWidgetTips2}>
                  <div className={classes.divContent2}>
                    <div className={classes.default2}>default</div>
                  </div>
                </div>
              </div>
              <div className={classes.divJumbo3}>
                <div className={classes.divWidgetFieldlabelWrap3}>
                  <div className={classes.labelJumbo3}>Select Next Template:</div>
                </div>
                <div className={classes.divWidgetWrap2}>
                  <div className={classes.input}>
                    <div className={classes.default3}>default</div>
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
        </div>
        <div className={classes.divPanelWrap2}>
          <div className={classes.divPanelHeader2}>
            <div className={classes.heading32}>
              <div className={classes.sDMTemplateTable}>SDM Template Table</div>
            </div>
          </div>
          <div className={classes.divPanelContentContainer2}>
            <div className={classes.divLinkGrid}>
              <div className={classes.divLinkGridPanel}>
                <div className={classes.divGridPanelContent}>
                  <div className={classes.divGridPanelContentContainer}>
                    <div className={classes.divContainer}>
                      <div className={classes.divScrollXContainer}>
                        <div className={classes.divContainer2}>
                          <div className={classes.table}>
                            <div className={classes.bodyRow}>
                              <div className={classes.frame32}>
                                <div className={classes.cell}>
                                  <div className={classes.sDMTemplate}>SDM Template</div>
                                </div>
                                <div className={classes.cell2}>
                                  <div className={classes.iPACLRules}>IP ACL Rules</div>
                                </div>
                                <div className={classes.cell3}>
                                  <div className={classes.mACACLRules}>MAC ACL Rules</div>
                                </div>
                                <div className={classes.cell4}>
                                  <div className={classes.combinedACLRules}>Combined ACL Rules</div>
                                </div>
                                <div className={classes.cell5}>
                                  <div className={classes.iPv6ACLRules}>IPv6 ACL Rules</div>
                                </div>
                                <div className={classes.cell6}>
                                  <div className={classes.iPv4SourceGuardEntries}>IPv4 Source Guard Entries</div>
                                </div>
                                <div className={classes.cell7}>
                                  <div className={classes.iPv6SourceGuardEntries}>IPv6 Source Guard Entries</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={classes.noEntriesInThisTable}>No entries in this table.</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.divTab}></div>
            <div className={classes.divWidgetWrapOuter}></div>
            <div className={classes.divWidgetWrap3}></div>
          </div>
          <div className={classes.divLinkGrid_statusBar}>
            <div className={classes.table2}>
              <div className={classes.bodyRowData}>
                <div className={classes.spanStatusTotal}>
                  <div className={classes.total}>Total: 0</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
