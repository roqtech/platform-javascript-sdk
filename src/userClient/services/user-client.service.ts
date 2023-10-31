import { Sdk } from '../../generated/sdk';

export class UserClientService {
  private gqlSdk: Sdk;
  public userProfile: Sdk['userProfile'];
  public userProfiles: Sdk['userProfiles'];
  public assignRolesToUser: Sdk['assignRolesToUser'];
  public createUser: Sdk['createUser'];
  public unassignRolesFromUser: Sdk['unassignRolesFromUser'];
  public updateUser: Sdk['updateUser'];
  public changeUserPassword: Sdk['changeUserPassword'];
  public verifyPassword: Sdk['verifyPassword'];
  public updateTenant: Sdk['updateTenant'];
  public sendUserInvites: Sdk['sendUserInvites'];
  public resendUserInvite: Sdk['resendUserInvite'];
  public userInvite: Sdk['userInvite'];
  public userInvites: Sdk['userInvites'];
  public cancelUserInvite: Sdk['cancelUserInvite'];
  public acceptUserInvite: Sdk['acceptUserInvite'];
  public updateUserInvite: Sdk["updateUserInvite"];
  public sendUserResetPasswordMail: Sdk["sendUserResetPasswordMail"];

  constructor(gqlSdk: Sdk) {
    this.gqlSdk = gqlSdk;
    this.userProfile = this.gqlSdk.userProfile;
    this.userProfiles = this.gqlSdk.userProfiles;
    this.assignRolesToUser = this.gqlSdk.assignRolesToUser;
    this.createUser = this.gqlSdk.createUser;
    this.unassignRolesFromUser = this.gqlSdk.unassignRolesFromUser;
    this.updateUser = this.gqlSdk.updateUser;
    this.changeUserPassword = this.gqlSdk.changeUserPassword;
    this.verifyPassword = this.gqlSdk.verifyPassword;
    this.updateTenant = this.gqlSdk.updateTenant;
    this.sendUserInvites = this.gqlSdk.sendUserInvites;
    this.resendUserInvite = this.gqlSdk.resendUserInvite;
    this.userInvites = this.gqlSdk.userInvites;
    this.userInvite = this.gqlSdk.userInvite;
    this.cancelUserInvite = this.gqlSdk.cancelUserInvite;
    this.acceptUserInvite = this.gqlSdk.acceptUserInvite;
    this.updateUserInvite = this.gqlSdk.updateUserInvite;
    this.sendUserResetPasswordMail = this.gqlSdk.sendUserResetPasswordMail;
  }
}
