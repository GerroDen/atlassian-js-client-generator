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
  BuildData,
  ErrorMessage,
  SubmitBuildsRequest,
  SubmitBuildsResponse,
} from '../models';

export interface DeleteBuildByKeyRequest {
    authorization: string;
    pipelineId: string;
    buildNumber: number;
    updateSequenceNumber?: number;
}

export interface DeleteBuildsByPropertyRequest {
    authorization: string;
    updateSequenceNumber?: number;
}

export interface GetBuildByKeyRequest {
    authorization: string;
    pipelineId: string;
    buildNumber: number;
}

export interface SubmitBuildsOperationRequest {
    authorization: string;
    submitBuildsRequest: SubmitBuildsRequest;
}

/**
 * 
 */
export class BuildsApi extends runtime.BaseAPI {

    /**
     * Delete the build data currently stored for the given `pipelineId` and `buildNumber` combination.  Deletion is performed asynchronously. The `getBuildByKey` operation can be used to confirm that data has been deleted successfully (if needed).  Only Connect apps that define the `jiraBuildInfoProvider` module, and on-premise integrations, can access this resource. This resource requires the \'DELETE\' scope for Connect apps. 
     * Delete a build by key
     */
    async deleteBuildByKeyRaw(requestParameters: DeleteBuildByKeyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.authorization === null || requestParameters.authorization === undefined) {
            throw new runtime.RequiredError('authorization','Required parameter requestParameters.authorization was null or undefined when calling deleteBuildByKey.');
        }

        if (requestParameters.pipelineId === null || requestParameters.pipelineId === undefined) {
            throw new runtime.RequiredError('pipelineId','Required parameter requestParameters.pipelineId was null or undefined when calling deleteBuildByKey.');
        }

        if (requestParameters.buildNumber === null || requestParameters.buildNumber === undefined) {
            throw new runtime.RequiredError('buildNumber','Required parameter requestParameters.buildNumber was null or undefined when calling deleteBuildByKey.');
        }

        const queryParameters: any = {};

        if (requestParameters.updateSequenceNumber !== undefined) {
            queryParameters['_updateSequenceNumber'] = requestParameters.updateSequenceNumber;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.authorization !== undefined && requestParameters.authorization !== null) {
            headerParameters['Authorization'] = String(requestParameters.authorization);
        }

