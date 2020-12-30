import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { butterService } from './../../services/butterCMS.service';

@Component({
  selector: 'app-category-list',
  templateUrl: 'category-list.component.html'
})
export class CategoryListComponent implements OnInit, OnDestroy {
  loading: boolean;
  loadError: boolean = false;
  categories: any;
  category: any;
  showData: boolean;
  step1: boolean;
  step2: boolean;
  step3: boolean;
  step4: boolean;

  constructor(
    private router: Router
  ) {}

  ngOnInit() {
    this.loading = false;
    console.log("Hello!");
    this.progressLoaderOne();
    // this.getCategories();
  }

  progressLoaderOne() {
    const stepOne = setTimeout(() => {
      this.step1 = false;
      this.step2 = true;
      this.getCategories();
      return stepOne;
    }, 150);
  }

  progressLoaderTwo() {
    const stepTwo = setTimeout(() => {
      this.step3 = false;
      this.step4 = true;
      this.progressLoaderThree();
      return stepTwo;
    }, 150);
  }

  progressLoaderThree() {
    const stepThree = setTimeout(() => {
      this.displayData();
      return stepThree;
    }, 150);
  }
  
  displayData() {
    if (this.categories) {
      this.step4 = false;
      this.loading = false;
      this.showData = true;
    } else {
      this.loading = false;
      this.loadError = true;
    }
  }

  getCategories() {
    butterService.category.list()
      .then((res) => {
        console.log(res);
        this.categories = res.data.data;
      });
  }

  selectCategory(category) {
    this.category = category.slug;
    localStorage.setItem('category', this.category);
    this.router.navigate(['/category/', this.category]);
  }

  ngOnDestroy() {}
}
