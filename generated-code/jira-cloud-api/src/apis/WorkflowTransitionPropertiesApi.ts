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
  WorkflowTransitionProperty,
} from '../models/index';

export interface CreateWorkflowTransitionPropertyRequest {
    transitionId: number;
    key: string;
    workflowName: string;
    workflowTransitionProperty: Omit<WorkflowTransitionProperty, 'id'|'key'>;
    workflowMode?: CreateWorkflowTransitionPropertyWorkflowModeEnum;
}

export interface DeleteWorkflowTransitionPropertyRequest {
    transitionId: number;
    key: string;
    workflowName: string;
    workflowMode?: DeleteWorkflowTransitionPropertyWorkflowModeEnum;
}

export interface GetWorkflowTransitionPropertiesRequest {
    transitionId: number;
    workflowName: string;
    includeReservedKeys?: boolean;
    key?: string;
    workflowMode?: GetWorkflowTransitionPropertiesWorkflowModeEnum;
}

export interface UpdateWorkflowTransitionPropertyRequest {
    transitionId: number;
    key: string;
    workflowName: string;
    workflowTransitionProperty: Omit<WorkflowTransitionProperty, 'id'|'key'>;
    workflowMode?: UpdateWorkflowTransitionPropertyWorkflowModeEnum;
}

/**
 * 
 */
export class WorkflowTransitionPropertiesApi extends runtime.BaseAPI {

