import { Component, OnInit } from '@angular/core';
import { FetchUserDataService } from './fetch-user-data.service';
import { FormField } from './form-field.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'Dynamic-UI';
  formFields: FormField[]=[];
  formData: any = {};

  constructor(private fetchUserData: FetchUserDataService) {}

  ngOnInit(): void {
    this.fetchUserData.getData().subscribe(data => {
      this.formFields = data;
      const savedData = localStorage.getItem('formData');
      if (savedData) {
        this.formData = JSON.parse(savedData);
      } else {
        this.formFields.forEach(field => {
          this.formData[field.name] = field.value || '';
        });
      }
    });
  }
  onSubmit(): void {
    localStorage.setItem('formData', JSON.stringify(this.formData));
  }
  onFileChange(event: any, field: FormField): void {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.formData[field.name] = reader.result as string;
    };
    reader.readAsDataURL(file);
  }
}
