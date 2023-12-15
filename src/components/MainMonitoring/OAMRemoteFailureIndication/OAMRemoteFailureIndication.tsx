import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './OAMRemoteFailureIndication.module.css';

interface Props {
  className?: string;
}
/* @figmaId 424:1363 */
export const OAMRemoteFailureIndication: FC<Props> = memo(function OAMRemoteFailureIndication(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.emulatorTpLinkComByHtmlToDesig}>
        <div className={classes.divH2dE0a38746}>
          <div className={classes.divPanelWrap}>
            <div className={classes.divPanelHeader}>
              <div className={classes.heading3}>
                <div className={classes.remoteFailureIndicationConfig}>Remote Failure Indication Config</div>
              </div>
            </div>
            <div className={classes.divSflowTemplateTable}>
              <div className={classes.divSflowTemplateTable_statusBa}>
                <div className={classes.spanStatusTotal}>
                  <div className={classes.total4}>Total: 4</div>
                </div>
              </div>
              <div className={classes.divScrollXContainer}>
                <div className={classes.divContainer}>
                  <div className={classes.cell}></div>
                  <div className={classes.cell2}>
                    <div className={classes.port}>Port</div>
                  </div>
                  <div className={classes.cell3}>
                    <div className={classes.maximumHeaderSizeBytes}>Maximum Header Size (Bytes)</div>
                  </div>
                  <div className={classes.cell4}>
                    <div className={classes.lAG}>LAG</div>
                  </div>
                </div>
                <div className={classes.table}>
                  <div className={classes.row}>
                    <div className={classes.data}></div>
                    <div className={classes.data2}>
                      <div className={classes.divContent}>
                        <div className={classes._11}>1/0/1</div>
                      </div>
                    </div>
                    <div className={classes.data3}>
                      <div className={classes.divContent2}>
                        <div className={classes.enabled}>Enabled</div>
                      </div>
                    </div>
                    <div className={classes.data4}>
                      <div className={classes.divContent3}>
                        <div className={classes.enabled2}>Enabled</div>
                      </div>
                    </div>
                  </div>
                  <div className={classes.row2}>
                    <div className={classes.data5}></div>
                    <div className={classes.data6}>
                      <div className={classes.divContent4}>
                        <div className={classes._12}>1/0/2</div>
                      </div>
                    </div>
                    <div className={classes.data7}>
                      <div className={classes.divContent5}>
                        <div className={classes.enabled3}>Enabled</div>
                      </div>
                    </div>
                    <div className={classes.data8}>
                      <div className={classes.divContent6}>
                        <div className={classes.enabled4}>Enabled</div>
                      </div>
                    </div>
                  </div>
                  <div className={classes.row3}>
                    <div className={classes.data9}></div>
                    <div className={classes.data10}>
                      <div className={classes.divContent7}>
                        <div className={classes._13}>1/0/3</div>
                      </div>
                    </div>
                    <div className={classes.data11}>
                      <div className={classes.divContent8}>
                        <div className={classes.enabled5}>Enabled</div>
                      </div>
                    </div>
                    <div className={classes.data12}>
                      <div className={classes.divContent9}>
                        <div className={classes.enabled6}>Enabled</div>
                      </div>
                    </div>
                  </div>
                  <div className={classes.row4}>
                    <div className={classes.data13}></div>
                    <div className={classes.data14}>
                      <div className={classes.divContent10}>
                        <div className={classes._14}>1/0/4</div>
                      </div>
                    </div>
                    <div className={classes.data15}>
                      <div className={classes.divContent11}>
                        <div className={classes.enabled7}>Enabled</div>
                      </div>
                    </div>
                    <div className={classes.data16}>
                      <div className={classes.divContent12}>
                        <div className={classes.enabled8}>Enabled</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.spanSubNavigatorText}>
              <div className={classes.uNIT1}>UNIT1</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
