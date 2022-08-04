import { Component, Input } from '@angular/core';
import { FileInfo } from './file-info.model';
import { catchError, Observable, throwError } from 'rxjs';

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
      .pipe(
        catchError((err) => {
          this.fileDownloaded = false;
          return throwError(err);
        })
      )
      .subscribe({
        next: (fileLink) => {
          window.open(fileLink.link);
          this.fileDownloaded = false;
        },
        error: (error) => {
          alert('AUCTIONS.REPORTS.ERRORS.DOWNLOAD_FAILED');
          this.fileDownloaded = false;
        },
      });
  }
}
