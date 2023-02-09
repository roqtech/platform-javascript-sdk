import { Sdk } from '../../generated/sdk';

export class UserClientService {
  private gqlSdk: Sdk;
  public user: Sdk['user'];
  public users: Sdk['users'];
  public userGroup: Sdk['userGroup'];
  public userGroups: Sdk['userGroups'];
  public userProfile: Sdk['userProfile'];
  public userProfiles: Sdk['userProfiles'];
  public tenant: Sdk['tenant'];
  public tenants: Sdk['tenants'];
  public role: Sdk['role'];
  public roles: Sdk['roles'];
  public addUsersToUserGroup: Sdk['addUsersToUserGroup'];
  public assignRolesToUser: Sdk['assignRolesToUser'];
  public buildQueryPlan: Sdk['buildQueryPlan'];
  public createTenant: Sdk['createTenant'];
  public createUser: Sdk['createUser'];
  public createUserGroup: Sdk['createUserGroup'];
  public removeUsersFromUserGroup: Sdk['removeUsersFromUserGroup'];
  public unassignRolesFromUser: Sdk['unassignRolesFromUser'];
  public updateUser: Sdk['updateUser'];
  public updateUserGroup: Sdk['updateUserGroup'];

  constructor(gqlSdk: Sdk) {
    this.gqlSdk = gqlSdk;
    this.user = this.gqlSdk.user;
    this.users = this.gqlSdk.users;
    this.userGroup = this.gqlSdk.userGroup;
    this.userGroups = this.gqlSdk.userGroups;
    this.userProfile = this.gqlSdk.userProfile;
    this.userProfiles = this.gqlSdk.userProfiles;
    this.tenant = this.gqlSdk.tenant;
    this.tenants = this.gqlSdk.tenants;
    this.addUsersToUserGroup = this.gqlSdk.addUsersToUserGroup;
    this.assignRolesToUser = this.gqlSdk.assignRolesToUser;
    this.buildQueryPlan = this.gqlSdk.buildQueryPlan;
    this.createTenant = this.gqlSdk.createTenant;
    this.createUser = this.gqlSdk.createUser;
    this.createUserGroup = this.gqlSdk.createUserGroup;
    this.removeUsersFromUserGroup = this.gqlSdk.removeUsersFromUserGroup;
    this.unassignRolesFromUser = this.gqlSdk.unassignRolesFromUser;
    this.updateUser = this.gqlSdk.updateUser;
    this.updateUserGroup = this.gqlSdk.updateUserGroup;
    this.role = this.gqlSdk.role;
    this.roles = this.gqlSdk.roles;
  }
}
