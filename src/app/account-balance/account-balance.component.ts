import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-account-balance",
  templateUrl: "./account-balance.component.html",
  styleUrls: ["./account-balance.component.scss"],
})
export class AccountBalanceComponent implements OnInit {
  model: any = {};

  accounts: any = [];

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.getSomeAccounts();
  }

  getSomeAccounts() {
    this.model.action = "stuff";
    this.authService.getAccounts(this.model).subscribe(
      (response) => {
        if (response.status === "success") {
          this.accounts = response["data"]["Custs"];
        }
      },
      (error) => {
        this.authService.logout();
      }
    );
  }
}
