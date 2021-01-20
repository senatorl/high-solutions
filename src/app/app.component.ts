import { PostsStoreService } from './stores/posts/posts-store.service';
import { PostResourceService } from './resources/post/post-resource.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(
    private postResourceService: PostResourceService,
    public postsStoreService: PostsStoreService
  ) {}

  ngOnInit() {
    this.postResourceService.getPosts();
  }
}
