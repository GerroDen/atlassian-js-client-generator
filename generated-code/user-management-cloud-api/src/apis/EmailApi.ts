/* tslint:disable */
/* eslint-disable */
/**
 * IDv2: User management
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  NotFoundAccount,
  Unauthorized,
  UsersAccountIdManageEmailPut403Response,
  UsersAccountIdManageEmailPutRequest,
  UsersAccountIdManageProfilePatch400Response,
} from '../models/index';

export interface UsersAccountIdManageEmailPutOperationRequest {
    accountId: string;
    usersAccountIdManageEmailPutRequest: UsersAccountIdManageEmailPutRequest;
}

/**
 * 
 */
export class EmailApi extends runtime.BaseAPI {

    /**
     * Sets the specified user\'s email address. Before using this endpoint, you must [verify the target domain](https://confluence.atlassian.com/x/gjcWN) as the new email address will be considered verified. The permission to make use of this resource is exposed by the `email.set` privilege. This call invalidates all active sessions. 
     * Set email 
     */
    async usersAccountIdManageEmailPutRaw(requestParameters: UsersAccountIdManageEmailPutOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['accountId'] == null) {
            throw new runtime.RequiredError(
                'accountId',
                'Required parameter "accountId" was null or undefined when calling usersAccountIdManageEmailPut().'
            );
        }

        if (requestParameters['usersAccountIdManageEmailPutRequest'] == null) {
            throw new runtime.RequiredError(
                'usersAccountIdManageEmailPutRequest',
                'Required parameter "usersAccountIdManageEmailPutRequest" was null or undefined when calling usersAccountIdManageEmailPut().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/users/{account_id}/manage/email`.replace(`{${"account_id"}}`, encodeURIComponent(String(requestParameters['accountId']))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['usersAccountIdManageEmailPutRequest'],
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Sets the specified user\'s email address. Before using this endpoint, you must [verify the target domain](https://confluence.atlassian.com/x/gjcWN) as the new email address will be considered verified. The permission to make use of this resource is exposed by the `email.set` privilege. This call invalidates all active sessions. 
     * Set email 
     */
    async usersAccountIdManageEmailPut(requestParameters: UsersAccountIdManageEmailPutOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.usersAccountIdManageEmailPutRaw(requestParameters, initOverrides);
    }

}
