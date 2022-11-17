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
  LabelArray,
  LabelCreate,
  LongTask,
  UserProperty,
  UserPropertyCreate,
  UserPropertyKeyArray,
  UserPropertyUpdate,
} from '../models';

export interface AddLabelsToSpaceRequest {
    spaceKey: string;
    labelCreate: Array<LabelCreate>;
}

export interface CreateUserPropertyRequest {
    userId: string;
    key: string;
    body: UserPropertyCreate;
}

export interface DeleteLabelFromSpaceRequest {
    spaceKey: string;
    name: string;
    prefix?: string;
}

export interface DeletePageTreeRequest {
    id: string;
}

export interface DeleteUserPropertyRequest {
    userId: string;
    key: string;
}

export interface GetLabelsForSpaceRequest {
    spaceKey: string;
    prefix?: GetLabelsForSpacePrefixEnum;
    start?: number;
    limit?: number;
}

export interface GetUserPropertiesRequest {
    userId: string;
    start?: number;
    limit?: number;
}

export interface GetUserPropertyRequest {
    userId: string;
    key: string;
}

export interface UpdateUserPropertyRequest {
    userId: string;
    key: string;
    body: UserPropertyUpdate;
}

/**
 * 
 */
export class ExperimentalApi extends runtime.BaseAPI {

