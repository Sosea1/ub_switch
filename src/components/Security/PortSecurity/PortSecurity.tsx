import { memo, useEffect, useLayoutEffect, useState } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './PortSecurity.module.css';
import axios, { AxiosResponse } from 'axios';
import { buildHtmlTable } from '../../../utils';
import parse from 'html-react-parser'
import { addStaticPS, viewPS } from '../queries';
import { useAsyncError } from 'react-router-dom';

interface Props {
  className?: string;
}
/* @figmaId 617:1646 */
export const PortSecurity: FC<Props> = memo(function PortSecurity_Default(props = {}) {
  
  console.log("Component is rendering");
  const [entries, setEntries] = useState<[] | GetPS[]>([]);

  useEffect(() => {
    (async () => {
      const entr = await viewPS();
      setEntries(entr);
    })();
  }, [])
  
  useEffect(() => {
    console.log("entries", entries);
  }, [entries]); // Этот эффект будет вызываться каждый раз, когда `entries` обновляется


  return ( 
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.emulatorTpLinkComByHtmlToDesig}>
        <div className={classes.divH2dE0a38746}>
          <div className={classes.divPanelWrap}>
            <div className={classes.divPanelHeader}>
              <div className={classes.heading3}>
                <div className={classes.portSecurityConfig}>Port Security Config</div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.tableFrame}>
          
          {entries.length === 0 ? (
            <div className={classes.noEntriesInThisTable}>No entries in this table.</div>
          ) : (
            <table>
              <thead>
                <tr>
                 <th>Port</th>
                 <th>Max Learned Number of MAC</th>
                 <th>Current Learned Number of MAC</th>
                 <th>Exceed Max Learned Trap</th>
                 <th>Learn Address Mode</th>
                 <th>Status</th>
                </tr>
              </thead>
              <tbody>
              {entries.map((row, index) => (
                 <tr key={index}>
                    <td>{row.name}</td>
                    <td>{row.max_mac}</td>
                    <td>{row.cur_mac}</td>
                    <td>{row.trap ? 'Active' : 'Disabled'}</td>
                    <td>{row.address_mode}</td>
                    <td>{row.status ? 'Active' : 'Disabled'}</td>
                 </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}
)

//     <div className={`${resets.storybrainResets} ${classes.root}`}>
//       <div className={classes.emulatorTpLinkComByHtmlToDesig}>
//         <div className={classes.divH2dE0a38746}>
//           <div className={classes.divPanelWrap}>
//             <div className={classes.divPanelHeader}>
//               <div className={classes.heading3}>
//                 <div className={classes.portSecurityConfig}>Port Security Config</div>
//               </div>
//             </div>
//             <div className={classes.spanSubNavigatorText}>
//               <div className={classes.uNIT1}>UNIT1</div>
//             </div>
//           </div>
//         </div>
//         <div className={classes.frame22}>
//           <div className={classes.noEntriesInThisTable}>No entries in this table.</div>
//           <div className={classes.rectangle4}></div>
//           <div className={classes.rectangle5}></div>
//           <div className={classes.frame17}></div>
//           <div className={classes.frame21}>
//             <div className={classes.port}>Port</div>
//             <div className={classes.maxLearnedNumberOfMAC}>Max Learned Number of MAC</div>
//             <div className={classes.currentLearnedNumber}>Current Learned Number</div>
//             <div className={classes.currentLearnedNumber2}>Current Learned Number</div>
//             <div className={classes.learnAddressMode}>Learn Address Mode</div>
//             <div className={classes.status}>Status</div>
//           </div>
//         </div>
//       </div>
//     </div>
  
// );
// }
// );
