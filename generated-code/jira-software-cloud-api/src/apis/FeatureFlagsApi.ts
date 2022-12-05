/* tslint:disable */
/* eslint-disable */
/**
 * Jira Software Cloud API
 * Jira Software Cloud REST API documentation
 *
 * The version of the OpenAPI document: 1001.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  ErrorMessage1,
  FeatureFlagData,
  SubmitFeatureFlagRequest,
  SubmitFeatureFlagsResponse,
} from '../models';

export interface DeleteFeatureFlagByIdRequest {
    authorization: string;
    featureFlagId: string;
    updateSequenceId?: number;
}

export interface DeleteFeatureFlagsByPropertyRequest {
    authorization: string;
    updateSequenceId?: number;
}

export interface GetFeatureFlagByIdRequest {
    authorization: string;
    featureFlagId: string;
}

export interface SubmitFeatureFlagsRequest {
    authorization: string;
    submitFeatureFlagRequest: SubmitFeatureFlagRequest;
}

/**
 * 
 */
export class FeatureFlagsApi extends runtime.BaseAPI {

    /**
     * Delete the Feature Flag data currently stored for the given ID.  Deletion is performed asynchronously. The getFeatureFlagById operation can be used to confirm that data has been deleted successfully (if needed).  Only Connect apps that define the `jiraFeatureFlagInfoProvider` module can access this resource. This resource requires the \'DELETE\' scope for Connect apps. 
     * Delete a Feature Flag by ID
     */
    async deleteFeatureFlagByIdRaw(requestParameters: DeleteFeatureFlagByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.authorization === null || requestParameters.authorization === undefined) {
            throw new runtime.RequiredError('authorization','Required parameter requestParameters.authorization was null or undefined when calling deleteFeatureFlagById.');
        }

        if (requestParameters.featureFlagId === null || requestParameters.featureFlagId === undefined) {
            throw new runtime.RequiredError('featureFlagId','Required parameter requestParameters.featureFlagId was null or undefined when calling deleteFeatureFlagById.');
        }

        const queryParameters: any = {};

        if (requestParameters.updateSequenceId !== undefined) {
            queryParameters['_updateSequenceId'] = requestParameters.updateSequenceId;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.authorization !== undefined && requestParameters.authorization !== null) {
            headerParameters['Authorization'] = String(requestParameters.authorization);
        }

