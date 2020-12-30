import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html'
})
export class HomeComponent implements OnInit, OnDestroy {
  focus;
  isCollapsed = true;

  constructor() {}

  ngOnInit() {}

  ngOnDestroy() {}
}
