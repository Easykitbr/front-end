import { ReturnSocialTokenDto } from '../tokens/returnSocialToken.dto';

export class ReturnMediaKitDto {
  id?: string;
  userId?: string;
  displayName?: string;
  url?: string;
  bio?: string;
  isActive?: boolean;
  tokens?: ReturnSocialTokenDto[];
  createdAt?: Date;
  updatedAt?: Date;
}
