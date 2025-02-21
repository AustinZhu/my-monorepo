// generated with @7nohe/openapi-react-query-codegen@1.6.1 

import { type UseQueryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { AccountApiService, AdapterApiService, ApplicationApiService, CertApiService, EnforcerApiService, GroupApiService, InvitationApiService, LoginApiService, ModelApiService, OidcApiService, OrganizationApiService, PaymentApiService, PermissionApiService, PlanApiService, PricingApiService, ProductApiService, ProviderApiService, ResourceApiService, RoleApiService, SessionApiService, SubscriptionApiService, SyncerApiService, SystemApiService, TokenApiService, UserApiService, WebhookApiService } from "../requests/services.gen";
import { type object_Syncer } from "../requests/types.gen";
import * as Common from "./common";

export const useOidcApiServiceRootControllerGetJwksSuspense = <TData = Common.OidcApiServiceRootControllerGetJwksDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseOidcApiServiceRootControllerGetJwksKeyFn(queryKey), queryFn: () => OidcApiService.rootControllerGetJwks() as TData, ...options });
export const useOidcApiServiceRootControllerGetOidcDiscoverySuspense = <TData = Common.OidcApiServiceRootControllerGetOidcDiscoveryDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseOidcApiServiceRootControllerGetOidcDiscoveryKeyFn(queryKey), queryFn: () => OidcApiService.rootControllerGetOidcDiscovery() as TData, ...options });
export const useAdapterApiServiceApiControllerGetAdapterSuspense = <TData = Common.AdapterApiServiceApiControllerGetAdapterDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>({ id }: {
  id: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseAdapterApiServiceApiControllerGetAdapterKeyFn({ id }, queryKey), queryFn: () => AdapterApiService.apiControllerGetAdapter({ id }) as TData, ...options });
export const useAdapterApiServiceApiControllerGetAdaptersSuspense = <TData = Common.AdapterApiServiceApiControllerGetAdaptersDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>({ owner }: {
  owner: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseAdapterApiServiceApiControllerGetAdaptersKeyFn({ owner }, queryKey), queryFn: () => AdapterApiService.apiControllerGetAdapters({ owner }) as TData, ...options });
export const useApplicationApiServiceApiControllerGetApplicationSuspense = <TData = Common.ApplicationApiServiceApiControllerGetApplicationDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>({ id }: {
  id: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseApplicationApiServiceApiControllerGetApplicationKeyFn({ id }, queryKey), queryFn: () => ApplicationApiService.apiControllerGetApplication({ id }) as TData, ...options });
export const useApplicationApiServiceApiControllerGetApplicationsSuspense = <TData = Common.ApplicationApiServiceApiControllerGetApplicationsDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>({ owner }: {
  owner: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseApplicationApiServiceApiControllerGetApplicationsKeyFn({ owner }, queryKey), queryFn: () => ApplicationApiService.apiControllerGetApplications({ owner }) as TData, ...options });
export const useApplicationApiServiceApiControllerGetOrganizationApplicationsSuspense = <TData = Common.ApplicationApiServiceApiControllerGetOrganizationApplicationsDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>({ organization }: {
  organization: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseApplicationApiServiceApiControllerGetOrganizationApplicationsKeyFn({ organization }, queryKey), queryFn: () => ApplicationApiService.apiControllerGetOrganizationApplications({ organization }) as TData, ...options });
export const useApplicationApiServiceApiControllerGetUserApplicationSuspense = <TData = Common.ApplicationApiServiceApiControllerGetUserApplicationDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>({ id }: {
  id: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseApplicationApiServiceApiControllerGetUserApplicationKeyFn({ id }, queryKey), queryFn: () => ApplicationApiService.apiControllerGetUserApplication({ id }) as TData, ...options });
export const useCertApiServiceApiControllerGetCertSuspense = <TData = Common.CertApiServiceApiControllerGetCertDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>({ id }: {
  id: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseCertApiServiceApiControllerGetCertKeyFn({ id }, queryKey), queryFn: () => CertApiService.apiControllerGetCert({ id }) as TData, ...options });
export const useCertApiServiceApiControllerGetCertsSuspense = <TData = Common.CertApiServiceApiControllerGetCertsDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>({ owner }: {
  owner: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseCertApiServiceApiControllerGetCertsKeyFn({ owner }, queryKey), queryFn: () => CertApiService.apiControllerGetCerts({ owner }) as TData, ...options });
