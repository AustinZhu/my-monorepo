// generated with @7nohe/openapi-react-query-codegen@1.6.1 

import { type UseMutationOptions, type UseQueryOptions, useMutation, useQuery } from "@tanstack/react-query";
import { AccountApiService, AdapterApiService, ApplicationApiService, CallbackApiService, CertApiService, EnforcerApiService, GroupApiService, InvitationApiService, LoginApiService, MfaApiService, ModelApiService, OidcApiService, OrganizationApiService, PaymentApiService, PermissionApiService, PlanApiService, PricingApiService, ProductApiService, ProviderApiService, ResourceApiService, RoleApiService, ServiceApiService, SessionApiService, SubscriptionApiService, SyncerApiService, SystemApiService, TokenApiService, UserApiService, VerificationApiService, WebhookApiService } from "../requests/services.gen";
import { type controllers_EmailForm, type controllers_NotificationForm, type controllers_SmsForm, type object_Adapter, type object_Application, type object_Cert, type object_Enforcer, type object_Group, type object_Invitation, type object_Ldap, type object_Model, type object_Organization, type object_Payment, type object_Permission, type object_Plan, type object_Pricing, type object_Product, type object_Provider, type object_Resource, type object_Role, type object_Subscription, type object_Syncer, type object_Token, type object_User, type object_Webhook } from "../requests/types.gen";
import * as Common from "./common";

export const useOidcApiServiceRootControllerGetJwks = <TData = Common.OidcApiServiceRootControllerGetJwksDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseOidcApiServiceRootControllerGetJwksKeyFn(queryKey), queryFn: () => OidcApiService.rootControllerGetJwks() as TData, ...options });
export const useOidcApiServiceRootControllerGetOidcDiscovery = <TData = Common.OidcApiServiceRootControllerGetOidcDiscoveryDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseOidcApiServiceRootControllerGetOidcDiscoveryKeyFn(queryKey), queryFn: () => OidcApiService.rootControllerGetOidcDiscovery() as TData, ...options });
export const useAdapterApiServiceApiControllerGetAdapter = <TData = Common.AdapterApiServiceApiControllerGetAdapterDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>({ id }: {
  id: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseAdapterApiServiceApiControllerGetAdapterKeyFn({ id }, queryKey), queryFn: () => AdapterApiService.apiControllerGetAdapter({ id }) as TData, ...options });
export const useAdapterApiServiceApiControllerGetAdapters = <TData = Common.AdapterApiServiceApiControllerGetAdaptersDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>({ owner }: {
  owner: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseAdapterApiServiceApiControllerGetAdaptersKeyFn({ owner }, queryKey), queryFn: () => AdapterApiService.apiControllerGetAdapters({ owner }) as TData, ...options });
export const useApplicationApiServiceApiControllerGetApplication = <TData = Common.ApplicationApiServiceApiControllerGetApplicationDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>({ id }: {
  id: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseApplicationApiServiceApiControllerGetApplicationKeyFn({ id }, queryKey), queryFn: () => ApplicationApiService.apiControllerGetApplication({ id }) as TData, ...options });
export const useApplicationApiServiceApiControllerGetApplications = <TData = Common.ApplicationApiServiceApiControllerGetApplicationsDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>({ owner }: {
  owner: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseApplicationApiServiceApiControllerGetApplicationsKeyFn({ owner }, queryKey), queryFn: () => ApplicationApiService.apiControllerGetApplications({ owner }) as TData, ...options });
export const useApplicationApiServiceApiControllerGetOrganizationApplications = <TData = Common.ApplicationApiServiceApiControllerGetOrganizationApplicationsDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>({ organization }: {
  organization: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseApplicationApiServiceApiControllerGetOrganizationApplicationsKeyFn({ organization }, queryKey), queryFn: () => ApplicationApiService.apiControllerGetOrganizationApplications({ organization }) as TData, ...options });
export const useApplicationApiServiceApiControllerGetUserApplication = <TData = Common.ApplicationApiServiceApiControllerGetUserApplicationDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>({ id }: {
  id: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseApplicationApiServiceApiControllerGetUserApplicationKeyFn({ id }, queryKey), queryFn: () => ApplicationApiService.apiControllerGetUserApplication({ id }) as TData, ...options });
export const useCertApiServiceApiControllerGetCert = <TData = Common.CertApiServiceApiControllerGetCertDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>({ id }: {
  id: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseCertApiServiceApiControllerGetCertKeyFn({ id }, queryKey), queryFn: () => CertApiService.apiControllerGetCert({ id }) as TData, ...options });
export const useCertApiServiceApiControllerGetCerts = <TData = Common.CertApiServiceApiControllerGetCertsDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>({ owner }: {
  owner: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseCertApiServiceApiControllerGetCertsKeyFn({ owner }, queryKey), queryFn: () => CertApiService.apiControllerGetCerts({ owner }) as TData, ...options });
export const useCertApiServiceApiControllerGetGlobalCerts = <TData = Common.CertApiServiceApiControllerGetGlobalCertsDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseCertApiServiceApiControllerGetGlobalCertsKeyFn(queryKey), queryFn: () => CertApiService.apiControllerGetGlobalCerts() as TData, ...options });
export const useEnforcerApiServiceApiControllerGetEnforcer = <TData = Common.EnforcerApiServiceApiControllerGetEnforcerDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>({ id }: {
  id: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseEnforcerApiServiceApiControllerGetEnforcerKeyFn({ id }, queryKey), queryFn: () => EnforcerApiService.apiControllerGetEnforcer({ id }) as TData, ...options });
export const useEnforcerApiServiceApiControllerGetEnforcers = <TData = Common.EnforcerApiServiceApiControllerGetEnforcersDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>({ owner }: {
  owner: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseEnforcerApiServiceApiControllerGetEnforcersKeyFn({ owner }, queryKey), queryFn: () => EnforcerApiService.apiControllerGetEnforcers({ owner }) as TData, ...options });
export const useGroupApiServiceApiControllerGetGroup = <TData = Common.GroupApiServiceApiControllerGetGroupDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>({ id }: {
  id: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseGroupApiServiceApiControllerGetGroupKeyFn({ id }, queryKey), queryFn: () => GroupApiService.apiControllerGetGroup({ id }) as TData, ...options });
export const useGroupApiServiceApiControllerGetGroups = <TData = Common.GroupApiServiceApiControllerGetGroupsDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>({ owner }: {
  owner: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseGroupApiServiceApiControllerGetGroupsKeyFn({ owner }, queryKey), queryFn: () => GroupApiService.apiControllerGetGroups({ owner }) as TData, ...options });
export const useInvitationApiServiceApiControllerGetInvitation = <TData = Common.InvitationApiServiceApiControllerGetInvitationDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>({ id }: {
  id: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseInvitationApiServiceApiControllerGetInvitationKeyFn({ id }, queryKey), queryFn: () => InvitationApiService.apiControllerGetInvitation({ id }) as TData, ...options });
export const useInvitationApiServiceApiControllerGetInvitations = <TData = Common.InvitationApiServiceApiControllerGetInvitationsDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>({ owner }: {
  owner: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseInvitationApiServiceApiControllerGetInvitationsKeyFn({ owner }, queryKey), queryFn: () => InvitationApiService.apiControllerGetInvitations({ owner }) as TData, ...options });
export const useInvitationApiServiceApiControllerVerifyInvitation = <TData = Common.InvitationApiServiceApiControllerVerifyInvitationDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>({ id }: {
  id: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseInvitationApiServiceApiControllerVerifyInvitationKeyFn({ id }, queryKey), queryFn: () => InvitationApiService.apiControllerVerifyInvitation({ id }) as TData, ...options });
export const useAccountApiServiceApiControllerGetAccount = <TData = Common.AccountApiServiceApiControllerGetAccountDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseAccountApiServiceApiControllerGetAccountKeyFn(queryKey), queryFn: () => AccountApiService.apiControllerGetAccount() as TData, ...options });
export const useAccountApiServiceApiControllerGetLdap = <TData = Common.AccountApiServiceApiControllerGetLdapDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>({ id }: {
  id: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseAccountApiServiceApiControllerGetLdapKeyFn({ id }, queryKey), queryFn: () => AccountApiService.apiControllerGetLdap({ id }) as TData, ...options });
