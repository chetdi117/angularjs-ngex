import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PostState } from './post.state';

const feauturePost = createFeatureSelector<PostState>('feauture_Post');
export const postSelector = createSelector(
  feauturePost,
  (state) => state.items
);

export const currentPostSelector = createSelector(
  feauturePost,
  (state) => state.currentItem
);

export const postStatusSelector = createSelector(
  feauturePost,
  (state) => state.status
);
