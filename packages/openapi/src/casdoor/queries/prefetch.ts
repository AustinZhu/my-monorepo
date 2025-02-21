// generated with @7nohe/openapi-react-query-codegen@1.6.1 

import { type QueryClient } from "@tanstack/react-query";
import { AccountApiService, AdapterApiService, ApplicationApiService, CertApiService, EnforcerApiService, GroupApiService, InvitationApiService, LoginApiService, ModelApiService, OidcApiService, OrganizationApiService, PaymentApiService, PermissionApiService, PlanApiService, PricingApiService, ProductApiService, ProviderApiService, ResourceApiService, RoleApiService, SessionApiService, SubscriptionApiService, SyncerApiService, SystemApiService, TokenApiService, UserApiService, WebhookApiService } from "../requests/services.gen";
import { type object_Syncer } from "../requests/types.gen";
import * as Common from "./common";

export const prefetchUseOidcApiServiceRootControllerGetJwks = (queryClient: QueryClient) => queryClient.prefetchQuery({ queryKey: Common.UseOidcApiServiceRootControllerGetJwksKeyFn(), queryFn: () => OidcApiService.rootControllerGetJwks() });
export const prefetchUseOidcApiServiceRootControllerGetOidcDiscovery = (queryClient: QueryClient) => queryClient.prefetchQuery({ queryKey: Common.UseOidcApiServiceRootControllerGetOidcDiscoveryKeyFn(), queryFn: () => OidcApiService.rootControllerGetOidcDiscovery() });
export const prefetchUseAdapterApiServiceApiControllerGetAdapter = (queryClient: QueryClient, { id }: {
  id: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseAdapterApiServiceApiControllerGetAdapterKeyFn({ id }), queryFn: () => AdapterApiService.apiControllerGetAdapter({ id }) });
export const prefetchUseAdapterApiServiceApiControllerGetAdapters = (queryClient: QueryClient, { owner }: {
  owner: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseAdapterApiServiceApiControllerGetAdaptersKeyFn({ owner }), queryFn: () => AdapterApiService.apiControllerGetAdapters({ owner }) });
export const prefetchUseApplicationApiServiceApiControllerGetApplication = (queryClient: QueryClient, { id }: {
  id: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseApplicationApiServiceApiControllerGetApplicationKeyFn({ id }), queryFn: () => ApplicationApiService.apiControllerGetApplication({ id }) });
export const prefetchUseApplicationApiServiceApiControllerGetApplications = (queryClient: QueryClient, { owner }: {
  owner: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseApplicationApiServiceApiControllerGetApplicationsKeyFn({ owner }), queryFn: () => ApplicationApiService.apiControllerGetApplications({ owner }) });
export const prefetchUseApplicationApiServiceApiControllerGetOrganizationApplications = (queryClient: QueryClient, { organization }: {
  organization: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseApplicationApiServiceApiControllerGetOrganizationApplicationsKeyFn({ organization }), queryFn: () => ApplicationApiService.apiControllerGetOrganizationApplications({ organization }) });
export const prefetchUseApplicationApiServiceApiControllerGetUserApplication = (queryClient: QueryClient, { id }: {
  id: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseApplicationApiServiceApiControllerGetUserApplicationKeyFn({ id }), queryFn: () => ApplicationApiService.apiControllerGetUserApplication({ id }) });
export const prefetchUseCertApiServiceApiControllerGetCert = (queryClient: QueryClient, { id }: {
  id: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseCertApiServiceApiControllerGetCertKeyFn({ id }), queryFn: () => CertApiService.apiControllerGetCert({ id }) });
export const prefetchUseCertApiServiceApiControllerGetCerts = (queryClient: QueryClient, { owner }: {
  owner: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseCertApiServiceApiControllerGetCertsKeyFn({ owner }), queryFn: () => CertApiService.apiControllerGetCerts({ owner }) });
export const prefetchUseCertApiServiceApiControllerGetGlobalCerts = (queryClient: QueryClient) => queryClient.prefetchQuery({ queryKey: Common.UseCertApiServiceApiControllerGetGlobalCertsKeyFn(), queryFn: () => CertApiService.apiControllerGetGlobalCerts() });
export const prefetchUseEnforcerApiServiceApiControllerGetEnforcer = (queryClient: QueryClient, { id }: {
  id: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseEnforcerApiServiceApiControllerGetEnforcerKeyFn({ id }), queryFn: () => EnforcerApiService.apiControllerGetEnforcer({ id }) });
