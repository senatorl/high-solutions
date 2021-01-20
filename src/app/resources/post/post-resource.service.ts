import { environment } from '../../../environments/environment';
import { PostsStoreService } from '../../stores/posts/posts-store.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Post from '../../types/post';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class PostResourceService {
  constructor(
    private httpClient: HttpClient,
    private postsStoreService: PostsStoreService,
    private matSnackBar: MatSnackBar
  ) {}

  getPosts() {
    this.httpClient.get(environment.api + 'posts').subscribe((data) => {
      this.postsStoreService.updateAll(data as Post[]);
    });
  }

  addPost(post: Post) {
    this.httpClient.post(environment.api + 'posts', post).subscribe(
      (data) => {
        this.postsStoreService.addOne(data as Post);
        this.matSnackBar.open('Post has been added!');
      },
      () => {
        this.matSnackBar.open('Something went wrong :(!');
      }
    );
  }
}
