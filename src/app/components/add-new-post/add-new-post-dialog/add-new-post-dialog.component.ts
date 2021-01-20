import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-add-new-post-dialog',
  templateUrl: './add-new-post-dialog.component.html',
  styleUrls: ['./add-new-post-dialog.component.css'],
})
export class AddNewPostDialogComponent {
  postForm = new FormGroup({
    id: new FormControl('', Validators.required),
    author: new FormControl('', Validators.required),
    title: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required),
  });
}
