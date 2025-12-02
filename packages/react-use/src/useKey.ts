import { useMemo } from "react";
import type { DependencyList } from "react";
import { noop } from "./misc/util";
import type { UseEventOptions, UseEventTarget } from "./useEvent";
import useEvent from "./useEvent";

export type KeyFilter =
  | undefined
  | string
  | null
  | ((event: KeyboardEvent) => boolean);

export type KeyPredicate = (event: KeyboardEvent) => boolean;

export type Handler = (event: KeyboardEvent) => void;

const createKeyPredicate = (keyFilter: KeyFilter): KeyPredicate => {
  return typeof keyFilter === "function"
    ? keyFilter
    : typeof keyFilter === "string"
    ? (event: KeyboardEvent) => event.key === keyFilter
    : keyFilter
    ? () => true
    : () => false;
};

const useKey = <T extends UseEventTarget>(
  key: KeyFilter,
  fn: Handler = noop,
  opts: UseEventOptions<T> = {},
  deps: DependencyList = [key]
) => {
  const { event = "keydown", target, options } = opts;

  const useMemoHandler = useMemo(() => {
    const predicate: KeyPredicate = createKeyPredicate(key);

    const handler: Handler = (handlerEvent) => {
      if (predicate(handlerEvent)) {
        return fn(handlerEvent);
      }
    };

    return handler;
  }, deps);

  useEvent(event, useMemoHandler, target, options);
};

export default useKey;
