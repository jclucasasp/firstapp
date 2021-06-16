import { Component } from "@angular/core";


@Component({
    selector: 'app-test01',
    templateUrl: './test01.component.html',
    styleUrls: ['./test01.component.css']
})

export class Test01Component {
    userName: string = null;

    public onClickClear(): void {
        this.userName = null;
    }
}