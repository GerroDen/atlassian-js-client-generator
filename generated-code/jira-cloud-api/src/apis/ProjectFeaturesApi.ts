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
  ContainerForProjectFeatures,
  ProjectFeatureState,
} from '../models';

export interface GetFeaturesForProjectRequest {
    projectIdOrKey: string;
}

export interface ToggleFeatureForProjectRequest {
    projectIdOrKey: string;
    featureKey: string;
    projectFeatureState: ProjectFeatureState;
}

/**
 * 
 */
export class ProjectFeaturesApi extends runtime.BaseAPI {

    /**
     * Returns the list of features for a project.
     * Get project features
     */
    async getFeaturesForProjectRaw(requestParameters: GetFeaturesForProjectRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ContainerForProjectFeatures>> {
        if (requestParameters.projectIdOrKey === null || requestParameters.projectIdOrKey === undefined) {
            throw new runtime.RequiredError('projectIdOrKey','Required parameter requestParameters.projectIdOrKey was null or undefined when calling getFeaturesForProject.');
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
            path: `/rest/api/3/project/{projectIdOrKey}/features`.replace(`{${"projectIdOrKey"}}`, encodeURIComponent(String(requestParameters.projectIdOrKey))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns the list of features for a project.
     * Get project features
     */
    async getFeaturesForProject(requestParameters: GetFeaturesForProjectRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ContainerForProjectFeatures> {
        const response = await this.getFeaturesForProjectRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Sets the state of a project feature.
     * Set project feature state
     */
    async toggleFeatureForProjectRaw(requestParameters: ToggleFeatureForProjectRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ContainerForProjectFeatures>> {
        if (requestParameters.projectIdOrKey === null || requestParameters.projectIdOrKey === undefined) {
            throw new runtime.RequiredError('projectIdOrKey','Required parameter requestParameters.projectIdOrKey was null or undefined when calling toggleFeatureForProject.');
        }

        if (requestParameters.featureKey === null || requestParameters.featureKey === undefined) {
            throw new runtime.RequiredError('featureKey','Required parameter requestParameters.featureKey was null or undefined when calling toggleFeatureForProject.');
        }

        if (requestParameters.projectFeatureState === null || requestParameters.projectFeatureState === undefined) {
            throw new runtime.RequiredError('projectFeatureState','Required parameter requestParameters.projectFeatureState was null or undefined when calling toggleFeatureForProject.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["manage:jira-project"]);
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/rest/api/3/project/{projectIdOrKey}/features/{featureKey}`.replace(`{${"projectIdOrKey"}}`, encodeURIComponent(String(requestParameters.projectIdOrKey))).replace(`{${"featureKey"}}`, encodeURIComponent(String(requestParameters.featureKey))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.projectFeatureState,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Sets the state of a project feature.
     * Set project feature state
     */
    async toggleFeatureForProject(requestParameters: ToggleFeatureForProjectRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ContainerForProjectFeatures> {
        const response = await this.toggleFeatureForProjectRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
