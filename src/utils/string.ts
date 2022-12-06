/**
 * 字符串占位替换
 * @param text 目标字符串
 * @param values 占位对象值
 * @returns 替换后字符
 */
export const replaceKeyWord = (text: string, values: Record<string, any>) => {
  if (text && values) {
    const replaceHolders = text.match(/\{[^}]+\}/g) || [];

    replaceHolders.forEach((holder) => {
      const key = holder.substring(1, holder.length - 1);
      text = text.replace(holder, values[key]);
    });
    return text;
  }
  return '';
};
