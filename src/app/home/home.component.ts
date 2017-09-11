import { Component, 
  OnInit, 
  ViewChild, 
  ElementRef, 
  DoCheck, 
  AfterContentInit, 
  AfterContentChecked, 
  AfterViewInit, 
  AfterViewChecked, 
  ContentChild } from '@angular/core';
import { IComment } from "../comment";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements 
OnInit, 
DoCheck, 
AfterContentInit, 
AfterContentChecked,
AfterViewInit,
AfterViewChecked {

  comments: IComment[] = [];

  @ViewChild('commentText') comm: ElementRef;

  constructor() {
    console.log("Constructor called");
  }

  ngOnInit() {
    console.log("ngOnInit called");
    console.log("textArea: " + this.comm.nativeElement.value);
  }
  
  ngDoCheck() {
    console.log("ngDoCheck called");
  }
  
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit called");
  }
  
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked called");
  }
  
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit called");
  }
  
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked called");
  }
  
  reviewsCount(c: IComment, n: HTMLInputElement) {
    c.numberOfReviews++;
    c.star += parseInt(n.value);
  }
  
  addComment() {
    let c: IComment = {
      comment: this.comm.nativeElement.value,
      dislike: 0,
      like: 0,
      numberOfReviews: 0,
      star: 0
    }
    this.comments.push(c);
  }
  
  commentLike(c: IComment) {
    c.like++;
  }
  
  commentDislike(c: IComment) {
    c.dislike++;
  }
  
}
