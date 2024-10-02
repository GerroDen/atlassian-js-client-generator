/* tslint:disable */
/* eslint-disable */
/**
 * The Jira Cloud platform REST API
 * Jira Cloud platform REST API documentation
 *
 * The version of the OpenAPI document: 1001.0.0-SNAPSHOT-b3300bcdd36d8c214940b3035162ea6fa1d58aa8
 * Contact: ecosystem@atlassian.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  ConfigurationsListParameters,
  CustomFieldConfigurations,
  PageBeanBulkContextualConfiguration,
  PageBeanContextualConfiguration,
} from '../models/index';

export interface GetCustomFieldConfigurationRequest {
    fieldIdOrKey: string;
    id?: Array<number>;
    fieldContextId?: Array<number>;
    issueId?: number;
    projectKeyOrId?: string;
    issueTypeId?: string;
    startAt?: number;
    maxResults?: number;
}

export interface GetCustomFieldsConfigurationsRequest {
    configurationsListParameters: ConfigurationsListParameters;
    id?: Array<number>;
    fieldContextId?: Array<number>;
    issueId?: number;
    projectKeyOrId?: string;
    issueTypeId?: string;
    startAt?: number;
    maxResults?: number;
}

export interface UpdateCustomFieldConfigurationRequest {
    fieldIdOrKey: string;
    customFieldConfigurations: CustomFieldConfigurations;
}

/**
 * 
 */
export class IssueCustomFieldConfigurationAppsApi extends runtime.BaseAPI {

