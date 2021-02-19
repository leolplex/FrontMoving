import { Component } from '@angular/core';
import { ManageFileService } from './services/manage-file.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'moving';
  fileToUpload: File = null;
  identification: number = 0;

  constructor(private manageFile: ManageFileService) {}

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    console.log(this.identification);

    this.manageFile.readFile(this.fileToUpload, this.identification);
  }
}
