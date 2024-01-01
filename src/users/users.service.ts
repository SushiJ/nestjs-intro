import { Injectable } from '@nestjs/common';
import { User } from 'src/shared';

@Injectable()
export class UsersService {
  users: User[] = [
    {
      id: 0,
      name: 'JoshOG',
    },
    {
      id: 1,
      name: 'Hutch',
    },
    {
      id: 2,
      name: 'Summit',
    },
  ];

  getUsers() {
    return this.users;
  }

  getUsersById(thisId: string) {
    const user = this.users.find(({ id }) => id === +thisId);
    if (!user) {
      return 'Not found';
    }
    return user;
  }

  postUser(user: User) {
    this.users.push(user);
  }

  deleteUser(id: number) {
    return this.users.splice(id);
  }
}