    /**
     * Returns a [paginated](#pagination) list of configurations for a custom field of a [type](https://developer.atlassian.com/platform/forge/manifest-reference/modules/jira-custom-field-type/) created by a [Forge app](https://developer.atlassian.com/platform/forge/).  The result can be filtered by one of these criteria:   *  `id`.  *  `fieldContextId`.  *  `issueId`.  *  `projectKeyOrId` and `issueTypeId`.  Otherwise, all configurations are returned.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). Jira permissions are not required for the Forge app that provided the custom field type.
     * Get custom field configurations
     */
    async getCustomFieldConfigurationRaw(requestParameters: GetCustomFieldConfigurationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PageBeanContextualConfiguration>> {
        if (requestParameters['fieldIdOrKey'] == null) {
            throw new runtime.RequiredError(
                'fieldIdOrKey',
                'Required parameter "fieldIdOrKey" was null or undefined when calling getCustomFieldConfiguration().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['id'] != null) {
            queryParameters['id'] = requestParameters['id'];
        }

        if (requestParameters['fieldContextId'] != null) {
            queryParameters['fieldContextId'] = requestParameters['fieldContextId'];
        }

        if (requestParameters['issueId'] != null) {
            queryParameters['issueId'] = requestParameters['issueId'];
        }

        if (requestParameters['projectKeyOrId'] != null) {
            queryParameters['projectKeyOrId'] = requestParameters['projectKeyOrId'];
        }

        if (requestParameters['issueTypeId'] != null) {
            queryParameters['issueTypeId'] = requestParameters['issueTypeId'];
        }

        if (requestParameters['startAt'] != null) {
            queryParameters['startAt'] = requestParameters['startAt'];
        }

        if (requestParameters['maxResults'] != null) {
            queryParameters['maxResults'] = requestParameters['maxResults'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["manage:jira-configuration"]);
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/rest/api/3/app/field/{fieldIdOrKey}/context/configuration`.replace(`{${"fieldIdOrKey"}}`, encodeURIComponent(String(requestParameters['fieldIdOrKey']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns a [paginated](#pagination) list of configurations for a custom field of a [type](https://developer.atlassian.com/platform/forge/manifest-reference/modules/jira-custom-field-type/) created by a [Forge app](https://developer.atlassian.com/platform/forge/).  The result can be filtered by one of these criteria:   *  `id`.  *  `fieldContextId`.  *  `issueId`.  *  `projectKeyOrId` and `issueTypeId`.  Otherwise, all configurations are returned.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). Jira permissions are not required for the Forge app that provided the custom field type.
     * Get custom field configurations
     */
    async getCustomFieldConfiguration(requestParameters: GetCustomFieldConfigurationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PageBeanContextualConfiguration> {
        const response = await this.getCustomFieldConfigurationRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns a [paginated](#pagination) list of configurations for list of custom fields of a [type](https://developer.atlassian.com/platform/forge/manifest-reference/modules/jira-custom-field-type/) created by a [Forge app](https://developer.atlassian.com/platform/forge/).  The result can be filtered by one of these criteria:   *  `id`.  *  `fieldContextId`.  *  `issueId`.  *  `projectKeyOrId` and `issueTypeId`.  Otherwise, all configurations for the provided list of custom fields are returned.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). Jira permissions are not required for the Forge app that provided the custom field type.
     * Bulk get custom field configurations
     */
    async getCustomFieldsConfigurationsRaw(requestParameters: GetCustomFieldsConfigurationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PageBeanBulkContextualConfiguration>> {
        if (requestParameters['configurationsListParameters'] == null) {
            throw new runtime.RequiredError(
                'configurationsListParameters',
                'Required parameter "configurationsListParameters" was null or undefined when calling getCustomFieldsConfigurations().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['id'] != null) {
            queryParameters['id'] = requestParameters['id'];
        }

        if (requestParameters['fieldContextId'] != null) {
            queryParameters['fieldContextId'] = requestParameters['fieldContextId'];
        }

        if (requestParameters['issueId'] != null) {
            queryParameters['issueId'] = requestParameters['issueId'];
        }

        if (requestParameters['projectKeyOrId'] != null) {
            queryParameters['projectKeyOrId'] = requestParameters['projectKeyOrId'];
        }

        if (requestParameters['issueTypeId'] != null) {
            queryParameters['issueTypeId'] = requestParameters['issueTypeId'];
        }

        if (requestParameters['startAt'] != null) {
            queryParameters['startAt'] = requestParameters['startAt'];
        }

        if (requestParameters['maxResults'] != null) {
            queryParameters['maxResults'] = requestParameters['maxResults'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["manage:jira-configuration"]);
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/rest/api/3/app/field/context/configuration/list`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['configurationsListParameters'],
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns a [paginated](#pagination) list of configurations for list of custom fields of a [type](https://developer.atlassian.com/platform/forge/manifest-reference/modules/jira-custom-field-type/) created by a [Forge app](https://developer.atlassian.com/platform/forge/).  The result can be filtered by one of these criteria:   *  `id`.  *  `fieldContextId`.  *  `issueId`.  *  `projectKeyOrId` and `issueTypeId`.  Otherwise, all configurations for the provided list of custom fields are returned.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). Jira permissions are not required for the Forge app that provided the custom field type.
     * Bulk get custom field configurations
     */
    async getCustomFieldsConfigurations(requestParameters: GetCustomFieldsConfigurationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PageBeanBulkContextualConfiguration> {
        const response = await this.getCustomFieldsConfigurationsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update the configuration for contexts of a custom field of a [type](https://developer.atlassian.com/platform/forge/manifest-reference/modules/jira-custom-field-type/) created by a [Forge app](https://developer.atlassian.com/platform/forge/).  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). Jira permissions are not required for the Forge app that created the custom field type.
     * Update custom field configurations
     */
    async updateCustomFieldConfigurationRaw(requestParameters: UpdateCustomFieldConfigurationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>> {
        if (requestParameters['fieldIdOrKey'] == null) {
            throw new runtime.RequiredError(
                'fieldIdOrKey',
                'Required parameter "fieldIdOrKey" was null or undefined when calling updateCustomFieldConfiguration().'
            );
        }

        if (requestParameters['customFieldConfigurations'] == null) {
            throw new runtime.RequiredError(
                'customFieldConfigurations',
                'Required parameter "customFieldConfigurations" was null or undefined when calling updateCustomFieldConfiguration().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["manage:jira-configuration"]);
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/rest/api/3/app/field/{fieldIdOrKey}/context/configuration`.replace(`{${"fieldIdOrKey"}}`, encodeURIComponent(String(requestParameters['fieldIdOrKey']))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['customFieldConfigurations'],
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<any>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     * Update the configuration for contexts of a custom field of a [type](https://developer.atlassian.com/platform/forge/manifest-reference/modules/jira-custom-field-type/) created by a [Forge app](https://developer.atlassian.com/platform/forge/).  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). Jira permissions are not required for the Forge app that created the custom field type.
     * Update custom field configurations
     */
    async updateCustomFieldConfiguration(requestParameters: UpdateCustomFieldConfigurationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any> {
        const response = await this.updateCustomFieldConfigurationRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
