import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { butterService } from '../../services/butterCMS.service';
import { map, take } from 'rxjs/operators';
import { HighlightService } from '../../services/highlight.service';

@Component({
  selector: "app-post",
  templateUrl: "post.component.html",
  providers: [
    HighlightService
  ],
  encapsulation: ViewEncapsulation.None
})
export class PostComponent implements OnInit, OnDestroy {
  posts: any;
  highlighted: boolean = false;
  loading: boolean = true;
  tag: any;
  showData: boolean;
  step1: boolean;
  step2: boolean;
  step3: boolean;
  step4: boolean;

  constructor(
    protected route: ActivatedRoute,
    private router: Router,
    private highlightService: HighlightService
  ) {}

  protected slug$: Observable<string>;
  public post = {
    meta: null,
    data: null
  };

  ngAfterViewChecked() {
    this.highlightService.highlightAll();
    this.highlighted = true;
  }

  ngOnInit() {
    this.loading = true;
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("profile-page");
    this.showData = false;
    this.step1 = true;
    this.progressLoaderOne();
  }

  progressLoaderOne() {
    const stepOne = setTimeout(() => {
      this.step1 = false;
      this.step2 = true;
      this.fetchPost();
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

  fetchPost() {
    this.slug$ = this.route.paramMap
      .pipe(
        map(params => (params.get('slug')))
      );
    this.slug$.pipe(
      take(1))
      .toPromise()
      .then(slug => {
        butterService.post.retrieve(slug)
          .then((res) => {
            this.post = res.data;
            this.step2 = false;
            this.step3 = true;
            this.progressLoaderTwo();
          })
          .catch((res) => {
            console.log(res);
          });
      });
  }
  
  displayData() {
    if (this.post) {
      this.step4 = false;
      this.loading = false;
      this.showData = true;
    }
  }

  selectTag(tag) {
    this.tag = tag.slug;
    localStorage.setItem('tag', this.tag);
    console.log(localStorage);
    this.router.navigate(['/tag/', this.tag]);
  }

  ngOnDestroy(){
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("profile-page");
  }
}
