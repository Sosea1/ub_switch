import { memo, useEffect, useLayoutEffect, useState } from 'react';
import type { FC, MouseEventHandler } from 'react';
import resets from '../../_resets.module.css';
import classes from './DHCPv4Filter.module.css';
import { addStaticPS, deleteStaticPS, viewDHCP, viewPS } from '../queries';
import {useModal} from '../../useModal';
import {Modal} from '../../modal';
import React from 'react';
import  '../../modal_styles.css'
import { Icon } from 'semantic-ui-react';
import { Root, createRoot } from 'react-dom/client';
import { GACLRules } from '../ACLRules/GACLRules';
import { DHCPServers } from '../DHCPServers/DHCPServers';

interface Props {
  className?: string;
}
/* @figmaId 617:1646 */
export const DHCPv4Filter: FC<Props> = memo(function DHCPv4Filter(props = {}) {
  
  const ComponentOne =(name: string): React.ReactNode  => {

    return <DHCPServers ACLName={name}/>
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

  const [entries, setEntries] = useState<[] | PortDHCP[]>([]);

  const [checked, setChecked] = useState<boolean>(false);
  const [action, setAction] = useState<boolean>();
  const [numberChecked, setNumberChecked] = useState<PortDHCP[]>([]);
  const [count, setCount] = useState<number>(0);
  const [selected, setSelected] = useState<string>("");

  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const onApply = () => {
    var mac = document.getElementById("input_mac") as HTMLInputElement
    var mac_value = mac.value
    if (mac_value.split(':').length != 6) {
      return
    }
    var port = document.getElementById("input_port") as HTMLInputElement
    if (action) {
      addStaticPS({interface: port.value, mac_address: mac.value})
    }
    else {
      deleteStaticPS({interface: port.value, mac_address: mac.value})
    }
    toggle();
    (async () => {
      const entr = await viewDHCP();
      setEntries(entr);
    })
  }



  useEffect(() => {
    (async () => {
      const entr = await viewDHCP();
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

  const apply = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (selected == "active") {
      for (let int of numberChecked) {
        // addStaticPS({interface: int.name, mac_address: null})
      }
    }
    else if (selected == "disabled") {
      for (let int of numberChecked) {
        // deleteStaticPS({interface: int.name, mac_address: null})
      }
    } 
    var checkboxes = document.getElementsByClassName('checkbox_td') as  HTMLCollectionOf<HTMLInputElement>;
    for (let checkbox of checkboxes) {
      checkbox.checked = false
    }
    while (numberChecked.length > 0) {
      numberChecked.pop()
    }
    (async () => {
      const entr = await viewDHCP();
      setEntries(entr);
    })
    setCount(0)
  }

  return ( 
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.emulatorTpLinkComByHtmlToDesig}>
        <div className={classes.divH2dE0a38746}>
          <div className={classes.divPanelWrap}>
            <div className={classes.divPanelHeader}>
              <div className={classes.heading3}>
                <div className={classes.portSecurityConfig}>DHCP Filter</div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.tableFrame}>
        <table>
              <thead>
                <tr>
                <th className={classes.checkbox_th}><input  id='checkbox_th' type='checkbox'
                onClick={toggle_checkbox}></input></th>
                 <th>Port</th>
                 <th>DHCP Snooping</th>
                 <th>Legal DHCP Servers</th>
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
                <tr>
                <td className={classes.header_td}></td>
                <td className={classes.header_td}></td>
                <td className={classes.header_td_}><select id='status_select' name='status' onChange={(event) => {
                  setSelected(event.target.value)
                }}>
                  <option value="" selected></option>
                  <option value="active">Active</option>
                  <option value="disabled">Disabled</option>
                  </select></td>
                  <td className={classes.header_td}></td>
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
                    <td>{row.port}</td>
                    <td>{ 
                    numberChecked.includes(row) ? (
                    selected == "" ? (row.dhcp_snooping ? 'Active' : 'Disabled') :
                    (selected == "active" ? 'Active' : 'Disabled')) :
                      (row.dhcp_snooping ? 'Active' : 'Disabled')
                    }</td>
                    <td><button onClick={() => click1(ComponentOne(row.port))}  className={classes.inner_sidebar_button}>Edit Legal DHCP Servers</button></td>
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

