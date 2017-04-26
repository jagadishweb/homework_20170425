import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { User } from '../user';
import { Response } from '../service-response';
import { UserService } from '../user.service';

import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [ UserService ]
})
export class UserDetailComponent implements OnInit {

  user: User;
  pageFor: string = 'Edit';
  errorMessages: string[] = [];
  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.errorMessages = [];
    let id = +this.route.snapshot.params['id'];
    if(id > -1){
      this.pageFor = 'Edit';
      this.user = this.userService.getUser(id);
    } else {
      this.pageFor = 'New';
      this.user = new User("-1", '', '', '');
    }
  }

  saveUser(): void {
  let result: Response = this.userService.saveUser(this.user);
    if(result && result.status === 'ERROR'){
      this.errorMessages = result.errorMessages;
    } else {
      // redirect to dashboard;
      this.router.navigateByUrl('/');
    }

  }

}
