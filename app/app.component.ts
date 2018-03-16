import { Component } from '@angular/core'
import { FormGroup, FormControl } from '@angular/forms'

@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
})

export class AppComponent {

    //userForm => model which is responsible for handling the user interactions

    userForm = new FormGroup({
        firstName: new FormControl(),
        email: new FormControl(),
        address: new FormGroup({
            country: new FormControl(),
            city: new FormControl(),
            postalCode: new FormControl()
        })
    });

    submitForm() {
        console.log(this.userForm.value);
    }
}