export const useCertApiServiceApiControllerGetGlobalCertsSuspense = <TData = Common.CertApiServiceApiControllerGetGlobalCertsDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseCertApiServiceApiControllerGetGlobalCertsKeyFn(queryKey), queryFn: () => CertApiService.apiControllerGetGlobalCerts() as TData, ...options });
export const useEnforcerApiServiceApiControllerGetEnforcerSuspense = <TData = Common.EnforcerApiServiceApiControllerGetEnforcerDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>({ id }: {
  id: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseEnforcerApiServiceApiControllerGetEnforcerKeyFn({ id }, queryKey), queryFn: () => EnforcerApiService.apiControllerGetEnforcer({ id }) as TData, ...options });
export const useEnforcerApiServiceApiControllerGetEnforcersSuspense = <TData = Common.EnforcerApiServiceApiControllerGetEnforcersDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>({ owner }: {
  owner: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseEnforcerApiServiceApiControllerGetEnforcersKeyFn({ owner }, queryKey), queryFn: () => EnforcerApiService.apiControllerGetEnforcers({ owner }) as TData, ...options });
export const useGroupApiServiceApiControllerGetGroupSuspense = <TData = Common.GroupApiServiceApiControllerGetGroupDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>({ id }: {
  id: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseGroupApiServiceApiControllerGetGroupKeyFn({ id }, queryKey), queryFn: () => GroupApiService.apiControllerGetGroup({ id }) as TData, ...options });
export const useGroupApiServiceApiControllerGetGroupsSuspense = <TData = Common.GroupApiServiceApiControllerGetGroupsDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>({ owner }: {
  owner: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseGroupApiServiceApiControllerGetGroupsKeyFn({ owner }, queryKey), queryFn: () => GroupApiService.apiControllerGetGroups({ owner }) as TData, ...options });
export const useInvitationApiServiceApiControllerGetInvitationSuspense = <TData = Common.InvitationApiServiceApiControllerGetInvitationDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>({ id }: {
  id: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseInvitationApiServiceApiControllerGetInvitationKeyFn({ id }, queryKey), queryFn: () => InvitationApiService.apiControllerGetInvitation({ id }) as TData, ...options });
export const useInvitationApiServiceApiControllerGetInvitationsSuspense = <TData = Common.InvitationApiServiceApiControllerGetInvitationsDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>({ owner }: {
  owner: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseInvitationApiServiceApiControllerGetInvitationsKeyFn({ owner }, queryKey), queryFn: () => InvitationApiService.apiControllerGetInvitations({ owner }) as TData, ...options });
export const useInvitationApiServiceApiControllerVerifyInvitationSuspense = <TData = Common.InvitationApiServiceApiControllerVerifyInvitationDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>({ id }: {
  id: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseInvitationApiServiceApiControllerVerifyInvitationKeyFn({ id }, queryKey), queryFn: () => InvitationApiService.apiControllerVerifyInvitation({ id }) as TData, ...options });
export const useAccountApiServiceApiControllerGetAccountSuspense = <TData = Common.AccountApiServiceApiControllerGetAccountDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseAccountApiServiceApiControllerGetAccountKeyFn(queryKey), queryFn: () => AccountApiService.apiControllerGetAccount() as TData, ...options });
export const useAccountApiServiceApiControllerGetLdapSuspense = <TData = Common.AccountApiServiceApiControllerGetLdapDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>({ id }: {
  id: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseAccountApiServiceApiControllerGetLdapKeyFn({ id }, queryKey), queryFn: () => AccountApiService.apiControllerGetLdap({ id }) as TData, ...options });
export const useAccountApiServiceApiControllerGetLdapserSuspense = <TData = Common.AccountApiServiceApiControllerGetLdapserDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseAccountApiServiceApiControllerGetLdapserKeyFn(queryKey), queryFn: () => AccountApiService.apiControllerGetLdapser() as TData, ...options });
export const useAccountApiServiceApiControllerGetLdapsSuspense = <TData = Common.AccountApiServiceApiControllerGetLdapsDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>({ owner }: {
  owner?: string;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseAccountApiServiceApiControllerGetLdapsKeyFn({ owner }, queryKey), queryFn: () => AccountApiService.apiControllerGetLdaps({ owner }) as TData, ...options });
