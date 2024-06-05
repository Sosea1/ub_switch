import { memo, useEffect, useState } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './IPMACBinding.module.css';
import { useModal } from '../../useModal';
import { viewARPTable } from '../queries';
import {Modal} from '../../modal';
import  '../../modal_styles.css'
import { Root, createRoot } from 'react-dom/client';
import { GACLRules } from '../ACLRules/GACLRules';

interface Props {
  className?: string;
}
/* @figmaId 617:1670 */
export const IPMACBinding: FC<Props> = memo(function IPMACBinding(props = {}) {


  const { isShown, toggle } = useModal();

  const [entries, setEntries] = useState<[] | ARPTable[]>([]);

  const [checked, setChecked] = useState<boolean>(false);
  const [action, setAction] = useState<boolean>();
  const [numberChecked, setNumberChecked] = useState<ARPTable[]>([]);
  const [count, setCount] = useState<number>(0);
  const [selected, setSelected] = useState<string>("");

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
      const entr = await viewARPTable();
      setEntries(entr);
    })
  }



  useEffect(() => {
    (async () => {
      const entr = await viewARPTable();
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
        <div className={classes.aCLConfig}>IP MAC Binding Table</div>
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
                    'Capcha'
                  } onApply={onApply} modalContent={
                    <div>
                      <div className='modalRow'>
                        <label className='labelModal'>IP Address:</label>
                          <input className='inputModal' id="input_acl_name" type="text"></input>
                      </div>
                      <div className='modalRow'>
                        <label className='labelModal'>MAC Address:</label>
                          <input className='inputModal' id="input_port" type="text"></input>
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
                
                 <th>IP Address</th>
                 <th>MAC Address</th>
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
                    <td>{row.ip}</td>
                    <td>{row.mac}</td>
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
