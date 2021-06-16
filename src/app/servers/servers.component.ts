import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
//use [<property name>] in the html to bind a property value to set the html property
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationStatus: string = '';
  serverName: string = '';

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

public onClick():string {
  return this.serverCreationStatus = 'successfully created';
  }

  public onUpdateServerName(event: Event):string{
    return this.serverName = (<HTMLInputElement>event.target).value;
  }
}
