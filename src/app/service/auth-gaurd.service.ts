import { Injectable } from "@angular/core";
import {
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from "@angular/router";

import { environment } from "./../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class AuthGaurdService {
  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  canActivate() {
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['/login']);
      return false;
    } else {
      return true;
    }
  }
}
