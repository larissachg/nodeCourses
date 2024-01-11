import { UploadedFile } from "express-fileupload";
import path from "path";

export class FileUploadService {
  constructor() {}

  private checkFolder(folderPath: string) {
    throw new Error("Not implemented");
  }

  uploadSingle(
    file: UploadedFile,
    folder: string = "uploads",
    validExtensions: string[] = ["png", "jpg", "jpeg", "gif"]
  ) {
    const fileExtension = file.mimetype.split('/').at(1);
    const destination = path.resolve(__dirname, '../../../', folder);
    
  }

  uploadMultiple(
    file: any[],
    folder: string = "uploads",
    validExtensions: string[] = ["png", "jpg", "jpeg", "gif"]
  ) {}
}
