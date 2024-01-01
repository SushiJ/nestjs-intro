import { Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { User } from 'src/shared';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  getUsers() {
    return this.userService.getUsers();
  }

  @Get(':id')
  getUsersById(@Param('id') id: string) {
    return this.userService.getUsersById(id);
  }

  @Post()
  createUser(user: User) {
    this.userService.postUser(user);
  }

  @Delete(':id')
  deleteUser(user: User) {
    this.userService.postUser(user);
  }
}
