import { environment } from '../../environments/environment';
import { ConfigUrls } from './config-urls.interface';

const host = environment.serverUrl;

export function urls(): ConfigUrls {
  return {
    authentication: {
      login: `${host}/users/login`
    }
  };
}

export const Config_Urls: ConfigUrls = urls();