    /**
     * Adds labels to a piece of content. Does not modify the existing labels.  Notes:  - Labels can also be added when creating content ([Create content](#api-content-post)). - Labels can be updated when updating content ([Update content](#api-content-id-put)). This will delete the existing labels and replace them with the labels in the request.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to update the content.
     * Add labels to a space
     */
    async addLabelsToSpaceRaw(requestParameters: AddLabelsToSpaceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<LabelArray>> {
        if (requestParameters.spaceKey === null || requestParameters.spaceKey === undefined) {
            throw new runtime.RequiredError('spaceKey','Required parameter requestParameters.spaceKey was null or undefined when calling addLabelsToSpace.');
        }

        if (requestParameters.labelCreate === null || requestParameters.labelCreate === undefined) {
            throw new runtime.RequiredError('labelCreate','Required parameter requestParameters.labelCreate was null or undefined when calling addLabelsToSpace.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oAuthDefinitions", ["write:confluence-space"]);
        }

        const response = await this.request({
            path: `/wiki/rest/api/space/{spaceKey}/label`.replace(`{${"spaceKey"}}`, encodeURIComponent(String(requestParameters.spaceKey))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.labelCreate,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Adds labels to a piece of content. Does not modify the existing labels.  Notes:  - Labels can also be added when creating content ([Create content](#api-content-post)). - Labels can be updated when updating content ([Update content](#api-content-id-put)). This will delete the existing labels and replace them with the labels in the request.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to update the content.
     * Add labels to a space
     */
    async addLabelsToSpace(requestParameters: AddLabelsToSpaceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<LabelArray> {
        const response = await this.addLabelsToSpaceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Creates a property for a user. For more information  about user properties, see [Confluence entity properties] (https://developer.atlassian.com/cloud/confluence/confluence-entity-properties/). `Note`, these properties stored against a user are on a Confluence site level and not space/content level.  `Note:` the number of properties which could be created per app in a tenant for each user might be restricted by fixed system limits. **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to access the Confluence site (\'Can use\' global permission).
     * Create user property by key
     */
    async createUserPropertyRaw(requestParameters: CreateUserPropertyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.userId === null || requestParameters.userId === undefined) {
            throw new runtime.RequiredError('userId','Required parameter requestParameters.userId was null or undefined when calling createUserProperty.');
        }

        if (requestParameters.key === null || requestParameters.key === undefined) {
            throw new runtime.RequiredError('key','Required parameter requestParameters.key was null or undefined when calling createUserProperty.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling createUserProperty.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oAuthDefinitions", ["write:user.property:confluence"]);
        }

        const response = await this.request({
            path: `/wiki/rest/api/user/{userId}/property/{key}`.replace(`{${"userId"}}`, encodeURIComponent(String(requestParameters.userId))).replace(`{${"key"}}`, encodeURIComponent(String(requestParameters.key))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.body,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Creates a property for a user. For more information  about user properties, see [Confluence entity properties] (https://developer.atlassian.com/cloud/confluence/confluence-entity-properties/). `Note`, these properties stored against a user are on a Confluence site level and not space/content level.  `Note:` the number of properties which could be created per app in a tenant for each user might be restricted by fixed system limits. **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to access the Confluence site (\'Can use\' global permission).
     * Create user property by key
     */
    async createUserProperty(requestParameters: CreateUserPropertyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.createUserPropertyRaw(requestParameters, initOverrides);
    }

    /**
     * 
     * Remove label from a space
     */
    async deleteLabelFromSpaceRaw(requestParameters: DeleteLabelFromSpaceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.spaceKey === null || requestParameters.spaceKey === undefined) {
            throw new runtime.RequiredError('spaceKey','Required parameter requestParameters.spaceKey was null or undefined when calling deleteLabelFromSpace.');
        }

        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling deleteLabelFromSpace.');
        }

        const queryParameters: any = {};

        if (requestParameters.name !== undefined) {
            queryParameters['name'] = requestParameters.name;
        }

        if (requestParameters.prefix !== undefined) {
            queryParameters['prefix'] = requestParameters.prefix;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oAuthDefinitions", ["write:confluence-space"]);
        }

        const response = await this.request({
            path: `/wiki/rest/api/space/{spaceKey}/label`.replace(`{${"spaceKey"}}`, encodeURIComponent(String(requestParameters.spaceKey))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * 
     * Remove label from a space
     */
    async deleteLabelFromSpace(requestParameters: DeleteLabelFromSpaceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteLabelFromSpaceRaw(requestParameters, initOverrides);
    }

    /**
     * Moves a pagetree rooted at a page to the space\'s trash:  - If the content\'s type is `page` and its status is `current`, it will be trashed including all its descendants. - For every other combination of content type and status, this API is not supported.  This API accepts the pageTree delete request and returns a task ID. The delete process happens asynchronously.   Response example:  <pre><code>  {       \"id\" : \"1180606\",       \"links\" : {            \"status\" : \"/rest/api/longtask/1180606\"       }  }  </code></pre>  Use the `/longtask/<taskId>` REST API to get the copy task status.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: \'Delete\' permission for the space that the content is in.
     * Delete page tree
     */
    async deletePageTreeRaw(requestParameters: DeletePageTreeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<LongTask>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling deletePageTree.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oAuthDefinitions", ["write:confluence-content"]);
        }

        const response = await this.request({
            path: `/wiki/rest/api/content/{id}/pageTree`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Moves a pagetree rooted at a page to the space\'s trash:  - If the content\'s type is `page` and its status is `current`, it will be trashed including all its descendants. - For every other combination of content type and status, this API is not supported.  This API accepts the pageTree delete request and returns a task ID. The delete process happens asynchronously.   Response example:  <pre><code>  {       \"id\" : \"1180606\",       \"links\" : {            \"status\" : \"/rest/api/longtask/1180606\"       }  }  </code></pre>  Use the `/longtask/<taskId>` REST API to get the copy task status.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: \'Delete\' permission for the space that the content is in.
     * Delete page tree
     */
    async deletePageTree(requestParameters: DeletePageTreeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<LongTask> {
        const response = await this.deletePageTreeRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Deletes a property for the given user. For more information about user properties, see [Confluence entity properties](https://developer.atlassian.com/cloud/confluence/confluence-entity-properties/). `Note`, these properties stored against a user are on a Confluence site level and not space/content level.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to access the Confluence site (\'Can use\' global permission).
     * Delete user property
     */
    async deleteUserPropertyRaw(requestParameters: DeleteUserPropertyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.userId === null || requestParameters.userId === undefined) {
            throw new runtime.RequiredError('userId','Required parameter requestParameters.userId was null or undefined when calling deleteUserProperty.');
        }

        if (requestParameters.key === null || requestParameters.key === undefined) {
            throw new runtime.RequiredError('key','Required parameter requestParameters.key was null or undefined when calling deleteUserProperty.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oAuthDefinitions", ["write:user.property:confluence"]);
        }

        const response = await this.request({
            path: `/wiki/rest/api/user/{userId}/property/{key}`.replace(`{${"userId"}}`, encodeURIComponent(String(requestParameters.userId))).replace(`{${"key"}}`, encodeURIComponent(String(requestParameters.key))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Deletes a property for the given user. For more information about user properties, see [Confluence entity properties](https://developer.atlassian.com/cloud/confluence/confluence-entity-properties/). `Note`, these properties stored against a user are on a Confluence site level and not space/content level.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to access the Confluence site (\'Can use\' global permission).
     * Delete user property
     */
    async deleteUserProperty(requestParameters: DeleteUserPropertyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteUserPropertyRaw(requestParameters, initOverrides);
    }

    /**
     * Returns a list of labels associated with a space. Can provide a prefix as well as other filters to select different types of labels.
     * Get Space Labels
     */
    async getLabelsForSpaceRaw(requestParameters: GetLabelsForSpaceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<LabelArray>> {
        if (requestParameters.spaceKey === null || requestParameters.spaceKey === undefined) {
            throw new runtime.RequiredError('spaceKey','Required parameter requestParameters.spaceKey was null or undefined when calling getLabelsForSpace.');
        }

        const queryParameters: any = {};

        if (requestParameters.prefix !== undefined) {
            queryParameters['prefix'] = requestParameters.prefix;
        }

        if (requestParameters.start !== undefined) {
            queryParameters['start'] = requestParameters.start;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oAuthDefinitions", ["read:confluence-space.summary"]);
        }

        const response = await this.request({
            path: `/wiki/rest/api/space/{spaceKey}/label`.replace(`{${"spaceKey"}}`, encodeURIComponent(String(requestParameters.spaceKey))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns a list of labels associated with a space. Can provide a prefix as well as other filters to select different types of labels.
     * Get Space Labels
     */
    async getLabelsForSpace(requestParameters: GetLabelsForSpaceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<LabelArray> {
        const response = await this.getLabelsForSpaceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns the properties for a user as list of property keys. For more information about user properties, see [Confluence entity properties](https://developer.atlassian.com/cloud/confluence/confluence-entity-properties/). `Note`, these properties stored against a user are on a Confluence site level and not space/content level.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to access the Confluence site (\'Can use\' global permission).
     * Get user properties
     */
    async getUserPropertiesRaw(requestParameters: GetUserPropertiesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UserPropertyKeyArray>> {
        if (requestParameters.userId === null || requestParameters.userId === undefined) {
            throw new runtime.RequiredError('userId','Required parameter requestParameters.userId was null or undefined when calling getUserProperties.');
        }

        const queryParameters: any = {};

        if (requestParameters.start !== undefined) {
            queryParameters['start'] = requestParameters.start;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oAuthDefinitions", ["read:user.property:confluence"]);
        }

        const response = await this.request({
            path: `/wiki/rest/api/user/{userId}/property`.replace(`{${"userId"}}`, encodeURIComponent(String(requestParameters.userId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns the properties for a user as list of property keys. For more information about user properties, see [Confluence entity properties](https://developer.atlassian.com/cloud/confluence/confluence-entity-properties/). `Note`, these properties stored against a user are on a Confluence site level and not space/content level.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to access the Confluence site (\'Can use\' global permission).
     * Get user properties
     */
    async getUserProperties(requestParameters: GetUserPropertiesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UserPropertyKeyArray> {
        const response = await this.getUserPropertiesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns the property corresponding to `key` for a user. For more information about user properties, see [Confluence entity properties](https://developer.atlassian.com/cloud/confluence/confluence-entity-properties/). `Note`, these properties stored against a user are on a Confluence site level and not space/content level.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to access the Confluence site (\'Can use\' global permission).
     * Get user property
     */
    async getUserPropertyRaw(requestParameters: GetUserPropertyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UserProperty>> {
        if (requestParameters.userId === null || requestParameters.userId === undefined) {
            throw new runtime.RequiredError('userId','Required parameter requestParameters.userId was null or undefined when calling getUserProperty.');
        }

        if (requestParameters.key === null || requestParameters.key === undefined) {
            throw new runtime.RequiredError('key','Required parameter requestParameters.key was null or undefined when calling getUserProperty.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oAuthDefinitions", ["read:user.property:confluence"]);
        }

        const response = await this.request({
            path: `/wiki/rest/api/user/{userId}/property/{key}`.replace(`{${"userId"}}`, encodeURIComponent(String(requestParameters.userId))).replace(`{${"key"}}`, encodeURIComponent(String(requestParameters.key))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns the property corresponding to `key` for a user. For more information about user properties, see [Confluence entity properties](https://developer.atlassian.com/cloud/confluence/confluence-entity-properties/). `Note`, these properties stored against a user are on a Confluence site level and not space/content level.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to access the Confluence site (\'Can use\' global permission).
     * Get user property
     */
    async getUserProperty(requestParameters: GetUserPropertyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UserProperty> {
        const response = await this.getUserPropertyRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Updates a property for the given user. Note, you cannot update the key of a user property, only the value. For more information about user properties, see [Confluence entity properties](https://developer.atlassian.com/cloud/confluence/confluence-entity-properties/). `Note`, these properties stored against a user are on a Confluence site level and not space/content level.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to access the Confluence site (\'Can use\' global permission).
     * Update user property
     */
    async updateUserPropertyRaw(requestParameters: UpdateUserPropertyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.userId === null || requestParameters.userId === undefined) {
            throw new runtime.RequiredError('userId','Required parameter requestParameters.userId was null or undefined when calling updateUserProperty.');
        }

        if (requestParameters.key === null || requestParameters.key === undefined) {
            throw new runtime.RequiredError('key','Required parameter requestParameters.key was null or undefined when calling updateUserProperty.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling updateUserProperty.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oAuthDefinitions", ["write:user.property:confluence"]);
        }

        const response = await this.request({
            path: `/wiki/rest/api/user/{userId}/property/{key}`.replace(`{${"userId"}}`, encodeURIComponent(String(requestParameters.userId))).replace(`{${"key"}}`, encodeURIComponent(String(requestParameters.key))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.body,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Updates a property for the given user. Note, you cannot update the key of a user property, only the value. For more information about user properties, see [Confluence entity properties](https://developer.atlassian.com/cloud/confluence/confluence-entity-properties/). `Note`, these properties stored against a user are on a Confluence site level and not space/content level.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to access the Confluence site (\'Can use\' global permission).
     * Update user property
     */
    async updateUserProperty(requestParameters: UpdateUserPropertyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.updateUserPropertyRaw(requestParameters, initOverrides);
    }

}

/**
 * @export
 */
export const GetLabelsForSpacePrefixEnum = {
    Global: 'global',
    My: 'my',
    Team: 'team'
} as const;
export type GetLabelsForSpacePrefixEnum = typeof GetLabelsForSpacePrefixEnum[keyof typeof GetLabelsForSpacePrefixEnum];
