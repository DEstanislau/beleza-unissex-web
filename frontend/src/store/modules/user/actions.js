export function updateProfileRequest(data) {
  return {
    type: '@user/UPDATE_PROFILE_REQUEST',
    payload: { data },
  };
}

export function updateProfileSuccess(profile) {
  return {
    type: '@user/UPDATE_PROFILE_SUCCESS',
    payload: { profile },
  };
}

export function updateProfilefailure() {
  return {
    type: '@user/UPDATE_PROFILE_FAILURE',
  };
}

export function createProductSucess(provider_id, name_product, price) {
  return {
    type: '@user/CREATE_PRODUCT',
    payload: { provider_id, name_product, price },
  };
}
