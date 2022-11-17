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
  DefaultShareScope,
  SharePermission,
  SharePermissionInputBean,
} from '../models';

export interface AddSharePermissionRequest {
    id: number;
    sharePermissionInputBean: SharePermissionInputBean;
}

export interface DeleteSharePermissionRequest {
    id: number;
    permissionId: number;
}

export interface GetSharePermissionRequest {
    id: number;
    permissionId: number;
}

export interface GetSharePermissionsRequest {
    id: number;
}

export interface SetDefaultShareScopeRequest {
    defaultShareScope: DefaultShareScope;
}

/**
 * 
 */
export class FilterSharingApi extends runtime.BaseAPI {

    /**
     * Add a share permissions to a filter. If you add a global share permission (one for all logged-in users or the public) it will overwrite all share permissions for the filter.  Be aware that this operation uses different objects for updating share permissions compared to [Update filter](#api-rest-api-3-filter-id-put).  **[Permissions](#permissions) required:** *Share dashboards and filters* [global permission](https://confluence.atlassian.com/x/x4dKLg) and the user must own the filter.
     * Add share permission
     */
    async addSharePermissionRaw(requestParameters: AddSharePermissionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<SharePermission>>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling addSharePermission.');
        }

        if (requestParameters.sharePermissionInputBean === null || requestParameters.sharePermissionInputBean === undefined) {
            throw new runtime.RequiredError('sharePermissionInputBean','Required parameter requestParameters.sharePermissionInputBean was null or undefined when calling addSharePermission.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["write:jira-work"]);
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/rest/api/3/filter/{id}/permission`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.sharePermissionInputBean,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Add a share permissions to a filter. If you add a global share permission (one for all logged-in users or the public) it will overwrite all share permissions for the filter.  Be aware that this operation uses different objects for updating share permissions compared to [Update filter](#api-rest-api-3-filter-id-put).  **[Permissions](#permissions) required:** *Share dashboards and filters* [global permission](https://confluence.atlassian.com/x/x4dKLg) and the user must own the filter.
     * Add share permission
     */
    async addSharePermission(requestParameters: AddSharePermissionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<SharePermission>> {
        const response = await this.addSharePermissionRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Deletes a share permission from a filter.  **[Permissions](#permissions) required:** Permission to access Jira and the user must own the filter.
     * Delete share permission
     */
    async deleteSharePermissionRaw(requestParameters: DeleteSharePermissionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling deleteSharePermission.');
        }

        if (requestParameters.permissionId === null || requestParameters.permissionId === undefined) {
            throw new runtime.RequiredError('permissionId','Required parameter requestParameters.permissionId was null or undefined when calling deleteSharePermission.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["write:jira-work"]);
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/rest/api/3/filter/{id}/permission/{permissionId}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))).replace(`{${"permissionId"}}`, encodeURIComponent(String(requestParameters.permissionId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Deletes a share permission from a filter.  **[Permissions](#permissions) required:** Permission to access Jira and the user must own the filter.
     * Delete share permission
     */
    async deleteSharePermission(requestParameters: DeleteSharePermissionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteSharePermissionRaw(requestParameters, initOverrides);
    }

    /**
     * Returns the default sharing settings for new filters and dashboards for a user.  **[Permissions](#permissions) required:** Permission to access Jira.
     * Get default share scope
     */
    async getDefaultShareScopeRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DefaultShareScope>> {
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
            path: `/rest/api/3/filter/defaultShareScope`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns the default sharing settings for new filters and dashboards for a user.  **[Permissions](#permissions) required:** Permission to access Jira.
     * Get default share scope
     */
    async getDefaultShareScope(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DefaultShareScope> {
        const response = await this.getDefaultShareScopeRaw(initOverrides);
        return await response.value();
    }

    /**
     * Returns a share permission for a filter. A filter can be shared with groups, projects, all logged-in users, or the public. Sharing with all logged-in users or the public is known as a global share permission.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** None, however, a share permission is only returned for:   *  filters owned by the user.  *  filters shared with a group that the user is a member of.  *  filters shared with a private project that the user has *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for.  *  filters shared with a public project.  *  filters shared with the public.
     * Get share permission
     */
    async getSharePermissionRaw(requestParameters: GetSharePermissionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SharePermission>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getSharePermission.');
        }

        if (requestParameters.permissionId === null || requestParameters.permissionId === undefined) {
            throw new runtime.RequiredError('permissionId','Required parameter requestParameters.permissionId was null or undefined when calling getSharePermission.');
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
            path: `/rest/api/3/filter/{id}/permission/{permissionId}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))).replace(`{${"permissionId"}}`, encodeURIComponent(String(requestParameters.permissionId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns a share permission for a filter. A filter can be shared with groups, projects, all logged-in users, or the public. Sharing with all logged-in users or the public is known as a global share permission.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** None, however, a share permission is only returned for:   *  filters owned by the user.  *  filters shared with a group that the user is a member of.  *  filters shared with a private project that the user has *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for.  *  filters shared with a public project.  *  filters shared with the public.
     * Get share permission
     */
    async getSharePermission(requestParameters: GetSharePermissionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SharePermission> {
        const response = await this.getSharePermissionRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns the share permissions for a filter. A filter can be shared with groups, projects, all logged-in users, or the public. Sharing with all logged-in users or the public is known as a global share permission.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** None, however, share permissions are only returned for:   *  filters owned by the user.  *  filters shared with a group that the user is a member of.  *  filters shared with a private project that the user has *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for.  *  filters shared with a public project.  *  filters shared with the public.
     * Get share permissions
     */
    async getSharePermissionsRaw(requestParameters: GetSharePermissionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<SharePermission>>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getSharePermissions.');
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
            path: `/rest/api/3/filter/{id}/permission`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns the share permissions for a filter. A filter can be shared with groups, projects, all logged-in users, or the public. Sharing with all logged-in users or the public is known as a global share permission.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** None, however, share permissions are only returned for:   *  filters owned by the user.  *  filters shared with a group that the user is a member of.  *  filters shared with a private project that the user has *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for.  *  filters shared with a public project.  *  filters shared with the public.
     * Get share permissions
     */
    async getSharePermissions(requestParameters: GetSharePermissionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<SharePermission>> {
        const response = await this.getSharePermissionsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Sets the default sharing for new filters and dashboards for a user.  **[Permissions](#permissions) required:** Permission to access Jira.
     * Set default share scope
     */
    async setDefaultShareScopeRaw(requestParameters: SetDefaultShareScopeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DefaultShareScope>> {
        if (requestParameters.defaultShareScope === null || requestParameters.defaultShareScope === undefined) {
            throw new runtime.RequiredError('defaultShareScope','Required parameter requestParameters.defaultShareScope was null or undefined when calling setDefaultShareScope.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["write:jira-work"]);
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/rest/api/3/filter/defaultShareScope`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.defaultShareScope,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Sets the default sharing for new filters and dashboards for a user.  **[Permissions](#permissions) required:** Permission to access Jira.
     * Set default share scope
     */
    async setDefaultShareScope(requestParameters: SetDefaultShareScopeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DefaultShareScope> {
        const response = await this.setDefaultShareScopeRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
