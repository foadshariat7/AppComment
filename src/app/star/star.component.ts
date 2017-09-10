import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit, OnChanges {

  @Input() rating: number;
  width;
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(): void {
    this.width = this.rating * 86 / 5;
  }

}
