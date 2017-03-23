/**
 * Created by bikash on 2/3/17.
 */

import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export default function validateInput(data) {

  let errors = {};

  // if(Validator.isEmpty(data.username)){
  //   errors.username = "This field is required";
  // }
  // if(Validator.isEmpty(data.firstName)){
  //   errors.firstName = "This field is required";
  // }
  // if(Validator.isEmpty(data.lastName)){
  //   errors.lastName = "This field is required";
  // }
  if(Validator.isEmpty(data.email)){
    errors.email = "This field is required";
  }
  if(Validator.isEmpty(data.password)) {
    errors.password = "This field is required";
  }
  if(Validator.isEmpty(data.confirmPassword)){
    errors.confirmPassword = "This field is required";
  }
  if(!Validator.equals(data.password, data.confirmPassword)){
    errors.confirmPassword = "Password must match";
  }

  return{
    errors,
    isValid: isEmpty(errors)
  }
  
}