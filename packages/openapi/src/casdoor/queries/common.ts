// generated with @7nohe/openapi-react-query-codegen@1.6.1 

import { type UseQueryResult } from "@tanstack/react-query";
import { type AccountApiService, type AdapterApiService, type ApplicationApiService, type CallbackApiService, type CertApiService, type EnforcerApiService, type GroupApiService, type InvitationApiService, type LoginApiService, type MfaApiService, type ModelApiService, type OidcApiService, type OrganizationApiService, type PaymentApiService, type PermissionApiService, type PlanApiService, type PricingApiService, type ProductApiService, type ProviderApiService, type ResourceApiService, type RoleApiService, type ServiceApiService, type SessionApiService, type SubscriptionApiService, type SyncerApiService, type SystemApiService, type TokenApiService, type UserApiService, type VerificationApiService, type WebhookApiService } from "../requests/services.gen";
import { type object_Syncer } from "../requests/types.gen";

export type OidcApiServiceRootControllerGetJwksDefaultResponse = Awaited<ReturnType<typeof OidcApiService.rootControllerGetJwks>>;
export type OidcApiServiceRootControllerGetJwksQueryResult<TData = OidcApiServiceRootControllerGetJwksDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useOidcApiServiceRootControllerGetJwksKey = "OidcApiServiceRootControllerGetJwks";
export const UseOidcApiServiceRootControllerGetJwksKeyFn = (queryKey?: unknown[]) => [useOidcApiServiceRootControllerGetJwksKey, ...(queryKey ?? [])];
export type OidcApiServiceRootControllerGetOidcDiscoveryDefaultResponse = Awaited<ReturnType<typeof OidcApiService.rootControllerGetOidcDiscovery>>;
export type OidcApiServiceRootControllerGetOidcDiscoveryQueryResult<TData = OidcApiServiceRootControllerGetOidcDiscoveryDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useOidcApiServiceRootControllerGetOidcDiscoveryKey = "OidcApiServiceRootControllerGetOidcDiscovery";
export const UseOidcApiServiceRootControllerGetOidcDiscoveryKeyFn = (queryKey?: unknown[]) => [useOidcApiServiceRootControllerGetOidcDiscoveryKey, ...(queryKey ?? [])];
export type AdapterApiServiceApiControllerGetAdapterDefaultResponse = Awaited<ReturnType<typeof AdapterApiService.apiControllerGetAdapter>>;
export type AdapterApiServiceApiControllerGetAdapterQueryResult<TData = AdapterApiServiceApiControllerGetAdapterDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useAdapterApiServiceApiControllerGetAdapterKey = "AdapterApiServiceApiControllerGetAdapter";
export const UseAdapterApiServiceApiControllerGetAdapterKeyFn = ({ id }: {
  id: string;
}, queryKey?: unknown[]) => [useAdapterApiServiceApiControllerGetAdapterKey, ...(queryKey ?? [{ id }])];
export type AdapterApiServiceApiControllerGetAdaptersDefaultResponse = Awaited<ReturnType<typeof AdapterApiService.apiControllerGetAdapters>>;
export type AdapterApiServiceApiControllerGetAdaptersQueryResult<TData = AdapterApiServiceApiControllerGetAdaptersDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useAdapterApiServiceApiControllerGetAdaptersKey = "AdapterApiServiceApiControllerGetAdapters";
export const UseAdapterApiServiceApiControllerGetAdaptersKeyFn = ({ owner }: {
  owner: string;
}, queryKey?: unknown[]) => [useAdapterApiServiceApiControllerGetAdaptersKey, ...(queryKey ?? [{ owner }])];
export type ApplicationApiServiceApiControllerGetApplicationDefaultResponse = Awaited<ReturnType<typeof ApplicationApiService.apiControllerGetApplication>>;
export type ApplicationApiServiceApiControllerGetApplicationQueryResult<TData = ApplicationApiServiceApiControllerGetApplicationDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useApplicationApiServiceApiControllerGetApplicationKey = "ApplicationApiServiceApiControllerGetApplication";
export const UseApplicationApiServiceApiControllerGetApplicationKeyFn = ({ id }: {
  id: string;
}, queryKey?: unknown[]) => [useApplicationApiServiceApiControllerGetApplicationKey, ...(queryKey ?? [{ id }])];
export type ApplicationApiServiceApiControllerGetApplicationsDefaultResponse = Awaited<ReturnType<typeof ApplicationApiService.apiControllerGetApplications>>;
export type ApplicationApiServiceApiControllerGetApplicationsQueryResult<TData = ApplicationApiServiceApiControllerGetApplicationsDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useApplicationApiServiceApiControllerGetApplicationsKey = "ApplicationApiServiceApiControllerGetApplications";
export const UseApplicationApiServiceApiControllerGetApplicationsKeyFn = ({ owner }: {
  owner: string;
}, queryKey?: unknown[]) => [useApplicationApiServiceApiControllerGetApplicationsKey, ...(queryKey ?? [{ owner }])];
export type ApplicationApiServiceApiControllerGetOrganizationApplicationsDefaultResponse = Awaited<ReturnType<typeof ApplicationApiService.apiControllerGetOrganizationApplications>>;
export type ApplicationApiServiceApiControllerGetOrganizationApplicationsQueryResult<TData = ApplicationApiServiceApiControllerGetOrganizationApplicationsDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useApplicationApiServiceApiControllerGetOrganizationApplicationsKey = "ApplicationApiServiceApiControllerGetOrganizationApplications";
export const UseApplicationApiServiceApiControllerGetOrganizationApplicationsKeyFn = ({ organization }: {
  organization: string;
}, queryKey?: unknown[]) => [useApplicationApiServiceApiControllerGetOrganizationApplicationsKey, ...(queryKey ?? [{ organization }])];
export type ApplicationApiServiceApiControllerGetUserApplicationDefaultResponse = Awaited<ReturnType<typeof ApplicationApiService.apiControllerGetUserApplication>>;
export type ApplicationApiServiceApiControllerGetUserApplicationQueryResult<TData = ApplicationApiServiceApiControllerGetUserApplicationDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useApplicationApiServiceApiControllerGetUserApplicationKey = "ApplicationApiServiceApiControllerGetUserApplication";
export const UseApplicationApiServiceApiControllerGetUserApplicationKeyFn = ({ id }: {
  id: string;
}, queryKey?: unknown[]) => [useApplicationApiServiceApiControllerGetUserApplicationKey, ...(queryKey ?? [{ id }])];
export type CertApiServiceApiControllerGetCertDefaultResponse = Awaited<ReturnType<typeof CertApiService.apiControllerGetCert>>;
export type CertApiServiceApiControllerGetCertQueryResult<TData = CertApiServiceApiControllerGetCertDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useCertApiServiceApiControllerGetCertKey = "CertApiServiceApiControllerGetCert";
export const UseCertApiServiceApiControllerGetCertKeyFn = ({ id }: {
  id: string;
}, queryKey?: unknown[]) => [useCertApiServiceApiControllerGetCertKey, ...(queryKey ?? [{ id }])];
export type CertApiServiceApiControllerGetCertsDefaultResponse = Awaited<ReturnType<typeof CertApiService.apiControllerGetCerts>>;
export type CertApiServiceApiControllerGetCertsQueryResult<TData = CertApiServiceApiControllerGetCertsDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useCertApiServiceApiControllerGetCertsKey = "CertApiServiceApiControllerGetCerts";
export const UseCertApiServiceApiControllerGetCertsKeyFn = ({ owner }: {
  owner: string;
}, queryKey?: unknown[]) => [useCertApiServiceApiControllerGetCertsKey, ...(queryKey ?? [{ owner }])];
export type CertApiServiceApiControllerGetGlobalCertsDefaultResponse = Awaited<ReturnType<typeof CertApiService.apiControllerGetGlobalCerts>>;
export type CertApiServiceApiControllerGetGlobalCertsQueryResult<TData = CertApiServiceApiControllerGetGlobalCertsDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useCertApiServiceApiControllerGetGlobalCertsKey = "CertApiServiceApiControllerGetGlobalCerts";
export const UseCertApiServiceApiControllerGetGlobalCertsKeyFn = (queryKey?: unknown[]) => [useCertApiServiceApiControllerGetGlobalCertsKey, ...(queryKey ?? [])];
export type EnforcerApiServiceApiControllerGetEnforcerDefaultResponse = Awaited<ReturnType<typeof EnforcerApiService.apiControllerGetEnforcer>>;
export type EnforcerApiServiceApiControllerGetEnforcerQueryResult<TData = EnforcerApiServiceApiControllerGetEnforcerDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useEnforcerApiServiceApiControllerGetEnforcerKey = "EnforcerApiServiceApiControllerGetEnforcer";
export const UseEnforcerApiServiceApiControllerGetEnforcerKeyFn = ({ id }: {
  id: string;
}, queryKey?: unknown[]) => [useEnforcerApiServiceApiControllerGetEnforcerKey, ...(queryKey ?? [{ id }])];
export type EnforcerApiServiceApiControllerGetEnforcersDefaultResponse = Awaited<ReturnType<typeof EnforcerApiService.apiControllerGetEnforcers>>;
export type EnforcerApiServiceApiControllerGetEnforcersQueryResult<TData = EnforcerApiServiceApiControllerGetEnforcersDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useEnforcerApiServiceApiControllerGetEnforcersKey = "EnforcerApiServiceApiControllerGetEnforcers";
export const UseEnforcerApiServiceApiControllerGetEnforcersKeyFn = ({ owner }: {
  owner: string;
}, queryKey?: unknown[]) => [useEnforcerApiServiceApiControllerGetEnforcersKey, ...(queryKey ?? [{ owner }])];
export type GroupApiServiceApiControllerGetGroupDefaultResponse = Awaited<ReturnType<typeof GroupApiService.apiControllerGetGroup>>;
export type GroupApiServiceApiControllerGetGroupQueryResult<TData = GroupApiServiceApiControllerGetGroupDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useGroupApiServiceApiControllerGetGroupKey = "GroupApiServiceApiControllerGetGroup";
export const UseGroupApiServiceApiControllerGetGroupKeyFn = ({ id }: {
  id: string;
}, queryKey?: unknown[]) => [useGroupApiServiceApiControllerGetGroupKey, ...(queryKey ?? [{ id }])];
export type GroupApiServiceApiControllerGetGroupsDefaultResponse = Awaited<ReturnType<typeof GroupApiService.apiControllerGetGroups>>;
export type GroupApiServiceApiControllerGetGroupsQueryResult<TData = GroupApiServiceApiControllerGetGroupsDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useGroupApiServiceApiControllerGetGroupsKey = "GroupApiServiceApiControllerGetGroups";
export const UseGroupApiServiceApiControllerGetGroupsKeyFn = ({ owner }: {
  owner: string;
}, queryKey?: unknown[]) => [useGroupApiServiceApiControllerGetGroupsKey, ...(queryKey ?? [{ owner }])];
export type InvitationApiServiceApiControllerGetInvitationDefaultResponse = Awaited<ReturnType<typeof InvitationApiService.apiControllerGetInvitation>>;
export type InvitationApiServiceApiControllerGetInvitationQueryResult<TData = InvitationApiServiceApiControllerGetInvitationDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useInvitationApiServiceApiControllerGetInvitationKey = "InvitationApiServiceApiControllerGetInvitation";
export const UseInvitationApiServiceApiControllerGetInvitationKeyFn = ({ id }: {
  id: string;
}, queryKey?: unknown[]) => [useInvitationApiServiceApiControllerGetInvitationKey, ...(queryKey ?? [{ id }])];
export type InvitationApiServiceApiControllerGetInvitationsDefaultResponse = Awaited<ReturnType<typeof InvitationApiService.apiControllerGetInvitations>>;
export type InvitationApiServiceApiControllerGetInvitationsQueryResult<TData = InvitationApiServiceApiControllerGetInvitationsDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useInvitationApiServiceApiControllerGetInvitationsKey = "InvitationApiServiceApiControllerGetInvitations";
export const UseInvitationApiServiceApiControllerGetInvitationsKeyFn = ({ owner }: {
  owner: string;
}, queryKey?: unknown[]) => [useInvitationApiServiceApiControllerGetInvitationsKey, ...(queryKey ?? [{ owner }])];
export type InvitationApiServiceApiControllerVerifyInvitationDefaultResponse = Awaited<ReturnType<typeof InvitationApiService.apiControllerVerifyInvitation>>;
export type InvitationApiServiceApiControllerVerifyInvitationQueryResult<TData = InvitationApiServiceApiControllerVerifyInvitationDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useInvitationApiServiceApiControllerVerifyInvitationKey = "InvitationApiServiceApiControllerVerifyInvitation";
export const UseInvitationApiServiceApiControllerVerifyInvitationKeyFn = ({ id }: {
  id: string;
}, queryKey?: unknown[]) => [useInvitationApiServiceApiControllerVerifyInvitationKey, ...(queryKey ?? [{ id }])];
export type AccountApiServiceApiControllerGetAccountDefaultResponse = Awaited<ReturnType<typeof AccountApiService.apiControllerGetAccount>>;
export type AccountApiServiceApiControllerGetAccountQueryResult<TData = AccountApiServiceApiControllerGetAccountDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useAccountApiServiceApiControllerGetAccountKey = "AccountApiServiceApiControllerGetAccount";
export const UseAccountApiServiceApiControllerGetAccountKeyFn = (queryKey?: unknown[]) => [useAccountApiServiceApiControllerGetAccountKey, ...(queryKey ?? [])];
export type AccountApiServiceApiControllerGetLdapDefaultResponse = Awaited<ReturnType<typeof AccountApiService.apiControllerGetLdap>>;
export type AccountApiServiceApiControllerGetLdapQueryResult<TData = AccountApiServiceApiControllerGetLdapDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useAccountApiServiceApiControllerGetLdapKey = "AccountApiServiceApiControllerGetLdap";
export const UseAccountApiServiceApiControllerGetLdapKeyFn = ({ id }: {
  id: string;
}, queryKey?: unknown[]) => [useAccountApiServiceApiControllerGetLdapKey, ...(queryKey ?? [{ id }])];
export type AccountApiServiceApiControllerGetLdapserDefaultResponse = Awaited<ReturnType<typeof AccountApiService.apiControllerGetLdapser>>;
export type AccountApiServiceApiControllerGetLdapserQueryResult<TData = AccountApiServiceApiControllerGetLdapserDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useAccountApiServiceApiControllerGetLdapserKey = "AccountApiServiceApiControllerGetLdapser";
export const UseAccountApiServiceApiControllerGetLdapserKeyFn = (queryKey?: unknown[]) => [useAccountApiServiceApiControllerGetLdapserKey, ...(queryKey ?? [])];
export type AccountApiServiceApiControllerGetLdapsDefaultResponse = Awaited<ReturnType<typeof AccountApiService.apiControllerGetLdaps>>;
export type AccountApiServiceApiControllerGetLdapsQueryResult<TData = AccountApiServiceApiControllerGetLdapsDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useAccountApiServiceApiControllerGetLdapsKey = "AccountApiServiceApiControllerGetLdaps";
export const UseAccountApiServiceApiControllerGetLdapsKeyFn = ({ owner }: {
  owner?: string;
} = {}, queryKey?: unknown[]) => [useAccountApiServiceApiControllerGetLdapsKey, ...(queryKey ?? [{ owner }])];
export type AccountApiServiceApiControllerUserInfo2DefaultResponse = Awaited<ReturnType<typeof AccountApiService.apiControllerUserInfo2>>;
export type AccountApiServiceApiControllerUserInfo2QueryResult<TData = AccountApiServiceApiControllerUserInfo2DefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useAccountApiServiceApiControllerUserInfo2Key = "AccountApiServiceApiControllerUserInfo2";
export const UseAccountApiServiceApiControllerUserInfo2KeyFn = (queryKey?: unknown[]) => [useAccountApiServiceApiControllerUserInfo2Key, ...(queryKey ?? [])];
export type AccountApiServiceApiControllerUserInfoDefaultResponse = Awaited<ReturnType<typeof AccountApiService.apiControllerUserInfo>>;
export type AccountApiServiceApiControllerUserInfoQueryResult<TData = AccountApiServiceApiControllerUserInfoDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useAccountApiServiceApiControllerUserInfoKey = "AccountApiServiceApiControllerUserInfo";
export const UseAccountApiServiceApiControllerUserInfoKeyFn = (queryKey?: unknown[]) => [useAccountApiServiceApiControllerUserInfoKey, ...(queryKey ?? [])];
export type ModelApiServiceApiControllerGetModelDefaultResponse = Awaited<ReturnType<typeof ModelApiService.apiControllerGetModel>>;
export type ModelApiServiceApiControllerGetModelQueryResult<TData = ModelApiServiceApiControllerGetModelDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useModelApiServiceApiControllerGetModelKey = "ModelApiServiceApiControllerGetModel";
export const UseModelApiServiceApiControllerGetModelKeyFn = ({ id }: {
  id: string;
}, queryKey?: unknown[]) => [useModelApiServiceApiControllerGetModelKey, ...(queryKey ?? [{ id }])];
export type ModelApiServiceApiControllerGetModelsDefaultResponse = Awaited<ReturnType<typeof ModelApiService.apiControllerGetModels>>;
export type ModelApiServiceApiControllerGetModelsQueryResult<TData = ModelApiServiceApiControllerGetModelsDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useModelApiServiceApiControllerGetModelsKey = "ModelApiServiceApiControllerGetModels";
export const UseModelApiServiceApiControllerGetModelsKeyFn = ({ owner }: {
  owner: string;
}, queryKey?: unknown[]) => [useModelApiServiceApiControllerGetModelsKey, ...(queryKey ?? [{ owner }])];
export type OrganizationApiServiceApiControllerGetDefaultApplicationDefaultResponse = Awaited<ReturnType<typeof OrganizationApiService.apiControllerGetDefaultApplication>>;
export type OrganizationApiServiceApiControllerGetDefaultApplicationQueryResult<TData = OrganizationApiServiceApiControllerGetDefaultApplicationDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useOrganizationApiServiceApiControllerGetDefaultApplicationKey = "OrganizationApiServiceApiControllerGetDefaultApplication";
export const UseOrganizationApiServiceApiControllerGetDefaultApplicationKeyFn = ({ id }: {
  id: string;
}, queryKey?: unknown[]) => [useOrganizationApiServiceApiControllerGetDefaultApplicationKey, ...(queryKey ?? [{ id }])];
export type OrganizationApiServiceApiControllerGetOrganizationDefaultResponse = Awaited<ReturnType<typeof OrganizationApiService.apiControllerGetOrganization>>;
export type OrganizationApiServiceApiControllerGetOrganizationQueryResult<TData = OrganizationApiServiceApiControllerGetOrganizationDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useOrganizationApiServiceApiControllerGetOrganizationKey = "OrganizationApiServiceApiControllerGetOrganization";
export const UseOrganizationApiServiceApiControllerGetOrganizationKeyFn = ({ id }: {
  id: string;
}, queryKey?: unknown[]) => [useOrganizationApiServiceApiControllerGetOrganizationKey, ...(queryKey ?? [{ id }])];
export type OrganizationApiServiceApiControllerGetOrganizationNamesDefaultResponse = Awaited<ReturnType<typeof OrganizationApiService.apiControllerGetOrganizationNames>>;
export type OrganizationApiServiceApiControllerGetOrganizationNamesQueryResult<TData = OrganizationApiServiceApiControllerGetOrganizationNamesDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useOrganizationApiServiceApiControllerGetOrganizationNamesKey = "OrganizationApiServiceApiControllerGetOrganizationNames";
export const UseOrganizationApiServiceApiControllerGetOrganizationNamesKeyFn = ({ owner }: {
  owner: string;
}, queryKey?: unknown[]) => [useOrganizationApiServiceApiControllerGetOrganizationNamesKey, ...(queryKey ?? [{ owner }])];
export type OrganizationApiServiceApiControllerGetOrganizationsDefaultResponse = Awaited<ReturnType<typeof OrganizationApiService.apiControllerGetOrganizations>>;
export type OrganizationApiServiceApiControllerGetOrganizationsQueryResult<TData = OrganizationApiServiceApiControllerGetOrganizationsDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useOrganizationApiServiceApiControllerGetOrganizationsKey = "OrganizationApiServiceApiControllerGetOrganizations";
export const UseOrganizationApiServiceApiControllerGetOrganizationsKeyFn = ({ owner }: {
  owner: string;
}, queryKey?: unknown[]) => [useOrganizationApiServiceApiControllerGetOrganizationsKey, ...(queryKey ?? [{ owner }])];
export type PaymentApiServiceApiControllerGetPaymentDefaultResponse = Awaited<ReturnType<typeof PaymentApiService.apiControllerGetPayment>>;
export type PaymentApiServiceApiControllerGetPaymentQueryResult<TData = PaymentApiServiceApiControllerGetPaymentDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const usePaymentApiServiceApiControllerGetPaymentKey = "PaymentApiServiceApiControllerGetPayment";
export const UsePaymentApiServiceApiControllerGetPaymentKeyFn = ({ id }: {
  id: string;
}, queryKey?: unknown[]) => [usePaymentApiServiceApiControllerGetPaymentKey, ...(queryKey ?? [{ id }])];
export type PaymentApiServiceApiControllerGetPaymentsDefaultResponse = Awaited<ReturnType<typeof PaymentApiService.apiControllerGetPayments>>;
export type PaymentApiServiceApiControllerGetPaymentsQueryResult<TData = PaymentApiServiceApiControllerGetPaymentsDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const usePaymentApiServiceApiControllerGetPaymentsKey = "PaymentApiServiceApiControllerGetPayments";
export const UsePaymentApiServiceApiControllerGetPaymentsKeyFn = ({ owner }: {
  owner: string;
}, queryKey?: unknown[]) => [usePaymentApiServiceApiControllerGetPaymentsKey, ...(queryKey ?? [{ owner }])];
export type PaymentApiServiceApiControllerGetUserPaymentsDefaultResponse = Awaited<ReturnType<typeof PaymentApiService.apiControllerGetUserPayments>>;
export type PaymentApiServiceApiControllerGetUserPaymentsQueryResult<TData = PaymentApiServiceApiControllerGetUserPaymentsDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const usePaymentApiServiceApiControllerGetUserPaymentsKey = "PaymentApiServiceApiControllerGetUserPayments";
export const UsePaymentApiServiceApiControllerGetUserPaymentsKeyFn = ({ organization, owner, user }: {
  organization: string;
  owner: string;
  user: string;
}, queryKey?: unknown[]) => [usePaymentApiServiceApiControllerGetUserPaymentsKey, ...(queryKey ?? [{ organization, owner, user }])];
export type PermissionApiServiceApiControllerGetPermissionDefaultResponse = Awaited<ReturnType<typeof PermissionApiService.apiControllerGetPermission>>;
export type PermissionApiServiceApiControllerGetPermissionQueryResult<TData = PermissionApiServiceApiControllerGetPermissionDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const usePermissionApiServiceApiControllerGetPermissionKey = "PermissionApiServiceApiControllerGetPermission";
export const UsePermissionApiServiceApiControllerGetPermissionKeyFn = ({ id }: {
  id: string;
}, queryKey?: unknown[]) => [usePermissionApiServiceApiControllerGetPermissionKey, ...(queryKey ?? [{ id }])];
export type PermissionApiServiceApiControllerGetPermissionsDefaultResponse = Awaited<ReturnType<typeof PermissionApiService.apiControllerGetPermissions>>;
export type PermissionApiServiceApiControllerGetPermissionsQueryResult<TData = PermissionApiServiceApiControllerGetPermissionsDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const usePermissionApiServiceApiControllerGetPermissionsKey = "PermissionApiServiceApiControllerGetPermissions";
export const UsePermissionApiServiceApiControllerGetPermissionsKeyFn = ({ owner }: {
  owner: string;
}, queryKey?: unknown[]) => [usePermissionApiServiceApiControllerGetPermissionsKey, ...(queryKey ?? [{ owner }])];
export type PermissionApiServiceApiControllerGetPermissionsByRoleDefaultResponse = Awaited<ReturnType<typeof PermissionApiService.apiControllerGetPermissionsByRole>>;
export type PermissionApiServiceApiControllerGetPermissionsByRoleQueryResult<TData = PermissionApiServiceApiControllerGetPermissionsByRoleDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const usePermissionApiServiceApiControllerGetPermissionsByRoleKey = "PermissionApiServiceApiControllerGetPermissionsByRole";
export const UsePermissionApiServiceApiControllerGetPermissionsByRoleKeyFn = ({ id }: {
  id: string;
}, queryKey?: unknown[]) => [usePermissionApiServiceApiControllerGetPermissionsByRoleKey, ...(queryKey ?? [{ id }])];
export type PermissionApiServiceApiControllerGetPermissionsBySubmitterDefaultResponse = Awaited<ReturnType<typeof PermissionApiService.apiControllerGetPermissionsBySubmitter>>;
export type PermissionApiServiceApiControllerGetPermissionsBySubmitterQueryResult<TData = PermissionApiServiceApiControllerGetPermissionsBySubmitterDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const usePermissionApiServiceApiControllerGetPermissionsBySubmitterKey = "PermissionApiServiceApiControllerGetPermissionsBySubmitter";
export const UsePermissionApiServiceApiControllerGetPermissionsBySubmitterKeyFn = (queryKey?: unknown[]) => [usePermissionApiServiceApiControllerGetPermissionsBySubmitterKey, ...(queryKey ?? [])];
export type PlanApiServiceApiControllerGetPlanDefaultResponse = Awaited<ReturnType<typeof PlanApiService.apiControllerGetPlan>>;
export type PlanApiServiceApiControllerGetPlanQueryResult<TData = PlanApiServiceApiControllerGetPlanDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const usePlanApiServiceApiControllerGetPlanKey = "PlanApiServiceApiControllerGetPlan";
export const UsePlanApiServiceApiControllerGetPlanKeyFn = ({ id, includeOption }: {
  id: string;
  includeOption?: boolean;
}, queryKey?: unknown[]) => [usePlanApiServiceApiControllerGetPlanKey, ...(queryKey ?? [{ id, includeOption }])];
export type PlanApiServiceApiControllerGetPlansDefaultResponse = Awaited<ReturnType<typeof PlanApiService.apiControllerGetPlans>>;
export type PlanApiServiceApiControllerGetPlansQueryResult<TData = PlanApiServiceApiControllerGetPlansDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const usePlanApiServiceApiControllerGetPlansKey = "PlanApiServiceApiControllerGetPlans";
export const UsePlanApiServiceApiControllerGetPlansKeyFn = ({ owner }: {
  owner: string;
}, queryKey?: unknown[]) => [usePlanApiServiceApiControllerGetPlansKey, ...(queryKey ?? [{ owner }])];
export type PricingApiServiceApiControllerGetPricingDefaultResponse = Awaited<ReturnType<typeof PricingApiService.apiControllerGetPricing>>;
export type PricingApiServiceApiControllerGetPricingQueryResult<TData = PricingApiServiceApiControllerGetPricingDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const usePricingApiServiceApiControllerGetPricingKey = "PricingApiServiceApiControllerGetPricing";
export const UsePricingApiServiceApiControllerGetPricingKeyFn = ({ id }: {
  id: string;
}, queryKey?: unknown[]) => [usePricingApiServiceApiControllerGetPricingKey, ...(queryKey ?? [{ id }])];
export type PricingApiServiceApiControllerGetPricingsDefaultResponse = Awaited<ReturnType<typeof PricingApiService.apiControllerGetPricings>>;
export type PricingApiServiceApiControllerGetPricingsQueryResult<TData = PricingApiServiceApiControllerGetPricingsDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const usePricingApiServiceApiControllerGetPricingsKey = "PricingApiServiceApiControllerGetPricings";
export const UsePricingApiServiceApiControllerGetPricingsKeyFn = ({ owner }: {
  owner: string;
}, queryKey?: unknown[]) => [usePricingApiServiceApiControllerGetPricingsKey, ...(queryKey ?? [{ owner }])];
export type ProductApiServiceApiControllerGetProductDefaultResponse = Awaited<ReturnType<typeof ProductApiService.apiControllerGetProduct>>;
export type ProductApiServiceApiControllerGetProductQueryResult<TData = ProductApiServiceApiControllerGetProductDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useProductApiServiceApiControllerGetProductKey = "ProductApiServiceApiControllerGetProduct";
export const UseProductApiServiceApiControllerGetProductKeyFn = ({ id }: {
  id: string;
}, queryKey?: unknown[]) => [useProductApiServiceApiControllerGetProductKey, ...(queryKey ?? [{ id }])];
export type ProductApiServiceApiControllerGetProductsDefaultResponse = Awaited<ReturnType<typeof ProductApiService.apiControllerGetProducts>>;
export type ProductApiServiceApiControllerGetProductsQueryResult<TData = ProductApiServiceApiControllerGetProductsDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useProductApiServiceApiControllerGetProductsKey = "ProductApiServiceApiControllerGetProducts";
export const UseProductApiServiceApiControllerGetProductsKeyFn = ({ owner }: {
  owner: string;
}, queryKey?: unknown[]) => [useProductApiServiceApiControllerGetProductsKey, ...(queryKey ?? [{ owner }])];
export type ProviderApiServiceApiControllerGetGlobalProvidersDefaultResponse = Awaited<ReturnType<typeof ProviderApiService.apiControllerGetGlobalProviders>>;
export type ProviderApiServiceApiControllerGetGlobalProvidersQueryResult<TData = ProviderApiServiceApiControllerGetGlobalProvidersDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useProviderApiServiceApiControllerGetGlobalProvidersKey = "ProviderApiServiceApiControllerGetGlobalProviders";
export const UseProviderApiServiceApiControllerGetGlobalProvidersKeyFn = (queryKey?: unknown[]) => [useProviderApiServiceApiControllerGetGlobalProvidersKey, ...(queryKey ?? [])];
export type ProviderApiServiceApiControllerGetProviderDefaultResponse = Awaited<ReturnType<typeof ProviderApiService.apiControllerGetProvider>>;
export type ProviderApiServiceApiControllerGetProviderQueryResult<TData = ProviderApiServiceApiControllerGetProviderDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useProviderApiServiceApiControllerGetProviderKey = "ProviderApiServiceApiControllerGetProvider";
export const UseProviderApiServiceApiControllerGetProviderKeyFn = ({ id }: {
  id: string;
}, queryKey?: unknown[]) => [useProviderApiServiceApiControllerGetProviderKey, ...(queryKey ?? [{ id }])];
export type ProviderApiServiceApiControllerGetProvidersDefaultResponse = Awaited<ReturnType<typeof ProviderApiService.apiControllerGetProviders>>;
export type ProviderApiServiceApiControllerGetProvidersQueryResult<TData = ProviderApiServiceApiControllerGetProvidersDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useProviderApiServiceApiControllerGetProvidersKey = "ProviderApiServiceApiControllerGetProviders";
export const UseProviderApiServiceApiControllerGetProvidersKeyFn = ({ owner }: {
  owner: string;
}, queryKey?: unknown[]) => [useProviderApiServiceApiControllerGetProvidersKey, ...(queryKey ?? [{ owner }])];
export type ResourceApiServiceApiControllerGetResourceDefaultResponse = Awaited<ReturnType<typeof ResourceApiService.apiControllerGetResource>>;
export type ResourceApiServiceApiControllerGetResourceQueryResult<TData = ResourceApiServiceApiControllerGetResourceDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useResourceApiServiceApiControllerGetResourceKey = "ResourceApiServiceApiControllerGetResource";
export const UseResourceApiServiceApiControllerGetResourceKeyFn = ({ id }: {
  id: string;
}, queryKey?: unknown[]) => [useResourceApiServiceApiControllerGetResourceKey, ...(queryKey ?? [{ id }])];
export type ResourceApiServiceApiControllerGetResourcesDefaultResponse = Awaited<ReturnType<typeof ResourceApiService.apiControllerGetResources>>;
export type ResourceApiServiceApiControllerGetResourcesQueryResult<TData = ResourceApiServiceApiControllerGetResourcesDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useResourceApiServiceApiControllerGetResourcesKey = "ResourceApiServiceApiControllerGetResources";
export const UseResourceApiServiceApiControllerGetResourcesKeyFn = ({ field, owner, p, pageSize, sortField, sortOrder, user, value }: {
  field?: string;
  owner: string;
  p?: number;
  pageSize?: number;
  sortField?: string;
  sortOrder?: string;
  user: string;
  value?: string;
}, queryKey?: unknown[]) => [useResourceApiServiceApiControllerGetResourcesKey, ...(queryKey ?? [{ field, owner, p, pageSize, sortField, sortOrder, user, value }])];
export type RoleApiServiceApiControllerGetRoleDefaultResponse = Awaited<ReturnType<typeof RoleApiService.apiControllerGetRole>>;
export type RoleApiServiceApiControllerGetRoleQueryResult<TData = RoleApiServiceApiControllerGetRoleDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useRoleApiServiceApiControllerGetRoleKey = "RoleApiServiceApiControllerGetRole";
export const UseRoleApiServiceApiControllerGetRoleKeyFn = ({ id }: {
  id: string;
}, queryKey?: unknown[]) => [useRoleApiServiceApiControllerGetRoleKey, ...(queryKey ?? [{ id }])];
export type RoleApiServiceApiControllerGetRolesDefaultResponse = Awaited<ReturnType<typeof RoleApiService.apiControllerGetRoles>>;
export type RoleApiServiceApiControllerGetRolesQueryResult<TData = RoleApiServiceApiControllerGetRolesDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useRoleApiServiceApiControllerGetRolesKey = "RoleApiServiceApiControllerGetRoles";
export const UseRoleApiServiceApiControllerGetRolesKeyFn = ({ owner }: {
  owner: string;
}, queryKey?: unknown[]) => [useRoleApiServiceApiControllerGetRolesKey, ...(queryKey ?? [{ owner }])];
export type SessionApiServiceApiControllerGetSingleSessionDefaultResponse = Awaited<ReturnType<typeof SessionApiService.apiControllerGetSingleSession>>;
export type SessionApiServiceApiControllerGetSingleSessionQueryResult<TData = SessionApiServiceApiControllerGetSingleSessionDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useSessionApiServiceApiControllerGetSingleSessionKey = "SessionApiServiceApiControllerGetSingleSession";
export const UseSessionApiServiceApiControllerGetSingleSessionKeyFn = ({ id }: {
  id: string;
}, queryKey?: unknown[]) => [useSessionApiServiceApiControllerGetSingleSessionKey, ...(queryKey ?? [{ id }])];
export type SessionApiServiceApiControllerGetSessionsDefaultResponse = Awaited<ReturnType<typeof SessionApiService.apiControllerGetSessions>>;
export type SessionApiServiceApiControllerGetSessionsQueryResult<TData = SessionApiServiceApiControllerGetSessionsDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useSessionApiServiceApiControllerGetSessionsKey = "SessionApiServiceApiControllerGetSessions";
export const UseSessionApiServiceApiControllerGetSessionsKeyFn = ({ owner }: {
  owner: string;
}, queryKey?: unknown[]) => [useSessionApiServiceApiControllerGetSessionsKey, ...(queryKey ?? [{ owner }])];
export type SessionApiServiceApiControllerIsSessionDuplicatedDefaultResponse = Awaited<ReturnType<typeof SessionApiService.apiControllerIsSessionDuplicated>>;
export type SessionApiServiceApiControllerIsSessionDuplicatedQueryResult<TData = SessionApiServiceApiControllerIsSessionDuplicatedDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useSessionApiServiceApiControllerIsSessionDuplicatedKey = "SessionApiServiceApiControllerIsSessionDuplicated";
export const UseSessionApiServiceApiControllerIsSessionDuplicatedKeyFn = ({ id, sessionId }: {
  id: string;
  sessionId: string;
}, queryKey?: unknown[]) => [useSessionApiServiceApiControllerIsSessionDuplicatedKey, ...(queryKey ?? [{ id, sessionId }])];
export type SubscriptionApiServiceApiControllerGetSubscriptionDefaultResponse = Awaited<ReturnType<typeof SubscriptionApiService.apiControllerGetSubscription>>;
export type SubscriptionApiServiceApiControllerGetSubscriptionQueryResult<TData = SubscriptionApiServiceApiControllerGetSubscriptionDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useSubscriptionApiServiceApiControllerGetSubscriptionKey = "SubscriptionApiServiceApiControllerGetSubscription";
export const UseSubscriptionApiServiceApiControllerGetSubscriptionKeyFn = ({ id }: {
  id: string;
}, queryKey?: unknown[]) => [useSubscriptionApiServiceApiControllerGetSubscriptionKey, ...(queryKey ?? [{ id }])];
export type SubscriptionApiServiceApiControllerGetSubscriptionsDefaultResponse = Awaited<ReturnType<typeof SubscriptionApiService.apiControllerGetSubscriptions>>;
export type SubscriptionApiServiceApiControllerGetSubscriptionsQueryResult<TData = SubscriptionApiServiceApiControllerGetSubscriptionsDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useSubscriptionApiServiceApiControllerGetSubscriptionsKey = "SubscriptionApiServiceApiControllerGetSubscriptions";
export const UseSubscriptionApiServiceApiControllerGetSubscriptionsKeyFn = ({ owner }: {
  owner: string;
}, queryKey?: unknown[]) => [useSubscriptionApiServiceApiControllerGetSubscriptionsKey, ...(queryKey ?? [{ owner }])];
export type SyncerApiServiceApiControllerGetSyncerDefaultResponse = Awaited<ReturnType<typeof SyncerApiService.apiControllerGetSyncer>>;
export type SyncerApiServiceApiControllerGetSyncerQueryResult<TData = SyncerApiServiceApiControllerGetSyncerDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useSyncerApiServiceApiControllerGetSyncerKey = "SyncerApiServiceApiControllerGetSyncer";
export const UseSyncerApiServiceApiControllerGetSyncerKeyFn = ({ id }: {
  id: string;
}, queryKey?: unknown[]) => [useSyncerApiServiceApiControllerGetSyncerKey, ...(queryKey ?? [{ id }])];
export type SyncerApiServiceApiControllerGetSyncersDefaultResponse = Awaited<ReturnType<typeof SyncerApiService.apiControllerGetSyncers>>;
export type SyncerApiServiceApiControllerGetSyncersQueryResult<TData = SyncerApiServiceApiControllerGetSyncersDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useSyncerApiServiceApiControllerGetSyncersKey = "SyncerApiServiceApiControllerGetSyncers";
export const UseSyncerApiServiceApiControllerGetSyncersKeyFn = ({ owner }: {
  owner: string;
}, queryKey?: unknown[]) => [useSyncerApiServiceApiControllerGetSyncersKey, ...(queryKey ?? [{ owner }])];
export type SyncerApiServiceApiControllerRunSyncerDefaultResponse = Awaited<ReturnType<typeof SyncerApiService.apiControllerRunSyncer>>;
export type SyncerApiServiceApiControllerRunSyncerQueryResult<TData = SyncerApiServiceApiControllerRunSyncerDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useSyncerApiServiceApiControllerRunSyncerKey = "SyncerApiServiceApiControllerRunSyncer";
export const UseSyncerApiServiceApiControllerRunSyncerKeyFn = ({ body }: {
  body: object_Syncer;
}, queryKey?: unknown[]) => [useSyncerApiServiceApiControllerRunSyncerKey, ...(queryKey ?? [{ body }])];
export type TokenApiServiceApiControllerGetCaptchaStatusDefaultResponse = Awaited<ReturnType<typeof TokenApiService.apiControllerGetCaptchaStatus>>;
export type TokenApiServiceApiControllerGetCaptchaStatusQueryResult<TData = TokenApiServiceApiControllerGetCaptchaStatusDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useTokenApiServiceApiControllerGetCaptchaStatusKey = "TokenApiServiceApiControllerGetCaptchaStatus";
export const UseTokenApiServiceApiControllerGetCaptchaStatusKeyFn = ({ id }: {
  id: string;
}, queryKey?: unknown[]) => [useTokenApiServiceApiControllerGetCaptchaStatusKey, ...(queryKey ?? [{ id }])];
export type TokenApiServiceApiControllerGetTokenDefaultResponse = Awaited<ReturnType<typeof TokenApiService.apiControllerGetToken>>;
export type TokenApiServiceApiControllerGetTokenQueryResult<TData = TokenApiServiceApiControllerGetTokenDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useTokenApiServiceApiControllerGetTokenKey = "TokenApiServiceApiControllerGetToken";
export const UseTokenApiServiceApiControllerGetTokenKeyFn = ({ id }: {
  id: string;
}, queryKey?: unknown[]) => [useTokenApiServiceApiControllerGetTokenKey, ...(queryKey ?? [{ id }])];
export type TokenApiServiceApiControllerGetTokensDefaultResponse = Awaited<ReturnType<typeof TokenApiService.apiControllerGetTokens>>;
export type TokenApiServiceApiControllerGetTokensQueryResult<TData = TokenApiServiceApiControllerGetTokensDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useTokenApiServiceApiControllerGetTokensKey = "TokenApiServiceApiControllerGetTokens";
export const UseTokenApiServiceApiControllerGetTokensKeyFn = ({ owner, p, pageSize }: {
  owner: string;
  p: string;
  pageSize: string;
}, queryKey?: unknown[]) => [useTokenApiServiceApiControllerGetTokensKey, ...(queryKey ?? [{ owner, p, pageSize }])];
export type UserApiServiceApiControllerGetEmailAndPhoneDefaultResponse = Awaited<ReturnType<typeof UserApiService.apiControllerGetEmailAndPhone>>;
export type UserApiServiceApiControllerGetEmailAndPhoneQueryResult<TData = UserApiServiceApiControllerGetEmailAndPhoneDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useUserApiServiceApiControllerGetEmailAndPhoneKey = "UserApiServiceApiControllerGetEmailAndPhone";
export const UseUserApiServiceApiControllerGetEmailAndPhoneKeyFn = ({ organization, username }: {
  organization: string;
  username: string;
}, queryKey?: unknown[]) => [useUserApiServiceApiControllerGetEmailAndPhoneKey, ...(queryKey ?? [{ organization, username }])];
export type UserApiServiceApiControllerGetGlobalUsersDefaultResponse = Awaited<ReturnType<typeof UserApiService.apiControllerGetGlobalUsers>>;
export type UserApiServiceApiControllerGetGlobalUsersQueryResult<TData = UserApiServiceApiControllerGetGlobalUsersDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useUserApiServiceApiControllerGetGlobalUsersKey = "UserApiServiceApiControllerGetGlobalUsers";
export const UseUserApiServiceApiControllerGetGlobalUsersKeyFn = (queryKey?: unknown[]) => [useUserApiServiceApiControllerGetGlobalUsersKey, ...(queryKey ?? [])];
export type UserApiServiceApiControllerGetSortedUsersDefaultResponse = Awaited<ReturnType<typeof UserApiService.apiControllerGetSortedUsers>>;
export type UserApiServiceApiControllerGetSortedUsersQueryResult<TData = UserApiServiceApiControllerGetSortedUsersDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useUserApiServiceApiControllerGetSortedUsersKey = "UserApiServiceApiControllerGetSortedUsers";
export const UseUserApiServiceApiControllerGetSortedUsersKeyFn = ({ limit, owner, sorter }: {
  limit: string;
  owner: string;
  sorter: string;
}, queryKey?: unknown[]) => [useUserApiServiceApiControllerGetSortedUsersKey, ...(queryKey ?? [{ limit, owner, sorter }])];
export type UserApiServiceApiControllerGetUserDefaultResponse = Awaited<ReturnType<typeof UserApiService.apiControllerGetUser>>;
export type UserApiServiceApiControllerGetUserQueryResult<TData = UserApiServiceApiControllerGetUserDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useUserApiServiceApiControllerGetUserKey = "UserApiServiceApiControllerGetUser";
export const UseUserApiServiceApiControllerGetUserKeyFn = ({ email, id, owner, phone, userId }: {
  email?: string;
  id?: string;
  owner?: string;
  phone?: string;
  userId?: string;
} = {}, queryKey?: unknown[]) => [useUserApiServiceApiControllerGetUserKey, ...(queryKey ?? [{ email, id, owner, phone, userId }])];
export type UserApiServiceApiControllerGetUserCountDefaultResponse = Awaited<ReturnType<typeof UserApiService.apiControllerGetUserCount>>;
export type UserApiServiceApiControllerGetUserCountQueryResult<TData = UserApiServiceApiControllerGetUserCountDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useUserApiServiceApiControllerGetUserCountKey = "UserApiServiceApiControllerGetUserCount";
export const UseUserApiServiceApiControllerGetUserCountKeyFn = ({ isOnline, owner }: {
  isOnline: string;
  owner: string;
}, queryKey?: unknown[]) => [useUserApiServiceApiControllerGetUserCountKey, ...(queryKey ?? [{ isOnline, owner }])];
export type UserApiServiceApiControllerGetUsersDefaultResponse = Awaited<ReturnType<typeof UserApiService.apiControllerGetUsers>>;
export type UserApiServiceApiControllerGetUsersQueryResult<TData = UserApiServiceApiControllerGetUsersDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useUserApiServiceApiControllerGetUsersKey = "UserApiServiceApiControllerGetUsers";
export const UseUserApiServiceApiControllerGetUsersKeyFn = ({ owner }: {
  owner: string;
}, queryKey?: unknown[]) => [useUserApiServiceApiControllerGetUsersKey, ...(queryKey ?? [{ owner }])];
export type UserApiServiceApiControllerWebAuthnSignupBeginDefaultResponse = Awaited<ReturnType<typeof UserApiService.apiControllerWebAuthnSignupBegin>>;
export type UserApiServiceApiControllerWebAuthnSignupBeginQueryResult<TData = UserApiServiceApiControllerWebAuthnSignupBeginDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useUserApiServiceApiControllerWebAuthnSignupBeginKey = "UserApiServiceApiControllerWebAuthnSignupBegin";
export const UseUserApiServiceApiControllerWebAuthnSignupBeginKeyFn = (queryKey?: unknown[]) => [useUserApiServiceApiControllerWebAuthnSignupBeginKey, ...(queryKey ?? [])];
export type WebhookApiServiceApiControllerGetWebhookDefaultResponse = Awaited<ReturnType<typeof WebhookApiService.apiControllerGetWebhook>>;
export type WebhookApiServiceApiControllerGetWebhookQueryResult<TData = WebhookApiServiceApiControllerGetWebhookDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useWebhookApiServiceApiControllerGetWebhookKey = "WebhookApiServiceApiControllerGetWebhook";
export const UseWebhookApiServiceApiControllerGetWebhookKeyFn = ({ id }: {
  id: string;
}, queryKey?: unknown[]) => [useWebhookApiServiceApiControllerGetWebhookKey, ...(queryKey ?? [{ id }])];
export type WebhookApiServiceApiControllerGetWebhooksDefaultResponse = Awaited<ReturnType<typeof WebhookApiService.apiControllerGetWebhooks>>;
export type WebhookApiServiceApiControllerGetWebhooksQueryResult<TData = WebhookApiServiceApiControllerGetWebhooksDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useWebhookApiServiceApiControllerGetWebhooksKey = "WebhookApiServiceApiControllerGetWebhooks";
export const UseWebhookApiServiceApiControllerGetWebhooksKeyFn = ({ owner }: {
  owner: string;
}, queryKey?: unknown[]) => [useWebhookApiServiceApiControllerGetWebhooksKey, ...(queryKey ?? [{ owner }])];
export type LoginApiServiceApiControllerGetApplicationLoginDefaultResponse = Awaited<ReturnType<typeof LoginApiService.apiControllerGetApplicationLogin>>;
export type LoginApiServiceApiControllerGetApplicationLoginQueryResult<TData = LoginApiServiceApiControllerGetApplicationLoginDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useLoginApiServiceApiControllerGetApplicationLoginKey = "LoginApiServiceApiControllerGetApplicationLogin";
export const UseLoginApiServiceApiControllerGetApplicationLoginKeyFn = ({ clientId, redirectUri, responseType, scope, state }: {
  clientId: string;
  redirectUri: string;
  responseType: string;
  scope: string;
  state: string;
}, queryKey?: unknown[]) => [useLoginApiServiceApiControllerGetApplicationLoginKey, ...(queryKey ?? [{ clientId, redirectUri, responseType, scope, state }])];
export type LoginApiServiceApiControllerGetCaptchaDefaultResponse = Awaited<ReturnType<typeof LoginApiService.apiControllerGetCaptcha>>;
export type LoginApiServiceApiControllerGetCaptchaQueryResult<TData = LoginApiServiceApiControllerGetCaptchaDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useLoginApiServiceApiControllerGetCaptchaKey = "LoginApiServiceApiControllerGetCaptcha";
export const UseLoginApiServiceApiControllerGetCaptchaKeyFn = (queryKey?: unknown[]) => [useLoginApiServiceApiControllerGetCaptchaKey, ...(queryKey ?? [])];
export type LoginApiServiceApiControllerWebAuthnSigninBeginDefaultResponse = Awaited<ReturnType<typeof LoginApiService.apiControllerWebAuthnSigninBegin>>;
export type LoginApiServiceApiControllerWebAuthnSigninBeginQueryResult<TData = LoginApiServiceApiControllerWebAuthnSigninBeginDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useLoginApiServiceApiControllerWebAuthnSigninBeginKey = "LoginApiServiceApiControllerWebAuthnSigninBegin";
export const UseLoginApiServiceApiControllerWebAuthnSigninBeginKeyFn = ({ name, owner }: {
  name: string;
  owner: string;
}, queryKey?: unknown[]) => [useLoginApiServiceApiControllerWebAuthnSigninBeginKey, ...(queryKey ?? [{ name, owner }])];
export type SystemApiServiceApiControllerGetDashboardDefaultResponse = Awaited<ReturnType<typeof SystemApiService.apiControllerGetDashboard>>;
export type SystemApiServiceApiControllerGetDashboardQueryResult<TData = SystemApiServiceApiControllerGetDashboardDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useSystemApiServiceApiControllerGetDashboardKey = "SystemApiServiceApiControllerGetDashboard";
export const UseSystemApiServiceApiControllerGetDashboardKeyFn = (queryKey?: unknown[]) => [useSystemApiServiceApiControllerGetDashboardKey, ...(queryKey ?? [])];
export type SystemApiServiceApiControllerGetPrometheusInfoDefaultResponse = Awaited<ReturnType<typeof SystemApiService.apiControllerGetPrometheusInfo>>;
export type SystemApiServiceApiControllerGetPrometheusInfoQueryResult<TData = SystemApiServiceApiControllerGetPrometheusInfoDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useSystemApiServiceApiControllerGetPrometheusInfoKey = "SystemApiServiceApiControllerGetPrometheusInfo";
export const UseSystemApiServiceApiControllerGetPrometheusInfoKeyFn = (queryKey?: unknown[]) => [useSystemApiServiceApiControllerGetPrometheusInfoKey, ...(queryKey ?? [])];
export type SystemApiServiceApiControllerGetSystemInfoDefaultResponse = Awaited<ReturnType<typeof SystemApiService.apiControllerGetSystemInfo>>;
export type SystemApiServiceApiControllerGetSystemInfoQueryResult<TData = SystemApiServiceApiControllerGetSystemInfoDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useSystemApiServiceApiControllerGetSystemInfoKey = "SystemApiServiceApiControllerGetSystemInfo";
export const UseSystemApiServiceApiControllerGetSystemInfoKeyFn = (queryKey?: unknown[]) => [useSystemApiServiceApiControllerGetSystemInfoKey, ...(queryKey ?? [])];
export type SystemApiServiceApiControllerGetVersionInfoDefaultResponse = Awaited<ReturnType<typeof SystemApiService.apiControllerGetVersionInfo>>;
export type SystemApiServiceApiControllerGetVersionInfoQueryResult<TData = SystemApiServiceApiControllerGetVersionInfoDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useSystemApiServiceApiControllerGetVersionInfoKey = "SystemApiServiceApiControllerGetVersionInfo";
export const UseSystemApiServiceApiControllerGetVersionInfoKeyFn = (queryKey?: unknown[]) => [useSystemApiServiceApiControllerGetVersionInfoKey, ...(queryKey ?? [])];
export type SystemApiServiceApiControllerGetWebhookEventTypeDefaultResponse = Awaited<ReturnType<typeof SystemApiService.apiControllerGetWebhookEventType>>;
export type SystemApiServiceApiControllerGetWebhookEventTypeQueryResult<TData = SystemApiServiceApiControllerGetWebhookEventTypeDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useSystemApiServiceApiControllerGetWebhookEventTypeKey = "SystemApiServiceApiControllerGetWebhookEventType";
export const UseSystemApiServiceApiControllerGetWebhookEventTypeKeyFn = (queryKey?: unknown[]) => [useSystemApiServiceApiControllerGetWebhookEventTypeKey, ...(queryKey ?? [])];
export type SystemApiServiceApiControllerHealthDefaultResponse = Awaited<ReturnType<typeof SystemApiService.apiControllerHealth>>;
export type SystemApiServiceApiControllerHealthQueryResult<TData = SystemApiServiceApiControllerHealthDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useSystemApiServiceApiControllerHealthKey = "SystemApiServiceApiControllerHealth";
export const UseSystemApiServiceApiControllerHealthKeyFn = (queryKey?: unknown[]) => [useSystemApiServiceApiControllerHealthKey, ...(queryKey ?? [])];
export type CallbackApiServiceApiControllerCallbackMutationResult = Awaited<ReturnType<typeof CallbackApiService.apiControllerCallback>>;
export type AdapterApiServiceApiControllerAddAdapterMutationResult = Awaited<ReturnType<typeof AdapterApiService.apiControllerAddAdapter>>;
export type AdapterApiServiceApiControllerDeleteAdapterMutationResult = Awaited<ReturnType<typeof AdapterApiService.apiControllerDeleteAdapter>>;
export type AdapterApiServiceApiControllerUpdateAdapterMutationResult = Awaited<ReturnType<typeof AdapterApiService.apiControllerUpdateAdapter>>;
export type ApplicationApiServiceApiControllerAddApplicationMutationResult = Awaited<ReturnType<typeof ApplicationApiService.apiControllerAddApplication>>;
export type ApplicationApiServiceApiControllerDeleteApplicationMutationResult = Awaited<ReturnType<typeof ApplicationApiService.apiControllerDeleteApplication>>;
export type ApplicationApiServiceApiControllerUpdateApplicationMutationResult = Awaited<ReturnType<typeof ApplicationApiService.apiControllerUpdateApplication>>;
export type CertApiServiceApiControllerAddCertMutationResult = Awaited<ReturnType<typeof CertApiService.apiControllerAddCert>>;
export type CertApiServiceApiControllerDeleteCertMutationResult = Awaited<ReturnType<typeof CertApiService.apiControllerDeleteCert>>;
export type CertApiServiceApiControllerUpdateCertMutationResult = Awaited<ReturnType<typeof CertApiService.apiControllerUpdateCert>>;
export type EnforcerApiServiceApiControllerAddEnforcerMutationResult = Awaited<ReturnType<typeof EnforcerApiService.apiControllerAddEnforcer>>;
export type EnforcerApiServiceApiControllerBatchEnforceMutationResult = Awaited<ReturnType<typeof EnforcerApiService.apiControllerBatchEnforce>>;
export type EnforcerApiServiceApiControllerDeleteEnforcerMutationResult = Awaited<ReturnType<typeof EnforcerApiService.apiControllerDeleteEnforcer>>;
export type EnforcerApiServiceApiControllerEnforceMutationResult = Awaited<ReturnType<typeof EnforcerApiService.apiControllerEnforce>>;
export type EnforcerApiServiceApiControllerUpdateEnforcerMutationResult = Awaited<ReturnType<typeof EnforcerApiService.apiControllerUpdateEnforcer>>;
export type GroupApiServiceApiControllerAddGroupMutationResult = Awaited<ReturnType<typeof GroupApiService.apiControllerAddGroup>>;
export type GroupApiServiceApiControllerDeleteGroupMutationResult = Awaited<ReturnType<typeof GroupApiService.apiControllerDeleteGroup>>;
export type GroupApiServiceApiControllerUpdateGroupMutationResult = Awaited<ReturnType<typeof GroupApiService.apiControllerUpdateGroup>>;
export type InvitationApiServiceApiControllerAddInvitationMutationResult = Awaited<ReturnType<typeof InvitationApiService.apiControllerAddInvitation>>;
export type InvitationApiServiceApiControllerDeleteInvitationMutationResult = Awaited<ReturnType<typeof InvitationApiService.apiControllerDeleteInvitation>>;
export type InvitationApiServiceApiControllerUpdateInvitationMutationResult = Awaited<ReturnType<typeof InvitationApiService.apiControllerUpdateInvitation>>;
export type AccountApiServiceApiControllerAddLdapMutationResult = Awaited<ReturnType<typeof AccountApiService.apiControllerAddLdap>>;
export type AccountApiServiceApiControllerDeleteLdapMutationResult = Awaited<ReturnType<typeof AccountApiService.apiControllerDeleteLdap>>;
export type AccountApiServiceApiControllerResetEmailOrPhoneMutationResult = Awaited<ReturnType<typeof AccountApiService.apiControllerResetEmailOrPhone>>;
export type AccountApiServiceApiControllerSetPasswordMutationResult = Awaited<ReturnType<typeof AccountApiService.apiControllerSetPassword>>;
export type AccountApiServiceApiControllerSyncLdapUsersMutationResult = Awaited<ReturnType<typeof AccountApiService.apiControllerSyncLdapUsers>>;
export type AccountApiServiceApiControllerUpdateLdapMutationResult = Awaited<ReturnType<typeof AccountApiService.apiControllerUpdateLdap>>;
export type ModelApiServiceApiControllerAddModelMutationResult = Awaited<ReturnType<typeof ModelApiService.apiControllerAddModel>>;
export type ModelApiServiceApiControllerDeleteModelMutationResult = Awaited<ReturnType<typeof ModelApiService.apiControllerDeleteModel>>;
export type ModelApiServiceApiControllerUpdateModelMutationResult = Awaited<ReturnType<typeof ModelApiService.apiControllerUpdateModel>>;
export type OrganizationApiServiceApiControllerAddOrganizationMutationResult = Awaited<ReturnType<typeof OrganizationApiService.apiControllerAddOrganization>>;
export type OrganizationApiServiceApiControllerDeleteOrganizationMutationResult = Awaited<ReturnType<typeof OrganizationApiService.apiControllerDeleteOrganization>>;
export type OrganizationApiServiceApiControllerUpdateOrganizationMutationResult = Awaited<ReturnType<typeof OrganizationApiService.apiControllerUpdateOrganization>>;
export type PaymentApiServiceApiControllerAddPaymentMutationResult = Awaited<ReturnType<typeof PaymentApiService.apiControllerAddPayment>>;
export type PaymentApiServiceApiControllerDeletePaymentMutationResult = Awaited<ReturnType<typeof PaymentApiService.apiControllerDeletePayment>>;
export type PaymentApiServiceApiControllerInvoicePaymentMutationResult = Awaited<ReturnType<typeof PaymentApiService.apiControllerInvoicePayment>>;
export type PaymentApiServiceApiControllerNotifyPaymentMutationResult = Awaited<ReturnType<typeof PaymentApiService.apiControllerNotifyPayment>>;
export type PaymentApiServiceApiControllerUpdatePaymentMutationResult = Awaited<ReturnType<typeof PaymentApiService.apiControllerUpdatePayment>>;
export type PermissionApiServiceApiControllerAddPermissionMutationResult = Awaited<ReturnType<typeof PermissionApiService.apiControllerAddPermission>>;
export type PermissionApiServiceApiControllerDeletePermissionMutationResult = Awaited<ReturnType<typeof PermissionApiService.apiControllerDeletePermission>>;
export type PermissionApiServiceApiControllerUpdatePermissionMutationResult = Awaited<ReturnType<typeof PermissionApiService.apiControllerUpdatePermission>>;
export type PlanApiServiceApiControllerAddPlanMutationResult = Awaited<ReturnType<typeof PlanApiService.apiControllerAddPlan>>;
export type PlanApiServiceApiControllerDeletePlanMutationResult = Awaited<ReturnType<typeof PlanApiService.apiControllerDeletePlan>>;
export type PlanApiServiceApiControllerUpdatePlanMutationResult = Awaited<ReturnType<typeof PlanApiService.apiControllerUpdatePlan>>;
export type PricingApiServiceApiControllerAddPricingMutationResult = Awaited<ReturnType<typeof PricingApiService.apiControllerAddPricing>>;
export type PricingApiServiceApiControllerDeletePricingMutationResult = Awaited<ReturnType<typeof PricingApiService.apiControllerDeletePricing>>;
export type PricingApiServiceApiControllerUpdatePricingMutationResult = Awaited<ReturnType<typeof PricingApiService.apiControllerUpdatePricing>>;
export type ProductApiServiceApiControllerAddProductMutationResult = Awaited<ReturnType<typeof ProductApiService.apiControllerAddProduct>>;
export type ProductApiServiceApiControllerBuyProductMutationResult = Awaited<ReturnType<typeof ProductApiService.apiControllerBuyProduct>>;
export type ProductApiServiceApiControllerDeleteProductMutationResult = Awaited<ReturnType<typeof ProductApiService.apiControllerDeleteProduct>>;
export type ProductApiServiceApiControllerUpdateProductMutationResult = Awaited<ReturnType<typeof ProductApiService.apiControllerUpdateProduct>>;
export type ProviderApiServiceApiControllerAddProviderMutationResult = Awaited<ReturnType<typeof ProviderApiService.apiControllerAddProvider>>;
export type ProviderApiServiceApiControllerDeleteProviderMutationResult = Awaited<ReturnType<typeof ProviderApiService.apiControllerDeleteProvider>>;
export type ProviderApiServiceApiControllerUpdateProviderMutationResult = Awaited<ReturnType<typeof ProviderApiService.apiControllerUpdateProvider>>;
export type ResourceApiServiceApiControllerAddResourceMutationResult = Awaited<ReturnType<typeof ResourceApiService.apiControllerAddResource>>;
export type ResourceApiServiceApiControllerDeleteResourceMutationResult = Awaited<ReturnType<typeof ResourceApiService.apiControllerDeleteResource>>;
export type ResourceApiServiceApiControllerUpdateResourceMutationResult = Awaited<ReturnType<typeof ResourceApiService.apiControllerUpdateResource>>;
export type ResourceApiServiceApiControllerUploadResourceMutationResult = Awaited<ReturnType<typeof ResourceApiService.apiControllerUploadResource>>;
export type RoleApiServiceApiControllerAddRoleMutationResult = Awaited<ReturnType<typeof RoleApiService.apiControllerAddRole>>;
export type RoleApiServiceApiControllerDeleteRoleMutationResult = Awaited<ReturnType<typeof RoleApiService.apiControllerDeleteRole>>;
export type RoleApiServiceApiControllerUpdateRoleMutationResult = Awaited<ReturnType<typeof RoleApiService.apiControllerUpdateRole>>;
export type SessionApiServiceApiControllerAddSessionMutationResult = Awaited<ReturnType<typeof SessionApiService.apiControllerAddSession>>;
export type SessionApiServiceApiControllerDeleteSessionMutationResult = Awaited<ReturnType<typeof SessionApiService.apiControllerDeleteSession>>;
export type SessionApiServiceApiControllerUpdateSessionMutationResult = Awaited<ReturnType<typeof SessionApiService.apiControllerUpdateSession>>;
export type SubscriptionApiServiceApiControllerAddSubscriptionMutationResult = Awaited<ReturnType<typeof SubscriptionApiService.apiControllerAddSubscription>>;
export type SubscriptionApiServiceApiControllerDeleteSubscriptionMutationResult = Awaited<ReturnType<typeof SubscriptionApiService.apiControllerDeleteSubscription>>;
export type SubscriptionApiServiceApiControllerUpdateSubscriptionMutationResult = Awaited<ReturnType<typeof SubscriptionApiService.apiControllerUpdateSubscription>>;
export type SyncerApiServiceApiControllerAddSyncerMutationResult = Awaited<ReturnType<typeof SyncerApiService.apiControllerAddSyncer>>;
export type SyncerApiServiceApiControllerDeleteSyncerMutationResult = Awaited<ReturnType<typeof SyncerApiService.apiControllerDeleteSyncer>>;
export type SyncerApiServiceApiControllerUpdateSyncerMutationResult = Awaited<ReturnType<typeof SyncerApiService.apiControllerUpdateSyncer>>;
export type TokenApiServiceApiControllerAddTokenMutationResult = Awaited<ReturnType<typeof TokenApiService.apiControllerAddToken>>;
export type TokenApiServiceApiControllerDeleteTokenMutationResult = Awaited<ReturnType<typeof TokenApiService.apiControllerDeleteToken>>;
export type TokenApiServiceApiControllerGetOauthTokenMutationResult = Awaited<ReturnType<typeof TokenApiService.apiControllerGetOauthToken>>;
export type TokenApiServiceApiControllerRefreshTokenMutationResult = Awaited<ReturnType<typeof TokenApiService.apiControllerRefreshToken>>;
export type TokenApiServiceApiControllerUpdateTokenMutationResult = Awaited<ReturnType<typeof TokenApiService.apiControllerUpdateToken>>;
export type UserApiServiceApiControllerAddUserMutationResult = Awaited<ReturnType<typeof UserApiService.apiControllerAddUser>>;
export type UserApiServiceApiControllerAddUserKeysMutationResult = Awaited<ReturnType<typeof UserApiService.apiControllerAddUserKeys>>;
export type UserApiServiceApiControllerCheckUserPasswordMutationResult = Awaited<ReturnType<typeof UserApiService.apiControllerCheckUserPassword>>;
export type UserApiServiceApiControllerDeleteUserMutationResult = Awaited<ReturnType<typeof UserApiService.apiControllerDeleteUser>>;
export type UserApiServiceApiControllerUpdateUserMutationResult = Awaited<ReturnType<typeof UserApiService.apiControllerUpdateUser>>;
export type UserApiServiceApiControllerWebAuthnSignupFinishMutationResult = Awaited<ReturnType<typeof UserApiService.apiControllerWebAuthnSignupFinish>>;
export type WebhookApiServiceApiControllerAddWebhookMutationResult = Awaited<ReturnType<typeof WebhookApiService.apiControllerAddWebhook>>;
export type WebhookApiServiceApiControllerDeleteWebhookMutationResult = Awaited<ReturnType<typeof WebhookApiService.apiControllerDeleteWebhook>>;
export type WebhookApiServiceApiControllerUpdateWebhookMutationResult = Awaited<ReturnType<typeof WebhookApiService.apiControllerUpdateWebhook>>;
export type MfaApiServiceApiControllerDeleteMfaMutationResult = Awaited<ReturnType<typeof MfaApiService.apiControllerDeleteMfa>>;
export type MfaApiServiceApiControllerMfaSetupEnableMutationResult = Awaited<ReturnType<typeof MfaApiService.apiControllerMfaSetupEnable>>;
export type MfaApiServiceApiControllerMfaSetupInitiateMutationResult = Awaited<ReturnType<typeof MfaApiService.apiControllerMfaSetupInitiate>>;
export type MfaApiServiceApiControllerMfaSetupVerifyMutationResult = Awaited<ReturnType<typeof MfaApiService.apiControllerMfaSetupVerify>>;
export type MfaApiServiceApiControllerSetPreferredMfaMutationResult = Awaited<ReturnType<typeof MfaApiService.apiControllerSetPreferredMfa>>;
export type LoginApiServiceApiControllerLoginMutationResult = Awaited<ReturnType<typeof LoginApiService.apiControllerLogin>>;
export type LoginApiServiceApiControllerIntrospectTokenMutationResult = Awaited<ReturnType<typeof LoginApiService.apiControllerIntrospectToken>>;
export type LoginApiServiceApiControllerLogoutMutationResult = Awaited<ReturnType<typeof LoginApiService.apiControllerLogout>>;
export type LoginApiServiceApiControllerSignupMutationResult = Awaited<ReturnType<typeof LoginApiService.apiControllerSignup>>;
export type LoginApiServiceApiControllerUnlinkMutationResult = Awaited<ReturnType<typeof LoginApiService.apiControllerUnlink>>;
export type LoginApiServiceApiControllerWebAuthnSigninFinishMutationResult = Awaited<ReturnType<typeof LoginApiService.apiControllerWebAuthnSigninFinish>>;
export type SystemApiServiceApiControllerHandleOfficialAccountEventMutationResult = Awaited<ReturnType<typeof SystemApiService.apiControllerHandleOfficialAccountEvent>>;
export type ServiceApiServiceApiControllerSendEmailMutationResult = Awaited<ReturnType<typeof ServiceApiService.apiControllerSendEmail>>;
export type ServiceApiServiceApiControllerSendNotificationMutationResult = Awaited<ReturnType<typeof ServiceApiService.apiControllerSendNotification>>;
export type ServiceApiServiceApiControllerSendSmsMutationResult = Awaited<ReturnType<typeof ServiceApiService.apiControllerSendSms>>;
export type VerificationApiServiceApiControllerSendVerificationCodeMutationResult = Awaited<ReturnType<typeof VerificationApiService.apiControllerSendVerificationCode>>;
export type VerificationApiServiceApiControllerVerifyCaptchaMutationResult = Awaited<ReturnType<typeof VerificationApiService.apiControllerVerifyCaptcha>>;
export type VerificationApiServiceApiControllerVerifyCodeMutationResult = Awaited<ReturnType<typeof VerificationApiService.apiControllerVerifyCode>>;
