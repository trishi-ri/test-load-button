export class FileInfo {
  id?: number;
  link?: string;
  name: string;
  comment?: string;

  constructor(fileInfo?: FileModel) {
    Object.assign(this, fileInfo);
  }
}

export interface FileModel {
  id: number;
  name: string;
  link: string;
}
