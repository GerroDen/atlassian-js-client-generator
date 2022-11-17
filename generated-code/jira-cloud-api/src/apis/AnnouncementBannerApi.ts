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
  AnnouncementBannerConfiguration,
  AnnouncementBannerConfigurationUpdate,
  ErrorCollection,
} from '../models';

export interface SetBannerRequest {
    announcementBannerConfigurationUpdate: AnnouncementBannerConfigurationUpdate;
}

/**
 * 
 */
export class AnnouncementBannerApi extends runtime.BaseAPI {

    /**
     * Returns the current announcement banner configuration.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Get announcement banner configuration
     */
    async getBannerRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AnnouncementBannerConfiguration>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["manage:jira-configuration"]);
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/rest/api/3/announcementBanner`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns the current announcement banner configuration.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Get announcement banner configuration
     */
    async getBanner(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AnnouncementBannerConfiguration> {
        const response = await this.getBannerRaw(initOverrides);
        return await response.value();
    }

    /**
     * Updates the announcement banner configuration.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Update announcement banner configuration
     */
    async setBannerRaw(requestParameters: SetBannerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>> {
        if (requestParameters.announcementBannerConfigurationUpdate === null || requestParameters.announcementBannerConfigurationUpdate === undefined) {
            throw new runtime.RequiredError('announcementBannerConfigurationUpdate','Required parameter requestParameters.announcementBannerConfigurationUpdate was null or undefined when calling setBanner.');
        }

        const queryParameters: any = {};

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
            path: `/rest/api/3/announcementBanner`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.announcementBannerConfigurationUpdate,
        }, initOverrides);

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * Updates the announcement banner configuration.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Update announcement banner configuration
     */
    async setBanner(requestParameters: SetBannerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any> {
        const response = await this.setBannerRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
