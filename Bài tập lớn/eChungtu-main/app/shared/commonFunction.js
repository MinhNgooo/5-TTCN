import { REGEX_PHONE_NUMBER } from '../utils/constants';

// const convertTime = datetime => {};
export const validatePhoneNumber = phoneNumber => {
  if (phoneNumber.match(REGEX_PHONE_NUMBER)) {
    return true;
  }
  return false;
};
