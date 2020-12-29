import { butterService } from './../../services/butterCMS.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: 'post-list.component.html'
})
export class PostListComponent implements OnInit, OnDestroy {
  public posts: any[];
  public newPosts: any[];
  page: number = 1;
  pageSize: number = 10;
  currentLength: number = 10;
  moreAvailable: boolean;

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
      if (this.posts.length < 10) {
        this.moreAvailable = false;
      } else {
        this.moreAvailable = true;
      }
    });
  }

  loadMore() {
    this.page = this.page + 1;
    butterService.post.list({
      page: this.page,
      page_size: this.pageSize
    }).then((res) => {
      this.newPosts = res.data.data;
      if (this.newPosts.length < 10) {
        this.moreAvailable = false;
      } else {
        this.moreAvailable = true;
      }
      for (let i = 0; i < this.newPosts.length; i++) {
        this.posts.push(this.newPosts[i]);
      }
    });
  }

  ngOnDestroy() {}
}
