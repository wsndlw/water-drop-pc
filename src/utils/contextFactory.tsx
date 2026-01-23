import { createContext, useContext, useMemo, useState, type JSX } from "react";
import type { IPropChild } from "./types";

interface IStore {
  key: string;
  store: Record<string, any>;
  setStore: (payload: Record<string, any>) => void;
}


function getCxtProvider(
  key: string,
  defaultValue: Record<string, any>,
  AppContext: React.Context<IStore>,
) {
  return ({ children }: IPropChild) => {
    const [store, setStore] = useState(defaultValue);
    const value = useMemo(() => ({
      key,
      store,
      setStore,
    }), [store,key]);

    return (
      <AppContext.Provider value={value}>
        {children}
      </AppContext.Provider>
    );
  };
}
//用于缓存每一个cxt
const cxtCache: Record<string, Cxt> = {};
//类定义，给默认值，然后用构造器创建。key--名称， store--存储的内容  ，setxx--set方法
class Cxt {
  defaultStore: IStore;

  AppContext: React.Context<IStore>;

  Provider: ({ children }: IPropChild) => JSX.Element;

  constructor(key: string, defaultValue: Record<string, any>) {
    this.defaultStore = {
      key,
      store: defaultValue,
      setStore: () => { },
    };
    this.AppContext = createContext(this.defaultStore);  //真正的上下文
    this.Provider = getCxtProvider(key, defaultValue, this.AppContext);  //用于包裹的组件
    cxtCache[key] = this;
  }
}
//钩子，用于获取上下文，有则用，没有则创建。获得内容和set方法。即生产上下文
export function useAppContext(key: string) {
  const cxt = cxtCache[key] as Cxt;
  const app = useContext(cxt.AppContext);
  return {
    store: app.store,
    setStore: app.setStore,
  };
}
//让上下文能够被使用
export function connectFactory(
  key: string,
  defaultValue: Record<string, any>,
) {
  const cxt = cxtCache[key];
  let CurCxt: Cxt;
  if (cxt) {
    CurCxt = cxt;
  } else {
    CurCxt = new Cxt(key, defaultValue);
  }

  return (Child: React.FunctionComponent<any>) => (props: any) => (
    <CurCxt.Provider>
      <Child {...props} />
    </CurCxt.Provider>
  );
}
