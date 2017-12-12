import {Injectable} from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';
import {Location} from '@angular/common';

import {filter} from 'rxjs/operator/filter';

declare const ga: any;

/**
 * Simple Google Analytics service. Note that all its methods don't do anything unless the app
 * is deployed on ngx-toggle.github.io. This avoids sending events and page views during development.
 */
@Injectable()
export class Analytics {
  private _enabled: boolean;

  constructor(private _location: Location, private _router: Router) {
    this._enabled = window.location.href.indexOf('ngx-toggle.github.io') >= 0;
  }

  /**
   * Intended to be called only once. Subscribes to router events and sends a page view
   * after each ended navigation event.
   */
  trackPageViews() {
    if (this._enabled) {
      filter.call(this._router.events, (event) => event instanceof NavigationEnd)
        .subscribe(() => {
          ga('send', {hitType: 'pageview', page: this._location.path()});
        });
    }
  }

  /**
   * Sends an event.
   */
  trackEvent(action: string, category: string) {
    if (this._enabled) {
      ga('send', {hitType: 'event', eventCategory: category, eventAction: action});
    }
  }
}
