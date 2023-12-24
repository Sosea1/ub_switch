import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { _Property1Variant4 } from './_Property1Variant4/_Property1Variant4';
import classes from './HTTPSConfig.module.css';
import { Line4Icon } from './Line4Icon.js';
import { Line5Icon } from './Line5Icon.js';
import { Line6Icon } from './Line6Icon.js';
import { PingButton_Property1Default } from './PingButton_Property1Default/PingButton_Property1Default';

interface Props {
  className?: string;
  hide?: {
    frame15?: boolean;
    frame152?: boolean;
    frame153?: boolean;
    frame154?: boolean;
    frame155?: boolean;
    frame156?: boolean;
    frame157?: boolean;
    frame158?: boolean;
    frame159?: boolean;
  };
}
/* @figmaId 609:1004 */
export const HTTPSConfig: FC<Props> = memo(function HTTPSConfig(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.globalConfig}>Global Config</div>
      <div className={classes.line1}></div>
      <div className={classes.line2}></div>
      <div className={classes.line5}></div>
      <div className={classes.line3}></div>
      <div className={classes.frame16}>
        <div className={classes.hTTPS}>HTTPS:</div>
        <div className={classes.rSA_WITH_RC4_128_MD5}>RSA_WITH_RC4_128_MD5:</div>
        <div className={classes.protocolVersion}>Protocol Version:</div>
        <_Property1Variant4
          className={classes.unnamed}
          hide={{
            frame15: true,
          }}
        />
        <_Property1Variant4
          className={classes.unnamed2}
          hide={{
            frame15: true,
          }}
        />
        <PingButton_Property1Default
          className={classes.pingButton}
          text={{
            ping: <div className={classes.ping}>Apply</div>,
          }}
        />
        <PingButton_Property1Default
          className={classes.pingButton2}
          text={{
            ping: <div className={classes.ping2}>Apply</div>,
          }}
        />
        <PingButton_Property1Default
          className={classes.pingButton3}
          text={{
            ping: <div className={classes.ping3}>Apply</div>,
          }}
        />
        <PingButton_Property1Default
          className={classes.pingButton4}
          text={{
            ping: <div className={classes.ping4}>Apply</div>,
          }}
        />
        <PingButton_Property1Default
          className={classes.pingButton5}
          text={{
            ping: <div className={classes.ping5}>Apply</div>,
          }}
        />
        <div className={classes.enable}>Enable</div>
        <div className={classes.sessionConfig}>Session Config</div>
        <div className={classes._165535}>
          <div className={classes.textBlock}>(1-65535)</div>
          <div className={classes.textBlock2}>
            <p></p>
          </div>
        </div>
        <div className={classes.sessionTimeout}>
          <div className={classes.textBlock3}>Session Timeout:</div>
          <div className={classes.textBlock4}>
            <p></p>
          </div>
        </div>
        <div className={classes.cipherSuiteConfig}>Cipher Suite Config</div>
        <div className={classes.line4}>
          <Line4Icon className={classes.icon} />
        </div>
        <div className={classes.enable2}>Enable</div>
        <div className={classes.enable3}>Enable</div>
        <div className={classes.rSA_WITH_RC4_128_SHA}>RSA_WITH_RC4_128_SHA:</div>
        <div className={classes.rSA_WITH_DES_CBC_SHA}>RSA_WITH_DES_CBC_SHA:</div>
        <div className={classes.rSA_WITH_3DES_EDE_CBC_SHA}>RSA_WITH_3DES_EDE_CBC_SHA:</div>
        <div className={classes.eCDHE_WITH_AES_128_GCM_SHA256}>ECDHE_WITH_AES_128_GCM_SHA256:</div>
        <div className={classes.eCDHE_WITH_AES_256_GCM_SHA384}>ECDHE_WITH_AES_256_GCM_SHA384:</div>
        <div className={classes.port}>Port:</div>
        <_Property1Variant4
          className={classes.unnamed3}
          hide={{
            frame15: true,
          }}
        />
        <div className={classes.enable4}>Enable</div>
        <div className={classes.enable5}>Enable</div>
        <div className={classes.enable6}>Enable</div>
        <div className={classes.enable7}>Enable</div>
        <div className={classes.enable8}>Enable</div>
        <div className={classes.numberOfAccessUsers}>Number of Access Users</div>
        <div className={classes.rSA_WITH_RC4_128_MD52}>RSA_WITH_RC4_128_MD5:</div>
        <div className={classes.rSA_WITH_RC4_128_MD53}>RSA_WITH_RC4_128_MD5:</div>
        <div className={classes.rSA_WITH_RC4_128_MD54}>RSA_WITH_RC4_128_MD5:</div>
        <div className={classes.rSA_WITH_RC4_128_MD55}>RSA_WITH_RC4_128_MD5:</div>
        <div className={classes.rSA_WITH_RC4_128_MD56}>RSA_WITH_RC4_128_MD5:</div>
        <_Property1Variant4
          className={classes.unnamed4}
          hide={{
            frame15: true,
          }}
        />
        <_Property1Variant4
          className={classes.unnamed5}
          hide={{
            frame15: true,
          }}
        />
        <_Property1Variant4
          className={classes.unnamed6}
          hide={{
            frame15: true,
          }}
        />
        <_Property1Variant4
          className={classes.unnamed7}
          hide={{
            frame15: true,
          }}
        />
        <_Property1Variant4
          className={classes.unnamed8}
          hide={{
            frame15: true,
          }}
        />
        <div className={classes.loadCertificate}>Load Certificate</div>
        <div className={classes.loadKey}>Load Key</div>
        <div className={classes.line52}>
          <Line5Icon className={classes.icon2} />
        </div>
        <div className={classes.certificateFile}>Certificate File:</div>
        <div className={classes.keyFile}>Key File::</div>
        <_Property1Variant4
          className={classes.unnamed9}
          hide={{
            frame15: true,
          }}
        />
        <PingButton_Property1Default
          className={classes.pingButton6}
          text={{
            ping: <div className={classes.ping6}>Apply</div>,
          }}
        />
      </div>
      <div className={classes.line6}>
        <Line6Icon className={classes.icon3} />
      </div>
    </div>
  );
});
