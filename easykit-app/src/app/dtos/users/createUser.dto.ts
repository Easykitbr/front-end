
export class CreateUserDto {

  email: string='';
  password: string='';

  isActive: boolean=false;

  createdAt!: Date;

  refreshToken?: string;
}
