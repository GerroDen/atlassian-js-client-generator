/* tslint:disable */
/* eslint-disable */
/**
 * App Migration
 * Endpoints available in Jira and Confluence cloud instances to support app migrations
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  TransferErrorDto,
} from '../models/index';

export interface FetchServerSideExceptionUsingGETRequest {
    transferId: string;
}

/**
 * 
 */
export class ErrorRetrievalAPIApi extends runtime.BaseAPI {

    /**
     * **Note: This feature is available for app migrations using CCMA v3.3.7 and JCMA v1.7.2 onwards.**  Retrieves details of the exception thrown from your server side listener method `onStartAppMigration` 
     * Fetch server side error
     */
    async fetchServerSideExceptionUsingGETRaw(requestParameters: FetchServerSideExceptionUsingGETRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TransferErrorDto>> {
        if (requestParameters['transferId'] == null) {
            throw new runtime.RequiredError(
                'transferId',
                'Required parameter "transferId" was null or undefined when calling fetchServerSideExceptionUsingGET().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/error/{transferId}`.replace(`{${"transferId"}}`, encodeURIComponent(String(requestParameters['transferId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * **Note: This feature is available for app migrations using CCMA v3.3.7 and JCMA v1.7.2 onwards.**  Retrieves details of the exception thrown from your server side listener method `onStartAppMigration` 
     * Fetch server side error
     */
    async fetchServerSideExceptionUsingGET(requestParameters: FetchServerSideExceptionUsingGETRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TransferErrorDto> {
        const response = await this.fetchServerSideExceptionUsingGETRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
