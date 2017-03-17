import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {Http} from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-starwars',
  templateUrl: './starwars.component.html'
})
export class StarwarsComponent implements OnInit, OnDestroy {

  private _subscription: Subscription;

  public person: any;

  constructor(private _activatedRoute: ActivatedRoute, private _http: Http) {
  }

  ngOnInit() {
    this._subscription = this._activatedRoute.params
      .map(params => +params['id'])
      .switchMap(id => this._http.get(`https://swapi.co/api/people/${id}`))
      .map(response => response.json())
      .subscribe(person => this.person = person);
  }

  ngOnDestroy() {
    this._subscription.unsubscribe();
  }

}