export const useAccountApiServiceApiControllerUserInfo2Suspense = <TData = Common.AccountApiServiceApiControllerUserInfo2DefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseAccountApiServiceApiControllerUserInfo2KeyFn(queryKey), queryFn: () => AccountApiService.apiControllerUserInfo2() as TData, ...options });
export const useAccountApiServiceApiControllerUserInfoSuspense = <TData = Common.AccountApiServiceApiControllerUserInfoDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseAccountApiServiceApiControllerUserInfoKeyFn(queryKey), queryFn: () => AccountApiService.apiControllerUserInfo() as TData, ...options });
export const useModelApiServiceApiControllerGetModelSuspense = <TData = Common.ModelApiServiceApiControllerGetModelDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>({ id }: {
  id: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseModelApiServiceApiControllerGetModelKeyFn({ id }, queryKey), queryFn: () => ModelApiService.apiControllerGetModel({ id }) as TData, ...options });
export const useModelApiServiceApiControllerGetModelsSuspense = <TData = Common.ModelApiServiceApiControllerGetModelsDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>({ owner }: {
  owner: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseModelApiServiceApiControllerGetModelsKeyFn({ owner }, queryKey), queryFn: () => ModelApiService.apiControllerGetModels({ owner }) as TData, ...options });
export const useOrganizationApiServiceApiControllerGetDefaultApplicationSuspense = <TData = Common.OrganizationApiServiceApiControllerGetDefaultApplicationDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>({ id }: {
  id: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseOrganizationApiServiceApiControllerGetDefaultApplicationKeyFn({ id }, queryKey), queryFn: () => OrganizationApiService.apiControllerGetDefaultApplication({ id }) as TData, ...options });
export const useOrganizationApiServiceApiControllerGetOrganizationSuspense = <TData = Common.OrganizationApiServiceApiControllerGetOrganizationDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>({ id }: {
  id: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseOrganizationApiServiceApiControllerGetOrganizationKeyFn({ id }, queryKey), queryFn: () => OrganizationApiService.apiControllerGetOrganization({ id }) as TData, ...options });
export const useOrganizationApiServiceApiControllerGetOrganizationNamesSuspense = <TData = Common.OrganizationApiServiceApiControllerGetOrganizationNamesDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>({ owner }: {
  owner: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseOrganizationApiServiceApiControllerGetOrganizationNamesKeyFn({ owner }, queryKey), queryFn: () => OrganizationApiService.apiControllerGetOrganizationNames({ owner }) as TData, ...options });
export const useOrganizationApiServiceApiControllerGetOrganizationsSuspense = <TData = Common.OrganizationApiServiceApiControllerGetOrganizationsDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>({ owner }: {
  owner: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseOrganizationApiServiceApiControllerGetOrganizationsKeyFn({ owner }, queryKey), queryFn: () => OrganizationApiService.apiControllerGetOrganizations({ owner }) as TData, ...options });
export const usePaymentApiServiceApiControllerGetPaymentSuspense = <TData = Common.PaymentApiServiceApiControllerGetPaymentDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>({ id }: {
  id: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UsePaymentApiServiceApiControllerGetPaymentKeyFn({ id }, queryKey), queryFn: () => PaymentApiService.apiControllerGetPayment({ id }) as TData, ...options });
export const usePaymentApiServiceApiControllerGetPaymentsSuspense = <TData = Common.PaymentApiServiceApiControllerGetPaymentsDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>({ owner }: {
  owner: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UsePaymentApiServiceApiControllerGetPaymentsKeyFn({ owner }, queryKey), queryFn: () => PaymentApiService.apiControllerGetPayments({ owner }) as TData, ...options });
export const usePaymentApiServiceApiControllerGetUserPaymentsSuspense = <TData = Common.PaymentApiServiceApiControllerGetUserPaymentsDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>({ organization, owner, user }: {
  organization: string;
  owner: string;
  user: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UsePaymentApiServiceApiControllerGetUserPaymentsKeyFn({ organization, owner, user }, queryKey), queryFn: () => PaymentApiService.apiControllerGetUserPayments({ organization, owner, user }) as TData, ...options });
export const usePermissionApiServiceApiControllerGetPermissionSuspense = <TData = Common.PermissionApiServiceApiControllerGetPermissionDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>({ id }: {
  id: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UsePermissionApiServiceApiControllerGetPermissionKeyFn({ id }, queryKey), queryFn: () => PermissionApiService.apiControllerGetPermission({ id }) as TData, ...options });
