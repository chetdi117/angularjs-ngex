import { getPosts } from './../store/post/post.actions';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root',
})
export class PostServices {
  constructor(private afs: AngularFirestore) {}
  getPosts() {
    return this.afs.collection<Post>('posts').valueChanges({
      idField: 'id',
    });
  }

  getPostById(id: string) {
    return this.afs
      .collection('posts')
      .doc<Post>(id)
      .valueChanges()
      .pipe(
        map((post) => {
          return {
            ...post,
            id,
          } as Post;
        })
      );
  }
}
