import { Component, OnInit } from "@angular/core";
import { AuthService } from '../service/auth.service';

@Component({
  selector: "app-transactions",
  templateUrl: "./transactions.component.html",
  styleUrls: ["./transactions.component.scss"],
})
export class TransactionsComponent implements OnInit {
  model: any = {};

  transactions: any = [];

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.getSomeTransaction();
  }

  getSomeTransaction() {
    this.model.action = "stuff";
    this.authService.getTransactions(this.model).subscribe(
      (response) => {
        if (response.status === "success") {
          this.transactions = response["data"]["Custs"];
        }
      },
      (error) => {
        this.authService.logout();
      }
    );
  }
}