export const prefetchUseEnforcerApiServiceApiControllerGetEnforcers = (queryClient: QueryClient, { owner }: {
  owner: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseEnforcerApiServiceApiControllerGetEnforcersKeyFn({ owner }), queryFn: () => EnforcerApiService.apiControllerGetEnforcers({ owner }) });
export const prefetchUseGroupApiServiceApiControllerGetGroup = (queryClient: QueryClient, { id }: {
  id: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseGroupApiServiceApiControllerGetGroupKeyFn({ id }), queryFn: () => GroupApiService.apiControllerGetGroup({ id }) });
export const prefetchUseGroupApiServiceApiControllerGetGroups = (queryClient: QueryClient, { owner }: {
  owner: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseGroupApiServiceApiControllerGetGroupsKeyFn({ owner }), queryFn: () => GroupApiService.apiControllerGetGroups({ owner }) });
export const prefetchUseInvitationApiServiceApiControllerGetInvitation = (queryClient: QueryClient, { id }: {
  id: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseInvitationApiServiceApiControllerGetInvitationKeyFn({ id }), queryFn: () => InvitationApiService.apiControllerGetInvitation({ id }) });
export const prefetchUseInvitationApiServiceApiControllerGetInvitations = (queryClient: QueryClient, { owner }: {
  owner: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseInvitationApiServiceApiControllerGetInvitationsKeyFn({ owner }), queryFn: () => InvitationApiService.apiControllerGetInvitations({ owner }) });
export const prefetchUseInvitationApiServiceApiControllerVerifyInvitation = (queryClient: QueryClient, { id }: {
  id: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseInvitationApiServiceApiControllerVerifyInvitationKeyFn({ id }), queryFn: () => InvitationApiService.apiControllerVerifyInvitation({ id }) });
export const prefetchUseAccountApiServiceApiControllerGetAccount = (queryClient: QueryClient) => queryClient.prefetchQuery({ queryKey: Common.UseAccountApiServiceApiControllerGetAccountKeyFn(), queryFn: () => AccountApiService.apiControllerGetAccount() });
export const prefetchUseAccountApiServiceApiControllerGetLdap = (queryClient: QueryClient, { id }: {
  id: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseAccountApiServiceApiControllerGetLdapKeyFn({ id }), queryFn: () => AccountApiService.apiControllerGetLdap({ id }) });
export const prefetchUseAccountApiServiceApiControllerGetLdapser = (queryClient: QueryClient) => queryClient.prefetchQuery({ queryKey: Common.UseAccountApiServiceApiControllerGetLdapserKeyFn(), queryFn: () => AccountApiService.apiControllerGetLdapser() });
export const prefetchUseAccountApiServiceApiControllerGetLdaps = (queryClient: QueryClient, { owner }: {
  owner?: string;
} = {}) => queryClient.prefetchQuery({ queryKey: Common.UseAccountApiServiceApiControllerGetLdapsKeyFn({ owner }), queryFn: () => AccountApiService.apiControllerGetLdaps({ owner }) });
export const prefetchUseAccountApiServiceApiControllerUserInfo2 = (queryClient: QueryClient) => queryClient.prefetchQuery({ queryKey: Common.UseAccountApiServiceApiControllerUserInfo2KeyFn(), queryFn: () => AccountApiService.apiControllerUserInfo2() });
export const prefetchUseAccountApiServiceApiControllerUserInfo = (queryClient: QueryClient) => queryClient.prefetchQuery({ queryKey: Common.UseAccountApiServiceApiControllerUserInfoKeyFn(), queryFn: () => AccountApiService.apiControllerUserInfo() });
export const prefetchUseModelApiServiceApiControllerGetModel = (queryClient: QueryClient, { id }: {
  id: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseModelApiServiceApiControllerGetModelKeyFn({ id }), queryFn: () => ModelApiService.apiControllerGetModel({ id }) });
export const prefetchUseModelApiServiceApiControllerGetModels = (queryClient: QueryClient, { owner }: {
  owner: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseModelApiServiceApiControllerGetModelsKeyFn({ owner }), queryFn: () => ModelApiService.apiControllerGetModels({ owner }) });
