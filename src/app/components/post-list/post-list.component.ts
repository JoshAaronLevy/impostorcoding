import { butterService } from './../../services/butterCMS.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: 'post-list.component.html'
})
export class PostListComponent implements OnInit, OnDestroy {
  public posts: any[];
  page: number = 1;
  pageSize: number = 10;
  currentLength: number = 10;

  constructor() {}

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    butterService.post.list({
      page: this.page,
      page_size: this.pageSize
    }).then((res) => {
      this.posts = res.data.data;
      console.log(this.page);
    });
  }

  loadMore() {

  }

  ngOnDestroy() {}
}
