import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css'],
})
export class UploadFileComponent implements OnInit {
  public file: any = null;
  public preview: any = null;
  public loading:boolean=true
  constructor(private rest: RestService) {}

  public saveFile(event: any) {
    this.file = event.target.files[0];
    const promise=this.convertImageToBase64(this.file).then(base64=>{
      this.preview=base64
      this.loading=false

    })
  }

 public convertImageToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        resolve(base64String);
      };
      reader.onerror = (error) => {
        reject(error);
      };
      reader.readAsDataURL(file);
    });
  }

  ngOnInit(): void {}
}