export const prefetchUseOrganizationApiServiceApiControllerGetDefaultApplication = (queryClient: QueryClient, { id }: {
  id: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseOrganizationApiServiceApiControllerGetDefaultApplicationKeyFn({ id }), queryFn: () => OrganizationApiService.apiControllerGetDefaultApplication({ id }) });
export const prefetchUseOrganizationApiServiceApiControllerGetOrganization = (queryClient: QueryClient, { id }: {
  id: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseOrganizationApiServiceApiControllerGetOrganizationKeyFn({ id }), queryFn: () => OrganizationApiService.apiControllerGetOrganization({ id }) });
export const prefetchUseOrganizationApiServiceApiControllerGetOrganizationNames = (queryClient: QueryClient, { owner }: {
  owner: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseOrganizationApiServiceApiControllerGetOrganizationNamesKeyFn({ owner }), queryFn: () => OrganizationApiService.apiControllerGetOrganizationNames({ owner }) });
export const prefetchUseOrganizationApiServiceApiControllerGetOrganizations = (queryClient: QueryClient, { owner }: {
  owner: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseOrganizationApiServiceApiControllerGetOrganizationsKeyFn({ owner }), queryFn: () => OrganizationApiService.apiControllerGetOrganizations({ owner }) });
export const prefetchUsePaymentApiServiceApiControllerGetPayment = (queryClient: QueryClient, { id }: {
  id: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UsePaymentApiServiceApiControllerGetPaymentKeyFn({ id }), queryFn: () => PaymentApiService.apiControllerGetPayment({ id }) });
export const prefetchUsePaymentApiServiceApiControllerGetPayments = (queryClient: QueryClient, { owner }: {
  owner: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UsePaymentApiServiceApiControllerGetPaymentsKeyFn({ owner }), queryFn: () => PaymentApiService.apiControllerGetPayments({ owner }) });
export const prefetchUsePaymentApiServiceApiControllerGetUserPayments = (queryClient: QueryClient, { organization, owner, user }: {
  organization: string;
  owner: string;
  user: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UsePaymentApiServiceApiControllerGetUserPaymentsKeyFn({ organization, owner, user }), queryFn: () => PaymentApiService.apiControllerGetUserPayments({ organization, owner, user }) });
export const prefetchUsePermissionApiServiceApiControllerGetPermission = (queryClient: QueryClient, { id }: {
  id: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UsePermissionApiServiceApiControllerGetPermissionKeyFn({ id }), queryFn: () => PermissionApiService.apiControllerGetPermission({ id }) });
export const prefetchUsePermissionApiServiceApiControllerGetPermissions = (queryClient: QueryClient, { owner }: {
  owner: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UsePermissionApiServiceApiControllerGetPermissionsKeyFn({ owner }), queryFn: () => PermissionApiService.apiControllerGetPermissions({ owner }) });
export const prefetchUsePermissionApiServiceApiControllerGetPermissionsByRole = (queryClient: QueryClient, { id }: {
  id: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UsePermissionApiServiceApiControllerGetPermissionsByRoleKeyFn({ id }), queryFn: () => PermissionApiService.apiControllerGetPermissionsByRole({ id }) });
export const prefetchUsePermissionApiServiceApiControllerGetPermissionsBySubmitter = (queryClient: QueryClient) => queryClient.prefetchQuery({ queryKey: Common.UsePermissionApiServiceApiControllerGetPermissionsBySubmitterKeyFn(), queryFn: () => PermissionApiService.apiControllerGetPermissionsBySubmitter() });
export const prefetchUsePlanApiServiceApiControllerGetPlan = (queryClient: QueryClient, { id, includeOption }: {
  id: string;
  includeOption?: boolean;
}) => queryClient.prefetchQuery({ queryKey: Common.UsePlanApiServiceApiControllerGetPlanKeyFn({ id, includeOption }), queryFn: () => PlanApiService.apiControllerGetPlan({ id, includeOption }) });
export const prefetchUsePlanApiServiceApiControllerGetPlans = (queryClient: QueryClient, { owner }: {
  owner: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UsePlanApiServiceApiControllerGetPlansKeyFn({ owner }), queryFn: () => PlanApiService.apiControllerGetPlans({ owner }) });
