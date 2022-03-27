import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/shared/models/post';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
  currentUser: User = new User()
  posts: Post[] = []

  constructor() { }

  ngOnInit() {
    this.currentUser = JSON.parse(sessionStorage['session'])
    this.mountPosts()
  }

  mountPosts() {
    if (sessionStorage['posts']) {
      this.posts = JSON.parse(sessionStorage['posts']).sort((a: Post, b: Post) => {
        return b.id - a.id;
      })
    }    
  }

  newPost(post: Post) {
    post.id = this.posts.length + 1
    this.posts.push(post)
    sessionStorage.setItem('posts', JSON.stringify(this.posts))
    this.mountPosts()
  }

}
