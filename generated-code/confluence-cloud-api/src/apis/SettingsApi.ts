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
  LookAndFeel,
  LookAndFeelSelection,
  LookAndFeelSettings,
  LookAndFeelWithLinks,
  SystemInfoEntity,
} from '../models';

export interface GetLookAndFeelSettingsRequest {
    spaceKey?: string;
}

export interface ResetLookAndFeelSettingsRequest {
    spaceKey?: string;
}

export interface SetLookAndFeelSettingsRequest {
    body: string;
    spaceKey?: string;
}

export interface UpdateLookAndFeelRequest {
    body: LookAndFeelSelection;
}

export interface UpdateLookAndFeelSettingsRequest {
    body: LookAndFeel;
    spaceKey?: string;
}

/**
 * 
 */
export class SettingsApi extends runtime.BaseAPI {

    /**
     * Returns the look and feel settings for the site or a single space. This includes attributes such as the color scheme, padding, and border radius.  The look and feel settings for a space can be inherited from the global look and feel settings or provided by a theme.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: None
     * Get look and feel settings
     */
    async getLookAndFeelSettingsRaw(requestParameters: GetLookAndFeelSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<LookAndFeelSettings>> {
        const queryParameters: any = {};

        if (requestParameters.spaceKey !== undefined) {
            queryParameters['spaceKey'] = requestParameters.spaceKey;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oAuthDefinitions", ["manage:confluence-configuration"]);
        }

        const response = await this.request({
            path: `/wiki/rest/api/settings/lookandfeel`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns the look and feel settings for the site or a single space. This includes attributes such as the color scheme, padding, and border radius.  The look and feel settings for a space can be inherited from the global look and feel settings or provided by a theme.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: None
     * Get look and feel settings
     */
    async getLookAndFeelSettings(requestParameters: GetLookAndFeelSettingsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<LookAndFeelSettings> {
        const response = await this.getLookAndFeelSettingsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns the system information for the Confluence Cloud tenant. This information is used by Atlassian.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to access the Confluence site (\'Can use\' global permission).
     * Get system info
     */
    async getSystemInfoRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SystemInfoEntity>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oAuthDefinitions", ["manage:confluence-configuration"]);
        }

        const response = await this.request({
            path: `/wiki/rest/api/settings/systemInfo`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns the system information for the Confluence Cloud tenant. This information is used by Atlassian.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to access the Confluence site (\'Can use\' global permission).
     * Get system info
     */
    async getSystemInfo(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SystemInfoEntity> {
        const response = await this.getSystemInfoRaw(initOverrides);
        return await response.value();
    }

    /**
     * Resets the custom look and feel settings for the site or a single space. This changes the values of the custom settings to be the same as the default settings. It does not change which settings (default or custom) are selected. Note, the default space settings are inherited from the current global settings.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: \'Admin\' permission for the space.
     * Reset look and feel settings
     */
    async resetLookAndFeelSettingsRaw(requestParameters: ResetLookAndFeelSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        if (requestParameters.spaceKey !== undefined) {
            queryParameters['spaceKey'] = requestParameters.spaceKey;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oAuthDefinitions", ["manage:confluence-configuration"]);
        }

        const response = await this.request({
            path: `/wiki/rest/api/settings/lookandfeel/custom`,
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Resets the custom look and feel settings for the site or a single space. This changes the values of the custom settings to be the same as the default settings. It does not change which settings (default or custom) are selected. Note, the default space settings are inherited from the current global settings.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: \'Admin\' permission for the space.
     * Reset look and feel settings
     */
    async resetLookAndFeelSettings(requestParameters: ResetLookAndFeelSettingsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.resetLookAndFeelSettingsRaw(requestParameters, initOverrides);
    }

    /**
     * Sets the look and feel settings to either the default settings or the custom settings, for the site or a single space. Note, the default space settings are inherited from the current global settings.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: \'Admin\' permission for the space.
     * Set look and feel settings
     */
    async setLookAndFeelSettingsRaw(requestParameters: SetLookAndFeelSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<string>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling setLookAndFeelSettings.');
        }

        const queryParameters: any = {};

        if (requestParameters.spaceKey !== undefined) {
            queryParameters['spaceKey'] = requestParameters.spaceKey;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oAuthDefinitions", ["manage:confluence-configuration"]);
        }

        const response = await this.request({
            path: `/wiki/rest/api/settings/lookandfeel/selected`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.body as any,
        }, initOverrides);

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * Sets the look and feel settings to either the default settings or the custom settings, for the site or a single space. Note, the default space settings are inherited from the current global settings.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: \'Admin\' permission for the space.
     * Set look and feel settings
     */
    async setLookAndFeelSettings(requestParameters: SetLookAndFeelSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<string> {
        const response = await this.setLookAndFeelSettingsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Sets the look and feel settings to the default (global) settings, the custom settings, or the current theme\'s settings for a space. The custom and theme settings can only be selected if there is already a theme set for a space. Note, the default space settings are inherited from the current global settings.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: \'Admin\' permission for the space.
     * Select look and feel settings
     */
    async updateLookAndFeelRaw(requestParameters: UpdateLookAndFeelRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<LookAndFeelSelection>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling updateLookAndFeel.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oAuthDefinitions", ["manage:confluence-configuration"]);
        }

        const response = await this.request({
            path: `/wiki/rest/api/settings/lookandfeel`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.body,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Sets the look and feel settings to the default (global) settings, the custom settings, or the current theme\'s settings for a space. The custom and theme settings can only be selected if there is already a theme set for a space. Note, the default space settings are inherited from the current global settings.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: \'Admin\' permission for the space.
     * Select look and feel settings
     */
    async updateLookAndFeel(requestParameters: UpdateLookAndFeelRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<LookAndFeelSelection> {
        const response = await this.updateLookAndFeelRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Updates the look and feel settings for the site or for a single space. If custom settings exist, they are updated. If no custom settings exist, then a set of custom settings is created.  Note, if a theme is selected for a space, the space look and feel settings are provided by the theme and cannot be overridden.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: \'Admin\' permission for the space.
     * Update look and feel settings
     */
    async updateLookAndFeelSettingsRaw(requestParameters: UpdateLookAndFeelSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<LookAndFeelWithLinks>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling updateLookAndFeelSettings.');
        }

        const queryParameters: any = {};

        if (requestParameters.spaceKey !== undefined) {
            queryParameters['spaceKey'] = requestParameters.spaceKey;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oAuthDefinitions", ["manage:confluence-configuration"]);
        }

        const response = await this.request({
            path: `/wiki/rest/api/settings/lookandfeel/custom`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.body,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Updates the look and feel settings for the site or for a single space. If custom settings exist, they are updated. If no custom settings exist, then a set of custom settings is created.  Note, if a theme is selected for a space, the space look and feel settings are provided by the theme and cannot be overridden.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: \'Admin\' permission for the space.
     * Update look and feel settings
     */
    async updateLookAndFeelSettings(requestParameters: UpdateLookAndFeelSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<LookAndFeelWithLinks> {
        const response = await this.updateLookAndFeelSettingsRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