export const useAccountApiServiceApiControllerGetLdapser = <TData = Common.AccountApiServiceApiControllerGetLdapserDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseAccountApiServiceApiControllerGetLdapserKeyFn(queryKey), queryFn: () => AccountApiService.apiControllerGetLdapser() as TData, ...options });
export const useAccountApiServiceApiControllerGetLdaps = <TData = Common.AccountApiServiceApiControllerGetLdapsDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>({ owner }: {
  owner?: string;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseAccountApiServiceApiControllerGetLdapsKeyFn({ owner }, queryKey), queryFn: () => AccountApiService.apiControllerGetLdaps({ owner }) as TData, ...options });
export const useAccountApiServiceApiControllerUserInfo2 = <TData = Common.AccountApiServiceApiControllerUserInfo2DefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseAccountApiServiceApiControllerUserInfo2KeyFn(queryKey), queryFn: () => AccountApiService.apiControllerUserInfo2() as TData, ...options });
export const useAccountApiServiceApiControllerUserInfo = <TData = Common.AccountApiServiceApiControllerUserInfoDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseAccountApiServiceApiControllerUserInfoKeyFn(queryKey), queryFn: () => AccountApiService.apiControllerUserInfo() as TData, ...options });
export const useModelApiServiceApiControllerGetModel = <TData = Common.ModelApiServiceApiControllerGetModelDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>({ id }: {
  id: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseModelApiServiceApiControllerGetModelKeyFn({ id }, queryKey), queryFn: () => ModelApiService.apiControllerGetModel({ id }) as TData, ...options });
export const useModelApiServiceApiControllerGetModels = <TData = Common.ModelApiServiceApiControllerGetModelsDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>({ owner }: {
  owner: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseModelApiServiceApiControllerGetModelsKeyFn({ owner }, queryKey), queryFn: () => ModelApiService.apiControllerGetModels({ owner }) as TData, ...options });
export const useOrganizationApiServiceApiControllerGetDefaultApplication = <TData = Common.OrganizationApiServiceApiControllerGetDefaultApplicationDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>({ id }: {
  id: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseOrganizationApiServiceApiControllerGetDefaultApplicationKeyFn({ id }, queryKey), queryFn: () => OrganizationApiService.apiControllerGetDefaultApplication({ id }) as TData, ...options });
export const useOrganizationApiServiceApiControllerGetOrganization = <TData = Common.OrganizationApiServiceApiControllerGetOrganizationDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>({ id }: {
  id: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseOrganizationApiServiceApiControllerGetOrganizationKeyFn({ id }, queryKey), queryFn: () => OrganizationApiService.apiControllerGetOrganization({ id }) as TData, ...options });
export const useOrganizationApiServiceApiControllerGetOrganizationNames = <TData = Common.OrganizationApiServiceApiControllerGetOrganizationNamesDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>({ owner }: {
  owner: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseOrganizationApiServiceApiControllerGetOrganizationNamesKeyFn({ owner }, queryKey), queryFn: () => OrganizationApiService.apiControllerGetOrganizationNames({ owner }) as TData, ...options });
export const useOrganizationApiServiceApiControllerGetOrganizations = <TData = Common.OrganizationApiServiceApiControllerGetOrganizationsDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>({ owner }: {
  owner: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseOrganizationApiServiceApiControllerGetOrganizationsKeyFn({ owner }, queryKey), queryFn: () => OrganizationApiService.apiControllerGetOrganizations({ owner }) as TData, ...options });
export const usePaymentApiServiceApiControllerGetPayment = <TData = Common.PaymentApiServiceApiControllerGetPaymentDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>({ id }: {
  id: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UsePaymentApiServiceApiControllerGetPaymentKeyFn({ id }, queryKey), queryFn: () => PaymentApiService.apiControllerGetPayment({ id }) as TData, ...options });
export const usePaymentApiServiceApiControllerGetPayments = <TData = Common.PaymentApiServiceApiControllerGetPaymentsDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>({ owner }: {
  owner: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UsePaymentApiServiceApiControllerGetPaymentsKeyFn({ owner }, queryKey), queryFn: () => PaymentApiService.apiControllerGetPayments({ owner }) as TData, ...options });
export const usePaymentApiServiceApiControllerGetUserPayments = <TData = Common.PaymentApiServiceApiControllerGetUserPaymentsDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>({ organization, owner, user }: {
  organization: string;
  owner: string;
  user: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UsePaymentApiServiceApiControllerGetUserPaymentsKeyFn({ organization, owner, user }, queryKey), queryFn: () => PaymentApiService.apiControllerGetUserPayments({ organization, owner, user }) as TData, ...options });
export const usePermissionApiServiceApiControllerGetPermission = <TData = Common.PermissionApiServiceApiControllerGetPermissionDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>({ id }: {
  id: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UsePermissionApiServiceApiControllerGetPermissionKeyFn({ id }, queryKey), queryFn: () => PermissionApiService.apiControllerGetPermission({ id }) as TData, ...options });
export const usePermissionApiServiceApiControllerGetPermissions = <TData = Common.PermissionApiServiceApiControllerGetPermissionsDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>({ owner }: {
  owner: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UsePermissionApiServiceApiControllerGetPermissionsKeyFn({ owner }, queryKey), queryFn: () => PermissionApiService.apiControllerGetPermissions({ owner }) as TData, ...options });
export const usePermissionApiServiceApiControllerGetPermissionsByRole = <TData = Common.PermissionApiServiceApiControllerGetPermissionsByRoleDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>({ id }: {
  id: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UsePermissionApiServiceApiControllerGetPermissionsByRoleKeyFn({ id }, queryKey), queryFn: () => PermissionApiService.apiControllerGetPermissionsByRole({ id }) as TData, ...options });
export const usePermissionApiServiceApiControllerGetPermissionsBySubmitter = <TData = Common.PermissionApiServiceApiControllerGetPermissionsBySubmitterDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UsePermissionApiServiceApiControllerGetPermissionsBySubmitterKeyFn(queryKey), queryFn: () => PermissionApiService.apiControllerGetPermissionsBySubmitter() as TData, ...options });
export const usePlanApiServiceApiControllerGetPlan = <TData = Common.PlanApiServiceApiControllerGetPlanDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>({ id, includeOption }: {
  id: string;
  includeOption?: boolean;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UsePlanApiServiceApiControllerGetPlanKeyFn({ id, includeOption }, queryKey), queryFn: () => PlanApiService.apiControllerGetPlan({ id, includeOption }) as TData, ...options });
export const usePlanApiServiceApiControllerGetPlans = <TData = Common.PlanApiServiceApiControllerGetPlansDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>({ owner }: {
  owner: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UsePlanApiServiceApiControllerGetPlansKeyFn({ owner }, queryKey), queryFn: () => PlanApiService.apiControllerGetPlans({ owner }) as TData, ...options });
export const usePricingApiServiceApiControllerGetPricing = <TData = Common.PricingApiServiceApiControllerGetPricingDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>({ id }: {
  id: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UsePricingApiServiceApiControllerGetPricingKeyFn({ id }, queryKey), queryFn: () => PricingApiService.apiControllerGetPricing({ id }) as TData, ...options });
export const usePricingApiServiceApiControllerGetPricings = <TData = Common.PricingApiServiceApiControllerGetPricingsDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>({ owner }: {
  owner: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UsePricingApiServiceApiControllerGetPricingsKeyFn({ owner }, queryKey), queryFn: () => PricingApiService.apiControllerGetPricings({ owner }) as TData, ...options });
export const useProductApiServiceApiControllerGetProduct = <TData = Common.ProductApiServiceApiControllerGetProductDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>({ id }: {
  id: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseProductApiServiceApiControllerGetProductKeyFn({ id }, queryKey), queryFn: () => ProductApiService.apiControllerGetProduct({ id }) as TData, ...options });
export const useProductApiServiceApiControllerGetProducts = <TData = Common.ProductApiServiceApiControllerGetProductsDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>({ owner }: {
  owner: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseProductApiServiceApiControllerGetProductsKeyFn({ owner }, queryKey), queryFn: () => ProductApiService.apiControllerGetProducts({ owner }) as TData, ...options });
export const useProviderApiServiceApiControllerGetGlobalProviders = <TData = Common.ProviderApiServiceApiControllerGetGlobalProvidersDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseProviderApiServiceApiControllerGetGlobalProvidersKeyFn(queryKey), queryFn: () => ProviderApiService.apiControllerGetGlobalProviders() as TData, ...options });
export const useProviderApiServiceApiControllerGetProvider = <TData = Common.ProviderApiServiceApiControllerGetProviderDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>({ id }: {
  id: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseProviderApiServiceApiControllerGetProviderKeyFn({ id }, queryKey), queryFn: () => ProviderApiService.apiControllerGetProvider({ id }) as TData, ...options });
