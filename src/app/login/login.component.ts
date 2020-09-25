import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  model: any = {};

  constructor(
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.authService.logout();
  }

  login() {
    this.model.action = 'login';
    this.authService.loginForm(this.model).subscribe(response => {
      if (response.status === 'success') {
        this.authService.setUser(response);
      }
    }, error => {
      console.error(error);
    });
  }
}
