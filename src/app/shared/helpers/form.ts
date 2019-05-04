import { NgForm } from '@angular/forms';

export const validateFormControls = (form: NgForm) => {
  if (!form) {
    return;
  }

  for (const controlKey in form.controls) {
    if (form.controls.hasOwnProperty(controlKey)) {
      form.controls[controlKey].markAsTouched();
    }
  }
};

export const validateEmail = (email: any) => {
  // const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\
  // .[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const re = /\S+@\S+\.\S+/;
  return re.test(String(email).toLowerCase());
};
