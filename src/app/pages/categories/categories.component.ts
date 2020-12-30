import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: 'categories.component.html'
})
export class CategoriesComponent implements OnInit, OnDestroy {
  focus;
  isCollapsed = true;

  constructor() {}

  ngOnInit() {}

  ngOnDestroy() {}
}
