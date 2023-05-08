/* tslint:disable */
/* eslint-disable */
/**
 * Bitbucket Server
 * This is the reference document for the Atlassian Bitbucket REST API. The REST API is for developers who want to:    - integrate Bitbucket with other applications;   - create scripts that interact with Bitbucket; or   - develop plugins that enhance the Bitbucket UI, using REST to interact with the backend.    You can read more about developing Bitbucket plugins in the [Bitbucket Developer Documentation](https://developer.atlassian.com/bitbucket/server/docs/latest/).
 *
 * The version of the OpenAPI document: 8.10
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  GetAll401Response,
  RestMarkup,
} from '../models';

interface PreviewRequest {
    htmlEscape?: string;
    urlMode?: string;
    includeHeadingId?: string;
    hardwrap?: string;
    body?: string;
}

/**
 * 
 */
export class MarkupApi extends runtime.BaseAPI {

    /**
     * Preview generated HTML for the given markdown content.  Only authenticated users may call this resource.
     * Preview markdown render
     */
    async previewRaw(requestParameters: PreviewRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RestMarkup>> {
        const queryParameters: any = {};

        if (requestParameters.htmlEscape !== undefined) {
            queryParameters['htmlEscape'] = requestParameters.htmlEscape;
        }

        if (requestParameters.urlMode !== undefined) {
            queryParameters['urlMode'] = requestParameters.urlMode;
        }

        if (requestParameters.includeHeadingId !== undefined) {
            queryParameters['includeHeadingId'] = requestParameters.includeHeadingId;
        }

        if (requestParameters.hardwrap !== undefined) {
            queryParameters['hardwrap'] = requestParameters.hardwrap;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/latest/markup/preview`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.body as any,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Preview generated HTML for the given markdown content.  Only authenticated users may call this resource.
     * Preview markdown render
     */
    async preview(requestParameters: PreviewRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RestMarkup> {
        const response = await this.previewRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
