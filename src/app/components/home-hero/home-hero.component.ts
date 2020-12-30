import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home-hero',
  templateUrl: 'home-hero.component.html'
})
export class HomeHeroComponent implements OnInit, OnDestroy {
  focus;
  isCollapsed = true;

  constructor() {}

  ngOnInit() {}

  ngOnDestroy() {}
}
