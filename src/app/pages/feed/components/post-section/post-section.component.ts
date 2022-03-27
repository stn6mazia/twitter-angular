import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Post } from 'src/app/shared/models/post';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-post-section',
  templateUrl: './post-section.component.html',
  styleUrls: ['./post-section.component.scss']
})
export class PostSectionComponent implements OnInit {
  @Input() currentUser:User = new User()
  @Output() emitedPost = new EventEmitter<Post>()

  post:Post = new Post()


  textAreaField = {
    fieldName: 'textarea-field-name',
    fieldId: 'textarea-field-id',
    fieldLabel: `What's happening?`,
    fieldType: 'text',
    isRequired: true,
    fieldHaveMask: false,
    fieldMask: ''
}

  constructor(
    private toastr: ToastrService
  ) { }

  ngOnInit() {
  }

  createPost() {
    this.post.author = this.currentUser
    this.emitedPost.emit(this.post)
    this.post.textPost = ''
    this.toastr.info('Tweet created successfully', 'Yeah!')
  }

}
