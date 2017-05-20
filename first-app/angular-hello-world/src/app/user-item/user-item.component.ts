import { 
  Component, 
  OnInit,
  Input   // <-- added this
 } from '@angular/core';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {

// Let’s introduce name as a new property of our component.
// In order to add a name, we’ll introduce a property on the UserItemComponent class to declare it has a local variable named name.

// name: string; // <-- added name property

  @Input() name: string; // <-- added Input annotation

  constructor() {
    // removed setting name
    // this.name='Felipe'; // set the name
   }

  ngOnInit() {
  }

}
