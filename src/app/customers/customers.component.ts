import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  model: any = {};

  customers: any = [];

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.getSomeCustomer();
  }

  getSomeCustomer() {
    this.model.action = 'stuff';
    this.authService.getCustomers(this.model).subscribe(response => {
       if (response.status === 'success') {
        this.customers = response['data']['Custs'];
       }
    }, error => {
      this.authService.logout();
    });

  }

}
