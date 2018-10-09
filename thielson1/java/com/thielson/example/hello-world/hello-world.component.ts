import {Component, NgModule} from '@angular/core';
import {msg} from 'thielson1/java/com/thielson/example/lib/file';

@Component({
  selector: 'hello-world-app',
  templateUrl: 'hello-world.component.html',
  styleUrls: ['./hello-world.component.css'],
})
export class HelloWorldComponent {
  name: string = msg;
}
