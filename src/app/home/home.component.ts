import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { IComment } from "../comment";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  comments: IComment[] = [];

  @ViewChild('commentText') comm: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  reviewsCount(c: IComment, n: HTMLInputElement){
    c.numberOfReviews++;
    c.star += parseInt(n.value);
  }

  addComment(){
    let c: IComment={
      comment: this.comm.nativeElement.value,
      dislike: 0,
      like: 0,
      numberOfReviews: 0,
      star:0
    }
    this.comments.push(c);
  }

  commentLike(c: IComment){
    c.like++;
  }

  commentDislike(c: IComment){
    c.dislike++;
  }

}
