import { Component, OnInit } from "@angular/core";
import { FirebaseAuthentication } from "@ionic-native/firebase-authentication/ngx";
import { Firebase } from "@ionic-native/firebase/ngx";

@Component({
  selector: "app-register",
  templateUrl: "./register.page.html",
  styleUrls: ["./register.page.scss"],
})
export class RegisterPage implements OnInit {
  constructor() {}
  firebase: Firebase;
  phoneNumber: string;

  // register(): void {
  //   console.log(this.phoneNumber);
  //   // this.firebaseAuthentication
  //   //   .createUserWithEmailAndPassword(this.phoneNumber, "")
  //   //   .then((res: any) => console.log(res))
  //   //   .catch((error: any) => console.error(error));
  // }

  ngOnInit() {}
}
