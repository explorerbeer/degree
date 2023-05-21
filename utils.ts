import {FormikValues, FormikTouched} from 'formik';

export function getTouchedForFields<T extends FormikValues>(
  touched: FormikTouched<T>,
  fields: (keyof FormikTouched<T>)[],
): FormikTouched<Partial<T>> {
  let reducedTouched = {};

  Object.keys(touched).forEach(key => {
    if (fields.includes(key)) {
      reducedTouched = {...reducedTouched, [key]: touched[key]};
    }
  });

  return reducedTouched;
}

export const markRequired = (what: string): string => `*${what}`;
