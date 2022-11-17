/* tslint:disable */
/* eslint-disable */
/**
 * The Confluence Cloud REST API
 * This document describes the REST API and resources provided by Confluence. The REST APIs are for developers who want to integrate Confluence into their application and for administrators who want to script interactions with the Confluence server.Confluence\'s REST APIs provide access to resources (data entities) via URI paths. To use a REST API, your application will make an HTTP request and parse the response. The response format is JSON. Your methods will be the standard HTTP methods like GET, PUT, POST and DELETE. Because the REST API is based on open standards, you can use any web development language to access the API.
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  SpacePermissionCustomContent,
  SpacePermissionRequest,
  SpacePermissionV2,
} from '../models';

export interface AddCustomContentPermissionsRequest {
    spaceKey: string;
    body: SpacePermissionCustomContent;
}

export interface AddPermissionToSpaceRequest {
    spaceKey: string;
    body: { [key: string]: any; };
}

export interface RemovePermissionRequest {
    spaceKey: string;
    id: number;
}

/**
 * 
 */
export class SpacePermissionsApi extends runtime.BaseAPI {

    /**
     * Adds new custom content permission to space.  If the permission to be added is a group permission, the group can be identified by its group name or group id.  Note: Only apps can access this REST resource and only make changes to the respective app permissions.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: \'Admin\' permission for the space.
     * Add new custom content permission to space
     */
    async addCustomContentPermissionsRaw(requestParameters: AddCustomContentPermissionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.spaceKey === null || requestParameters.spaceKey === undefined) {
            throw new runtime.RequiredError('spaceKey','Required parameter requestParameters.spaceKey was null or undefined when calling addCustomContentPermissions.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling addCustomContentPermissions.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oAuthDefinitions", ["read:space.permission:confluence", "write:space.permission:confluence"]);
        }

        const response = await this.request({
            path: `/wiki/rest/api/space/{spaceKey}/permission/custom-content`.replace(`{${"spaceKey"}}`, encodeURIComponent(String(requestParameters.spaceKey))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.body,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Adds new custom content permission to space.  If the permission to be added is a group permission, the group can be identified by its group name or group id.  Note: Only apps can access this REST resource and only make changes to the respective app permissions.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: \'Admin\' permission for the space.
     * Add new custom content permission to space
     */
    async addCustomContentPermissions(requestParameters: AddCustomContentPermissionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.addCustomContentPermissionsRaw(requestParameters, initOverrides);
    }

    /**
     * Adds new permission to space.  If the permission to be added is a group permission, the group can be identified by its group name or group id.  Note: Apps cannot access this REST resource - including when utilizing user impersonation.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: \'Admin\' permission for the space.
     * Add new permission to space
     */
    async addPermissionToSpaceRaw(requestParameters: AddPermissionToSpaceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SpacePermissionV2>> {
        if (requestParameters.spaceKey === null || requestParameters.spaceKey === undefined) {
            throw new runtime.RequiredError('spaceKey','Required parameter requestParameters.spaceKey was null or undefined when calling addPermissionToSpace.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling addPermissionToSpace.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oAuthDefinitions", ["read:space.permission:confluence", "write:space.permission:confluence"]);
        }

        const response = await this.request({
            path: `/wiki/rest/api/space/{spaceKey}/permission`.replace(`{${"spaceKey"}}`, encodeURIComponent(String(requestParameters.spaceKey))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.body,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Adds new permission to space.  If the permission to be added is a group permission, the group can be identified by its group name or group id.  Note: Apps cannot access this REST resource - including when utilizing user impersonation.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: \'Admin\' permission for the space.
     * Add new permission to space
     */
    async addPermissionToSpace(requestParameters: AddPermissionToSpaceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SpacePermissionV2> {
        const response = await this.addPermissionToSpaceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Removes a space permission. Note that removing Read Space permission for a user or group will remove all the space permissions for that user or group.  Note: Apps cannot access this REST resource - including when utilizing user impersonation.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: \'Admin\' permission for the space.
     * Remove a space permission
     */
    async removePermissionRaw(requestParameters: RemovePermissionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.spaceKey === null || requestParameters.spaceKey === undefined) {
            throw new runtime.RequiredError('spaceKey','Required parameter requestParameters.spaceKey was null or undefined when calling removePermission.');
        }

        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling removePermission.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oAuthDefinitions", ["write:space.permission:confluence"]);
        }

        const response = await this.request({
            path: `/wiki/rest/api/space/{spaceKey}/permission/{id}`.replace(`{${"spaceKey"}}`, encodeURIComponent(String(requestParameters.spaceKey))).replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Removes a space permission. Note that removing Read Space permission for a user or group will remove all the space permissions for that user or group.  Note: Apps cannot access this REST resource - including when utilizing user impersonation.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: \'Admin\' permission for the space.
     * Remove a space permission
     */
    async removePermission(requestParameters: RemovePermissionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.removePermissionRaw(requestParameters, initOverrides);
    }

}
