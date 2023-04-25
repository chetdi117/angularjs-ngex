import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Post } from 'src/app/core/models/post.model';
import { AppState } from 'src/app/core/store/app.state';
import * as actions from 'src/app/core/store/post/post.actions';
import {
  postSelector,
  postStatusSelector,
} from 'src/app/core/store/post/post.selector';
import { vmFromLatest } from 'src/app/core/utils/operators.util';
interface PostListVm {
  posts: Post[];
  isLoading: boolean;
  sort?: 'asc' | 'desc';
}
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit {
  vm$!: Observable<PostListVm>;
  test: string = '';
  constructor(private store: Store<AppState>) {}
  ngOnInit(): void {
    this.store.dispatch(actions.getPosts());
    this.vm$ = vmFromLatest<PostListVm>({
      posts: this.store.pipe(select(postSelector)),
      isLoading: this.store.pipe(
        select(postStatusSelector),
        map((status) => status === 'loading')
      ),
    });
  }
}