    /**
     * Adds a property to a workflow transition. Transition properties are used to change the behavior of a transition. For more information, see [Transition properties](https://confluence.atlassian.com/x/zIhKLg#Advancedworkflowconfiguration-transitionproperties) and [Workflow properties](https://confluence.atlassian.com/x/JYlKLg).  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Create workflow transition property
     */
    async createWorkflowTransitionPropertyRaw(requestParameters: CreateWorkflowTransitionPropertyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<WorkflowTransitionProperty>> {
        if (requestParameters['transitionId'] == null) {
            throw new runtime.RequiredError(
                'transitionId',
                'Required parameter "transitionId" was null or undefined when calling createWorkflowTransitionProperty().'
            );
        }

        if (requestParameters['key'] == null) {
            throw new runtime.RequiredError(
                'key',
                'Required parameter "key" was null or undefined when calling createWorkflowTransitionProperty().'
            );
        }

        if (requestParameters['workflowName'] == null) {
            throw new runtime.RequiredError(
                'workflowName',
                'Required parameter "workflowName" was null or undefined when calling createWorkflowTransitionProperty().'
            );
        }

        if (requestParameters['workflowTransitionProperty'] == null) {
            throw new runtime.RequiredError(
                'workflowTransitionProperty',
                'Required parameter "workflowTransitionProperty" was null or undefined when calling createWorkflowTransitionProperty().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['key'] != null) {
            queryParameters['key'] = requestParameters['key'];
        }

        if (requestParameters['workflowName'] != null) {
            queryParameters['workflowName'] = requestParameters['workflowName'];
        }

        if (requestParameters['workflowMode'] != null) {
            queryParameters['workflowMode'] = requestParameters['workflowMode'];
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
            path: `/rest/api/3/workflow/transitions/{transitionId}/properties`.replace(`{${"transitionId"}}`, encodeURIComponent(String(requestParameters['transitionId']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['workflowTransitionProperty'],
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Adds a property to a workflow transition. Transition properties are used to change the behavior of a transition. For more information, see [Transition properties](https://confluence.atlassian.com/x/zIhKLg#Advancedworkflowconfiguration-transitionproperties) and [Workflow properties](https://confluence.atlassian.com/x/JYlKLg).  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Create workflow transition property
     */
    async createWorkflowTransitionProperty(requestParameters: CreateWorkflowTransitionPropertyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<WorkflowTransitionProperty> {
        const response = await this.createWorkflowTransitionPropertyRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Deletes a property from a workflow transition. Transition properties are used to change the behavior of a transition. For more information, see [Transition properties](https://confluence.atlassian.com/x/zIhKLg#Advancedworkflowconfiguration-transitionproperties) and [Workflow properties](https://confluence.atlassian.com/x/JYlKLg).  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Delete workflow transition property
     */
    async deleteWorkflowTransitionPropertyRaw(requestParameters: DeleteWorkflowTransitionPropertyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['transitionId'] == null) {
            throw new runtime.RequiredError(
                'transitionId',
                'Required parameter "transitionId" was null or undefined when calling deleteWorkflowTransitionProperty().'
            );
        }

        if (requestParameters['key'] == null) {
            throw new runtime.RequiredError(
                'key',
                'Required parameter "key" was null or undefined when calling deleteWorkflowTransitionProperty().'
            );
        }

        if (requestParameters['workflowName'] == null) {
            throw new runtime.RequiredError(
                'workflowName',
                'Required parameter "workflowName" was null or undefined when calling deleteWorkflowTransitionProperty().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['key'] != null) {
            queryParameters['key'] = requestParameters['key'];
        }

        if (requestParameters['workflowName'] != null) {
            queryParameters['workflowName'] = requestParameters['workflowName'];
        }

        if (requestParameters['workflowMode'] != null) {
            queryParameters['workflowMode'] = requestParameters['workflowMode'];
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
            path: `/rest/api/3/workflow/transitions/{transitionId}/properties`.replace(`{${"transitionId"}}`, encodeURIComponent(String(requestParameters['transitionId']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Deletes a property from a workflow transition. Transition properties are used to change the behavior of a transition. For more information, see [Transition properties](https://confluence.atlassian.com/x/zIhKLg#Advancedworkflowconfiguration-transitionproperties) and [Workflow properties](https://confluence.atlassian.com/x/JYlKLg).  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Delete workflow transition property
     */
    async deleteWorkflowTransitionProperty(requestParameters: DeleteWorkflowTransitionPropertyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteWorkflowTransitionPropertyRaw(requestParameters, initOverrides);
    }

    /**
     * Returns the properties on a workflow transition. Transition properties are used to change the behavior of a transition. For more information, see [Transition properties](https://confluence.atlassian.com/x/zIhKLg#Advancedworkflowconfiguration-transitionproperties) and [Workflow properties](https://confluence.atlassian.com/x/JYlKLg).  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Get workflow transition properties
     */
    async getWorkflowTransitionPropertiesRaw(requestParameters: GetWorkflowTransitionPropertiesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<WorkflowTransitionProperty>> {
        if (requestParameters['transitionId'] == null) {
            throw new runtime.RequiredError(
                'transitionId',
                'Required parameter "transitionId" was null or undefined when calling getWorkflowTransitionProperties().'
            );
        }

        if (requestParameters['workflowName'] == null) {
            throw new runtime.RequiredError(
                'workflowName',
                'Required parameter "workflowName" was null or undefined when calling getWorkflowTransitionProperties().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['includeReservedKeys'] != null) {
            queryParameters['includeReservedKeys'] = requestParameters['includeReservedKeys'];
        }

        if (requestParameters['key'] != null) {
            queryParameters['key'] = requestParameters['key'];
        }

        if (requestParameters['workflowName'] != null) {
            queryParameters['workflowName'] = requestParameters['workflowName'];
        }

        if (requestParameters['workflowMode'] != null) {
            queryParameters['workflowMode'] = requestParameters['workflowMode'];
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
            path: `/rest/api/3/workflow/transitions/{transitionId}/properties`.replace(`{${"transitionId"}}`, encodeURIComponent(String(requestParameters['transitionId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns the properties on a workflow transition. Transition properties are used to change the behavior of a transition. For more information, see [Transition properties](https://confluence.atlassian.com/x/zIhKLg#Advancedworkflowconfiguration-transitionproperties) and [Workflow properties](https://confluence.atlassian.com/x/JYlKLg).  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Get workflow transition properties
     */
    async getWorkflowTransitionProperties(requestParameters: GetWorkflowTransitionPropertiesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<WorkflowTransitionProperty> {
        const response = await this.getWorkflowTransitionPropertiesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Updates a workflow transition by changing the property value. Trying to update a property that does not exist results in a new property being added to the transition. Transition properties are used to change the behavior of a transition. For more information, see [Transition properties](https://confluence.atlassian.com/x/zIhKLg#Advancedworkflowconfiguration-transitionproperties) and [Workflow properties](https://confluence.atlassian.com/x/JYlKLg).  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Update workflow transition property
     */
    async updateWorkflowTransitionPropertyRaw(requestParameters: UpdateWorkflowTransitionPropertyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<WorkflowTransitionProperty>> {
        if (requestParameters['transitionId'] == null) {
            throw new runtime.RequiredError(
                'transitionId',
                'Required parameter "transitionId" was null or undefined when calling updateWorkflowTransitionProperty().'
            );
        }

        if (requestParameters['key'] == null) {
            throw new runtime.RequiredError(
                'key',
                'Required parameter "key" was null or undefined when calling updateWorkflowTransitionProperty().'
            );
        }

        if (requestParameters['workflowName'] == null) {
            throw new runtime.RequiredError(
                'workflowName',
                'Required parameter "workflowName" was null or undefined when calling updateWorkflowTransitionProperty().'
            );
        }

        if (requestParameters['workflowTransitionProperty'] == null) {
            throw new runtime.RequiredError(
                'workflowTransitionProperty',
                'Required parameter "workflowTransitionProperty" was null or undefined when calling updateWorkflowTransitionProperty().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['key'] != null) {
            queryParameters['key'] = requestParameters['key'];
        }

        if (requestParameters['workflowName'] != null) {
            queryParameters['workflowName'] = requestParameters['workflowName'];
        }

        if (requestParameters['workflowMode'] != null) {
            queryParameters['workflowMode'] = requestParameters['workflowMode'];
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
            path: `/rest/api/3/workflow/transitions/{transitionId}/properties`.replace(`{${"transitionId"}}`, encodeURIComponent(String(requestParameters['transitionId']))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['workflowTransitionProperty'],
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Updates a workflow transition by changing the property value. Trying to update a property that does not exist results in a new property being added to the transition. Transition properties are used to change the behavior of a transition. For more information, see [Transition properties](https://confluence.atlassian.com/x/zIhKLg#Advancedworkflowconfiguration-transitionproperties) and [Workflow properties](https://confluence.atlassian.com/x/JYlKLg).  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Update workflow transition property
     */
    async updateWorkflowTransitionProperty(requestParameters: UpdateWorkflowTransitionPropertyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<WorkflowTransitionProperty> {
        const response = await this.updateWorkflowTransitionPropertyRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const CreateWorkflowTransitionPropertyWorkflowModeEnum = {
    Live: 'live',
    Draft: 'draft'
} as const;
export type CreateWorkflowTransitionPropertyWorkflowModeEnum = typeof CreateWorkflowTransitionPropertyWorkflowModeEnum[keyof typeof CreateWorkflowTransitionPropertyWorkflowModeEnum];
/**
 * @export
 */
export const DeleteWorkflowTransitionPropertyWorkflowModeEnum = {
    Live: 'live',
    Draft: 'draft'
} as const;
export type DeleteWorkflowTransitionPropertyWorkflowModeEnum = typeof DeleteWorkflowTransitionPropertyWorkflowModeEnum[keyof typeof DeleteWorkflowTransitionPropertyWorkflowModeEnum];
/**
 * @export
 */
export const GetWorkflowTransitionPropertiesWorkflowModeEnum = {
    Live: 'live',
    Draft: 'draft'
} as const;
export type GetWorkflowTransitionPropertiesWorkflowModeEnum = typeof GetWorkflowTransitionPropertiesWorkflowModeEnum[keyof typeof GetWorkflowTransitionPropertiesWorkflowModeEnum];
/**
 * @export
 */
export const UpdateWorkflowTransitionPropertyWorkflowModeEnum = {
    Live: 'live',
    Draft: 'draft'
} as const;
export type UpdateWorkflowTransitionPropertyWorkflowModeEnum = typeof UpdateWorkflowTransitionPropertyWorkflowModeEnum[keyof typeof UpdateWorkflowTransitionPropertyWorkflowModeEnum];
