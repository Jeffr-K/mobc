import { useCallback } from "react";

/**
 * Custom hook to create FormData from an object.
 * @param T - Type of the object to be converted to FormData.
 * @returns An object containing a function to create FormData.
 * @example
 * export const YourComponent = () => {
 *  const { createFormData } = useFormData<MyType>();
 *
 *  const formData = createFormData({ key: "value", file: myFile });
 *
 *  ...your code
 * }
 *
 */
export const useFormData = <T extends Record<string, unknown>>() => {
  const appendArrayToFormData = (formData: FormData, key: string, items: Array<unknown>) => {
    items.forEach((item, index) => {
      const fieldKey = `${key}[${index}]`;
      if (item instanceof File || item instanceof Blob) {
        formData.append(fieldKey, item);
      } else if (typeof item === "string") {
        // 문자열은 직접 추가 (stringify 없이)
        formData.append(fieldKey, item);
      } else {
        formData.append(fieldKey, JSON.stringify(item));
      }
    });
  };

  const appendFileListToFormData = (formData: FormData, key: string, fileList: FileList) => {
    Array.from(fileList).forEach(file => {
      formData.append(key, file);
    });
  };

  const createFormData = useCallback((data: T): FormData => {
    const formData = new FormData();

    Object.entries(data).forEach(([key, value]) => {
      if (value === undefined || value === null) return;

      if (Array.isArray(value)) {
        appendArrayToFormData(formData, key, value);
      } else if (value instanceof FileList) {
        appendFileListToFormData(formData, key, value);
      } else if (value instanceof File || value instanceof Blob) {
        formData.append(key, value);
      } else if (typeof value === "string") {
        formData.append(key, value);
      } else {
        formData.append(key, JSON.stringify(value));
      }
    });

    return formData;
  }, []);

  return { createFormData };
};
