import { memo, useEffect, useLayoutEffect, useState } from 'react';
import type { FC, MouseEventHandler } from 'react';

import resets from '../../_resets.module.css';
import classes from './PortSecurity.module.css';
import axios, { AxiosResponse } from 'axios';
import parse from 'html-react-parser'
import { addStaticPS, deleteStaticPS, viewPS } from '../queries';
import { useAsyncError } from 'react-router-dom';

interface Props {
  className?: string;
}
/* @figmaId 617:1646 */
export const PortSecurity: FC<Props> = memo(function PortSecurity_Default(props = {}) {
  
  const [entries, setEntries] = useState<[] | GetPS[]>([]);

  const [checked, setChecked] = useState<boolean>(false);
  const [numberChecked, setNumberChecked] = useState<GetPS[]>([]);
  const [count, setCount] = useState<number>(0);
  const [selected, setSelected] = useState<string>("");

  useEffect(() => {
    (async () => {
      const entr = await viewPS();
      setEntries(entr);
    })();
  }, [])
  

  const toggle = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    var check = e.currentTarget as HTMLInputElement;
    var flag = false
    if (check.checked == true) {
      flag = true
      setCount(entries.length)
    }
    else {
      setCount(0)
    }
    setChecked(flag)
    var checkboxes = document.getElementsByClassName('checkbox_td') as  HTMLCollectionOf<HTMLInputElement>;
    for (var i = 0; i < entries.length; i++) {
      checkboxes[i].checked = flag
      if (!numberChecked.includes(entries[i]) && flag) {
        numberChecked.push(entries[i])
      }
      else if (numberChecked.includes(entries[i]) && !flag) {
        var index = numberChecked.indexOf(entries[i])
        numberChecked.splice(index, 1)
    }
  }
}

  const apply = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (selected == "active") {
      for (let int of numberChecked) {
        addStaticPS({interface: int.name, mac_address: null})
      }
    }
    else if (selected == "disabled")
      for (let int of numberChecked) {
        deleteStaticPS({interface: int.name, mac_address: null})
      }
  }

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
        <table>
              <thead>
                <tr>
                <th className={classes.checkbox_th}><input  id='checkbox_th' type='checkbox'
                onClick={toggle}></input></th>
                 <th>Port</th>
                 <th>Max Learned Number of MAC</th>
                 <th>Current Learned Number of MAC</th>
                 <th>Exceed Max Learned Trap</th>
                 <th>Learn Address Mode</th>
                 <th>Status</th>
                </tr>
              </thead>
          {entries.length === 0 ? (
            <tbody>
               <tr>
                  <div className={classes.NoEntriesTable}>No entries in this table</div>
               </tr>
            </tbody>
          ) : (
              <tbody>
                <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td><select name='status' onChange={(event) => {
                  setSelected(event.target.value)
                }}>
                  <option value="" selected></option>
                  <option value="active">Active</option>
                  <option value="disabled">Disabled</option>
                  </select></td>
                </tr>
              {entries.map((row, index) => (
                 <tr key={index}>
                    <td ><input className='checkbox_td' type='checkbox' onClick={(e) => {
                      var checkbox = e.currentTarget as HTMLInputElement;
                      if ( !numberChecked.includes(row) && checkbox.checked) {
                        numberChecked.push(row)
                        setChecked(true)
                        setCount(count+1)
                      }
                      else if (numberChecked.includes(row) && !checkbox.checked) {
                        var index = numberChecked.indexOf(row)
                        numberChecked.splice(index, 1)
                        setCount(count-1)
                        if (numberChecked.length == 0) {
                          setChecked(false)
                        }
                        
                      }
                    }}></input></td>
                    <td>{row.name}</td>
                    <td>{row.max_mac}</td>
                    <td>{row.cur_mac}</td>
                    <td>{row.trap ? 'Active' : 'Disabled'}</td>
                    <td>{row.address_mode}</td>
                    <td>{ 
                    numberChecked.includes(row) ? (
                    selected == "" ? (row.status ? 'Active' : 'Disabled') :
                    (selected == "active" ? 'Active' : 'Disabled')) :
                      (row.status ? 'Active' : 'Disabled')
                    }</td>
                 </tr>
                ))}
                <div className={classes.footer}>
                  <p>Total: {entries.length}</p>
                  <p>{count} entry selected.</p>
                  <button className={classes.apply_button} onClick={apply}>Apply</button>
                </div>
              </tbody>
          )}
         </table>
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
