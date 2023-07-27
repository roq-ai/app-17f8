interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: [],
  tenantRoles: ['Developer', 'Owner', 'Administrator'],
  tenantName: 'Organization',
  applicationName: 'APP',
  addOns: ['chat', 'notifications', 'file'],
};