export const usePermissionApiServiceApiControllerGetPermissionsSuspense = <TData = Common.PermissionApiServiceApiControllerGetPermissionsDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>({ owner }: {
  owner: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UsePermissionApiServiceApiControllerGetPermissionsKeyFn({ owner }, queryKey), queryFn: () => PermissionApiService.apiControllerGetPermissions({ owner }) as TData, ...options });
export const usePermissionApiServiceApiControllerGetPermissionsByRoleSuspense = <TData = Common.PermissionApiServiceApiControllerGetPermissionsByRoleDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>({ id }: {
  id: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UsePermissionApiServiceApiControllerGetPermissionsByRoleKeyFn({ id }, queryKey), queryFn: () => PermissionApiService.apiControllerGetPermissionsByRole({ id }) as TData, ...options });
export const usePermissionApiServiceApiControllerGetPermissionsBySubmitterSuspense = <TData = Common.PermissionApiServiceApiControllerGetPermissionsBySubmitterDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UsePermissionApiServiceApiControllerGetPermissionsBySubmitterKeyFn(queryKey), queryFn: () => PermissionApiService.apiControllerGetPermissionsBySubmitter() as TData, ...options });
export const usePlanApiServiceApiControllerGetPlanSuspense = <TData = Common.PlanApiServiceApiControllerGetPlanDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>({ id, includeOption }: {
  id: string;
  includeOption?: boolean;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UsePlanApiServiceApiControllerGetPlanKeyFn({ id, includeOption }, queryKey), queryFn: () => PlanApiService.apiControllerGetPlan({ id, includeOption }) as TData, ...options });
export const usePlanApiServiceApiControllerGetPlansSuspense = <TData = Common.PlanApiServiceApiControllerGetPlansDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>({ owner }: {
  owner: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UsePlanApiServiceApiControllerGetPlansKeyFn({ owner }, queryKey), queryFn: () => PlanApiService.apiControllerGetPlans({ owner }) as TData, ...options });
export const usePricingApiServiceApiControllerGetPricingSuspense = <TData = Common.PricingApiServiceApiControllerGetPricingDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>({ id }: {
  id: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UsePricingApiServiceApiControllerGetPricingKeyFn({ id }, queryKey), queryFn: () => PricingApiService.apiControllerGetPricing({ id }) as TData, ...options });
export const usePricingApiServiceApiControllerGetPricingsSuspense = <TData = Common.PricingApiServiceApiControllerGetPricingsDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>({ owner }: {
  owner: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UsePricingApiServiceApiControllerGetPricingsKeyFn({ owner }, queryKey), queryFn: () => PricingApiService.apiControllerGetPricings({ owner }) as TData, ...options });
export const useProductApiServiceApiControllerGetProductSuspense = <TData = Common.ProductApiServiceApiControllerGetProductDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>({ id }: {
  id: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseProductApiServiceApiControllerGetProductKeyFn({ id }, queryKey), queryFn: () => ProductApiService.apiControllerGetProduct({ id }) as TData, ...options });
export const useProductApiServiceApiControllerGetProductsSuspense = <TData = Common.ProductApiServiceApiControllerGetProductsDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>({ owner }: {
  owner: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseProductApiServiceApiControllerGetProductsKeyFn({ owner }, queryKey), queryFn: () => ProductApiService.apiControllerGetProducts({ owner }) as TData, ...options });
export const useProviderApiServiceApiControllerGetGlobalProvidersSuspense = <TData = Common.ProviderApiServiceApiControllerGetGlobalProvidersDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseProviderApiServiceApiControllerGetGlobalProvidersKeyFn(queryKey), queryFn: () => ProviderApiService.apiControllerGetGlobalProviders() as TData, ...options });
export const useProviderApiServiceApiControllerGetProviderSuspense = <TData = Common.ProviderApiServiceApiControllerGetProviderDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>({ id }: {
  id: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseProviderApiServiceApiControllerGetProviderKeyFn({ id }, queryKey), queryFn: () => ProviderApiService.apiControllerGetProvider({ id }) as TData, ...options });
export const useProviderApiServiceApiControllerGetProvidersSuspense = <TData = Common.ProviderApiServiceApiControllerGetProvidersDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>({ owner }: {
  owner: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseProviderApiServiceApiControllerGetProvidersKeyFn({ owner }, queryKey), queryFn: () => ProviderApiService.apiControllerGetProviders({ owner }) as TData, ...options });
