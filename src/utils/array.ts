import { cloneDeep, isArray, merge } from 'lodash';

export const getKey = (key: string | string[]): string =>
  isArray(key) ? (key as string[]).join('.') : (key as string);

/**
 * 深度合并字段
 * 目的是让静态字段动态字段分来写
 * @param fields 静态字段
 * @param activeField 动态字段
 * @param mergeKey 合并对象的唯一标识
 * @returns 合并字段
 */
export function mergeField<T>(fields: T[], activeField: T[], mergeKey: string): T[] {
  if (fields.length && activeField.length) {
    const fieldMap: Record<string, any> = {};
    const newFields = cloneDeep(fields) as T[];
    const otherFields: T[] = [];

    newFields.forEach((item, index) => {
      fieldMap[getKey((item as Record<string, any>)[mergeKey])] = index;
    });
    activeField.forEach((item) => {
      const fieldIndex = fieldMap[getKey((item as Record<string, any>)[mergeKey])];
      if (fieldIndex !== undefined) {
        newFields[fieldIndex] = merge(newFields[fieldIndex], item);
      } else {
        otherFields.push(item);
      }
    });

    return otherFields.length ? newFields.concat(otherFields) : newFields;
  }

  return fields;
}
