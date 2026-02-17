# AuthApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**authSuccessAuthSuccessGet**](AuthApi.md#authsuccessauthsuccessget) | **GET** /auth/success | Auth Success |
| [**githubAuthAuthGithubGet**](AuthApi.md#githubauthauthgithubget) | **GET** /auth/github | Github Auth |
| [**githubCallbackAuthCallbackGet**](AuthApi.md#githubcallbackauthcallbackget) | **GET** /auth/callback | Github Callback |
| [**loginPageAuthLoginGet**](AuthApi.md#loginpageauthloginget) | **GET** /auth/login | Login Page |
| [**logoutAuthLogoutGet**](AuthApi.md#logoutauthlogoutget) | **GET** /auth/logout | Logout |
| [**verifyTokenAuthVerifyGet**](AuthApi.md#verifytokenauthverifyget) | **GET** /auth/verify | Verify Token |



## authSuccessAuthSuccessGet

> any authSuccessAuthSuccessGet()

Auth Success

Show success page after login.

### Example

```ts
import {
  Configuration,
  AuthApi,
} from 'tensors-client';
import type { AuthSuccessAuthSuccessGetRequest } from 'tensors-client';

async function example() {
  console.log("🚀 Testing tensors-client SDK...");
  const api = new AuthApi();

  try {
    const data = await api.authSuccessAuthSuccessGet();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

**any**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## githubAuthAuthGithubGet

> any githubAuthAuthGithubGet(returnUrl)

Github Auth

Redirect to GitHub OAuth.

### Example

```ts
import {
  Configuration,
  AuthApi,
} from 'tensors-client';
import type { GithubAuthAuthGithubGetRequest } from 'tensors-client';

async function example() {
  console.log("🚀 Testing tensors-client SDK...");
  const api = new AuthApi();

  const body = {
    // string | URL to redirect after login (optional)
    returnUrl: returnUrl_example,
  } satisfies GithubAuthAuthGithubGetRequest;

  try {
    const data = await api.githubAuthAuthGithubGet(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **returnUrl** | `string` | URL to redirect after login | [Optional] [Defaults to `undefined`] |

### Return type

**any**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## githubCallbackAuthCallbackGet

> any githubCallbackAuthCallbackGet(code, state)

Github Callback

Handle GitHub OAuth callback.

### Example

```ts
import {
  Configuration,
  AuthApi,
} from 'tensors-client';
import type { GithubCallbackAuthCallbackGetRequest } from 'tensors-client';

async function example() {
  console.log("🚀 Testing tensors-client SDK...");
  const api = new AuthApi();

  const body = {
    // string (optional)
    code: code_example,
    // string (optional)
    state: state_example,
  } satisfies GithubCallbackAuthCallbackGetRequest;

  try {
    const data = await api.githubCallbackAuthCallbackGet(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **code** | `string` |  | [Optional] [Defaults to `undefined`] |
| **state** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

**any**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## loginPageAuthLoginGet

> any loginPageAuthLoginGet(returnUrl, error)

Login Page

Show login page.

### Example

```ts
import {
  Configuration,
  AuthApi,
} from 'tensors-client';
import type { LoginPageAuthLoginGetRequest } from 'tensors-client';

async function example() {
  console.log("🚀 Testing tensors-client SDK...");
  const api = new AuthApi();

  const body = {
    // string | URL to redirect after login (optional)
    returnUrl: returnUrl_example,
    // string (optional)
    error: error_example,
  } satisfies LoginPageAuthLoginGetRequest;

  try {
    const data = await api.loginPageAuthLoginGet(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **returnUrl** | `string` | URL to redirect after login | [Optional] [Defaults to `undefined`] |
| **error** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

**any**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## logoutAuthLogoutGet

> any logoutAuthLogoutGet(returnUrl)

Logout

Clear session and redirect.

### Example

```ts
import {
  Configuration,
  AuthApi,
} from 'tensors-client';
import type { LogoutAuthLogoutGetRequest } from 'tensors-client';

async function example() {
  console.log("🚀 Testing tensors-client SDK...");
  const api = new AuthApi();

  const body = {
    // string (optional)
    returnUrl: returnUrl_example,
  } satisfies LogoutAuthLogoutGetRequest;

  try {
    const data = await api.logoutAuthLogoutGet(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **returnUrl** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

**any**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## verifyTokenAuthVerifyGet

> any verifyTokenAuthVerifyGet(token, tensorsSession)

Verify Token

Verify a session token. Returns user info if valid.

### Example

```ts
import {
  Configuration,
  AuthApi,
} from 'tensors-client';
import type { VerifyTokenAuthVerifyGetRequest } from 'tensors-client';

async function example() {
  console.log("🚀 Testing tensors-client SDK...");
  const api = new AuthApi();

  const body = {
    // string (optional)
    token: token_example,
    // string (optional)
    tensorsSession: tensorsSession_example,
  } satisfies VerifyTokenAuthVerifyGetRequest;

  try {
    const data = await api.verifyTokenAuthVerifyGet(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **token** | `string` |  | [Optional] [Defaults to `undefined`] |
| **tensorsSession** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

**any**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