export const useResourceApiServiceApiControllerGetResourceSuspense = <TData = Common.ResourceApiServiceApiControllerGetResourceDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>({ id }: {
  id: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseResourceApiServiceApiControllerGetResourceKeyFn({ id }, queryKey), queryFn: () => ResourceApiService.apiControllerGetResource({ id }) as TData, ...options });
export const useResourceApiServiceApiControllerGetResourcesSuspense = <TData = Common.ResourceApiServiceApiControllerGetResourcesDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>({ field, owner, p, pageSize, sortField, sortOrder, user, value }: {
  field?: string;
  owner: string;
  p?: number;
  pageSize?: number;
  sortField?: string;
  sortOrder?: string;
  user: string;
  value?: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseResourceApiServiceApiControllerGetResourcesKeyFn({ field, owner, p, pageSize, sortField, sortOrder, user, value }, queryKey), queryFn: () => ResourceApiService.apiControllerGetResources({ field, owner, p, pageSize, sortField, sortOrder, user, value }) as TData, ...options });
export const useRoleApiServiceApiControllerGetRoleSuspense = <TData = Common.RoleApiServiceApiControllerGetRoleDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>({ id }: {
  id: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseRoleApiServiceApiControllerGetRoleKeyFn({ id }, queryKey), queryFn: () => RoleApiService.apiControllerGetRole({ id }) as TData, ...options });
export const useRoleApiServiceApiControllerGetRolesSuspense = <TData = Common.RoleApiServiceApiControllerGetRolesDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>({ owner }: {
  owner: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseRoleApiServiceApiControllerGetRolesKeyFn({ owner }, queryKey), queryFn: () => RoleApiService.apiControllerGetRoles({ owner }) as TData, ...options });
export const useSessionApiServiceApiControllerGetSingleSessionSuspense = <TData = Common.SessionApiServiceApiControllerGetSingleSessionDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>({ id }: {
  id: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseSessionApiServiceApiControllerGetSingleSessionKeyFn({ id }, queryKey), queryFn: () => SessionApiService.apiControllerGetSingleSession({ id }) as TData, ...options });
export const useSessionApiServiceApiControllerGetSessionsSuspense = <TData = Common.SessionApiServiceApiControllerGetSessionsDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>({ owner }: {
  owner: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseSessionApiServiceApiControllerGetSessionsKeyFn({ owner }, queryKey), queryFn: () => SessionApiService.apiControllerGetSessions({ owner }) as TData, ...options });
export const useSessionApiServiceApiControllerIsSessionDuplicatedSuspense = <TData = Common.SessionApiServiceApiControllerIsSessionDuplicatedDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>({ id, sessionId }: {
  id: string;
  sessionId: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseSessionApiServiceApiControllerIsSessionDuplicatedKeyFn({ id, sessionId }, queryKey), queryFn: () => SessionApiService.apiControllerIsSessionDuplicated({ id, sessionId }) as TData, ...options });
export const useSubscriptionApiServiceApiControllerGetSubscriptionSuspense = <TData = Common.SubscriptionApiServiceApiControllerGetSubscriptionDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>({ id }: {
  id: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseSubscriptionApiServiceApiControllerGetSubscriptionKeyFn({ id }, queryKey), queryFn: () => SubscriptionApiService.apiControllerGetSubscription({ id }) as TData, ...options });
export const useSubscriptionApiServiceApiControllerGetSubscriptionsSuspense = <TData = Common.SubscriptionApiServiceApiControllerGetSubscriptionsDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>({ owner }: {
  owner: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseSubscriptionApiServiceApiControllerGetSubscriptionsKeyFn({ owner }, queryKey), queryFn: () => SubscriptionApiService.apiControllerGetSubscriptions({ owner }) as TData, ...options });
export const useSyncerApiServiceApiControllerGetSyncerSuspense = <TData = Common.SyncerApiServiceApiControllerGetSyncerDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>({ id }: {
  id: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseSyncerApiServiceApiControllerGetSyncerKeyFn({ id }, queryKey), queryFn: () => SyncerApiService.apiControllerGetSyncer({ id }) as TData, ...options });
