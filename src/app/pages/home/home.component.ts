import { Component, OnInit, OnDestroy } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html'
})
export class HomeComponent implements OnInit, OnDestroy {
  focus;
  isCollapsed = true;

  constructor(
    private title: Title,
    private meta: Meta
  ) {}

  ngOnInit() {
    this.updateMetaData();
  }

  updateMetaData() {
    this.title.setTitle(`Impostor Coding`);
    this.meta.updateTag({ name: 'description', content: `Impostor Coding - Web Development Blog` });
  }

  ngOnDestroy() {}
}
