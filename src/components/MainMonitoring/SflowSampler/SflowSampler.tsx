import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './SflowSampler.module.css';

interface Props {
  className?: string;
}
/* @figmaId 421:1743 */
export const SflowSampler: FC<Props> = memo(function SflowSampler(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.emulatorTpLinkComByHtmlToDesig}>
        <div className={classes.divH2dE0a38746}>
          <div className={classes.divPanelWrap}>
            <div className={classes.divPanelHeader}>
              <div className={classes.heading3}>
                <div className={classes.samplerConfig}>Sampler Config</div>
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
                    <input id='main_check' style={{cursor: 'pointer'}} type="checkbox" className={classes.input3}/>
                  </div>
                  <div className={classes.cell3}>
                    <div className={classes.collectorID}>Collector ID</div>
                  </div>
                  <div className={classes.cell4}>
                    <div className={classes.ingressSamplingRateHz}>Ingress Sampling Rate (Hz)</div>
                  </div>
                  <div className={classes.cell5}>
                    <div className={classes.egressSamplingRateHz}>Egress Sampling Rate (Hz)</div>
                  </div>
                  <div className={classes.cell6}>
                    <div className={classes.maximumHeaderSizeBytes}>Maximum Header Size (Bytes)</div>
                  </div>
                  <div className={classes.cell7}>
                    <div className={classes.lAG}>LAG</div>
                  </div>
                </div>
                <div className={classes.table}>
                  <div className={classes.row}>
                    <div className={classes.data}></div>
                    <div className={classes.data2}>
                      <div className={classes.divContent}>
                        <div className={classes._11}>1/0/1</div>
                        <input id='main_check' style={{cursor: 'pointer'}} type="checkbox" className={classes.input2}/>
                      </div>
                    </div>
                    <div className={classes.data3}>
                      <div className={classes.divContent2}>
                        <div className={classes.unnamed}>0</div>
                      </div>
                    </div>
                    <div className={classes.data4}>
                      <div className={classes.divContent3}>
                        <div className={classes._300}>300</div>
                      </div>
                    </div>
                    <div className={classes.data5}>
                      <div className={classes.divContent4}>
                        <div className={classes.unnamed2}>--</div>
                      </div>
                    </div>
                    <div className={classes.data6}>
                      <div className={classes.divContent5}>
                        <div className={classes.unnamed3}>0</div>
                      </div>
                    </div>
                    <div className={classes.data7}>
                      <div className={classes.divContent6}>
                        <div className={classes.unnamed4}>0</div>
                      </div>
                    </div>
                  </div>
                  <div className={classes.row2}>
                    <div className={classes.data8}></div>
                    <div className={classes.data9}>
                      <div className={classes.divContent7}>
                        <div className={classes._3002}>300</div>
                      </div>
                    </div>
                    <div className={classes.data10}>
                      <div className={classes.divContent8}>
                        <div className={classes.unnamed5}>--</div>
                      </div>
                    </div>
                    <div className={classes.data11}>
                      <div className={classes.divContent9}>
                        <div className={classes.unnamed6}>0</div>
                      </div>
                    </div>
                    <div className={classes.data12}>
                      <div className={classes.divContent10}>
                        <div className={classes.unnamed7}>0</div>
                      </div>
                    </div>
                    <div className={classes.data13}>
                      <div className={classes.divContent11}>
                        <div className={classes.unnamed8}>0</div>
                      </div>
                    </div>
                    <div className={classes.data14}>
                      <div className={classes.divContent12}>
                        <div className={classes._12}>1/0/2</div>
                        <input id='main_check' style={{cursor: 'pointer'}} type="checkbox" className={classes.input2}/>
                      </div>
                    </div>
                  </div>
                  <div className={classes.row3}>
                    <div className={classes.data15}></div>
                    <div className={classes.data16}>
                      <div className={classes.divContent13}>
                        <div className={classes.unnamed9}>0</div>
                      </div>
                    </div>
                    <div className={classes.data17}>
                      <div className={classes.divContent14}>
                        <div className={classes._3003}>300</div>
                      </div>
                    </div>
                    <div className={classes.data18}>
                      <div className={classes.divContent15}>
                        <div className={classes.unnamed10}>--</div>
                      </div>
                    </div>
                    <div className={classes.data19}>
                      <div className={classes.divContent16}>
                        <div className={classes.unnamed11}>0</div>
                      </div>
                    </div>
                    <div className={classes.data20}>
                      <div className={classes.divContent17}>
                        <div className={classes.unnamed12}>0</div>
                      </div>
                    </div>
                    <div className={classes.data21}>
                      <div className={classes.divContent18}>
                        <div className={classes._13}>1/0/3</div>
                        <input id='main_check' style={{cursor: 'pointer'}} type="checkbox" className={classes.input2}/>
                      </div>
                    </div>
                  </div>
                  <div className={classes.row4}>
                    <div className={classes.data22}></div>
                    <div className={classes.data23}>
                      <div className={classes.divContent19}>
                        <div className={classes._3004}>300</div>
                      </div>
                    </div>
                    <div className={classes.data24}>
                      <div className={classes.divContent20}>
                        <div className={classes.unnamed13}>--</div>
                      </div>
                    </div>
                    <div className={classes.data25}>
                      <div className={classes.divContent21}>
                        <div className={classes.unnamed14}>0</div>
                      </div>
                    </div>
                    <div className={classes.data26}>
                      <div className={classes.divContent22}>
                        <div className={classes.unnamed15}>0</div>
                      </div>
                    </div>
                    <div className={classes.data27}>
                      <div className={classes.divContent23}>
                        <div className={classes.unnamed16}>0</div>
                      </div>
                    </div>
                    <div className={classes.data28}>
                      <div className={classes.divContent24}>
                        <div className={classes._14}>1/0/4</div>
                        <input id='main_check' style={{cursor: 'pointer'}} type="checkbox" className={classes.input2}/>
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
          <div className={classes.divSflowCollectorNotes}>
            <div className={classes.divNotesTitle}>
              <div className={classes.notes}>Notes:</div>
            </div>
            <div className={classes.item}>
              <div className={classes.eachPortCanBeBoundToOnlyOneCol}>Each port can be bound to only one collector</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