export const useSyncerApiServiceApiControllerGetSyncersSuspense = <TData = Common.SyncerApiServiceApiControllerGetSyncersDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>({ owner }: {
  owner: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseSyncerApiServiceApiControllerGetSyncersKeyFn({ owner }, queryKey), queryFn: () => SyncerApiService.apiControllerGetSyncers({ owner }) as TData, ...options });
export const useSyncerApiServiceApiControllerRunSyncerSuspense = <TData = Common.SyncerApiServiceApiControllerRunSyncerDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>({ body }: {
  body: object_Syncer;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseSyncerApiServiceApiControllerRunSyncerKeyFn({ body }, queryKey), queryFn: () => SyncerApiService.apiControllerRunSyncer({ body }) as TData, ...options });
export const useTokenApiServiceApiControllerGetCaptchaStatusSuspense = <TData = Common.TokenApiServiceApiControllerGetCaptchaStatusDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>({ id }: {
  id: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseTokenApiServiceApiControllerGetCaptchaStatusKeyFn({ id }, queryKey), queryFn: () => TokenApiService.apiControllerGetCaptchaStatus({ id }) as TData, ...options });
export const useTokenApiServiceApiControllerGetTokenSuspense = <TData = Common.TokenApiServiceApiControllerGetTokenDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>({ id }: {
  id: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseTokenApiServiceApiControllerGetTokenKeyFn({ id }, queryKey), queryFn: () => TokenApiService.apiControllerGetToken({ id }) as TData, ...options });
export const useTokenApiServiceApiControllerGetTokensSuspense = <TData = Common.TokenApiServiceApiControllerGetTokensDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>({ owner, p, pageSize }: {
  owner: string;
  p: string;
  pageSize: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseTokenApiServiceApiControllerGetTokensKeyFn({ owner, p, pageSize }, queryKey), queryFn: () => TokenApiService.apiControllerGetTokens({ owner, p, pageSize }) as TData, ...options });
export const useUserApiServiceApiControllerGetEmailAndPhoneSuspense = <TData = Common.UserApiServiceApiControllerGetEmailAndPhoneDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>({ organization, username }: {
  organization: string;
  username: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseUserApiServiceApiControllerGetEmailAndPhoneKeyFn({ organization, username }, queryKey), queryFn: () => UserApiService.apiControllerGetEmailAndPhone({ organization, username }) as TData, ...options });
export const useUserApiServiceApiControllerGetGlobalUsersSuspense = <TData = Common.UserApiServiceApiControllerGetGlobalUsersDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseUserApiServiceApiControllerGetGlobalUsersKeyFn(queryKey), queryFn: () => UserApiService.apiControllerGetGlobalUsers() as TData, ...options });
export const useUserApiServiceApiControllerGetSortedUsersSuspense = <TData = Common.UserApiServiceApiControllerGetSortedUsersDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>({ limit, owner, sorter }: {
  limit: string;
  owner: string;
  sorter: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseUserApiServiceApiControllerGetSortedUsersKeyFn({ limit, owner, sorter }, queryKey), queryFn: () => UserApiService.apiControllerGetSortedUsers({ limit, owner, sorter }) as TData, ...options });
export const useUserApiServiceApiControllerGetUserSuspense = <TData = Common.UserApiServiceApiControllerGetUserDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>({ email, id, owner, phone, userId }: {
  email?: string;
  id?: string;
  owner?: string;
  phone?: string;
  userId?: string;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseUserApiServiceApiControllerGetUserKeyFn({ email, id, owner, phone, userId }, queryKey), queryFn: () => UserApiService.apiControllerGetUser({ email, id, owner, phone, userId }) as TData, ...options });
export const useUserApiServiceApiControllerGetUserCountSuspense = <TData = Common.UserApiServiceApiControllerGetUserCountDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>({ isOnline, owner }: {
  isOnline: string;
  owner: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseUserApiServiceApiControllerGetUserCountKeyFn({ isOnline, owner }, queryKey), queryFn: () => UserApiService.apiControllerGetUserCount({ isOnline, owner }) as TData, ...options });
export const useUserApiServiceApiControllerGetUsersSuspense = <TData = Common.UserApiServiceApiControllerGetUsersDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>({ owner }: {
  owner: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseUserApiServiceApiControllerGetUsersKeyFn({ owner }, queryKey), queryFn: () => UserApiService.apiControllerGetUsers({ owner }) as TData, ...options });
