import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from './feed.component';
import { HeaderComponent } from './components/header/header.component';
import { PostCardComponent } from './components/post-card/post-card.component';
import { PostSectionComponent } from './components/post-section/post-section.component';
import { FeedRoutingModule } from './feed-routing.module';
import { LayoutModule } from 'src/app/shared/layout/layout.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommentSectComponent } from './components/comment-sect/comment-sect.component';
import { PublishMomentPipe } from 'src/app/shared/pipes/publish-moment.pipe';

const components = [
  FeedComponent,
  HeaderComponent,
  PostCardComponent,
  PostSectionComponent,
  CommentSectComponent,
  PublishMomentPipe
]

@NgModule({
  imports: [
    CommonModule,
    FeedRoutingModule,
    LayoutModule,
    FontAwesomeModule
  ],
  declarations: components
})
export class FeedModule { }
