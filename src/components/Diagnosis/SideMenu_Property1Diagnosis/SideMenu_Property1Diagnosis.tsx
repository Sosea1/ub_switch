import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { NetworkDiagnostics_Property1De } from '../NetworkDiagnostics_Property1De/NetworkDiagnostics_Property1De';
import classes from './SideMenu_Property1Diagnosis.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    networkDiagnostics?: ReactNode;
  };
}
/* @figmaId 112:999 */
export const SideMenu_Property1Diagnosis: FC<Props> = memo(function SideMenu_Property1Diagnosis(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.frame8}>
        {props.swap?.networkDiagnostics || <NetworkDiagnostics_Property1De className={classes.networkDiagnostics} />}
      </div>
    </div>
  );
});
