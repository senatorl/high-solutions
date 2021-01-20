import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import Post from '../../types/post';

@Injectable({ providedIn: 'root' })
export class PostsStoreService {
  private readonly _Posts = new BehaviorSubject<Post[]>([]);
  readonly Posts$ = this._Posts.asObservable();

  private get Posts(): Post[] {
    return this._Posts.getValue();
  }

  private set Posts(val: Post[]) {
    this._Posts.next(val);
  }

  updateAll(posts: Post[]) {
    this.Posts = [...posts];
  }

  addOne(post: Post) {
    this.Posts = [...this.Posts, post];
  }
}
