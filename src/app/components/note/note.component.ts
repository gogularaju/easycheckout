import {Component} from '@angular/core'

@Component({
  selector:'app-note',
  templateUrl:'./note.component.html',
  styleUrls:['./note.component.css']
})


export class NoteComponent {
   enteredNotes: string;

  constructor() {
    const savedNotes = localStorage.getItem('note');
    this.enteredNotes = savedNotes || '';
  }

 onFocusOut(event) {
    if(event) {
      const value = event.target.innerText;
      this.enteredNotes = value;
      localStorage.setItem('note', value)
    }
 }


}
