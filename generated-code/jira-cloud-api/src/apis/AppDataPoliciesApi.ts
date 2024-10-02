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
  ErrorCollection,
  ProjectDataPolicies,
  WorkspaceDataPolicy,
} from '../models/index';

export interface GetPoliciesRequest {
    ids?: string;
}

/**
 * 
 */
export class AppDataPoliciesApi extends runtime.BaseAPI {

    /**
     * Returns data policies for the projects specified in the request.
     * Get data policy for projects
     */
    async getPoliciesRaw(requestParameters: GetPoliciesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProjectDataPolicies>> {
        const queryParameters: any = {};

        if (requestParameters['ids'] != null) {
            queryParameters['ids'] = requestParameters['ids'];
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
            path: `/rest/api/3/data-policy/project`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns data policies for the projects specified in the request.
     * Get data policy for projects
     */
    async getPolicies(requestParameters: GetPoliciesRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProjectDataPolicies> {
        const response = await this.getPoliciesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns data policy for the workspace.
     * Get data policy for the workspace
     */
    async getPolicyRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<WorkspaceDataPolicy>> {
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
            path: `/rest/api/3/data-policy`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns data policy for the workspace.
     * Get data policy for the workspace
     */
    async getPolicy(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<WorkspaceDataPolicy> {
        const response = await this.getPolicyRaw(initOverrides);
        return await response.value();
    }

}
