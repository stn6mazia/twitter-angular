import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faCommentDots, faHeart, faPaperPlane, faTrash } from '@fortawesome/free-solid-svg-icons';
import * as moment from 'moment';
import { Comment } from 'src/app/shared/models/comment';
import { Post } from 'src/app/shared/models/post';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit {
  @Input() post: Post = new Post();
  @Input() currentUser: User = new User()

  @Output() emitedPosts = new EventEmitter<Post[]>()

  posts:Post[] = []

  comment = new Comment()

  showComments = false
  showDeleteSection = false

  faComment = faCommentDots
  faTrash = faTrash
  faHeart = faHeart
  faPlane = faPaperPlane

  commentField = {
    fieldName: 'comment-field-name',
    fieldId: 'comment-field-id',
    fieldLabel: 'Comment',
    fieldType: 'text',
    isRequired: true,
    fieldHaveMask: false,
    fieldMask: ''
  }

  constructor() { }

  ngOnInit() {
    this.posts = JSON.parse(sessionStorage['posts'])
    this.sortComments()
  }

  sortComments() {
    this.post.comments.sort((a: Comment, b: Comment) => {
      return a.id - b.id;
    })
  }

  createComment() {
    this.comment.author = this.currentUser
    this.comment.id = this.post.comments.length + 1
    this.post.comments.push(this.comment)
    this.updatePosts()
  }

  updateLikes() {  
    let currentPost = this.posts.find(post => post.id === this.post.id)
  
    if (currentPost) {
      this.post.likes += 1
      currentPost.likes += 1
    }
  
    
    sessionStorage.setItem('posts', JSON.stringify(this.posts))
  }

  updatePosts() {
    let currentPost = this.posts.find(post => post.id === this.post.id)

    if (currentPost) {
      currentPost.comments = this.post.comments
    }

    
    sessionStorage.setItem('posts', JSON.stringify(this.posts))
    this.sortComments()
  }
  
  deletePost() {
    let currentPost = this.posts.find(post => post.id === this.post.id)
  
    if (currentPost) {
      currentPost.status = false
    }
        
    sessionStorage.setItem('posts', JSON.stringify(this.posts))
    this.emitedPosts.emit(this.posts.sort((a: Post, b: Post) => {
      return b.id - a.id;
    }))
  }
}
