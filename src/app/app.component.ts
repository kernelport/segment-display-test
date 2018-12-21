import {Component} from '@angular/core';
import {interval} from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'segment-display-test';
    digi2 = "10";
    counter = 10;

    constructor() {
        interval(1000)
            .subscribe(() => {
                if (this.counter === 0)
                    this.counter = 10;
                else
                    this.counter--;
                this.digi2 = String(this.counter).padStart(2, "0");
            });
    }
}
