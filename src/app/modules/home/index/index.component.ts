import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent {
  quoteForm: any;

  constructor(private fb: FormBuilder) {
    this.quoteForm = fb.group({
      location: ['', [Validators.required, Validators.minLength(3)]],
      destination: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phoneNo: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  submitForm(frm: FormGroup) {
    console.log(frm);
  }
}
