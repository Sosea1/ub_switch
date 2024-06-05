import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { _8021x_Property1Default } from '../_8021x_Property1Default/_8021x_Property1Default';
import { AAA_Property1Default } from '../AAA_Property1Default/AAA_Property1Default';
import { AccessSecurity_Property1Defaul } from '../AccessSecurity_Property1Defaul/AccessSecurity_Property1Defaul';
import { ACL_Property1Default } from '../ACL_Property1Default/ACL_Property1Default';
import { DHCPFilter_Property1Default } from '../DHCPFilter_Property1Default/DHCPFilter_Property1Default';
import { DoSDefend_Default } from '../DoSDefend_Default/DoSDefend_Default';
import { IPv4IMPB_Property1Default } from '../IPv4IMPB_Property1Default/IPv4IMPB_Property1Default';
import { IPv6IMPB_Property1Default } from '../IPv6IMPB_Property1Default/IPv6IMPB_Property1Default';
import { PortSecurity_Default } from '../PortSecurity_Default/PortSecurity_Default';
import classes from './SideMenu_Property1Security.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 112:965 */
export const SideMenu_Property1Security: FC<Props> = memo(function SideMenu_Property1Security(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.frame8}>
        {/* <AccessSecurity_Property1Defaul /> */}
        <AAA_Property1Default />
        {/* <_8021x_Property1Default /> */}
        <PortSecurity_Default />
        <ACL_Property1Default />
        <IPv4IMPB_Property1Default />
        {/* <IPv6IMPB_Property1Default /> */}
        <DHCPFilter_Property1Default />
        <DoSDefend_Default />
      </div>
    </div>
  );
});
