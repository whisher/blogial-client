import { InjectionToken } from '@angular/core';
import { ConfigUrls } from './config-urls.interface';

export const URLS = new InjectionToken<ConfigUrls>('config.urls');
