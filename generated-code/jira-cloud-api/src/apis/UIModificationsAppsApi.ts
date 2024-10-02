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
  CreateUiModificationDetails,
  DetailedErrorCollection,
  PageBeanUiModificationDetails,
  UiModificationIdentifiers,
  UpdateUiModificationDetails,
} from '../models/index';

export interface CreateUiModificationRequest {
    createUiModificationDetails: CreateUiModificationDetails;
}

export interface DeleteUiModificationRequest {
    uiModificationId: string;
}

export interface GetUiModificationsRequest {
    startAt?: number;
    maxResults?: number;
    expand?: string;
}

export interface UpdateUiModificationRequest {
    uiModificationId: string;
    updateUiModificationDetails: UpdateUiModificationDetails;
}

/**
 * 
 */
export class UIModificationsAppsApi extends runtime.BaseAPI {

    /**
     * Creates a UI modification. UI modification can only be created by Forge apps.  Each app can define up to 3000 UI modifications. Each UI modification can define up to 1000 contexts. The same context can be assigned to maximum 100 UI modifications.  **[Permissions](#permissions) required:**   *  *None* if the UI modification is created without contexts.  *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for one or more projects, if the UI modification is created with contexts.  The new `write:app-data:jira` OAuth scope is 100% optional now, and not using it won\'t break your app. However, we recommend adding it to your app\'s scope list because we will eventually make it mandatory.
     * Create UI modification
     */
    async createUiModificationRaw(requestParameters: CreateUiModificationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UiModificationIdentifiers>> {
        if (requestParameters['createUiModificationDetails'] == null) {
            throw new runtime.RequiredError(
                'createUiModificationDetails',
                'Required parameter "createUiModificationDetails" was null or undefined when calling createUiModification().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["read:jira-work"]);
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/rest/api/3/uiModifications`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['createUiModificationDetails'],
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Creates a UI modification. UI modification can only be created by Forge apps.  Each app can define up to 3000 UI modifications. Each UI modification can define up to 1000 contexts. The same context can be assigned to maximum 100 UI modifications.  **[Permissions](#permissions) required:**   *  *None* if the UI modification is created without contexts.  *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for one or more projects, if the UI modification is created with contexts.  The new `write:app-data:jira` OAuth scope is 100% optional now, and not using it won\'t break your app. However, we recommend adding it to your app\'s scope list because we will eventually make it mandatory.
     * Create UI modification
     */
    async createUiModification(requestParameters: CreateUiModificationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UiModificationIdentifiers> {
        const response = await this.createUiModificationRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Deletes a UI modification. All the contexts that belong to the UI modification are deleted too. UI modification can only be deleted by Forge apps.  **[Permissions](#permissions) required:** None.  The new `write:app-data:jira` OAuth scope is 100% optional now, and not using it won\'t break your app. However, we recommend adding it to your app\'s scope list because we will eventually make it mandatory.
     * Delete UI modification
     */
    async deleteUiModificationRaw(requestParameters: DeleteUiModificationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>> {
        if (requestParameters['uiModificationId'] == null) {
            throw new runtime.RequiredError(
                'uiModificationId',
                'Required parameter "uiModificationId" was null or undefined when calling deleteUiModification().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", []);
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/rest/api/3/uiModifications/{uiModificationId}`.replace(`{${"uiModificationId"}}`, encodeURIComponent(String(requestParameters['uiModificationId']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<any>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     * Deletes a UI modification. All the contexts that belong to the UI modification are deleted too. UI modification can only be deleted by Forge apps.  **[Permissions](#permissions) required:** None.  The new `write:app-data:jira` OAuth scope is 100% optional now, and not using it won\'t break your app. However, we recommend adding it to your app\'s scope list because we will eventually make it mandatory.
     * Delete UI modification
     */
    async deleteUiModification(requestParameters: DeleteUiModificationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any> {
        const response = await this.deleteUiModificationRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Gets UI modifications. UI modifications can only be retrieved by Forge apps.  **[Permissions](#permissions) required:** None.  The new `read:app-data:jira` OAuth scope is 100% optional now, and not using it won\'t break your app. However, we recommend adding it to your app\'s scope list because we will eventually make it mandatory.
     * Get UI modifications
     */
    async getUiModificationsRaw(requestParameters: GetUiModificationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PageBeanUiModificationDetails>> {
        const queryParameters: any = {};

        if (requestParameters['startAt'] != null) {
            queryParameters['startAt'] = requestParameters['startAt'];
        }

        if (requestParameters['maxResults'] != null) {
            queryParameters['maxResults'] = requestParameters['maxResults'];
        }

        if (requestParameters['expand'] != null) {
            queryParameters['expand'] = requestParameters['expand'];
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
            path: `/rest/api/3/uiModifications`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Gets UI modifications. UI modifications can only be retrieved by Forge apps.  **[Permissions](#permissions) required:** None.  The new `read:app-data:jira` OAuth scope is 100% optional now, and not using it won\'t break your app. However, we recommend adding it to your app\'s scope list because we will eventually make it mandatory.
     * Get UI modifications
     */
    async getUiModifications(requestParameters: GetUiModificationsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PageBeanUiModificationDetails> {
        const response = await this.getUiModificationsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Updates a UI modification. UI modification can only be updated by Forge apps.  Each UI modification can define up to 1000 contexts. The same context can be assigned to maximum 100 UI modifications.  **[Permissions](#permissions) required:**   *  *None* if the UI modification is created without contexts.  *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for one or more projects, if the UI modification is created with contexts.  The new `write:app-data:jira` OAuth scope is 100% optional now, and not using it won\'t break your app. However, we recommend adding it to your app\'s scope list because we will eventually make it mandatory.
     * Update UI modification
     */
    async updateUiModificationRaw(requestParameters: UpdateUiModificationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>> {
        if (requestParameters['uiModificationId'] == null) {
            throw new runtime.RequiredError(
                'uiModificationId',
                'Required parameter "uiModificationId" was null or undefined when calling updateUiModification().'
            );
        }

        if (requestParameters['updateUiModificationDetails'] == null) {
            throw new runtime.RequiredError(
                'updateUiModificationDetails',
                'Required parameter "updateUiModificationDetails" was null or undefined when calling updateUiModification().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["read:jira-work"]);
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/rest/api/3/uiModifications/{uiModificationId}`.replace(`{${"uiModificationId"}}`, encodeURIComponent(String(requestParameters['uiModificationId']))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['updateUiModificationDetails'],
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<any>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     * Updates a UI modification. UI modification can only be updated by Forge apps.  Each UI modification can define up to 1000 contexts. The same context can be assigned to maximum 100 UI modifications.  **[Permissions](#permissions) required:**   *  *None* if the UI modification is created without contexts.  *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for one or more projects, if the UI modification is created with contexts.  The new `write:app-data:jira` OAuth scope is 100% optional now, and not using it won\'t break your app. However, we recommend adding it to your app\'s scope list because we will eventually make it mandatory.
     * Update UI modification
     */
    async updateUiModification(requestParameters: UpdateUiModificationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any> {
        const response = await this.updateUiModificationRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
