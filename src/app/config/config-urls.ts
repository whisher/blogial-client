import { environment } from '../../environments/environment';
import { ConfigUrls } from './config-urls.interface';

const host = environment.serverUrl;

export function urls(): ConfigUrls {
  return {
    authentication: {
      account: `${host}/api/account`,
      login: `${host}/api/users/login`
    },
    posts:`${host}/api/posts`,
    users:`${host}/api/users`,
    pwa: {
      subscription: `${host}/pwa/subscription`,
      notification: `${host}/pwa/notification`,
    }
  };
}

export const Config_Urls: ConfigUrls = urls();
