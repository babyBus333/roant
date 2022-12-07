import { replaceKeyWord } from 'roant/utils/string';

export function getRequiredMessage<T extends { type?: string }>(
  field: T,
  formLocale: Record<string, any>,
) {
  const requiredMessages = formLocale.required;
  const message =
    replaceKeyWord(requiredMessages[field.type || 'input'], field) ||
    replaceKeyWord(requiredMessages.default, field);
  return message as string;
}

export function getPlaceHolder<T extends { type?: string }>(
  field: T,
  formLocale: Record<string, any>,
): string {
  const requiredMessages = formLocale.placeholder;
  const message =
    replaceKeyWord(requiredMessages[field.type || 'input'], field) ||
    replaceKeyWord(requiredMessages.default, field);
  return message as string;
}
