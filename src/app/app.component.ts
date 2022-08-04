import { Component, VERSION } from '@angular/core';
import { delay, first, Observable, of, switchMap } from 'rxjs';
import { FileInfo } from './load-button/file-info.model';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  exportToExcel(): Observable<FileInfo> {
    return this.getReportDocument();
  }

  private getReportDocument(): Observable<FileInfo> {
    return of({id: 317928})
    .pipe(delay(3000))
    .pipe(switchMap(({id}) => this.getFileLink(id)))
    .pipe(first())
  }

  private getFileLink(id: number): Observable<FileInfo> {
    return of({
      id,
      name: 'Параметры_800384426_20220408.xlsx',
      link: 'https://329718.selcdn.ru/auction-data/38569/72e/900/72e9005e02f6cc4925a25782a618876d?temp_url_sig=440263cd03517fa52c505b1e495194244264876c&temp_url_expires=4815294392&filename=%D0%9F%D0%B0%D1%80%D0%B0%D0%BC%D0%B5%D1%82%D1%80%D1%8B_800384426_20220408.xlsx',
    }).pipe(delay(3000));
  }
}
