import { environment } from '../../environments/environment';
import { ConfigUrls } from './config-urls.interface';

const host = environment.serverUrl;

export function urls(): ConfigUrls {
  return {
    authentication: {
      account: `${host}/api/users/account`,
      login: `${host}/api/users/login`
    },
    posts:`${host}/api/posts`
  };
}

export const Config_Urls: ConfigUrls = urls();
