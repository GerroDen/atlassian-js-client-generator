/* tslint:disable */
/* eslint-disable */
/**
 * The Jira Cloud platform REST API
 * Jira Cloud platform REST API documentation
 *
 * The version of the OpenAPI document: 1001.0.0-SNAPSHOT
 * Contact: ecosystem@atlassian.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  CustomFieldConfigurations,
  PageBeanContextualConfiguration,
} from '../models';

export interface GetCustomFieldConfigurationRequest {
    fieldIdOrKey: string;
    id?: number[];
    fieldContextId?: number[];
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
     * Returns a [paginated](#pagination) list of configurations for a custom field created by a [Forge app](https://developer.atlassian.com/platform/forge/).  The result can be filtered by one of these criteria:   *  `id`.  *  `fieldContextId`.  *  `issueId`.  *  `projectKeyOrId` and `issueTypeId`.  Otherwise, all configurations are returned.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). Jira permissions are not required for the Forge app that created the custom field.
     * Get custom field configurations
     */
    async getCustomFieldConfigurationRaw(requestParameters: GetCustomFieldConfigurationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PageBeanContextualConfiguration>> {
        if (requestParameters.fieldIdOrKey === null || requestParameters.fieldIdOrKey === undefined) {
            throw new runtime.RequiredError('fieldIdOrKey','Required parameter requestParameters.fieldIdOrKey was null or undefined when calling getCustomFieldConfiguration.');
        }

        const queryParameters: any = {};

        if (requestParameters.id) {
            queryParameters['id'] = requestParameters.id;
        }

        if (requestParameters.fieldContextId) {
            queryParameters['fieldContextId'] = requestParameters.fieldContextId;
        }

        if (requestParameters.issueId !== undefined) {
            queryParameters['issueId'] = requestParameters.issueId;
        }

        if (requestParameters.projectKeyOrId !== undefined) {
            queryParameters['projectKeyOrId'] = requestParameters.projectKeyOrId;
        }

        if (requestParameters.issueTypeId !== undefined) {
            queryParameters['issueTypeId'] = requestParameters.issueTypeId;
        }

        if (requestParameters.startAt !== undefined) {
            queryParameters['startAt'] = requestParameters.startAt;
        }

        if (requestParameters.maxResults !== undefined) {
            queryParameters['maxResults'] = requestParameters.maxResults;
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
            path: `/rest/api/3/app/field/{fieldIdOrKey}/context/configuration`.replace(`{${"fieldIdOrKey"}}`, encodeURIComponent(String(requestParameters.fieldIdOrKey))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns a [paginated](#pagination) list of configurations for a custom field created by a [Forge app](https://developer.atlassian.com/platform/forge/).  The result can be filtered by one of these criteria:   *  `id`.  *  `fieldContextId`.  *  `issueId`.  *  `projectKeyOrId` and `issueTypeId`.  Otherwise, all configurations are returned.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). Jira permissions are not required for the Forge app that created the custom field.
     * Get custom field configurations
     */
    async getCustomFieldConfiguration(requestParameters: GetCustomFieldConfigurationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PageBeanContextualConfiguration> {
        const response = await this.getCustomFieldConfigurationRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update the configuration for contexts of a custom field created by a [Forge app](https://developer.atlassian.com/platform/forge/).  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). Jira permissions are not required for the Forge app that created the custom field.
     * Update custom field configurations
     */
    async updateCustomFieldConfigurationRaw(requestParameters: UpdateCustomFieldConfigurationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>> {
        if (requestParameters.fieldIdOrKey === null || requestParameters.fieldIdOrKey === undefined) {
            throw new runtime.RequiredError('fieldIdOrKey','Required parameter requestParameters.fieldIdOrKey was null or undefined when calling updateCustomFieldConfiguration.');
        }

        if (requestParameters.customFieldConfigurations === null || requestParameters.customFieldConfigurations === undefined) {
            throw new runtime.RequiredError('customFieldConfigurations','Required parameter requestParameters.customFieldConfigurations was null or undefined when calling updateCustomFieldConfiguration.');
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
            path: `/rest/api/3/app/field/{fieldIdOrKey}/context/configuration`.replace(`{${"fieldIdOrKey"}}`, encodeURIComponent(String(requestParameters.fieldIdOrKey))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.customFieldConfigurations,
        }, initOverrides);

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * Update the configuration for contexts of a custom field created by a [Forge app](https://developer.atlassian.com/platform/forge/).  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). Jira permissions are not required for the Forge app that created the custom field.
     * Update custom field configurations
     */
    async updateCustomFieldConfiguration(requestParameters: UpdateCustomFieldConfigurationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any> {
        const response = await this.updateCustomFieldConfigurationRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
