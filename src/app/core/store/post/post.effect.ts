import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { PostServices } from '../../services/post.services';
import * as postActions from './post.actions';
import { mapTimeStamp } from '../../utils/operators.util';

@Injectable()
export class PostEffects {
  loadPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(postActions.getPosts),
      mergeMap(() => this.postService.getPosts()),
      mapTimeStamp(),
      map((posts) => postActions.getPostsSuccess({ posts })),
      catchError((error) => of(postActions.getPostsFailed({ error })))
    )
  );

  constructor(private actions$: Actions, private postService: PostServices) {}
}
