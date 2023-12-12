import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { _Property1Variant4 } from './_Property1Variant4/_Property1Variant4';
import classes from './Frame20.module.css';
import { PingButton_Property1Default } from './PingButton_Property1Default/PingButton_Property1Default';
import { IoMdAddCircle } from "react-icons/io";
import { TiDelete } from "react-icons/ti";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
interface Props {
  className?: string;
}

export const Frame20: FC<Props> = memo(function Frame20(props = {}) {
  
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.globalConfig}>Global Config</div>
      <div className={classes.line1}></div>
      
      <div className={classes.line3}></div>
      <div className={classes.frame16}>
        <div className={classes.sNMP}>SNMP</div>
        <div className={classes.remoteEngineID}>Remote Engine ID: </div>
        <_Property1Variant4
          className={classes.unnamed}
          text={{
            _1921681: <input className={classes._1921681}/>,
          }}
        />
        <div className={classes.localEngineID}>Local Engine ID</div>
        <_Property1Variant4
          className={classes.unnamed2}
          text={{
            _1921681: <input className={classes._19216812}/>,
          }}
        />
        <PingButton_Property1Default
          className={classes.pingButton}
          text={{
            ping: <div className={classes.ping}>Apply</div>,
          }}
        />
        <div className={classes.frame17}>
        
        </div>
        <div>
        <div className={classes.rectangle4}></div>
        <div className={classes.rectangle5}></div>
        <div className={classes.total4}>Total: 4</div>
        <div className={classes.delete}>Delete</div>
        <TiDelete style={{cursor: 'pointer'}} className={classes.delete1}/>
        <div className={classes.frame21}>
        <input id='check2' style={{cursor: 'pointer'}} type="checkbox" className={classes.input4}/>
        
          <div className={classes._2}>2</div>
          <div className={classes.viewDefault}>ViewDefault</div>
          <div className={classes.exclude}>Exclude</div>
          <div className={classes._13616315}>1.3.6.1.6.3.15</div>
          <FaRegEdit style={{left: '280px',
  top: '0px',
  position: 'relative',cursor: 'pointer'}}/>
          <RiDeleteBin6Line style={{left: '230px',
  top: '0px',
  position: 'relative',cursor: 'pointer'}}/>
        </div>
        <div className={classes.frame212}>
        <input id='check1' style={{cursor: 'pointer'}} type="checkbox" className={classes.input3}/>
        
          <div className={classes._1}>1</div>
          <div className={classes.viewDefault2}>ViewDefault</div>
          <div className={classes.include}>Include</div>
          <div className={classes._12}>1</div>
          <FaRegEdit style={{left: '280px',
  top: '0px',
  position: 'relative',cursor: 'pointer'}}/>
          <RiDeleteBin6Line style={{left: '230px',
  top: '0px',
  position: 'relative',cursor: 'pointer'}}/>
        </div>
        <div className={classes.frame22}>
        <input id='check3' style={{cursor: 'pointer'}} type="checkbox" className={classes.input5}/>
        
          <div className={classes._3}>3</div>
          <div className={classes.viewDefault3}>ViewDefault</div>
          <div className={classes.exclude2}>Exclude</div>
          <div className={classes._13616316}>1.3.6.1.6.3.16</div>
          <FaRegEdit style={{left: '280px',
  top: '0px',
  position: 'relative',cursor: 'pointer'}}/>
          <RiDeleteBin6Line style={{left: '230px',
  top: '0px',
  position: 'relative',cursor: 'pointer'}}/>
        </div>
        <div className={classes.frame213}>
          <div className={classes.index}>Index</div>
        <input id='main_check' style={{cursor: 'pointer'}} type="checkbox" className={classes.input2}/>

          <div className={classes.viewName}>View Name</div>
          <div className={classes.viewType}>View Type</div>
          <div className={classes.mIBObjectID}>MIB Object ID</div>
          <div className={classes.pingResult}>Operation</div>
        </div>
        <div className={classes.frame23}>
        <input id='check4' style={{cursor: 'pointer'}} type="checkbox" className={classes.input6}/>
          <div className={classes._4}>4</div>
          <div className={classes.viewDefault4}>ViewDefault</div>
          <div className={classes.exclude3}>Exclude</div>
          <div className={classes._13616218}>1.3.6.1.6.2.18</div>
          <FaRegEdit style={{left: '280px',
  top: '0px',
  position: 'relative',cursor: 'pointer'}}/>
          <RiDeleteBin6Line style={{left: '230px',
  top: '0px',
  position: 'relative',cursor: 'pointer'}}/>
        </div>
        </div>
        <input style={{cursor: 'pointer'}} type="checkbox" className={classes.input1}/>
        <div  className={classes.enable}>Enable</div>
        <PingButton_Property1Default
          className={classes.pingButton2}
          text={{
            ping: <div className={classes.ping2}>Default</div>,
          }}
        />
        <div className={classes.sNMPViewConfig}>SNMP View Config</div>
        <div className={classes._1064Hex}>(10-64 Hex)</div>
        <div className={classes.NullOr1064Hex}>(Null or 10-64 Hex)</div>
        <div className={classes.add}>Add</div>
        <IoMdAddCircle style={{cursor: 'pointer'}} className={classes.add1} />
      </div>
      
    </div>
  );
});