        const response = await this.request({
            path: `/rest/featureflags/0.1/flag/{featureFlagId}`.replace(`{${"featureFlagId"}}`, encodeURIComponent(String(requestParameters.featureFlagId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete the Feature Flag data currently stored for the given ID.  Deletion is performed asynchronously. The getFeatureFlagById operation can be used to confirm that data has been deleted successfully (if needed).  Only Connect apps that define the `jiraFeatureFlagInfoProvider` module can access this resource. This resource requires the \'DELETE\' scope for Connect apps. 
     * Delete a Feature Flag by ID
     */
    async deleteFeatureFlagById(requestParameters: DeleteFeatureFlagByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteFeatureFlagByIdRaw(requestParameters, initOverrides);
    }

    /**
     * Bulk delete all Feature Flags that match the given request.  One or more query params must be supplied to specify Properties to delete by. Optional param `_updateSequenceId` is no longer supported. If more than one Property is provided, data will be deleted that matches ALL of the Properties (e.g. treated as an AND). See the documentation for the submitFeatureFlags operation for more details.  e.g. DELETE /bulkByProperties?accountId=account-123&createdBy=user-456  Deletion is performed asynchronously. The getFeatureFlagById operation can be used to confirm that data has been deleted successfully (if needed).  Only Connect apps that define the `jiraFeatureFlagInfoProvider` module can access this resource. This resource requires the \'DELETE\' scope for Connect apps. 
     * Delete Feature Flags by Property
     */
    async deleteFeatureFlagsByPropertyRaw(requestParameters: DeleteFeatureFlagsByPropertyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.authorization === null || requestParameters.authorization === undefined) {
            throw new runtime.RequiredError('authorization','Required parameter requestParameters.authorization was null or undefined when calling deleteFeatureFlagsByProperty.');
        }

        const queryParameters: any = {};

        if (requestParameters.updateSequenceId !== undefined) {
            queryParameters['_updateSequenceId'] = requestParameters.updateSequenceId;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.authorization !== undefined && requestParameters.authorization !== null) {
            headerParameters['Authorization'] = String(requestParameters.authorization);
        }

        const response = await this.request({
            path: `/rest/featureflags/0.1/bulkByProperties`,
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Bulk delete all Feature Flags that match the given request.  One or more query params must be supplied to specify Properties to delete by. Optional param `_updateSequenceId` is no longer supported. If more than one Property is provided, data will be deleted that matches ALL of the Properties (e.g. treated as an AND). See the documentation for the submitFeatureFlags operation for more details.  e.g. DELETE /bulkByProperties?accountId=account-123&createdBy=user-456  Deletion is performed asynchronously. The getFeatureFlagById operation can be used to confirm that data has been deleted successfully (if needed).  Only Connect apps that define the `jiraFeatureFlagInfoProvider` module can access this resource. This resource requires the \'DELETE\' scope for Connect apps. 
     * Delete Feature Flags by Property
     */
    async deleteFeatureFlagsByProperty(requestParameters: DeleteFeatureFlagsByPropertyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteFeatureFlagsByPropertyRaw(requestParameters, initOverrides);
    }

    /**
     * Retrieve the currently stored Feature Flag data for the given ID.  The result will be what is currently stored, ignoring any pending updates or deletes.  Only Connect apps that define the `jiraFeatureFlagInfoProvider` module can access this resource. This resource requires the \'READ\' scope for Connect apps. 
     * Get a Feature Flag by ID
     */
    async getFeatureFlagByIdRaw(requestParameters: GetFeatureFlagByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<FeatureFlagData>> {
        if (requestParameters.authorization === null || requestParameters.authorization === undefined) {
            throw new runtime.RequiredError('authorization','Required parameter requestParameters.authorization was null or undefined when calling getFeatureFlagById.');
        }

        if (requestParameters.featureFlagId === null || requestParameters.featureFlagId === undefined) {
            throw new runtime.RequiredError('featureFlagId','Required parameter requestParameters.featureFlagId was null or undefined when calling getFeatureFlagById.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.authorization !== undefined && requestParameters.authorization !== null) {
            headerParameters['Authorization'] = String(requestParameters.authorization);
        }

        const response = await this.request({
            path: `/rest/featureflags/0.1/flag/{featureFlagId}`.replace(`{${"featureFlagId"}}`, encodeURIComponent(String(requestParameters.featureFlagId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Retrieve the currently stored Feature Flag data for the given ID.  The result will be what is currently stored, ignoring any pending updates or deletes.  Only Connect apps that define the `jiraFeatureFlagInfoProvider` module can access this resource. This resource requires the \'READ\' scope for Connect apps. 
     * Get a Feature Flag by ID
     */
    async getFeatureFlagById(requestParameters: GetFeatureFlagByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<FeatureFlagData> {
        const response = await this.getFeatureFlagByIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update / insert Feature Flag data.  Feature Flags are identified by their ID, and existing Feature Flag data for the same ID will be replaced if it exists and the updateSequenceId of existing data is less than the incoming data.  Submissions are performed asynchronously. Submitted data will eventually be available in Jira; most updates are available within a short period of time, but may take some time during peak load and/or maintenance times. The getFeatureFlagById operation can be used to confirm that data has been stored successfully (if needed).  In the case of multiple Feature Flags being submitted in one request, each is validated individually prior to submission. Details of which Feature Flags failed submission (if any) are available in the response object.  Only Connect apps that define the `jiraFeatureFlagInfoProvider` module can access this resource. This resource requires the \'WRITE\' scope for Connect apps. 
     * Submit Feature Flag data
     */
    async submitFeatureFlagsRaw(requestParameters: SubmitFeatureFlagsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SubmitFeatureFlagsResponse>> {
        if (requestParameters.authorization === null || requestParameters.authorization === undefined) {
            throw new runtime.RequiredError('authorization','Required parameter requestParameters.authorization was null or undefined when calling submitFeatureFlags.');
        }

        if (requestParameters.submitFeatureFlagRequest === null || requestParameters.submitFeatureFlagRequest === undefined) {
            throw new runtime.RequiredError('submitFeatureFlagRequest','Required parameter requestParameters.submitFeatureFlagRequest was null or undefined when calling submitFeatureFlags.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters.authorization !== undefined && requestParameters.authorization !== null) {
            headerParameters['Authorization'] = String(requestParameters.authorization);
        }

        const response = await this.request({
            path: `/rest/featureflags/0.1/bulk`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.submitFeatureFlagRequest,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Update / insert Feature Flag data.  Feature Flags are identified by their ID, and existing Feature Flag data for the same ID will be replaced if it exists and the updateSequenceId of existing data is less than the incoming data.  Submissions are performed asynchronously. Submitted data will eventually be available in Jira; most updates are available within a short period of time, but may take some time during peak load and/or maintenance times. The getFeatureFlagById operation can be used to confirm that data has been stored successfully (if needed).  In the case of multiple Feature Flags being submitted in one request, each is validated individually prior to submission. Details of which Feature Flags failed submission (if any) are available in the response object.  Only Connect apps that define the `jiraFeatureFlagInfoProvider` module can access this resource. This resource requires the \'WRITE\' scope for Connect apps. 
     * Submit Feature Flag data
     */
    async submitFeatureFlags(requestParameters: SubmitFeatureFlagsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SubmitFeatureFlagsResponse> {
        const response = await this.submitFeatureFlagsRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
