import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './SNMPV1.module.css';
import { IoMdAddCircle } from 'react-icons/io';
import { TiDelete } from 'react-icons/ti';

interface Props {
  className?: string;
}
/* @figmaId 412:1066 */
export const SNMPV1: FC<Props> = memo(function SNMPV1(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.frame16}>
        <div className={classes.frame22}>
          <div className={classes.noEntriesInThisTable}>No entries in this table.</div>
          <div className={classes.rectangle4}></div>
          <div className={classes.rectangle5}></div>
          <div className={classes.frame17}></div>
        </div>
        <div className={classes.frame21}>
        <input id='main_check' style={{cursor: 'pointer'}} type="checkbox" className={classes.input2}/>
          <div className={classes.index}>Index</div>
          <div className={classes.communityName}>Community Name</div>
          <div className={classes.accessMode}>Access Mode</div>
          <div className={classes.mIBView}>MIB View</div>
          <div className={classes.operation}>Operation</div>
        </div>
        <div className={classes.total}>Total: 0</div>
        <div className={classes.line3}></div>
        <div className={classes.sNMPCommunityConfig}>SNMP Community Config</div>
        <div className={classes.link}>
          <div className={classes.spanIcon}></div>
          <div className={classes.add}>Add</div>
          <IoMdAddCircle style={{cursor: 'pointer'}} className={classes.add1} />
        </div>
        <div className={classes.link2}>
          <div className={classes.spanIcon2}></div>
          <div className={classes.delete}>Delete</div>
          <TiDelete style={{cursor: 'pointer'}} className={classes.delete1}/>
          
        </div>
      </div>
    </div>
  );
});