export const useProviderApiServiceApiControllerGetProviders = <TData = Common.ProviderApiServiceApiControllerGetProvidersDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>({ owner }: {
  owner: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseProviderApiServiceApiControllerGetProvidersKeyFn({ owner }, queryKey), queryFn: () => ProviderApiService.apiControllerGetProviders({ owner }) as TData, ...options });
export const useResourceApiServiceApiControllerGetResource = <TData = Common.ResourceApiServiceApiControllerGetResourceDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>({ id }: {
  id: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseResourceApiServiceApiControllerGetResourceKeyFn({ id }, queryKey), queryFn: () => ResourceApiService.apiControllerGetResource({ id }) as TData, ...options });
export const useResourceApiServiceApiControllerGetResources = <TData = Common.ResourceApiServiceApiControllerGetResourcesDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>({ field, owner, p, pageSize, sortField, sortOrder, user, value }: {
  field?: string;
  owner: string;
  p?: number;
  pageSize?: number;
  sortField?: string;
  sortOrder?: string;
  user: string;
  value?: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseResourceApiServiceApiControllerGetResourcesKeyFn({ field, owner, p, pageSize, sortField, sortOrder, user, value }, queryKey), queryFn: () => ResourceApiService.apiControllerGetResources({ field, owner, p, pageSize, sortField, sortOrder, user, value }) as TData, ...options });
export const useRoleApiServiceApiControllerGetRole = <TData = Common.RoleApiServiceApiControllerGetRoleDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>({ id }: {
  id: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseRoleApiServiceApiControllerGetRoleKeyFn({ id }, queryKey), queryFn: () => RoleApiService.apiControllerGetRole({ id }) as TData, ...options });
export const useRoleApiServiceApiControllerGetRoles = <TData = Common.RoleApiServiceApiControllerGetRolesDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>({ owner }: {
  owner: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseRoleApiServiceApiControllerGetRolesKeyFn({ owner }, queryKey), queryFn: () => RoleApiService.apiControllerGetRoles({ owner }) as TData, ...options });
export const useSessionApiServiceApiControllerGetSingleSession = <TData = Common.SessionApiServiceApiControllerGetSingleSessionDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>({ id }: {
  id: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseSessionApiServiceApiControllerGetSingleSessionKeyFn({ id }, queryKey), queryFn: () => SessionApiService.apiControllerGetSingleSession({ id }) as TData, ...options });
export const useSessionApiServiceApiControllerGetSessions = <TData = Common.SessionApiServiceApiControllerGetSessionsDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>({ owner }: {
  owner: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseSessionApiServiceApiControllerGetSessionsKeyFn({ owner }, queryKey), queryFn: () => SessionApiService.apiControllerGetSessions({ owner }) as TData, ...options });
export const useSessionApiServiceApiControllerIsSessionDuplicated = <TData = Common.SessionApiServiceApiControllerIsSessionDuplicatedDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>({ id, sessionId }: {
  id: string;
  sessionId: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseSessionApiServiceApiControllerIsSessionDuplicatedKeyFn({ id, sessionId }, queryKey), queryFn: () => SessionApiService.apiControllerIsSessionDuplicated({ id, sessionId }) as TData, ...options });
export const useSubscriptionApiServiceApiControllerGetSubscription = <TData = Common.SubscriptionApiServiceApiControllerGetSubscriptionDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>({ id }: {
  id: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseSubscriptionApiServiceApiControllerGetSubscriptionKeyFn({ id }, queryKey), queryFn: () => SubscriptionApiService.apiControllerGetSubscription({ id }) as TData, ...options });
export const useSubscriptionApiServiceApiControllerGetSubscriptions = <TData = Common.SubscriptionApiServiceApiControllerGetSubscriptionsDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>({ owner }: {
  owner: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseSubscriptionApiServiceApiControllerGetSubscriptionsKeyFn({ owner }, queryKey), queryFn: () => SubscriptionApiService.apiControllerGetSubscriptions({ owner }) as TData, ...options });
export const useSyncerApiServiceApiControllerGetSyncer = <TData = Common.SyncerApiServiceApiControllerGetSyncerDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>({ id }: {
  id: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseSyncerApiServiceApiControllerGetSyncerKeyFn({ id }, queryKey), queryFn: () => SyncerApiService.apiControllerGetSyncer({ id }) as TData, ...options });
export const useSyncerApiServiceApiControllerGetSyncers = <TData = Common.SyncerApiServiceApiControllerGetSyncersDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>({ owner }: {
  owner: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseSyncerApiServiceApiControllerGetSyncersKeyFn({ owner }, queryKey), queryFn: () => SyncerApiService.apiControllerGetSyncers({ owner }) as TData, ...options });
export const useSyncerApiServiceApiControllerRunSyncer = <TData = Common.SyncerApiServiceApiControllerRunSyncerDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>({ body }: {
  body: object_Syncer;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseSyncerApiServiceApiControllerRunSyncerKeyFn({ body }, queryKey), queryFn: () => SyncerApiService.apiControllerRunSyncer({ body }) as TData, ...options });
export const useTokenApiServiceApiControllerGetCaptchaStatus = <TData = Common.TokenApiServiceApiControllerGetCaptchaStatusDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>({ id }: {
  id: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseTokenApiServiceApiControllerGetCaptchaStatusKeyFn({ id }, queryKey), queryFn: () => TokenApiService.apiControllerGetCaptchaStatus({ id }) as TData, ...options });
export const useTokenApiServiceApiControllerGetToken = <TData = Common.TokenApiServiceApiControllerGetTokenDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>({ id }: {
  id: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseTokenApiServiceApiControllerGetTokenKeyFn({ id }, queryKey), queryFn: () => TokenApiService.apiControllerGetToken({ id }) as TData, ...options });
export const useTokenApiServiceApiControllerGetTokens = <TData = Common.TokenApiServiceApiControllerGetTokensDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>({ owner, p, pageSize }: {
  owner: string;
  p: string;
  pageSize: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseTokenApiServiceApiControllerGetTokensKeyFn({ owner, p, pageSize }, queryKey), queryFn: () => TokenApiService.apiControllerGetTokens({ owner, p, pageSize }) as TData, ...options });
export const useUserApiServiceApiControllerGetEmailAndPhone = <TData = Common.UserApiServiceApiControllerGetEmailAndPhoneDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>({ organization, username }: {
  organization: string;
  username: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseUserApiServiceApiControllerGetEmailAndPhoneKeyFn({ organization, username }, queryKey), queryFn: () => UserApiService.apiControllerGetEmailAndPhone({ organization, username }) as TData, ...options });
export const useUserApiServiceApiControllerGetGlobalUsers = <TData = Common.UserApiServiceApiControllerGetGlobalUsersDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseUserApiServiceApiControllerGetGlobalUsersKeyFn(queryKey), queryFn: () => UserApiService.apiControllerGetGlobalUsers() as TData, ...options });
export const useUserApiServiceApiControllerGetSortedUsers = <TData = Common.UserApiServiceApiControllerGetSortedUsersDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>({ limit, owner, sorter }: {
  limit: string;
  owner: string;
  sorter: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseUserApiServiceApiControllerGetSortedUsersKeyFn({ limit, owner, sorter }, queryKey), queryFn: () => UserApiService.apiControllerGetSortedUsers({ limit, owner, sorter }) as TData, ...options });
export const useUserApiServiceApiControllerGetUser = <TData = Common.UserApiServiceApiControllerGetUserDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>({ email, id, owner, phone, userId }: {
  email?: string;
  id?: string;
  owner?: string;
  phone?: string;
  userId?: string;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseUserApiServiceApiControllerGetUserKeyFn({ email, id, owner, phone, userId }, queryKey), queryFn: () => UserApiService.apiControllerGetUser({ email, id, owner, phone, userId }) as TData, ...options });
export const useUserApiServiceApiControllerGetUserCount = <TData = Common.UserApiServiceApiControllerGetUserCountDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>({ isOnline, owner }: {
  isOnline: string;
  owner: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseUserApiServiceApiControllerGetUserCountKeyFn({ isOnline, owner }, queryKey), queryFn: () => UserApiService.apiControllerGetUserCount({ isOnline, owner }) as TData, ...options });
