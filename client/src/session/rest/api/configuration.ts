// Copyright © 2022, SAS Institute Inc., Cary, NC, USA. All Rights Reserved.
// Licensed under SAS Code Extension Terms, available at Code_Extension_Agreement.pdf

/**
 * Compute
 * The Compute API defines the replacement for the application servers that were used for SAS 9. The Compute API enables clients to perform the following tasks: <UL> <LI>Submit and execute SAS code. <LI>Obtain the SAS log or listing information from executed SAS code. <LI>View output that is generated by a SAS code submission. <LI>Access SAS data sets that are created by a SAS code submission. <LI>Access SAS filerefs that are created by a SAS code submission. <LI>Access SAS variables that are defined and used in a SAS code submission. <LI>Retrieve information about engines that are available in a session. </UL>
 *
 * The version of the OpenAPI document: 11
 * Contact: devex@sas.com
 *
 * NOTE: This class is auto generated by OpenAPI
 * Do not edit the class manually.
 */

/* tslint:disable */
/* eslint-disable */

export interface ConfigurationParameters {
  apiKey?:
    | string
    | Promise<string>
    | ((name: string) => string)
    | ((name: string) => Promise<string>);
  username?: string;
  password?: string;
  accessToken?:
    | string
    | Promise<string>
    | ((name?: string, scopes?: string[]) => string)
    | ((name?: string, scopes?: string[]) => Promise<string>);
  basePath?: string;
  baseOptions?: any;
  formDataCtor?: new () => any;
}

export class Configuration {
  /**
   * parameter for apiKey security
   * @param name security name
   * @memberof Configuration
   */
  apiKey?:
    | string
    | Promise<string>
    | ((name: string) => string)
    | ((name: string) => Promise<string>);
  /**
   * parameter for basic security
   *
   * @type {string}
   * @memberof Configuration
   */
  username?: string;
  /**
   * parameter for basic security
   *
   * @type {string}
   * @memberof Configuration
   */
  password?: string;
  /**
   * parameter for oauth2 security
   * @param name security name
   * @param scopes oauth2 scope
   * @memberof Configuration
   */
  accessToken?:
    | string
    | Promise<string>
    | ((name?: string, scopes?: string[]) => string)
    | ((name?: string, scopes?: string[]) => Promise<string>);
  /**
   * override base path
   *
   * @type {string}
   * @memberof Configuration
   */
  basePath?: string;
  /**
   * base options for axios calls
   *
   * @type {any}
   * @memberof Configuration
   */
  baseOptions?: any;
  /**
   * The FormData constructor that will be used to create multipart form data
   * requests. You can inject this here so that execution environments that
   * do not support the FormData class can still run the generated client.
   *
   * @type {new () => FormData}
   */
  formDataCtor?: new () => any;

  constructor(param: ConfigurationParameters = {}) {
    this.apiKey = param.apiKey;
    this.username = param.username;
    this.password = param.password;
    this.accessToken = param.accessToken;
    this.basePath = param.basePath;
    this.baseOptions = param.baseOptions;
    this.formDataCtor = param.formDataCtor;
  }

  /**
   * Check if the given MIME is a JSON MIME.
   * JSON MIME examples:
   *   application/json
   *   application/json; charset=UTF8
   *   APPLICATION/JSON
   *   application/vnd.company+json
   * @param mime - MIME (Multipurpose Internet Mail Extensions)
   * @return True if the given MIME is JSON, false otherwise.
   */
  public isJsonMime(mime: string): boolean {
    const jsonMime: RegExp = new RegExp(
      "^(application/json|[^;/ \t]+/[^;/ \t]+[+]json)[ \t]*(;.*)?$",
      "i"
    );
    return (
      mime !== null &&
      (jsonMime.test(mime) ||
        mime.toLowerCase() === "application/json-patch+json")
    );
  }
}
