import { TestBed, inject } from '@angular/core/testing';

import { UserService} from './user.service';
import { User} from './user';
import { Response} from './service-response';

describe('UserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ ],
      providers: [UserService]
    });
  });

  it('should ...', inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy();
  }));

  it('should have users set properly', inject([UserService], (service: UserService) => {
    service.getUsers();
    expect(service.users.length).toEqual(3);
  }));

  it('should return correct user details for getUser method', inject([UserService], (service: UserService) => {
    let user: User = service.getUser(1);
    expect(user.id).toEqual(1);
    expect(user.first_name).toEqual('Fred');
  }));

  it('should have saveUser method', inject([UserService], (service: UserService) => {
    expect(service.saveUser).toBeTruthy();
  }));

  it('should return ERROR messages for saveUser method', inject([UserService], (service: UserService) => {
    let user: User = new User('-1', null, null, null);
    let result: Response = service.saveUser(user);
    expect(result.status).toEqual('ERROR');
  }));

  it('should return OK messages for saveUser method', inject([UserService], (service: UserService) => {
    let user: User = new User("-1", 'fName', 'lName', 'eMail');
    let result: Response = service.saveUser(user);
    expect(result.status).toEqual('OK');
  }));

});
