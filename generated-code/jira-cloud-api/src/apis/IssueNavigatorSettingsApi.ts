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
  ColumnItem,
} from '../models';

export interface SetIssueNavigatorDefaultColumnsRequest {
    requestBody?: Array<string>;
}

/**
 * 
 */
export class IssueNavigatorSettingsApi extends runtime.BaseAPI {

    /**
     * Returns the default issue navigator columns.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Get issue navigator default columns
     */
    async getIssueNavigatorDefaultColumnsRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<ColumnItem>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/rest/api/3/settings/columns`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns the default issue navigator columns.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Get issue navigator default columns
     */
    async getIssueNavigatorDefaultColumns(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<ColumnItem>> {
        const response = await this.getIssueNavigatorDefaultColumnsRaw(initOverrides);
        return await response.value();
    }

    /**
     * Sets the default issue navigator columns.  The `columns` parameter accepts a navigable field value and is expressed as HTML form data. To specify multiple columns, pass multiple `columns` parameters. For example, in curl:  `curl -X PUT -d columns=summary -d columns=description https://your-domain.atlassian.net/rest/api/3/settings/columns`  If no column details are sent, then all default columns are removed.  A navigable field is one that can be used as a column on the issue navigator. Find details of navigable issue columns using [Get fields](#api-rest-api-3-field-get).  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Set issue navigator default columns
     */
    async setIssueNavigatorDefaultColumnsRaw(requestParameters: SetIssueNavigatorDefaultColumnsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'multipart/form-data';

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/rest/api/3/settings/columns`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.requestBody,
        }, initOverrides);

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * Sets the default issue navigator columns.  The `columns` parameter accepts a navigable field value and is expressed as HTML form data. To specify multiple columns, pass multiple `columns` parameters. For example, in curl:  `curl -X PUT -d columns=summary -d columns=description https://your-domain.atlassian.net/rest/api/3/settings/columns`  If no column details are sent, then all default columns are removed.  A navigable field is one that can be used as a column on the issue navigator. Find details of navigable issue columns using [Get fields](#api-rest-api-3-field-get).  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Set issue navigator default columns
     */
    async setIssueNavigatorDefaultColumns(requestParameters: SetIssueNavigatorDefaultColumnsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any> {
        const response = await this.setIssueNavigatorDefaultColumnsRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
