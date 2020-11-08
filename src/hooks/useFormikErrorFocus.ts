import { useEffect, useState, useCallback } from 'react';
import { useFormikContext } from 'formik';

/**
 * Hook that automatically tries to focus first error after the submit event is fired
 *
 * @returns Callback to fire the first error focus event
 */
export function useFormikErrorFocus(): { focusFirstError: VoidFunction } {
  const { errors, isSubmitting, isValidating } = useFormikContext();
  const [timeoutRef, setTimeoutRef] = useState<number | undefined>(undefined);

  const focusFirstError = useCallback(() => {
    const selector = `[name="${Object.keys(errors)[0]}"]`;
    const errorElement = document.querySelector(selector);
    if (errorElement && errorElement instanceof HTMLElement) {
      setTimeoutRef(
        setTimeout(() => {
          errorElement.focus();
        })
      );
    }
  }, [errors, setTimeoutRef]);

  useEffect(() => {
    if (isSubmitting && !isValidating) {
      focusFirstError();
    }
    return () => {
      if (timeoutRef) {
        clearTimeout(timeoutRef);
      }
    };
  }, [timeoutRef, focusFirstError, isValidating, isSubmitting]);

  return { focusFirstError };
}
