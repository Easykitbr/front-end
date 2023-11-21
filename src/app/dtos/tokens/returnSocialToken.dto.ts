import {TokenTypes} from "../../../enum/tokenTypes.enum";


export class ReturnSocialTokenDto {
  id?: string;
  mediaKitId?: string;
  accessToken?: string;
  refreshToken?: string;
  expirationDate?: number;
  tokenType?: TokenTypes;
  isActive?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