        const response = await this.request({
            path: `/rest/builds/0.1/pipelines/{pipelineId}/builds/{buildNumber}`.replace(`{${"pipelineId"}}`, encodeURIComponent(String(requestParameters.pipelineId))).replace(`{${"buildNumber"}}`, encodeURIComponent(String(requestParameters.buildNumber))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete the build data currently stored for the given `pipelineId` and `buildNumber` combination.  Deletion is performed asynchronously. The `getBuildByKey` operation can be used to confirm that data has been deleted successfully (if needed).  Only Connect apps that define the `jiraBuildInfoProvider` module, and on-premise integrations, can access this resource. This resource requires the \'DELETE\' scope for Connect apps. 
     * Delete a build by key
     */
    async deleteBuildByKey(requestParameters: DeleteBuildByKeyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteBuildByKeyRaw(requestParameters, initOverrides);
    }

    /**
     * Bulk delete all builds data that match the given request.  One or more query params must be supplied to specify Properties to delete by. Optional param `_updateSequenceNumber` is no longer supported. If more than one Property is provided, data will be deleted that matches ALL of the Properties (e.g. treated as an AND).  See the documentation for the `submitBuilds` operation for more details.  e.g. DELETE /bulkByProperties?accountId=account-123&repoId=repo-345  Deletion is performed asynchronously. The `getBuildByKey` operation can be used to confirm that data has been deleted successfully (if needed).  Only Connect apps that define the `jiraBuildInfoProvider` module, and on-premise integrations, can access this resource. This resource requires the \'DELETE\' scope for Connect apps. 
     * Delete builds by Property
     */
    async deleteBuildsByPropertyRaw(requestParameters: DeleteBuildsByPropertyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.authorization === null || requestParameters.authorization === undefined) {
            throw new runtime.RequiredError('authorization','Required parameter requestParameters.authorization was null or undefined when calling deleteBuildsByProperty.');
        }

        const queryParameters: any = {};

        if (requestParameters.updateSequenceNumber !== undefined) {
            queryParameters['_updateSequenceNumber'] = requestParameters.updateSequenceNumber;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.authorization !== undefined && requestParameters.authorization !== null) {
            headerParameters['Authorization'] = String(requestParameters.authorization);
        }

        const response = await this.request({
            path: `/rest/builds/0.1/bulkByProperties`,
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Bulk delete all builds data that match the given request.  One or more query params must be supplied to specify Properties to delete by. Optional param `_updateSequenceNumber` is no longer supported. If more than one Property is provided, data will be deleted that matches ALL of the Properties (e.g. treated as an AND).  See the documentation for the `submitBuilds` operation for more details.  e.g. DELETE /bulkByProperties?accountId=account-123&repoId=repo-345  Deletion is performed asynchronously. The `getBuildByKey` operation can be used to confirm that data has been deleted successfully (if needed).  Only Connect apps that define the `jiraBuildInfoProvider` module, and on-premise integrations, can access this resource. This resource requires the \'DELETE\' scope for Connect apps. 
     * Delete builds by Property
     */
    async deleteBuildsByProperty(requestParameters: DeleteBuildsByPropertyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteBuildsByPropertyRaw(requestParameters, initOverrides);
    }

    /**
     * Retrieve the currently stored build data for the given `pipelineId` and `buildNumber` combination.  The result will be what is currently stored, ignoring any pending updates or deletes.  Only Connect apps that define the `jiraBuildInfoProvider` module, and on-premise integrations, can access this resource. This resource requires the \'READ\' scope for Connect apps. 
     * Get a build by key
     */
    async getBuildByKeyRaw(requestParameters: GetBuildByKeyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BuildData>> {
        if (requestParameters.authorization === null || requestParameters.authorization === undefined) {
            throw new runtime.RequiredError('authorization','Required parameter requestParameters.authorization was null or undefined when calling getBuildByKey.');
        }

        if (requestParameters.pipelineId === null || requestParameters.pipelineId === undefined) {
            throw new runtime.RequiredError('pipelineId','Required parameter requestParameters.pipelineId was null or undefined when calling getBuildByKey.');
        }

        if (requestParameters.buildNumber === null || requestParameters.buildNumber === undefined) {
            throw new runtime.RequiredError('buildNumber','Required parameter requestParameters.buildNumber was null or undefined when calling getBuildByKey.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.authorization !== undefined && requestParameters.authorization !== null) {
            headerParameters['Authorization'] = String(requestParameters.authorization);
        }

        const response = await this.request({
            path: `/rest/builds/0.1/pipelines/{pipelineId}/builds/{buildNumber}`.replace(`{${"pipelineId"}}`, encodeURIComponent(String(requestParameters.pipelineId))).replace(`{${"buildNumber"}}`, encodeURIComponent(String(requestParameters.buildNumber))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Retrieve the currently stored build data for the given `pipelineId` and `buildNumber` combination.  The result will be what is currently stored, ignoring any pending updates or deletes.  Only Connect apps that define the `jiraBuildInfoProvider` module, and on-premise integrations, can access this resource. This resource requires the \'READ\' scope for Connect apps. 
     * Get a build by key
     */
    async getBuildByKey(requestParameters: GetBuildByKeyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BuildData> {
        const response = await this.getBuildByKeyRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update / insert builds data.  Builds are identified by the combination of `pipelineId` and `buildNumber`, and existing build data for the same build will be replaced if it exists and the `updateSequenceNumber` of the existing data is less than the incoming data.  Submissions are performed asynchronously. Submitted data will eventually be available in Jira; most updates are available within a short period of time, but may take some time during peak load and/or maintenance times. The `getBuildByKey` operation can be used to confirm that data has been stored successfully (if needed).  In the case of multiple builds being submitted in one request, each is validated individually prior to submission. Details of which build failed submission (if any) are available in the response object.  Only Connect apps that define the `jiraBuildInfoProvider` module, and on-premise integrations, can access this resource. This resource requires the \'WRITE\' scope for Connect apps. 
     * Submit build data
     */
    async submitBuildsRaw(requestParameters: SubmitBuildsOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SubmitBuildsResponse>> {
        if (requestParameters.authorization === null || requestParameters.authorization === undefined) {
            throw new runtime.RequiredError('authorization','Required parameter requestParameters.authorization was null or undefined when calling submitBuilds.');
        }

        if (requestParameters.submitBuildsRequest === null || requestParameters.submitBuildsRequest === undefined) {
            throw new runtime.RequiredError('submitBuildsRequest','Required parameter requestParameters.submitBuildsRequest was null or undefined when calling submitBuilds.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters.authorization !== undefined && requestParameters.authorization !== null) {
            headerParameters['Authorization'] = String(requestParameters.authorization);
        }

        const response = await this.request({
            path: `/rest/builds/0.1/bulk`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.submitBuildsRequest,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Update / insert builds data.  Builds are identified by the combination of `pipelineId` and `buildNumber`, and existing build data for the same build will be replaced if it exists and the `updateSequenceNumber` of the existing data is less than the incoming data.  Submissions are performed asynchronously. Submitted data will eventually be available in Jira; most updates are available within a short period of time, but may take some time during peak load and/or maintenance times. The `getBuildByKey` operation can be used to confirm that data has been stored successfully (if needed).  In the case of multiple builds being submitted in one request, each is validated individually prior to submission. Details of which build failed submission (if any) are available in the response object.  Only Connect apps that define the `jiraBuildInfoProvider` module, and on-premise integrations, can access this resource. This resource requires the \'WRITE\' scope for Connect apps. 
     * Submit build data
     */
    async submitBuilds(requestParameters: SubmitBuildsOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SubmitBuildsResponse> {
        const response = await this.submitBuildsRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
