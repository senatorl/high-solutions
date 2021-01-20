import { PostResourceService } from './../../resources/post/post-resource.service';
import { AddNewPostDialogComponent } from './add-new-post-dialog/add-new-post-dialog.component';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-add-new-post',
  templateUrl: './add-new-post.component.html',
  styleUrls: ['./add-new-post.component.css'],
})
export class AddNewPostComponent {
  constructor(
    public dialog: MatDialog,
    private postResourceService: PostResourceService
  ) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(AddNewPostDialogComponent, {
      width: '450px',
    });

    dialogRef.afterClosed().subscribe((form) => {
      if (form) {
        this.postResourceService.addPost(form.value);
      }
    });
  }
}
