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
  serverName: string = null;

  serverCreated: boolean = false;
  servers: string[] = [];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }
  // to use two way binding {update from the hard coded value and input from the user}
  //[(ngModel)]="<variable>"
  public onClick(): string {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    return this.serverCreationStatus = 'Server ' + this.serverName + " successfully created";
  }
  // to use only event binding use (<event name>, eg click or update)="<variable name>($event)"
  public onUpdateServerName(event: Event): string {
    this.serverName = (<HTMLInputElement>event.target).value;
    return this.serverName;
  }
}