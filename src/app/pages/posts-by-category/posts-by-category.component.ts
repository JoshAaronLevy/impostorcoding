import { Component, OnInit } from '@angular/core';
import { butterService } from '../../services/butterCMS.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-posts-by-category',
    templateUrl: './posts-by-category.component.html'
})

export class PostsByCategoryComponent implements OnInit {
  loading: boolean = true;
  public posts: any[];
  public newPosts: any[];
  category: any;
  page: number = 1;
  pageSize: number = 10;
  currentLength: number = 10;
  moreAvailable: boolean;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.category = localStorage.category;
    this.getPostsByCategory();
  }

  getPostsByCategory() {
    butterService.category.retrieve(this.category, {
        include: 'recent_posts'
      })
      .then((res) => {
        this.loading = false;
        this.category = res.data.data.name;
        this.posts = res.data.data.recent_posts;
      });
  }

  loadMore() {
    this.page = this.page + 1;
    butterService.category.retrieve(this.category, {
      include: 'recent_posts'
    }).then((res) => {
      this.newPosts = res.data.data.recent_posts;
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

  viewPost(post) {
    this.router.navigate([`/${post.slug}`]);
  }
}