import { Injectable } from '@angular/core';

import { User } from './user';
import { Response } from './service-response';

@Injectable()
export class UserService {

  users: User[] = [];

  private serverResponse = '{ "email": [ "can\'t be blank" ], "first_name": [ "can\'t be blank" ], "last_name": [ "can\'t be blank" ] }';
  private userDictionary = {
    1: '{ "id": 1, "buyer_id": 1, "first_name": "Fred", "last_name": "Flintstone", "email": "fred.flintstone@slaterockandgravel.com" }',
    2: '{ "id": 2, "buyer_id": 2, "first_name": "Barney", "last_name": "Rubble", "email": "barney.rubble@slaterockandgravel.com" }',
    3: '{ "id": 3, "buyer_id": 3, "first_name": "Wilma", "last_name": "Flintstone", "email": "wilma.flinstone@dailygranite.com" }'
  };

  constructor() { }


  getUsers() {
   this.users = JSON.parse("["+Object.keys(this.userDictionary).map(key => this.userDictionary[key]).join(',')+"]");
  }

  getUser(id: number) {
    return JSON.parse(this.userDictionary[id]);
  }

  saveUser(user: User): Response {
    let result:Response;
    /*
    server side logic to validate and return OK or ERROR
    */
    if(user && user.first_name && user.first_name !== ''
      && user.last_name && user.last_name !== ''
      && user.email && user.email !== '') {
      result = new Response('OK', [])
    } else {
      //success part
      result = new Response('ERROR', ['Validation error - 1']);
    }

    return result;
  }

  private logError(error: any) {
    console.error('service found an error: '+error);
  }

}
