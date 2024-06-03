import { memo, useEffect, useState } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './ACLConfig.module.css';
import { useModal } from '../../useModal';
import { viewACL } from '../queries';
import {Modal} from '../../modal';
import  '../../modal_styles.css'
import { Root, createRoot } from 'react-dom/client';
import { GACLRules } from '../ACLRules/GACLRules';

interface Props {
  className?: string;
}
/* @figmaId 617:1670 */
export const ACLConfig: FC<Props> = memo(function ACLConfig(props = {}) {

  const ComponentOne =(name: string): React.ReactNode  => {

    return <GACLRules ACLName={name}/>
   };

   const [root, setRoot] = useState<Root>()

  const [currentComponent, setCurrentComponent] = useState<React.ReactNode>(null);


  function click1(newComponent:any):void {
      setCurrentComponent(newComponent);
    }

    useEffect(() => {
      setCurrentComponent(currentComponent)
      var x = document.getElementById('security_frame') as HTMLElement;
      //-------NEW----------
      var root1  = createRoot(x)
      setRoot(root1)
      root?.render(currentComponent)
      //------------
    },[currentComponent])


  const { isShown, toggle } = useModal();

  const [entries, setEntries] = useState<[] | ACL[]>([]);

  const [checked, setChecked] = useState<boolean>(false);
  const [action, setAction] = useState<boolean>();
  const [numberChecked, setNumberChecked] = useState<ACL[]>([]);
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
      const entr = await viewACL();
      setEntries(entr);
    })
  }



  useEffect(() => {
    (async () => {
      const entr = await viewACL();
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
        <div className={classes.aCLConfig}>ACL Config</div>
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
                 <th>ACL Name</th>
                 <th>Rules</th>
                 <th>Operation</th>
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
                    <td>{row.name}</td>
                    <td>{row.rules}</td>
                    <td><button onClick={() => click1(ComponentOne(row.name))}  className={classes.inner_sidebar_button}>Edit ACL</button></td>
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