export const prefetchUsePricingApiServiceApiControllerGetPricing = (queryClient: QueryClient, { id }: {
  id: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UsePricingApiServiceApiControllerGetPricingKeyFn({ id }), queryFn: () => PricingApiService.apiControllerGetPricing({ id }) });
export const prefetchUsePricingApiServiceApiControllerGetPricings = (queryClient: QueryClient, { owner }: {
  owner: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UsePricingApiServiceApiControllerGetPricingsKeyFn({ owner }), queryFn: () => PricingApiService.apiControllerGetPricings({ owner }) });
export const prefetchUseProductApiServiceApiControllerGetProduct = (queryClient: QueryClient, { id }: {
  id: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseProductApiServiceApiControllerGetProductKeyFn({ id }), queryFn: () => ProductApiService.apiControllerGetProduct({ id }) });
export const prefetchUseProductApiServiceApiControllerGetProducts = (queryClient: QueryClient, { owner }: {
  owner: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseProductApiServiceApiControllerGetProductsKeyFn({ owner }), queryFn: () => ProductApiService.apiControllerGetProducts({ owner }) });
export const prefetchUseProviderApiServiceApiControllerGetGlobalProviders = (queryClient: QueryClient) => queryClient.prefetchQuery({ queryKey: Common.UseProviderApiServiceApiControllerGetGlobalProvidersKeyFn(), queryFn: () => ProviderApiService.apiControllerGetGlobalProviders() });
export const prefetchUseProviderApiServiceApiControllerGetProvider = (queryClient: QueryClient, { id }: {
  id: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseProviderApiServiceApiControllerGetProviderKeyFn({ id }), queryFn: () => ProviderApiService.apiControllerGetProvider({ id }) });
export const prefetchUseProviderApiServiceApiControllerGetProviders = (queryClient: QueryClient, { owner }: {
  owner: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseProviderApiServiceApiControllerGetProvidersKeyFn({ owner }), queryFn: () => ProviderApiService.apiControllerGetProviders({ owner }) });
export const prefetchUseResourceApiServiceApiControllerGetResource = (queryClient: QueryClient, { id }: {
  id: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseResourceApiServiceApiControllerGetResourceKeyFn({ id }), queryFn: () => ResourceApiService.apiControllerGetResource({ id }) });
export const prefetchUseResourceApiServiceApiControllerGetResources = (queryClient: QueryClient, { field, owner, p, pageSize, sortField, sortOrder, user, value }: {
  field?: string;
  owner: string;
  p?: number;
  pageSize?: number;
  sortField?: string;
  sortOrder?: string;
  user: string;
  value?: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseResourceApiServiceApiControllerGetResourcesKeyFn({ field, owner, p, pageSize, sortField, sortOrder, user, value }), queryFn: () => ResourceApiService.apiControllerGetResources({ field, owner, p, pageSize, sortField, sortOrder, user, value }) });
export const prefetchUseRoleApiServiceApiControllerGetRole = (queryClient: QueryClient, { id }: {
  id: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseRoleApiServiceApiControllerGetRoleKeyFn({ id }), queryFn: () => RoleApiService.apiControllerGetRole({ id }) });
export const prefetchUseRoleApiServiceApiControllerGetRoles = (queryClient: QueryClient, { owner }: {
  owner: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseRoleApiServiceApiControllerGetRolesKeyFn({ owner }), queryFn: () => RoleApiService.apiControllerGetRoles({ owner }) });
export const prefetchUseSessionApiServiceApiControllerGetSingleSession = (queryClient: QueryClient, { id }: {
  id: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseSessionApiServiceApiControllerGetSingleSessionKeyFn({ id }), queryFn: () => SessionApiService.apiControllerGetSingleSession({ id }) });
export const prefetchUseSessionApiServiceApiControllerGetSessions = (queryClient: QueryClient, { owner }: {
  owner: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseSessionApiServiceApiControllerGetSessionsKeyFn({ owner }), queryFn: () => SessionApiService.apiControllerGetSessions({ owner }) });
export const prefetchUseSessionApiServiceApiControllerIsSessionDuplicated = (queryClient: QueryClient, { id, sessionId }: {
  id: string;
  sessionId: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseSessionApiServiceApiControllerIsSessionDuplicatedKeyFn({ id, sessionId }), queryFn: () => SessionApiService.apiControllerIsSessionDuplicated({ id, sessionId }) });
