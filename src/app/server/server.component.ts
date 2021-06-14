import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  public serverName: string = '';
  public serverCreationStatus: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  public onUpdateName(event: Event): string {
    return this.serverName = (<HTMLInputElement>event.target).value;
  }

  public onClick(): string {
    return this.serverCreationStatus = 'Update Complete';
  }

}
