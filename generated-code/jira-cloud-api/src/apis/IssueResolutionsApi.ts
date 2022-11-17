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
  CreateResolutionDetails,
  ErrorCollection,
  PageBeanResolutionJsonBean,
  ReorderIssueResolutionsRequest,
  Resolution,
  ResolutionId,
  SetDefaultResolutionRequest,
  TaskProgressBeanObject,
  UpdateResolutionDetails,
} from '../models';

export interface CreateResolutionRequest {
    requestBody: { [key: string]: any; };
}

export interface DeleteResolutionRequest {
    id: string;
    replaceWith: string;
}

export interface GetResolutionRequest {
    id: string;
}

export interface MoveResolutionsRequest {
    reorderIssueResolutionsRequest: ReorderIssueResolutionsRequest;
}

export interface SearchResolutionsRequest {
    startAt?: number;
    maxResults?: number;
    id?: Array<string>;
    onlyDefault?: boolean;
}

export interface SetDefaultResolutionOperationRequest {
    setDefaultResolutionRequest: SetDefaultResolutionRequest;
}

export interface UpdateResolutionRequest {
    id: string;
    requestBody: { [key: string]: any; };
}

/**
 * 
 */
export class IssueResolutionsApi extends runtime.BaseAPI {

    /**
     * Creates an issue resolution.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Create resolution
     */
    async createResolutionRaw(requestParameters: CreateResolutionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ResolutionId>> {
        if (requestParameters.requestBody === null || requestParameters.requestBody === undefined) {
            throw new runtime.RequiredError('requestBody','Required parameter requestParameters.requestBody was null or undefined when calling createResolution.');
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
            path: `/rest/api/3/resolution`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.requestBody,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Creates an issue resolution.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Create resolution
     */
    async createResolution(requestParameters: CreateResolutionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ResolutionId> {
        const response = await this.createResolutionRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Deletes an issue resolution.  This operation is [asynchronous](#async). Follow the `location` link in the response to determine the status of the task and use [Get task](#api-rest-api-3-task-taskId-get) to obtain subsequent updates.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Delete resolution
     */
    async deleteResolutionRaw(requestParameters: DeleteResolutionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling deleteResolution.');
        }

        if (requestParameters.replaceWith === null || requestParameters.replaceWith === undefined) {
            throw new runtime.RequiredError('replaceWith','Required parameter requestParameters.replaceWith was null or undefined when calling deleteResolution.');
        }

        const queryParameters: any = {};

        if (requestParameters.replaceWith !== undefined) {
            queryParameters['replaceWith'] = requestParameters.replaceWith;
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
            path: `/rest/api/3/resolution/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Deletes an issue resolution.  This operation is [asynchronous](#async). Follow the `location` link in the response to determine the status of the task and use [Get task](#api-rest-api-3-task-taskId-get) to obtain subsequent updates.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Delete resolution
     */
    async deleteResolution(requestParameters: DeleteResolutionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteResolutionRaw(requestParameters, initOverrides);
    }

    /**
     * Returns an issue resolution value.  **[Permissions](#permissions) required:** Permission to access Jira.
     * Get resolution
     */
    async getResolutionRaw(requestParameters: GetResolutionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Resolution>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getResolution.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["read:jira-work"]);
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/rest/api/3/resolution/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns an issue resolution value.  **[Permissions](#permissions) required:** Permission to access Jira.
     * Get resolution
     */
    async getResolution(requestParameters: GetResolutionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Resolution> {
        const response = await this.getResolutionRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns a list of all issue resolution values.  **[Permissions](#permissions) required:** Permission to access Jira.
     * Get resolutions
     */
    async getResolutionsRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<Resolution>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["read:jira-work"]);
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/rest/api/3/resolution`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns a list of all issue resolution values.  **[Permissions](#permissions) required:** Permission to access Jira.
     * Get resolutions
     */
    async getResolutions(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<Resolution>> {
        const response = await this.getResolutionsRaw(initOverrides);
        return await response.value();
    }

    /**
     * Changes the order of issue resolutions.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Move resolutions
     */
    async moveResolutionsRaw(requestParameters: MoveResolutionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>> {
        if (requestParameters.reorderIssueResolutionsRequest === null || requestParameters.reorderIssueResolutionsRequest === undefined) {
            throw new runtime.RequiredError('reorderIssueResolutionsRequest','Required parameter requestParameters.reorderIssueResolutionsRequest was null or undefined when calling moveResolutions.');
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
            path: `/rest/api/3/resolution/move`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.reorderIssueResolutionsRequest,
        }, initOverrides);

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * Changes the order of issue resolutions.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Move resolutions
     */
    async moveResolutions(requestParameters: MoveResolutionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any> {
        const response = await this.moveResolutionsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns a [paginated](#pagination) list of resolutions. The list can contain all resolutions or a subset determined by any combination of these criteria:   *  a list of resolutions IDs.  *  whether the field configuration is a default. This returns resolutions from company-managed (classic) projects only, as there is no concept of default resolutions in team-managed projects.  **[Permissions](#permissions) required:** Permission to access Jira.
     * Search resolutions
     */
    async searchResolutionsRaw(requestParameters: SearchResolutionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PageBeanResolutionJsonBean>> {
        const queryParameters: any = {};

        if (requestParameters.startAt !== undefined) {
            queryParameters['startAt'] = requestParameters.startAt;
        }

        if (requestParameters.maxResults !== undefined) {
            queryParameters['maxResults'] = requestParameters.maxResults;
        }

        if (requestParameters.id) {
            queryParameters['id'] = requestParameters.id;
        }

        if (requestParameters.onlyDefault !== undefined) {
            queryParameters['onlyDefault'] = requestParameters.onlyDefault;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["read:jira-work"]);
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/rest/api/3/resolution/search`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns a [paginated](#pagination) list of resolutions. The list can contain all resolutions or a subset determined by any combination of these criteria:   *  a list of resolutions IDs.  *  whether the field configuration is a default. This returns resolutions from company-managed (classic) projects only, as there is no concept of default resolutions in team-managed projects.  **[Permissions](#permissions) required:** Permission to access Jira.
     * Search resolutions
     */
    async searchResolutions(requestParameters: SearchResolutionsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PageBeanResolutionJsonBean> {
        const response = await this.searchResolutionsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Sets default issue resolution.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Set default resolution
     */
    async setDefaultResolutionRaw(requestParameters: SetDefaultResolutionOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>> {
        if (requestParameters.setDefaultResolutionRequest === null || requestParameters.setDefaultResolutionRequest === undefined) {
            throw new runtime.RequiredError('setDefaultResolutionRequest','Required parameter requestParameters.setDefaultResolutionRequest was null or undefined when calling setDefaultResolution.');
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
            path: `/rest/api/3/resolution/default`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.setDefaultResolutionRequest,
        }, initOverrides);

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * Sets default issue resolution.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Set default resolution
     */
    async setDefaultResolution(requestParameters: SetDefaultResolutionOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any> {
        const response = await this.setDefaultResolutionRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Updates an issue resolution.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Update resolution
     */
    async updateResolutionRaw(requestParameters: UpdateResolutionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling updateResolution.');
        }

        if (requestParameters.requestBody === null || requestParameters.requestBody === undefined) {
            throw new runtime.RequiredError('requestBody','Required parameter requestParameters.requestBody was null or undefined when calling updateResolution.');
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
            path: `/rest/api/3/resolution/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.requestBody,
        }, initOverrides);

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * Updates an issue resolution.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Update resolution
     */
    async updateResolution(requestParameters: UpdateResolutionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any> {
        const response = await this.updateResolutionRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
