import { Component } from "@angular/core";

@Component({
    selector: 'app-server', 
    templateUrl: './server.component.html'
})

//in the html you can use {{<variable or method>}} that return a variable that can be converted to a string
export class ServerComponent {
serverID: number = 10;
serverStatus: string = 'offline';
}