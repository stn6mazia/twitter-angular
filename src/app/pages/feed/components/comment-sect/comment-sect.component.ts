import { Component, Input, OnInit } from '@angular/core';
import { Comment } from 'src/app/shared/models/comment';

@Component({
  selector: 'app-comment-sect',
  templateUrl: './comment-sect.component.html',
  styleUrls: ['./comment-sect.component.scss']
})
export class CommentSectComponent implements OnInit {
  @Input() comment:Comment = new Comment

  constructor() { }

  ngOnInit() {
  }

}