export const prefetchUseSubscriptionApiServiceApiControllerGetSubscription = (queryClient: QueryClient, { id }: {
  id: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseSubscriptionApiServiceApiControllerGetSubscriptionKeyFn({ id }), queryFn: () => SubscriptionApiService.apiControllerGetSubscription({ id }) });
export const prefetchUseSubscriptionApiServiceApiControllerGetSubscriptions = (queryClient: QueryClient, { owner }: {
  owner: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseSubscriptionApiServiceApiControllerGetSubscriptionsKeyFn({ owner }), queryFn: () => SubscriptionApiService.apiControllerGetSubscriptions({ owner }) });
export const prefetchUseSyncerApiServiceApiControllerGetSyncer = (queryClient: QueryClient, { id }: {
  id: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseSyncerApiServiceApiControllerGetSyncerKeyFn({ id }), queryFn: () => SyncerApiService.apiControllerGetSyncer({ id }) });
export const prefetchUseSyncerApiServiceApiControllerGetSyncers = (queryClient: QueryClient, { owner }: {
  owner: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseSyncerApiServiceApiControllerGetSyncersKeyFn({ owner }), queryFn: () => SyncerApiService.apiControllerGetSyncers({ owner }) });
export const prefetchUseSyncerApiServiceApiControllerRunSyncer = (queryClient: QueryClient, { body }: {
  body: object_Syncer;
}) => queryClient.prefetchQuery({ queryKey: Common.UseSyncerApiServiceApiControllerRunSyncerKeyFn({ body }), queryFn: () => SyncerApiService.apiControllerRunSyncer({ body }) });
export const prefetchUseTokenApiServiceApiControllerGetCaptchaStatus = (queryClient: QueryClient, { id }: {
  id: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseTokenApiServiceApiControllerGetCaptchaStatusKeyFn({ id }), queryFn: () => TokenApiService.apiControllerGetCaptchaStatus({ id }) });
export const prefetchUseTokenApiServiceApiControllerGetToken = (queryClient: QueryClient, { id }: {
  id: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseTokenApiServiceApiControllerGetTokenKeyFn({ id }), queryFn: () => TokenApiService.apiControllerGetToken({ id }) });
export const prefetchUseTokenApiServiceApiControllerGetTokens = (queryClient: QueryClient, { owner, p, pageSize }: {
  owner: string;
  p: string;
  pageSize: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseTokenApiServiceApiControllerGetTokensKeyFn({ owner, p, pageSize }), queryFn: () => TokenApiService.apiControllerGetTokens({ owner, p, pageSize }) });
export const prefetchUseUserApiServiceApiControllerGetEmailAndPhone = (queryClient: QueryClient, { organization, username }: {
  organization: string;
  username: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseUserApiServiceApiControllerGetEmailAndPhoneKeyFn({ organization, username }), queryFn: () => UserApiService.apiControllerGetEmailAndPhone({ organization, username }) });
export const prefetchUseUserApiServiceApiControllerGetGlobalUsers = (queryClient: QueryClient) => queryClient.prefetchQuery({ queryKey: Common.UseUserApiServiceApiControllerGetGlobalUsersKeyFn(), queryFn: () => UserApiService.apiControllerGetGlobalUsers() });
export const prefetchUseUserApiServiceApiControllerGetSortedUsers = (queryClient: QueryClient, { limit, owner, sorter }: {
  limit: string;
  owner: string;
  sorter: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseUserApiServiceApiControllerGetSortedUsersKeyFn({ limit, owner, sorter }), queryFn: () => UserApiService.apiControllerGetSortedUsers({ limit, owner, sorter }) });
export const prefetchUseUserApiServiceApiControllerGetUser = (queryClient: QueryClient, { email, id, owner, phone, userId }: {
  email?: string;
  id?: string;
  owner?: string;
  phone?: string;
  userId?: string;
} = {}) => queryClient.prefetchQuery({ queryKey: Common.UseUserApiServiceApiControllerGetUserKeyFn({ email, id, owner, phone, userId }), queryFn: () => UserApiService.apiControllerGetUser({ email, id, owner, phone, userId }) });
export const prefetchUseUserApiServiceApiControllerGetUserCount = (queryClient: QueryClient, { isOnline, owner }: {
  isOnline: string;
  owner: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseUserApiServiceApiControllerGetUserCountKeyFn({ isOnline, owner }), queryFn: () => UserApiService.apiControllerGetUserCount({ isOnline, owner }) });
