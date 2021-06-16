import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test02',
  templateUrl: './test02.component.html',
  // styleUrls: ['./tests.component.css']
  styles: [`
  .change {
    color: white;
    background-color: blue;
  }
  `]
})

export class Test02Component implements OnInit {
  public clicks = [];
  public hidden: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

  public onIncrement(): void {
    this.clicks.push(new Date());
    this.hidden = !this.hidden;
  }

}