export const useUserApiServiceApiControllerGetUsers = <TData = Common.UserApiServiceApiControllerGetUsersDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>({ owner }: {
  owner: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseUserApiServiceApiControllerGetUsersKeyFn({ owner }, queryKey), queryFn: () => UserApiService.apiControllerGetUsers({ owner }) as TData, ...options });
export const useUserApiServiceApiControllerWebAuthnSignupBegin = <TData = Common.UserApiServiceApiControllerWebAuthnSignupBeginDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseUserApiServiceApiControllerWebAuthnSignupBeginKeyFn(queryKey), queryFn: () => UserApiService.apiControllerWebAuthnSignupBegin() as TData, ...options });
export const useWebhookApiServiceApiControllerGetWebhook = <TData = Common.WebhookApiServiceApiControllerGetWebhookDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>({ id }: {
  id: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseWebhookApiServiceApiControllerGetWebhookKeyFn({ id }, queryKey), queryFn: () => WebhookApiService.apiControllerGetWebhook({ id }) as TData, ...options });
export const useWebhookApiServiceApiControllerGetWebhooks = <TData = Common.WebhookApiServiceApiControllerGetWebhooksDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>({ owner }: {
  owner: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseWebhookApiServiceApiControllerGetWebhooksKeyFn({ owner }, queryKey), queryFn: () => WebhookApiService.apiControllerGetWebhooks({ owner }) as TData, ...options });
export const useLoginApiServiceApiControllerGetApplicationLogin = <TData = Common.LoginApiServiceApiControllerGetApplicationLoginDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>({ clientId, redirectUri, responseType, scope, state }: {
  clientId: string;
  redirectUri: string;
  responseType: string;
  scope: string;
  state: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseLoginApiServiceApiControllerGetApplicationLoginKeyFn({ clientId, redirectUri, responseType, scope, state }, queryKey), queryFn: () => LoginApiService.apiControllerGetApplicationLogin({ clientId, redirectUri, responseType, scope, state }) as TData, ...options });
export const useLoginApiServiceApiControllerGetCaptcha = <TData = Common.LoginApiServiceApiControllerGetCaptchaDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseLoginApiServiceApiControllerGetCaptchaKeyFn(queryKey), queryFn: () => LoginApiService.apiControllerGetCaptcha() as TData, ...options });
export const useLoginApiServiceApiControllerWebAuthnSigninBegin = <TData = Common.LoginApiServiceApiControllerWebAuthnSigninBeginDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>({ name, owner }: {
  name: string;
  owner: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseLoginApiServiceApiControllerWebAuthnSigninBeginKeyFn({ name, owner }, queryKey), queryFn: () => LoginApiService.apiControllerWebAuthnSigninBegin({ name, owner }) as TData, ...options });
