import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`
    .online {
        color: white;
    }
    
    .offline {
        color: blue;
    }
    `]
})

//in the html you can use {{<variable or method>}} that return a variable that can be converted to a string
export class ServerComponent {
    serverID: number = 0;
    serverStatus: string = null;

    constructor() {
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline'
        this.serverID = Math.floor(Math.random() * 10);
    }

    public changeColor(): string {
        if (this.serverStatus === 'online') {
            return 'green';
        } else {
            return 'red';
        }
    }
}