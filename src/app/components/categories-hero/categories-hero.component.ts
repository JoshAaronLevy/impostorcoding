import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-categories-hero',
  templateUrl: 'categories-hero.component.html'
})
export class CategoriesHeroComponent implements OnInit, OnDestroy {
  focus;
  isCollapsed = true;

  constructor() {}

  ngOnInit() {}

  ngOnDestroy() {}
}
