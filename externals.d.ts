declare module '*.less';
declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}
declare module '*.json' {
  const value: any;
  export default value;
}

declare module '*.png';

// 通用key-value类型, 定义服务端返回数据
declare type AnyRecord = Record<string, any>;

declare module 'lodash';
