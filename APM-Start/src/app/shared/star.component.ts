import { Component, EventEmitter, Input, OnChanges, Output } from "@angular/core";

@Component({
  selector: 'pm-stars',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges{
  // input function so that the rating is initialised from parent, from the dorm
  @Input() rating:number;
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();
  starWidth:number;

  ngOnChanges(): void {
    this.starWidth = this.rating * 75/5;
  }

  onClick(): void{
    this.ratingClicked.emit(`this is great ${this.rating}`)
  }
}
