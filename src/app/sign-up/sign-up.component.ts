import { Component, OnInit } from '@angular/core';
import { Formulaire } from '../Model/form.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
model:Formulaire = new Formulaire()

ngOnInit(): void {

}

onSubmit(){
  const d = this.model.birthday;
  console.log("Form sent");
  console.log(this.model);
  console.log(d);
  const day = d.getDate;
  console.log(day);
}

checkErrors(){

}

}
