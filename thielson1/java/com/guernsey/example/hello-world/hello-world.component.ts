import {Component, NgModule} from '@angular/core';
import {msg} from 'guernsey3/java/com/guernsey/example/lib/file';

@Component({
  selector: 'hello-world-app',
  templateUrl: 'hello-world.component.html',
  styleUrls: ['./hello-world.component.css'],
})
export class HelloWorldComponent {
  name: string = msg;
}
