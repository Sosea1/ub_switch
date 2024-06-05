import { memo, useEffect, useState } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './GACLRules.module.css';
import { useModal } from '../../useModal';
import { viewACL, viewACLRules } from '../queries';
import {Modal} from '../../modal';
import  '../../modal_styles.css'

interface Props {
  ACLName: string;
}
/* @figmaId 617:1670 */
export const GACLRules: FC<Props> = memo(function GACLRules({ACLName}) {
  const { isShown, toggle } = useModal();

  const [entries, setEntries] = useState<[] | ACLRules[]>([]);

  const [checked, setChecked] = useState<boolean>(false);
  const [action, setAction] = useState<boolean>();
  const [numberChecked, setNumberChecked] = useState<ACLRules[]>([]);
  const [count, setCount] = useState<number>(0);
  const [selected, setSelected] = useState<string>("");

  const [s_ip, setS_ip] = useState<boolean>(false);
  const [d_ip, setD_ip] = useState<boolean>(false);
  const [protocol, setProtocol] = useState<boolean>(false);
  const [p_src, setP_src] = useState<boolean>(false);
  const [d_src, setD_src] = useState<boolean>(false);

  const onApply = () => {
    var port = document.getElementById("input_acl_name") as HTMLInputElement
    if (action) {
      // addStaticPS({interface: port.value, mac_address: mac.value})
    }
    else {
      // deleteStaticPS({interface: port.value, mac_address: mac.value})
    }
    toggle();
    (async () => {
      const entr = await viewACLRules(ACLName);
      checkACL(entr)
      setEntries(entr);
    })
  }

  const checkACL = (entr: ACLRules[]) => {
      let s_ip_flag = false
      var d_ip_flag = false
      var protocol_flag = false
      var p_src_flag = false
      var d_src_flag = false
      d_src_flag = true
      entr.forEach(function (entry) {
        if (entry.s_ip != null) {
          s_ip_flag = true;
        }
        if (entry.d_ip != null) {
          d_ip_flag = true;
        }
        if (entry.protocol != null) {
          protocol_flag = true;
        }
        if (entry.p_src != null) {
          p_src_flag = true;
        }
        if (entry.d_src != null) {
          d_src_flag = true;
        }
      })
      setS_ip(s_ip_flag)
      setD_ip(d_ip_flag)
      setProtocol(protocol_flag)
      setP_src(p_src_flag)
      setD_src(d_ip_flag)
  }

  useEffect(() => {
    (async () => {
      const entr = await viewACLRules(ACLName);
      checkACL(entr)
      setEntries(entr);
    })();
  }, [])
  

  const toggle_checkbox = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
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

  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.frame16}>
        <div className={classes.line3}></div>
        <div className={classes.aCLConfig}>ACL Details</div>
        <div className={classes.ACLName}>
          <label>ACL Name:</label>
          <label className={classes.label_ACL}>{ACLName}</label>
        </div>
        <div className={classes.line4}></div>
        <div className={classes.ACLRulesTable}>ACL Rules Table</div>
        <div className={classes.link}>
        {/* ----------------------ADD BUTTON------------------- */}
        <button className={classes.addIcon} onClick={() => {
                      setAction(true)
                      toggle()
                    }}></button>
                    <label className='labelModal' onClick={() => {
                      setAction(true)
                      toggle()
                    }}>Add</label>
        {/* ----------------------------------------- */}
        </div>
        <div className={classes.link2}>
        {/* ---------------------DELETE BUTTON------------------- */}
        <button className={classes.deleteIcon} onClick={() => {
                      // deleteStaticPS({interface: int.name, mac_address: null})
                    }}></button>
                    <label className='labelModal' onClick={() => {
                      // deleteStaticPS({interface: int.name, mac_address: null})
                    }}>Delete</label>
        {/* ----------------------------------------- */}
        </div>
        <Modal isShown={isShown} hide={toggle} headerText={
                    'Create ACL'
                  } onApply={onApply} modalContent={
                    <div>
                      <div className='modalRow'>
                        <label className='labelModal'>ACL Name:</label>
                        <label className={classes.labelModal2}>{ACLName}</label>
                      </div>
                      <div className='modalRow'>
                        <label className='labelModal'>Operation</label>
                          <input className='inputModal' id="input_acl_name" type="text"></input>
                      </div>
                      <div className='modalRow'>
                        <label className='labelModal'>S-IP</label>
                          <input className='inputModal' id="input_acl_name" type="text"></input>
                      </div>
                      <div className='modalRow'>
                        <label className='labelModal'>D-IP</label>
                          <input className='inputModal' id="input_acl_name" type="text"></input>
                      </div>
                      <div className='modalRow'>
                        <label className='labelModal'>IP Protocol</label>
                          <input className='inputModal' id="input_acl_name" type="text"></input>
                      </div>
                      <div className='modalRow'>
                        <label className='labelModal'>S-Port</label>
                          <input className='inputModal' id="input_acl_name" type="text"></input>
                      </div>
                      <div className='modalRow'>
                        <label className='labelModal'>D-Port</label>
                          <input className='inputModal' id="input_acl_name" type="text"></input>
                      </div>
                      <div></div>
                    </div>
                  } />
        {/* ----------------------TABLE------------------- */}
        <div className={classes.tableFrame}>
        <table>
              <thead>
                <tr>
                <th className={classes.checkbox_th}><input  id='checkbox_th' type='checkbox'
                onClick={toggle_checkbox}></input></th>
                 <th>Rule ID</th>
                 <th>Action</th>
                 {s_ip == true && <th>Src IP</th>}
                {d_ip  == true && <th>Dst IP</th>}
                {protocol  == true && <th>Protocol</th>}
                {p_src  == true && <th>Src Port</th>}
                <th>Dst Port</th>
                </tr>
              </thead>
          {entries.length === 0 ? (
            <tbody>
               <tr>
                  <div className={classes.NoEntriesTable}>No entries in this table</div>
               </tr>
               <div className={classes.footer} >
                </div>
            </tbody>
          ) : (
              <tbody>
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
                    <td>{row.rule_id}</td>
                    <td>{row.allow ? 'Permit' : 'Deny'}</td>
                    {s_ip == true && <td>{row.s_ip}</td>}
                    {d_ip  == true && <td>{row.d_ip}</td>}
                    {protocol  == true && <td>{row.protocol}</td>}
                    {p_src  == true && <td>{row.p_src}</td>}
                    <td>{row.d_src}</td>
                 </tr>
                ))}
                <div className={classes.footer}>
                  <div className={classes.in_footer}>
                  <p>Total: {entries.length}</p>
                  <p>{count} entry selected.</p>
                  </div>
                </div>
              </tbody>
          )}
         </table>
        </div>
      {/* ----------------------------------------- */}

      </div>
    </div>
  );
});
