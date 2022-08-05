import { Component, Input } from '@angular/core';
import { FileInfo } from './file-info.model';
import { finalize, Observable } from 'rxjs';

@Component({
  selector: 'app-load-button',
  templateUrl: './load-button.component.html',
  styleUrls: ['./load-button.component.css'],
})
export class LoadButtonComponent {
  @Input() downloadLink: Observable<FileInfo>;
  public fileDownloaded: boolean;

  downloadExcel(): void {
    this.fileDownloaded = true;
    this.downloadLink
      .pipe(finalize(() => this.fileDownloaded = false))
      .subscribe({
        next: (fileLink: FileInfo) => {
          const newWindow = window.open();
          newWindow.location = fileLink.link;
        },
        error: () => alert('AUCTIONS.REPORTS.ERRORS.DOWNLOAD_FAILED'),
      });
  }
}
