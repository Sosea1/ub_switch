import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { ControllerSettings_Default } from '../ControllerSettings_Default/ControllerSettings_Default';
import { EEE_Default } from '../EEE_Default/EEE_Default';
import { PoE_Property1Default } from '../PoE_Property1Default/PoE_Property1Default';
import { SDMTemplate_Default } from '../SDMTemplate_Default/SDMTemplate_Default';
import { SystemTools_Property1Default } from '../SystemTools_Property1Default/SystemTools_Property1Default';
import { UserManagment_Default } from '../UserManagment_Default/UserManagment_Default';
import classes from './SideMenu_Property1System.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 112:982 */
export const SideMenu_Property1System: FC<Props> = memo(function SideMenu_Property1System(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.frame8}>
        <UserManagment_Default />
        <SystemTools_Property1Default />
        <EEE_Default />
        <PoE_Property1Default />
        <SDMTemplate_Default />
        <ControllerSettings_Default />
      </div>
    </div>
  );
});
