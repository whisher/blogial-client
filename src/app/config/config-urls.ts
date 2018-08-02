import { environment } from '../../environments/environment';
import { ConfigUrls } from './config-urls.interface';

const host = environment.serverUrl;

export function urls(): ConfigUrls {
  return {
    authentication: {
      account: `${host}/users/account`,
      login: `${host}/users/login`
    },
    posts:{
      create: `${host}/posts`,
      find: `${host}/posts`
    }
  };
}

export const Config_Urls: ConfigUrls = urls();