export const useUserApiServiceApiControllerWebAuthnSignupBeginSuspense = <TData = Common.UserApiServiceApiControllerWebAuthnSignupBeginDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseUserApiServiceApiControllerWebAuthnSignupBeginKeyFn(queryKey), queryFn: () => UserApiService.apiControllerWebAuthnSignupBegin() as TData, ...options });
export const useWebhookApiServiceApiControllerGetWebhookSuspense = <TData = Common.WebhookApiServiceApiControllerGetWebhookDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>({ id }: {
  id: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseWebhookApiServiceApiControllerGetWebhookKeyFn({ id }, queryKey), queryFn: () => WebhookApiService.apiControllerGetWebhook({ id }) as TData, ...options });
export const useWebhookApiServiceApiControllerGetWebhooksSuspense = <TData = Common.WebhookApiServiceApiControllerGetWebhooksDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>({ owner }: {
  owner: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseWebhookApiServiceApiControllerGetWebhooksKeyFn({ owner }, queryKey), queryFn: () => WebhookApiService.apiControllerGetWebhooks({ owner }) as TData, ...options });
export const useLoginApiServiceApiControllerGetApplicationLoginSuspense = <TData = Common.LoginApiServiceApiControllerGetApplicationLoginDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>({ clientId, redirectUri, responseType, scope, state }: {
  clientId: string;
  redirectUri: string;
  responseType: string;
  scope: string;
  state: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseLoginApiServiceApiControllerGetApplicationLoginKeyFn({ clientId, redirectUri, responseType, scope, state }, queryKey), queryFn: () => LoginApiService.apiControllerGetApplicationLogin({ clientId, redirectUri, responseType, scope, state }) as TData, ...options });
export const useLoginApiServiceApiControllerGetCaptchaSuspense = <TData = Common.LoginApiServiceApiControllerGetCaptchaDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseLoginApiServiceApiControllerGetCaptchaKeyFn(queryKey), queryFn: () => LoginApiService.apiControllerGetCaptcha() as TData, ...options });
export const useLoginApiServiceApiControllerWebAuthnSigninBeginSuspense = <TData = Common.LoginApiServiceApiControllerWebAuthnSigninBeginDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>({ name, owner }: {
  name: string;
  owner: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseLoginApiServiceApiControllerWebAuthnSigninBeginKeyFn({ name, owner }, queryKey), queryFn: () => LoginApiService.apiControllerWebAuthnSigninBegin({ name, owner }) as TData, ...options });
export const useSystemApiServiceApiControllerGetDashboardSuspense = <TData = Common.SystemApiServiceApiControllerGetDashboardDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseSystemApiServiceApiControllerGetDashboardKeyFn(queryKey), queryFn: () => SystemApiService.apiControllerGetDashboard() as TData, ...options });
export const useSystemApiServiceApiControllerGetPrometheusInfoSuspense = <TData = Common.SystemApiServiceApiControllerGetPrometheusInfoDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseSystemApiServiceApiControllerGetPrometheusInfoKeyFn(queryKey), queryFn: () => SystemApiService.apiControllerGetPrometheusInfo() as TData, ...options });
export const useSystemApiServiceApiControllerGetSystemInfoSuspense = <TData = Common.SystemApiServiceApiControllerGetSystemInfoDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseSystemApiServiceApiControllerGetSystemInfoKeyFn(queryKey), queryFn: () => SystemApiService.apiControllerGetSystemInfo() as TData, ...options });
export const useSystemApiServiceApiControllerGetVersionInfoSuspense = <TData = Common.SystemApiServiceApiControllerGetVersionInfoDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseSystemApiServiceApiControllerGetVersionInfoKeyFn(queryKey), queryFn: () => SystemApiService.apiControllerGetVersionInfo() as TData, ...options });
export const useSystemApiServiceApiControllerGetWebhookEventTypeSuspense = <TData = Common.SystemApiServiceApiControllerGetWebhookEventTypeDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseSystemApiServiceApiControllerGetWebhookEventTypeKeyFn(queryKey), queryFn: () => SystemApiService.apiControllerGetWebhookEventType() as TData, ...options });
export const useSystemApiServiceApiControllerHealthSuspense = <TData = Common.SystemApiServiceApiControllerHealthDefaultResponse, TError = unknown, TQueryKey extends unknown[] = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseSystemApiServiceApiControllerHealthKeyFn(queryKey), queryFn: () => SystemApiService.apiControllerHealth() as TData, ...options });
