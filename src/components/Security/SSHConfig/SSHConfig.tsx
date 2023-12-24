import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { _Property1Variant4 } from './_Property1Variant4/_Property1Variant4';
import { Line4Icon } from './Line4Icon.js';
import { Line5Icon } from './Line5Icon.js';
import { PingButton_Property1Default } from './PingButton_Property1Default/PingButton_Property1Default';
import classes from './SSHConfig.module.css';

interface Props {
  className?: string;
  hide?: {
    frame15?: boolean;
    frame152?: boolean;
    frame153?: boolean;
    frame154?: boolean;
    frame155?: boolean;
    frame156?: boolean;
  };
}
/* @figmaId 612:1130 */
export const SSHConfig: FC<Props> = memo(function SSHConfig(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.globalConfig}>Global Config</div>
      <div className={classes.line1}></div>
      <div className={classes.line2}></div>
      <div className={classes.line5}></div>
      <div className={classes.line3}></div>
      <div className={classes.frame16}>
        <div className={classes.sSH}>SSH:</div>
        <div className={classes.aES128CBC}>AES128-CBC:</div>
        <div className={classes.aES128CTR}>AES128-CTR:</div>
        <div className={classes.aES192CTR}>AES192-CTR:</div>
        <div className={classes.protocolV1}>Protocol V1:</div>
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
        <_Property1Variant4
          className={classes.unnamed3}
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
        <div className={classes.enable}>Enable</div>
        <div className={classes.sessionConfig}>Session Config</div>
        <div className={classes.sessionTimeout}>
          <div className={classes.textBlock}>Session Timeout:</div>
          <div className={classes.textBlock2}>
            <p></p>
          </div>
        </div>
        <div className={classes.encryptionAlgorithm}>Encryption Algorithm</div>
        <div className={classes.line4}>
          <Line4Icon className={classes.icon} />
        </div>
        <div className={classes.enable2}>Enable</div>
        <div className={classes.enable3}>Enable</div>
        <div className={classes.enable4}>Enable</div>
        <div className={classes.enable5}>Enable</div>
        <div className={classes.enable6}>Enable</div>
        <div className={classes.enable7}>Enable</div>
        <div className={classes.aES192CBC}>AES192-CBC:</div>
        <div className={classes.aES256CBC}>AES256-CBC:</div>
        <div className={classes.blowfishCBC}>Blowfish-CBC:</div>
        <div className={classes.cAST128CBC}>CAST128-CBC:</div>
        <div className={classes._3DESCBC}>3DES-CBC:</div>
        <div className={classes.port}>Port:</div>
        <_Property1Variant4
          className={classes.unnamed4}
          hide={{
            frame15: true,
          }}
        />
        <div className={classes.enable8}>Enable</div>
        <div className={classes.enable9}>Enable</div>
        <div className={classes.enable10}>Enable</div>
        <div className={classes.enable11}>Enable</div>
        <div className={classes.enable12}>Enable</div>
        <div className={classes.enable13}>Enable</div>
        <div className={classes.enable14}>Enable</div>
        <div className={classes.dataIntegrityAlgorithm}>Data Integrity Algorithm</div>
        <div className={classes.hMACSHA1}>HMAC-SHA1:</div>
        <div className={classes.hMACMD5}>HMAC-MD5:</div>
        <div className={classes.hMACSHA1160}>HMAC-SHA1-160:</div>
        <div className={classes.hAMCSHA2256}>HAMC-SHA2-256:</div>
        <div className={classes.hMACSHA2512}>HMAC-SHA2-512:</div>
        <_Property1Variant4
          className={classes.unnamed5}
          hide={{
            frame15: true,
          }}
        />
        <div className={classes.importKeyFile}>Import Key File</div>
        <div className={classes.line52}>
          <Line5Icon className={classes.icon2} />
        </div>
        <div className={classes.keyType}>
          <div className={classes.textBlock3}>Key Type:</div>
          <div className={classes.textBlock4}>
            <p></p>
          </div>
        </div>
        <div className={classes.keyFile}>Key File:</div>
        <_Property1Variant4
          className={classes.unnamed6}
          hide={{
            frame15: true,
          }}
        />
        <PingButton_Property1Default
          className={classes.pingButton5}
          text={{
            ping: <div className={classes.ping5}>Apply</div>,
          }}
        />
        <div className={classes.enable15}>Enable</div>
        <div className={classes.sessionTimeout2}>Session Timeout:</div>
        <div className={classes.maximumConnections}>Maximum Connections:</div>
        <div className={classes.protocolV2}>Protocol V2:</div>
        <div className={classes.enable16}>Enable</div>
      </div>
    </div>
  );
});
