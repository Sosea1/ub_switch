import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './DoSDefend.module.css';
import { PingButton_Property1Default } from './PingButton_Property1Default/PingButton_Property1Default';

interface Props {
  className?: string;
}
/* @figmaId 617:1716 */
export const DoSDefend: FC<Props> = memo(function DoSDefend(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.line3}></div>
      <div className={classes.frame16}>
        <div className={classes.landAttack}>:</div>
        <div className={classes.pingFlooding}>Ping Flooding:</div>
        <div className={classes.sYNSYNACKFlooding}>SYN/SYN-ACK Flooding:</div>
        <PingButton_Property1Default
          className={classes.pingButton2}
          text={{
            ping: <div className={classes.ping2}>Apply</div>,
          }}
        />
        <div className={classes.enable}>Enable <input id='main_check' style={{
          cursor: 'pointer',
          position: 'absolute',
          left: '-30px',
          top: '3px'
        }}
                                                      type="checkbox"/></div>
        <div className={classes.doSDefendConfig}>DoS Defend Config</div>
        <div className={classes.enable2}>Enable <input id='main_check' style={{
          cursor: 'pointer',
          position: 'absolute',
          left: '-30px',
          top: '3px'
        }}
                                                       type="checkbox"/></div>
        <div className={classes.enable3}>Enable <input id='main_check' style={{
          cursor: 'pointer',
          position: 'absolute',
          left: '-30px',
          top: '3px'
        }}
                                                       type="checkbox"/></div>
        <div className={classes.enable4}>Enable <input id='main_check' style={{
          cursor: 'pointer',
          position: 'absolute',
          left: '-30px',
          top: '3px'
        }}
                                                       type="checkbox"/></div>
        <div className={classes.enable5}>Enable <input id='main_check' style={{
          cursor: 'pointer',
          position: 'absolute',
          left: '-30px',
          top: '3px'
        }}
                                                       type="checkbox"/></div>
        <div className={classes.scanSYNFIN}>Scan SYNFIN:</div>
        <div className={classes.xmascan}>Xmascan:</div>
        <div className={classes.nULLScan}>
          <div className={classes.textBlock}>NULL Scan:</div>
          <div className={classes.textBlock2}>
            <p></p>
          </div>
        </div>
        <div className={classes.sYNSPortLess1024}>SYN sPort less 1024:</div>
        <div className={classes.blatAttack}>Blat Attack:</div>
        <div className={classes.enable6}>Enable <input id='main_check' style={{
          cursor: 'pointer',
          position: 'absolute',
          left: '-30px',
          top: '3px'
        }}
                                                       type="checkbox"/></div>
        <div className={classes.enable7}>Enable <input id='main_check' style={{
          cursor: 'pointer',
          position: 'absolute',
          left: '-30px',
          top: '3px'
        }}
                                                       type="checkbox"/></div>
        <div className={classes.enable8}>Enable <input id='main_check' style={{
          cursor: 'pointer',
          position: 'absolute',
          left: '-30px',
          top: '3px'
        }}
                                                       type="checkbox"/></div>
        <div className={classes.enable9}>Enable <input id='main_check' style={{
          cursor: 'pointer',
          position: 'absolute',
          left: '-30px',
          top: '3px'
        }}
                                                       type="checkbox"/></div>
        <div className={classes.enable10}>Enable <input id='main_check' style={{
          cursor: 'pointer',
          position: 'absolute',
          left: '-30px',
          top: '3px'
        }}
                                                        type="checkbox"/></div>
        <div className={classes.enable11}>Enable <input id='main_check' style={{
          cursor: 'pointer',
          position: 'absolute',
          left: '-30px',
          top: '3px'
        }}
                                                        type="checkbox"/></div>
        <div className={classes.enable12}>Enable <input id='main_check' style={{
          cursor: 'pointer',
          position: 'absolute',
          left: '-30px',
          top: '3px'
        }}
                                                        type="checkbox"/></div>
        <div className={classes.winNukeAttack}>WinNuke Attack:</div>
        <div className={classes.pingOfDeath}>Ping Of Death:</div>
        <div className={classes.smurfAttack}>Smurf Attack:</div>
      </div>
    </div>
  );
});