export const useSystemApiServiceApiControllerGetDashboard = <TData = Common.SystemApiServiceApiControllerGetDashboardDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseSystemApiServiceApiControllerGetDashboardKeyFn(queryKey), queryFn: () => SystemApiService.apiControllerGetDashboard() as TData, ...options });
export const useSystemApiServiceApiControllerGetPrometheusInfo = <TData = Common.SystemApiServiceApiControllerGetPrometheusInfoDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseSystemApiServiceApiControllerGetPrometheusInfoKeyFn(queryKey), queryFn: () => SystemApiService.apiControllerGetPrometheusInfo() as TData, ...options });
export const useSystemApiServiceApiControllerGetSystemInfo = <TData = Common.SystemApiServiceApiControllerGetSystemInfoDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseSystemApiServiceApiControllerGetSystemInfoKeyFn(queryKey), queryFn: () => SystemApiService.apiControllerGetSystemInfo() as TData, ...options });
export const useSystemApiServiceApiControllerGetVersionInfo = <TData = Common.SystemApiServiceApiControllerGetVersionInfoDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseSystemApiServiceApiControllerGetVersionInfoKeyFn(queryKey), queryFn: () => SystemApiService.apiControllerGetVersionInfo() as TData, ...options });
export const useSystemApiServiceApiControllerGetWebhookEventType = <TData = Common.SystemApiServiceApiControllerGetWebhookEventTypeDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseSystemApiServiceApiControllerGetWebhookEventTypeKeyFn(queryKey), queryFn: () => SystemApiService.apiControllerGetWebhookEventType() as TData, ...options });
export const useSystemApiServiceApiControllerHealth = <TData = Common.SystemApiServiceApiControllerHealthDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseSystemApiServiceApiControllerHealthKeyFn(queryKey), queryFn: () => SystemApiService.apiControllerHealth() as TData, ...options });
export const useCallbackApiServiceApiControllerCallback = <TData = Common.CallbackApiServiceApiControllerCallbackMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, void, TContext>, "mutationFn">) => useMutation<TData, TError, void, TContext>({ mutationFn: () => CallbackApiService.apiControllerCallback() as unknown as Promise<TData>, ...options });
export const useAdapterApiServiceApiControllerAddAdapter = <TData = Common.AdapterApiServiceApiControllerAddAdapterMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  body: object_Adapter;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  body: object_Adapter;
}, TContext>({ mutationFn: ({ body }) => AdapterApiService.apiControllerAddAdapter({ body }) as unknown as Promise<TData>, ...options });
export const useAdapterApiServiceApiControllerDeleteAdapter = <TData = Common.AdapterApiServiceApiControllerDeleteAdapterMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  body: object_Adapter;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  body: object_Adapter;
}, TContext>({ mutationFn: ({ body }) => AdapterApiService.apiControllerDeleteAdapter({ body }) as unknown as Promise<TData>, ...options });
export const useAdapterApiServiceApiControllerUpdateAdapter = <TData = Common.AdapterApiServiceApiControllerUpdateAdapterMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  body: object_Adapter;
  id: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  body: object_Adapter;
  id: string;
}, TContext>({ mutationFn: ({ body, id }) => AdapterApiService.apiControllerUpdateAdapter({ body, id }) as unknown as Promise<TData>, ...options });
export const useApplicationApiServiceApiControllerAddApplication = <TData = Common.ApplicationApiServiceApiControllerAddApplicationMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  body: object_Application;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  body: object_Application;
}, TContext>({ mutationFn: ({ body }) => ApplicationApiService.apiControllerAddApplication({ body }) as unknown as Promise<TData>, ...options });
export const useApplicationApiServiceApiControllerDeleteApplication = <TData = Common.ApplicationApiServiceApiControllerDeleteApplicationMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  body: object_Application;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  body: object_Application;
}, TContext>({ mutationFn: ({ body }) => ApplicationApiService.apiControllerDeleteApplication({ body }) as unknown as Promise<TData>, ...options });
export const useApplicationApiServiceApiControllerUpdateApplication = <TData = Common.ApplicationApiServiceApiControllerUpdateApplicationMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  body: object_Application;
  id: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  body: object_Application;
  id: string;
}, TContext>({ mutationFn: ({ body, id }) => ApplicationApiService.apiControllerUpdateApplication({ body, id }) as unknown as Promise<TData>, ...options });
export const useCertApiServiceApiControllerAddCert = <TData = Common.CertApiServiceApiControllerAddCertMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  body: object_Cert;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  body: object_Cert;
}, TContext>({ mutationFn: ({ body }) => CertApiService.apiControllerAddCert({ body }) as unknown as Promise<TData>, ...options });
export const useCertApiServiceApiControllerDeleteCert = <TData = Common.CertApiServiceApiControllerDeleteCertMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  body: object_Cert;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  body: object_Cert;
}, TContext>({ mutationFn: ({ body }) => CertApiService.apiControllerDeleteCert({ body }) as unknown as Promise<TData>, ...options });
export const useCertApiServiceApiControllerUpdateCert = <TData = Common.CertApiServiceApiControllerUpdateCertMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  body: object_Cert;
  id: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  body: object_Cert;
  id: string;
}, TContext>({ mutationFn: ({ body, id }) => CertApiService.apiControllerUpdateCert({ body, id }) as unknown as Promise<TData>, ...options });
export const useEnforcerApiServiceApiControllerAddEnforcer = <TData = Common.EnforcerApiServiceApiControllerAddEnforcerMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  enforcer: object;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  enforcer: object;
}, TContext>({ mutationFn: ({ enforcer }) => EnforcerApiService.apiControllerAddEnforcer({ enforcer }) as unknown as Promise<TData>, ...options });
export const useEnforcerApiServiceApiControllerBatchEnforce = <TData = Common.EnforcerApiServiceApiControllerBatchEnforceMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  body: string[];
  modelId?: string;
  owner?: string;
  permissionId?: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  body: string[];
  modelId?: string;
  owner?: string;
  permissionId?: string;
}, TContext>({ mutationFn: ({ body, modelId, owner, permissionId }) => EnforcerApiService.apiControllerBatchEnforce({ body, modelId, owner, permissionId }) as unknown as Promise<TData>, ...options });
export const useEnforcerApiServiceApiControllerDeleteEnforcer = <TData = Common.EnforcerApiServiceApiControllerDeleteEnforcerMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  body: object_Enforcer;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  body: object_Enforcer;
}, TContext>({ mutationFn: ({ body }) => EnforcerApiService.apiControllerDeleteEnforcer({ body }) as unknown as Promise<TData>, ...options });
export const useEnforcerApiServiceApiControllerEnforce = <TData = Common.EnforcerApiServiceApiControllerEnforceMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  body: string[];
  modelId?: string;
  owner?: string;
  permissionId?: string;
  resourceId?: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  body: string[];
  modelId?: string;
  owner?: string;
  permissionId?: string;
  resourceId?: string;
}, TContext>({ mutationFn: ({ body, modelId, owner, permissionId, resourceId }) => EnforcerApiService.apiControllerEnforce({ body, modelId, owner, permissionId, resourceId }) as unknown as Promise<TData>, ...options });
export const useEnforcerApiServiceApiControllerUpdateEnforcer = <TData = Common.EnforcerApiServiceApiControllerUpdateEnforcerMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  enforcer: object;
  id: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  enforcer: object;
  id: string;
}, TContext>({ mutationFn: ({ enforcer, id }) => EnforcerApiService.apiControllerUpdateEnforcer({ enforcer, id }) as unknown as Promise<TData>, ...options });
export const useGroupApiServiceApiControllerAddGroup = <TData = Common.GroupApiServiceApiControllerAddGroupMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  body: object_Group;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  body: object_Group;
}, TContext>({ mutationFn: ({ body }) => GroupApiService.apiControllerAddGroup({ body }) as unknown as Promise<TData>, ...options });
export const useGroupApiServiceApiControllerDeleteGroup = <TData = Common.GroupApiServiceApiControllerDeleteGroupMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  body: object_Group;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  body: object_Group;
}, TContext>({ mutationFn: ({ body }) => GroupApiService.apiControllerDeleteGroup({ body }) as unknown as Promise<TData>, ...options });
export const useGroupApiServiceApiControllerUpdateGroup = <TData = Common.GroupApiServiceApiControllerUpdateGroupMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  body: object_Group;
  id: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  body: object_Group;
  id: string;
}, TContext>({ mutationFn: ({ body, id }) => GroupApiService.apiControllerUpdateGroup({ body, id }) as unknown as Promise<TData>, ...options });
export const useInvitationApiServiceApiControllerAddInvitation = <TData = Common.InvitationApiServiceApiControllerAddInvitationMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  body: object_Invitation;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  body: object_Invitation;
}, TContext>({ mutationFn: ({ body }) => InvitationApiService.apiControllerAddInvitation({ body }) as unknown as Promise<TData>, ...options });
export const useInvitationApiServiceApiControllerDeleteInvitation = <TData = Common.InvitationApiServiceApiControllerDeleteInvitationMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  body: object_Invitation;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  body: object_Invitation;
}, TContext>({ mutationFn: ({ body }) => InvitationApiService.apiControllerDeleteInvitation({ body }) as unknown as Promise<TData>, ...options });
export const useInvitationApiServiceApiControllerUpdateInvitation = <TData = Common.InvitationApiServiceApiControllerUpdateInvitationMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  body: object_Invitation;
  id: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  body: object_Invitation;
  id: string;
}, TContext>({ mutationFn: ({ body, id }) => InvitationApiService.apiControllerUpdateInvitation({ body, id }) as unknown as Promise<TData>, ...options });
export const useAccountApiServiceApiControllerAddLdap = <TData = Common.AccountApiServiceApiControllerAddLdapMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  body: object_Ldap;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  body: object_Ldap;
}, TContext>({ mutationFn: ({ body }) => AccountApiService.apiControllerAddLdap({ body }) as unknown as Promise<TData>, ...options });
export const useAccountApiServiceApiControllerDeleteLdap = <TData = Common.AccountApiServiceApiControllerDeleteLdapMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  body: object_Ldap;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  body: object_Ldap;
}, TContext>({ mutationFn: ({ body }) => AccountApiService.apiControllerDeleteLdap({ body }) as unknown as Promise<TData>, ...options });
export const useAccountApiServiceApiControllerResetEmailOrPhone = <TData = Common.AccountApiServiceApiControllerResetEmailOrPhoneMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, void, TContext>, "mutationFn">) => useMutation<TData, TError, void, TContext>({ mutationFn: () => AccountApiService.apiControllerResetEmailOrPhone() as unknown as Promise<TData>, ...options });
export const useAccountApiServiceApiControllerSetPassword = <TData = Common.AccountApiServiceApiControllerSetPasswordMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  newPassword: string;
  oldPassword: string;
  userName: string;
  userOwner: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  newPassword: string;
  oldPassword: string;
  userName: string;
  userOwner: string;
}, TContext>({ mutationFn: ({ newPassword, oldPassword, userName, userOwner }) => AccountApiService.apiControllerSetPassword({ newPassword, oldPassword, userName, userOwner }) as unknown as Promise<TData>, ...options });
export const useAccountApiServiceApiControllerSyncLdapUsers = <TData = Common.AccountApiServiceApiControllerSyncLdapUsersMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  id: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  id: string;
}, TContext>({ mutationFn: ({ id }) => AccountApiService.apiControllerSyncLdapUsers({ id }) as unknown as Promise<TData>, ...options });
export const useAccountApiServiceApiControllerUpdateLdap = <TData = Common.AccountApiServiceApiControllerUpdateLdapMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  body: object_Ldap;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  body: object_Ldap;
}, TContext>({ mutationFn: ({ body }) => AccountApiService.apiControllerUpdateLdap({ body }) as unknown as Promise<TData>, ...options });
export const useModelApiServiceApiControllerAddModel = <TData = Common.ModelApiServiceApiControllerAddModelMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  body: object_Model;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  body: object_Model;
}, TContext>({ mutationFn: ({ body }) => ModelApiService.apiControllerAddModel({ body }) as unknown as Promise<TData>, ...options });
export const useModelApiServiceApiControllerDeleteModel = <TData = Common.ModelApiServiceApiControllerDeleteModelMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  body: object_Model;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  body: object_Model;
}, TContext>({ mutationFn: ({ body }) => ModelApiService.apiControllerDeleteModel({ body }) as unknown as Promise<TData>, ...options });
export const useModelApiServiceApiControllerUpdateModel = <TData = Common.ModelApiServiceApiControllerUpdateModelMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  body: object_Model;
  id: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  body: object_Model;
  id: string;
}, TContext>({ mutationFn: ({ body, id }) => ModelApiService.apiControllerUpdateModel({ body, id }) as unknown as Promise<TData>, ...options });
export const useOrganizationApiServiceApiControllerAddOrganization = <TData = Common.OrganizationApiServiceApiControllerAddOrganizationMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  body: object_Organization;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  body: object_Organization;
}, TContext>({ mutationFn: ({ body }) => OrganizationApiService.apiControllerAddOrganization({ body }) as unknown as Promise<TData>, ...options });
export const useOrganizationApiServiceApiControllerDeleteOrganization = <TData = Common.OrganizationApiServiceApiControllerDeleteOrganizationMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  body: object_Organization;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  body: object_Organization;
}, TContext>({ mutationFn: ({ body }) => OrganizationApiService.apiControllerDeleteOrganization({ body }) as unknown as Promise<TData>, ...options });
export const useOrganizationApiServiceApiControllerUpdateOrganization = <TData = Common.OrganizationApiServiceApiControllerUpdateOrganizationMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  body: object_Organization;
  id: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  body: object_Organization;
  id: string;
}, TContext>({ mutationFn: ({ body, id }) => OrganizationApiService.apiControllerUpdateOrganization({ body, id }) as unknown as Promise<TData>, ...options });
export const usePaymentApiServiceApiControllerAddPayment = <TData = Common.PaymentApiServiceApiControllerAddPaymentMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  body: object_Payment;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  body: object_Payment;
}, TContext>({ mutationFn: ({ body }) => PaymentApiService.apiControllerAddPayment({ body }) as unknown as Promise<TData>, ...options });
export const usePaymentApiServiceApiControllerDeletePayment = <TData = Common.PaymentApiServiceApiControllerDeletePaymentMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  body: object_Payment;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  body: object_Payment;
}, TContext>({ mutationFn: ({ body }) => PaymentApiService.apiControllerDeletePayment({ body }) as unknown as Promise<TData>, ...options });
export const usePaymentApiServiceApiControllerInvoicePayment = <TData = Common.PaymentApiServiceApiControllerInvoicePaymentMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  id: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  id: string;
}, TContext>({ mutationFn: ({ id }) => PaymentApiService.apiControllerInvoicePayment({ id }) as unknown as Promise<TData>, ...options });
export const usePaymentApiServiceApiControllerNotifyPayment = <TData = Common.PaymentApiServiceApiControllerNotifyPaymentMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  body: object_Payment;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  body: object_Payment;
}, TContext>({ mutationFn: ({ body }) => PaymentApiService.apiControllerNotifyPayment({ body }) as unknown as Promise<TData>, ...options });
export const usePaymentApiServiceApiControllerUpdatePayment = <TData = Common.PaymentApiServiceApiControllerUpdatePaymentMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  body: object_Payment;
  id: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  body: object_Payment;
  id: string;
}, TContext>({ mutationFn: ({ body, id }) => PaymentApiService.apiControllerUpdatePayment({ body, id }) as unknown as Promise<TData>, ...options });
export const usePermissionApiServiceApiControllerAddPermission = <TData = Common.PermissionApiServiceApiControllerAddPermissionMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  body: object_Permission;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  body: object_Permission;
}, TContext>({ mutationFn: ({ body }) => PermissionApiService.apiControllerAddPermission({ body }) as unknown as Promise<TData>, ...options });
export const usePermissionApiServiceApiControllerDeletePermission = <TData = Common.PermissionApiServiceApiControllerDeletePermissionMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  body: object_Permission;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  body: object_Permission;
}, TContext>({ mutationFn: ({ body }) => PermissionApiService.apiControllerDeletePermission({ body }) as unknown as Promise<TData>, ...options });
export const usePermissionApiServiceApiControllerUpdatePermission = <TData = Common.PermissionApiServiceApiControllerUpdatePermissionMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  body: object_Permission;
  id: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  body: object_Permission;
  id: string;
}, TContext>({ mutationFn: ({ body, id }) => PermissionApiService.apiControllerUpdatePermission({ body, id }) as unknown as Promise<TData>, ...options });
export const usePlanApiServiceApiControllerAddPlan = <TData = Common.PlanApiServiceApiControllerAddPlanMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  body: object_Plan;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  body: object_Plan;
}, TContext>({ mutationFn: ({ body }) => PlanApiService.apiControllerAddPlan({ body }) as unknown as Promise<TData>, ...options });
export const usePlanApiServiceApiControllerDeletePlan = <TData = Common.PlanApiServiceApiControllerDeletePlanMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  body: object_Plan;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  body: object_Plan;
}, TContext>({ mutationFn: ({ body }) => PlanApiService.apiControllerDeletePlan({ body }) as unknown as Promise<TData>, ...options });
export const usePlanApiServiceApiControllerUpdatePlan = <TData = Common.PlanApiServiceApiControllerUpdatePlanMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  body: object_Plan;
  id: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  body: object_Plan;
  id: string;
}, TContext>({ mutationFn: ({ body, id }) => PlanApiService.apiControllerUpdatePlan({ body, id }) as unknown as Promise<TData>, ...options });
export const usePricingApiServiceApiControllerAddPricing = <TData = Common.PricingApiServiceApiControllerAddPricingMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  body: object_Pricing;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  body: object_Pricing;
}, TContext>({ mutationFn: ({ body }) => PricingApiService.apiControllerAddPricing({ body }) as unknown as Promise<TData>, ...options });
export const usePricingApiServiceApiControllerDeletePricing = <TData = Common.PricingApiServiceApiControllerDeletePricingMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  body: object_Pricing;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  body: object_Pricing;
}, TContext>({ mutationFn: ({ body }) => PricingApiService.apiControllerDeletePricing({ body }) as unknown as Promise<TData>, ...options });
export const usePricingApiServiceApiControllerUpdatePricing = <TData = Common.PricingApiServiceApiControllerUpdatePricingMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  body: object_Pricing;
  id: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  body: object_Pricing;
  id: string;
}, TContext>({ mutationFn: ({ body, id }) => PricingApiService.apiControllerUpdatePricing({ body, id }) as unknown as Promise<TData>, ...options });
export const useProductApiServiceApiControllerAddProduct = <TData = Common.ProductApiServiceApiControllerAddProductMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  body: object_Product;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  body: object_Product;
}, TContext>({ mutationFn: ({ body }) => ProductApiService.apiControllerAddProduct({ body }) as unknown as Promise<TData>, ...options });
export const useProductApiServiceApiControllerBuyProduct = <TData = Common.ProductApiServiceApiControllerBuyProductMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  id: string;
  providerName: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  id: string;
  providerName: string;
}, TContext>({ mutationFn: ({ id, providerName }) => ProductApiService.apiControllerBuyProduct({ id, providerName }) as unknown as Promise<TData>, ...options });
export const useProductApiServiceApiControllerDeleteProduct = <TData = Common.ProductApiServiceApiControllerDeleteProductMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  body: object_Product;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  body: object_Product;
}, TContext>({ mutationFn: ({ body }) => ProductApiService.apiControllerDeleteProduct({ body }) as unknown as Promise<TData>, ...options });
export const useProductApiServiceApiControllerUpdateProduct = <TData = Common.ProductApiServiceApiControllerUpdateProductMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  body: object_Product;
  id: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  body: object_Product;
  id: string;
}, TContext>({ mutationFn: ({ body, id }) => ProductApiService.apiControllerUpdateProduct({ body, id }) as unknown as Promise<TData>, ...options });
export const useProviderApiServiceApiControllerAddProvider = <TData = Common.ProviderApiServiceApiControllerAddProviderMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  body: object_Provider;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  body: object_Provider;
}, TContext>({ mutationFn: ({ body }) => ProviderApiService.apiControllerAddProvider({ body }) as unknown as Promise<TData>, ...options });
export const useProviderApiServiceApiControllerDeleteProvider = <TData = Common.ProviderApiServiceApiControllerDeleteProviderMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  body: object_Provider;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  body: object_Provider;
}, TContext>({ mutationFn: ({ body }) => ProviderApiService.apiControllerDeleteProvider({ body }) as unknown as Promise<TData>, ...options });
export const useProviderApiServiceApiControllerUpdateProvider = <TData = Common.ProviderApiServiceApiControllerUpdateProviderMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  body: object_Provider;
  id: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  body: object_Provider;
  id: string;
}, TContext>({ mutationFn: ({ body, id }) => ProviderApiService.apiControllerUpdateProvider({ body, id }) as unknown as Promise<TData>, ...options });
export const useResourceApiServiceApiControllerAddResource = <TData = Common.ResourceApiServiceApiControllerAddResourceMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  resource: object_Resource;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  resource: object_Resource;
}, TContext>({ mutationFn: ({ resource }) => ResourceApiService.apiControllerAddResource({ resource }) as unknown as Promise<TData>, ...options });
export const useResourceApiServiceApiControllerDeleteResource = <TData = Common.ResourceApiServiceApiControllerDeleteResourceMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  resource: object_Resource;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  resource: object_Resource;
}, TContext>({ mutationFn: ({ resource }) => ResourceApiService.apiControllerDeleteResource({ resource }) as unknown as Promise<TData>, ...options });
export const useResourceApiServiceApiControllerUpdateResource = <TData = Common.ResourceApiServiceApiControllerUpdateResourceMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  id: string;
  resource: object_Resource;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  id: string;
  resource: object_Resource;
}, TContext>({ mutationFn: ({ id, resource }) => ResourceApiService.apiControllerUpdateResource({ id, resource }) as unknown as Promise<TData>, ...options });
export const useResourceApiServiceApiControllerUploadResource = <TData = Common.ResourceApiServiceApiControllerUploadResourceMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  application: string;
  createdTime?: string;
  description?: string;
  file: Blob | File;
  fullFilePath: string;
  owner: string;
  parent?: string;
  tag?: string;
  user: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  application: string;
  createdTime?: string;
  description?: string;
  file: Blob | File;
  fullFilePath: string;
  owner: string;
  parent?: string;
  tag?: string;
  user: string;
}, TContext>({ mutationFn: ({ application, createdTime, description, file, fullFilePath, owner, parent, tag, user }) => ResourceApiService.apiControllerUploadResource({ application, createdTime, description, file, fullFilePath, owner, parent, tag, user }) as unknown as Promise<TData>, ...options });
export const useRoleApiServiceApiControllerAddRole = <TData = Common.RoleApiServiceApiControllerAddRoleMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  body: object_Role;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  body: object_Role;
}, TContext>({ mutationFn: ({ body }) => RoleApiService.apiControllerAddRole({ body }) as unknown as Promise<TData>, ...options });
export const useRoleApiServiceApiControllerDeleteRole = <TData = Common.RoleApiServiceApiControllerDeleteRoleMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  body: object_Role;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  body: object_Role;
}, TContext>({ mutationFn: ({ body }) => RoleApiService.apiControllerDeleteRole({ body }) as unknown as Promise<TData>, ...options });
export const useRoleApiServiceApiControllerUpdateRole = <TData = Common.RoleApiServiceApiControllerUpdateRoleMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  body: object_Role;
  id: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  body: object_Role;
  id: string;
}, TContext>({ mutationFn: ({ body, id }) => RoleApiService.apiControllerUpdateRole({ body, id }) as unknown as Promise<TData>, ...options });
export const useSessionApiServiceApiControllerAddSession = <TData = Common.SessionApiServiceApiControllerAddSessionMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  id: string;
  sessionId: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  id: string;
  sessionId: string;
}, TContext>({ mutationFn: ({ id, sessionId }) => SessionApiService.apiControllerAddSession({ id, sessionId }) as unknown as Promise<TData>, ...options });
export const useSessionApiServiceApiControllerDeleteSession = <TData = Common.SessionApiServiceApiControllerDeleteSessionMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  id: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  id: string;
}, TContext>({ mutationFn: ({ id }) => SessionApiService.apiControllerDeleteSession({ id }) as unknown as Promise<TData>, ...options });
export const useSessionApiServiceApiControllerUpdateSession = <TData = Common.SessionApiServiceApiControllerUpdateSessionMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  id: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  id: string;
}, TContext>({ mutationFn: ({ id }) => SessionApiService.apiControllerUpdateSession({ id }) as unknown as Promise<TData>, ...options });
export const useSubscriptionApiServiceApiControllerAddSubscription = <TData = Common.SubscriptionApiServiceApiControllerAddSubscriptionMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  body: object_Subscription;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  body: object_Subscription;
}, TContext>({ mutationFn: ({ body }) => SubscriptionApiService.apiControllerAddSubscription({ body }) as unknown as Promise<TData>, ...options });
export const useSubscriptionApiServiceApiControllerDeleteSubscription = <TData = Common.SubscriptionApiServiceApiControllerDeleteSubscriptionMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  body: object_Subscription;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  body: object_Subscription;
}, TContext>({ mutationFn: ({ body }) => SubscriptionApiService.apiControllerDeleteSubscription({ body }) as unknown as Promise<TData>, ...options });
export const useSubscriptionApiServiceApiControllerUpdateSubscription = <TData = Common.SubscriptionApiServiceApiControllerUpdateSubscriptionMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  body: object_Subscription;
  id: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  body: object_Subscription;
  id: string;
}, TContext>({ mutationFn: ({ body, id }) => SubscriptionApiService.apiControllerUpdateSubscription({ body, id }) as unknown as Promise<TData>, ...options });
export const useSyncerApiServiceApiControllerAddSyncer = <TData = Common.SyncerApiServiceApiControllerAddSyncerMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  body: object_Syncer;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  body: object_Syncer;
}, TContext>({ mutationFn: ({ body }) => SyncerApiService.apiControllerAddSyncer({ body }) as unknown as Promise<TData>, ...options });
export const useSyncerApiServiceApiControllerDeleteSyncer = <TData = Common.SyncerApiServiceApiControllerDeleteSyncerMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  body: object_Syncer;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  body: object_Syncer;
}, TContext>({ mutationFn: ({ body }) => SyncerApiService.apiControllerDeleteSyncer({ body }) as unknown as Promise<TData>, ...options });
export const useSyncerApiServiceApiControllerUpdateSyncer = <TData = Common.SyncerApiServiceApiControllerUpdateSyncerMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  body: object_Syncer;
  id: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  body: object_Syncer;
  id: string;
}, TContext>({ mutationFn: ({ body, id }) => SyncerApiService.apiControllerUpdateSyncer({ body, id }) as unknown as Promise<TData>, ...options });
export const useTokenApiServiceApiControllerAddToken = <TData = Common.TokenApiServiceApiControllerAddTokenMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  body: object_Token;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  body: object_Token;
}, TContext>({ mutationFn: ({ body }) => TokenApiService.apiControllerAddToken({ body }) as unknown as Promise<TData>, ...options });
export const useTokenApiServiceApiControllerDeleteToken = <TData = Common.TokenApiServiceApiControllerDeleteTokenMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  body: object_Token;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  body: object_Token;
}, TContext>({ mutationFn: ({ body }) => TokenApiService.apiControllerDeleteToken({ body }) as unknown as Promise<TData>, ...options });
export const useTokenApiServiceApiControllerGetOauthToken = <TData = Common.TokenApiServiceApiControllerGetOauthTokenMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  clientId: string;
  clientSecret: string;
  code: string;
  grantType: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  clientId: string;
  clientSecret: string;
  code: string;
  grantType: string;
}, TContext>({ mutationFn: ({ clientId, clientSecret, code, grantType }) => TokenApiService.apiControllerGetOauthToken({ clientId, clientSecret, code, grantType }) as unknown as Promise<TData>, ...options });
export const useTokenApiServiceApiControllerRefreshToken = <TData = Common.TokenApiServiceApiControllerRefreshTokenMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  clientId: string;
  clientSecret?: string;
  grantType: string;
  refreshToken: string;
  scope: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  clientId: string;
  clientSecret?: string;
  grantType: string;
  refreshToken: string;
  scope: string;
}, TContext>({ mutationFn: ({ clientId, clientSecret, grantType, refreshToken, scope }) => TokenApiService.apiControllerRefreshToken({ clientId, clientSecret, grantType, refreshToken, scope }) as unknown as Promise<TData>, ...options });
export const useTokenApiServiceApiControllerUpdateToken = <TData = Common.TokenApiServiceApiControllerUpdateTokenMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  body: object_Token;
  id: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  body: object_Token;
  id: string;
}, TContext>({ mutationFn: ({ body, id }) => TokenApiService.apiControllerUpdateToken({ body, id }) as unknown as Promise<TData>, ...options });
export const useUserApiServiceApiControllerAddUser = <TData = Common.UserApiServiceApiControllerAddUserMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  body: object_User;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  body: object_User;
}, TContext>({ mutationFn: ({ body }) => UserApiService.apiControllerAddUser({ body }) as unknown as Promise<TData>, ...options });
export const useUserApiServiceApiControllerAddUserKeys = <TData = Common.UserApiServiceApiControllerAddUserKeysMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, void, TContext>, "mutationFn">) => useMutation<TData, TError, void, TContext>({ mutationFn: () => UserApiService.apiControllerAddUserKeys() as unknown as Promise<TData>, ...options });
export const useUserApiServiceApiControllerCheckUserPassword = <TData = Common.UserApiServiceApiControllerCheckUserPasswordMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, void, TContext>, "mutationFn">) => useMutation<TData, TError, void, TContext>({ mutationFn: () => UserApiService.apiControllerCheckUserPassword() as unknown as Promise<TData>, ...options });
export const useUserApiServiceApiControllerDeleteUser = <TData = Common.UserApiServiceApiControllerDeleteUserMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  body: object_User;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  body: object_User;
}, TContext>({ mutationFn: ({ body }) => UserApiService.apiControllerDeleteUser({ body }) as unknown as Promise<TData>, ...options });
export const useUserApiServiceApiControllerUpdateUser = <TData = Common.UserApiServiceApiControllerUpdateUserMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  body: object_User;
  id: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  body: object_User;
  id: string;
}, TContext>({ mutationFn: ({ body, id }) => UserApiService.apiControllerUpdateUser({ body, id }) as unknown as Promise<TData>, ...options });
export const useUserApiServiceApiControllerWebAuthnSignupFinish = <TData = Common.UserApiServiceApiControllerWebAuthnSignupFinishMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  body: unknown;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  body: unknown;
}, TContext>({ mutationFn: ({ body }) => UserApiService.apiControllerWebAuthnSignupFinish({ body }) as unknown as Promise<TData>, ...options });
export const useWebhookApiServiceApiControllerAddWebhook = <TData = Common.WebhookApiServiceApiControllerAddWebhookMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  body: object_Webhook;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  body: object_Webhook;
}, TContext>({ mutationFn: ({ body }) => WebhookApiService.apiControllerAddWebhook({ body }) as unknown as Promise<TData>, ...options });
export const useWebhookApiServiceApiControllerDeleteWebhook = <TData = Common.WebhookApiServiceApiControllerDeleteWebhookMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  body: object_Webhook;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  body: object_Webhook;
}, TContext>({ mutationFn: ({ body }) => WebhookApiService.apiControllerDeleteWebhook({ body }) as unknown as Promise<TData>, ...options });
export const useWebhookApiServiceApiControllerUpdateWebhook = <TData = Common.WebhookApiServiceApiControllerUpdateWebhookMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  body: object_Webhook;
  id: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  body: object_Webhook;
  id: string;
}, TContext>({ mutationFn: ({ body, id }) => WebhookApiService.apiControllerUpdateWebhook({ body, id }) as unknown as Promise<TData>, ...options });
export const useMfaApiServiceApiControllerDeleteMfa = <TData = Common.MfaApiServiceApiControllerDeleteMfaMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, void, TContext>, "mutationFn">) => useMutation<TData, TError, void, TContext>({ mutationFn: () => MfaApiService.apiControllerDeleteMfa() as unknown as Promise<TData>, ...options });
export const useMfaApiServiceApiControllerMfaSetupEnable = <TData = Common.MfaApiServiceApiControllerMfaSetupEnableMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, void, TContext>, "mutationFn">) => useMutation<TData, TError, void, TContext>({ mutationFn: () => MfaApiService.apiControllerMfaSetupEnable() as unknown as Promise<TData>, ...options });
export const useMfaApiServiceApiControllerMfaSetupInitiate = <TData = Common.MfaApiServiceApiControllerMfaSetupInitiateMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, void, TContext>, "mutationFn">) => useMutation<TData, TError, void, TContext>({ mutationFn: () => MfaApiService.apiControllerMfaSetupInitiate() as unknown as Promise<TData>, ...options });
export const useMfaApiServiceApiControllerMfaSetupVerify = <TData = Common.MfaApiServiceApiControllerMfaSetupVerifyMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, void, TContext>, "mutationFn">) => useMutation<TData, TError, void, TContext>({ mutationFn: () => MfaApiService.apiControllerMfaSetupVerify() as unknown as Promise<TData>, ...options });
export const useMfaApiServiceApiControllerSetPreferredMfa = <TData = Common.MfaApiServiceApiControllerSetPreferredMfaMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, void, TContext>, "mutationFn">) => useMutation<TData, TError, void, TContext>({ mutationFn: () => MfaApiService.apiControllerSetPreferredMfa() as unknown as Promise<TData>, ...options });
export const useLoginApiServiceApiControllerLogin = <TData = Common.LoginApiServiceApiControllerLoginMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  clientId: string;
  codeChallenge?: string;
  codeChallengeMethod?: string;
  form: unknown;
  nonce?: string;
  redirectUri: string;
  responseType: string;
  scope?: string;
  state?: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  clientId: string;
  codeChallenge?: string;
  codeChallengeMethod?: string;
  form: unknown;
  nonce?: string;
  redirectUri: string;
  responseType: string;
  scope?: string;
  state?: string;
}, TContext>({ mutationFn: ({ clientId, codeChallenge, codeChallengeMethod, form, nonce, redirectUri, responseType, scope, state }) => LoginApiService.apiControllerLogin({ clientId, codeChallenge, codeChallengeMethod, form, nonce, redirectUri, responseType, scope, state }) as unknown as Promise<TData>, ...options });
export const useLoginApiServiceApiControllerIntrospectToken = <TData = Common.LoginApiServiceApiControllerIntrospectTokenMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  token: string;
  tokenTypeHint: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  token: string;
  tokenTypeHint: string;
}, TContext>({ mutationFn: ({ token, tokenTypeHint }) => LoginApiService.apiControllerIntrospectToken({ token, tokenTypeHint }) as unknown as Promise<TData>, ...options });
export const useLoginApiServiceApiControllerLogout = <TData = Common.LoginApiServiceApiControllerLogoutMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  idTokenHint?: string;
  postLogoutRedirectUri?: string;
  state?: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  idTokenHint?: string;
  postLogoutRedirectUri?: string;
  state?: string;
}, TContext>({ mutationFn: ({ idTokenHint, postLogoutRedirectUri, state }) => LoginApiService.apiControllerLogout({ idTokenHint, postLogoutRedirectUri, state }) as unknown as Promise<TData>, ...options });
export const useLoginApiServiceApiControllerSignup = <TData = Common.LoginApiServiceApiControllerSignupMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  password: string;
  username: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  password: string;
  username: string;
}, TContext>({ mutationFn: ({ password, username }) => LoginApiService.apiControllerSignup({ password, username }) as unknown as Promise<TData>, ...options });
export const useLoginApiServiceApiControllerUnlink = <TData = Common.LoginApiServiceApiControllerUnlinkMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, void, TContext>, "mutationFn">) => useMutation<TData, TError, void, TContext>({ mutationFn: () => LoginApiService.apiControllerUnlink() as unknown as Promise<TData>, ...options });
export const useLoginApiServiceApiControllerWebAuthnSigninFinish = <TData = Common.LoginApiServiceApiControllerWebAuthnSigninFinishMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  body: unknown;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  body: unknown;
}, TContext>({ mutationFn: ({ body }) => LoginApiService.apiControllerWebAuthnSigninFinish({ body }) as unknown as Promise<TData>, ...options });
export const useSystemApiServiceApiControllerHandleOfficialAccountEvent = <TData = Common.SystemApiServiceApiControllerHandleOfficialAccountEventMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, void, TContext>, "mutationFn">) => useMutation<TData, TError, void, TContext>({ mutationFn: () => SystemApiService.apiControllerHandleOfficialAccountEvent() as unknown as Promise<TData>, ...options });
export const useServiceApiServiceApiControllerSendEmail = <TData = Common.ServiceApiServiceApiControllerSendEmailMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  clientId: string;
  clientSecret: string;
  from: controllers_EmailForm;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  clientId: string;
  clientSecret: string;
  from: controllers_EmailForm;
}, TContext>({ mutationFn: ({ clientId, clientSecret, from }) => ServiceApiService.apiControllerSendEmail({ clientId, clientSecret, from }) as unknown as Promise<TData>, ...options });
export const useServiceApiServiceApiControllerSendNotification = <TData = Common.ServiceApiServiceApiControllerSendNotificationMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  from: controllers_NotificationForm;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  from: controllers_NotificationForm;
}, TContext>({ mutationFn: ({ from }) => ServiceApiService.apiControllerSendNotification({ from }) as unknown as Promise<TData>, ...options });
export const useServiceApiServiceApiControllerSendSms = <TData = Common.ServiceApiServiceApiControllerSendSmsMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  clientId: string;
  clientSecret: string;
  from: controllers_SmsForm;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  clientId: string;
  clientSecret: string;
  from: controllers_SmsForm;
}, TContext>({ mutationFn: ({ clientId, clientSecret, from }) => ServiceApiService.apiControllerSendSms({ clientId, clientSecret, from }) as unknown as Promise<TData>, ...options });
export const useVerificationApiServiceApiControllerSendVerificationCode = <TData = Common.VerificationApiServiceApiControllerSendVerificationCodeMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, void, TContext>, "mutationFn">) => useMutation<TData, TError, void, TContext>({ mutationFn: () => VerificationApiService.apiControllerSendVerificationCode() as unknown as Promise<TData>, ...options });
export const useVerificationApiServiceApiControllerVerifyCaptcha = <TData = Common.VerificationApiServiceApiControllerVerifyCaptchaMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, void, TContext>, "mutationFn">) => useMutation<TData, TError, void, TContext>({ mutationFn: () => VerificationApiService.apiControllerVerifyCaptcha() as unknown as Promise<TData>, ...options });
export const useVerificationApiServiceApiControllerVerifyCode = <TData = Common.VerificationApiServiceApiControllerVerifyCodeMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, void, TContext>, "mutationFn">) => useMutation<TData, TError, void, TContext>({ mutationFn: () => VerificationApiService.apiControllerVerifyCode() as unknown as Promise<TData>, ...options });
