import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './TACACSConfig.module.css';

interface Props {
  className?: string;
}
/* @figmaId 615:1462 */
export const TACACSConfig: FC<Props> = memo(function TACACSConfig(props = {}) {
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
          <div className={classes.index}>Index</div>
          <div className={classes.serverGroup}>Server Group</div>
          <div className={classes.serverType}>Server Type</div>
          <div className={classes.serverIP}>Server IP</div>
          <div className={classes.operation}>Operation</div>
        </div>
        <div className={classes.total}>Total: 0</div>
        <div className={classes.line3}></div>
        <div className={classes.serverGroupConfig}>
          <div className={classes.textBlock}>Server Group Config</div>
          <div className={classes.textBlock2}>
            <p></p>
          </div>
        </div>
        <div className={classes.link}>
          <div className={classes.spanIcon}></div>
          <div className={classes.add}>Add</div>
        </div>
        <div className={classes.link2}>
          <div className={classes.spanIcon2}></div>
          <div className={classes.delete}>Delete</div>
        </div>
      </div>
      <div className={classes.serverGroup2}>
        <div className={classes.frame162}>
          <div className={classes.frame222}>
            <div className={classes.noEntriesInThisTable2}>No entries in this table.</div>
            <div className={classes.rectangle42}></div>
            <div className={classes.rectangle52}></div>
            <div className={classes.frame172}></div>
          </div>
          <div className={classes.frame212}>
            <div className={classes.index2}>Index</div>
            <div className={classes.serverIP2}>Server IP</div>
            <div className={classes.timeout}>Timeout</div>
            <div className={classes.sharedKey}>Shared Key</div>
            <div className={classes.serverPort}>Server Port</div>
            <div className={classes.operation2}>Operation</div>
          </div>
          <div className={classes.total2}>Total: 0</div>
          <div className={classes.line32}></div>
          <div className={classes.serverConfig}>Server Config</div>
          <div className={classes.link3}>
            <div className={classes.spanIcon3}></div>
            <div className={classes.add2}>Add</div>
          </div>
          <div className={classes.link4}>
            <div className={classes.spanIcon4}></div>
            <div className={classes.delete2}>Delete</div>
          </div>
        </div>
      </div>
    </div>
  );
});
