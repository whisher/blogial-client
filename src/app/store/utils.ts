import { StoreModule, ActionReducerMap } from '@ngrx/store';
import { Params, RouterStateSnapshot } from '@angular/router';
import {
  StoreRouterConnectingModule,
  routerReducer,
  RouterReducerState,
  RouterStateSerializer,
} from '@ngrx/router-store';

export interface RouterStateUrl {
  url: string;
  params: Params;
  queryParams: Params;
}

export class CustomRouterStateSerializer implements RouterStateSerializer<RouterStateUrl> {
  serialize(routerState: RouterStateSnapshot): RouterStateUrl {
    let route = routerState.root;

    while (route.firstChild) {
      route = route.firstChild;
    }

    const {
      url,
      root: { queryParams },
    } = routerState;
    const { params } = route;

    // Only return an object including the URL, params and query params
    // instead of the entire snapshot
    return { url, params, queryParams };
  }
}

export const customStorage: Storage = {
  length: 0,
  clear: function(): void {
    if (window && window.localStorage) {
      window.localStorage.clear();
      this.length = window.localStorage.length;
    }
  },
  getItem: function(key: string): string | null {
    try {
      return window.localStorage.getItem(key);
    } catch (err) {
      return null;
    }
  },
  key: function(index: number): string | null {
    try {
      return window.localStorage.key(index);
    } catch (err) {
      return null;
    }
  },
  removeItem: function(key: string): void {
    try {
      window.localStorage.removeItem(key);
      this.length = window.localStorage.length;
    } catch (err) {
      return;
    }
  },
  setItem: function(key: string, data: string): void {
    try {
      window.localStorage.setItem(key, data);
      this.length = window.localStorage.length;
    } catch (err) {
      return;
    }
  }
};