export const prefetchUseUserApiServiceApiControllerGetUsers = (queryClient: QueryClient, { owner }: {
  owner: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseUserApiServiceApiControllerGetUsersKeyFn({ owner }), queryFn: () => UserApiService.apiControllerGetUsers({ owner }) });
export const prefetchUseUserApiServiceApiControllerWebAuthnSignupBegin = (queryClient: QueryClient) => queryClient.prefetchQuery({ queryKey: Common.UseUserApiServiceApiControllerWebAuthnSignupBeginKeyFn(), queryFn: () => UserApiService.apiControllerWebAuthnSignupBegin() });
export const prefetchUseWebhookApiServiceApiControllerGetWebhook = (queryClient: QueryClient, { id }: {
  id: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseWebhookApiServiceApiControllerGetWebhookKeyFn({ id }), queryFn: () => WebhookApiService.apiControllerGetWebhook({ id }) });
export const prefetchUseWebhookApiServiceApiControllerGetWebhooks = (queryClient: QueryClient, { owner }: {
  owner: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseWebhookApiServiceApiControllerGetWebhooksKeyFn({ owner }), queryFn: () => WebhookApiService.apiControllerGetWebhooks({ owner }) });
export const prefetchUseLoginApiServiceApiControllerGetApplicationLogin = (queryClient: QueryClient, { clientId, redirectUri, responseType, scope, state }: {
  clientId: string;
  redirectUri: string;
  responseType: string;
  scope: string;
  state: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseLoginApiServiceApiControllerGetApplicationLoginKeyFn({ clientId, redirectUri, responseType, scope, state }), queryFn: () => LoginApiService.apiControllerGetApplicationLogin({ clientId, redirectUri, responseType, scope, state }) });
export const prefetchUseLoginApiServiceApiControllerGetCaptcha = (queryClient: QueryClient) => queryClient.prefetchQuery({ queryKey: Common.UseLoginApiServiceApiControllerGetCaptchaKeyFn(), queryFn: () => LoginApiService.apiControllerGetCaptcha() });
export const prefetchUseLoginApiServiceApiControllerWebAuthnSigninBegin = (queryClient: QueryClient, { name, owner }: {
  name: string;
  owner: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseLoginApiServiceApiControllerWebAuthnSigninBeginKeyFn({ name, owner }), queryFn: () => LoginApiService.apiControllerWebAuthnSigninBegin({ name, owner }) });
export const prefetchUseSystemApiServiceApiControllerGetDashboard = (queryClient: QueryClient) => queryClient.prefetchQuery({ queryKey: Common.UseSystemApiServiceApiControllerGetDashboardKeyFn(), queryFn: () => SystemApiService.apiControllerGetDashboard() });
export const prefetchUseSystemApiServiceApiControllerGetPrometheusInfo = (queryClient: QueryClient) => queryClient.prefetchQuery({ queryKey: Common.UseSystemApiServiceApiControllerGetPrometheusInfoKeyFn(), queryFn: () => SystemApiService.apiControllerGetPrometheusInfo() });
export const prefetchUseSystemApiServiceApiControllerGetSystemInfo = (queryClient: QueryClient) => queryClient.prefetchQuery({ queryKey: Common.UseSystemApiServiceApiControllerGetSystemInfoKeyFn(), queryFn: () => SystemApiService.apiControllerGetSystemInfo() });
export const prefetchUseSystemApiServiceApiControllerGetVersionInfo = (queryClient: QueryClient) => queryClient.prefetchQuery({ queryKey: Common.UseSystemApiServiceApiControllerGetVersionInfoKeyFn(), queryFn: () => SystemApiService.apiControllerGetVersionInfo() });
export const prefetchUseSystemApiServiceApiControllerGetWebhookEventType = (queryClient: QueryClient) => queryClient.prefetchQuery({ queryKey: Common.UseSystemApiServiceApiControllerGetWebhookEventTypeKeyFn(), queryFn: () => SystemApiService.apiControllerGetWebhookEventType() });
export const prefetchUseSystemApiServiceApiControllerHealth = (queryClient: QueryClient) => queryClient.prefetchQuery({ queryKey: Common.UseSystemApiServiceApiControllerHealthKeyFn(), queryFn: () => SystemApiService.apiControllerHealth() });
