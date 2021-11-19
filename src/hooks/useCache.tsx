
// react
import React, { useEffect, useState } from 'react';

// cache utility
import cacheUtility from '../utilities/cache';

// memory cache
const memoryCache = new Map();
const timeoutCache = new Map();

// create use cache hook
const useCache = (fn, keys, timeout = false) => {
  // get key
  const cacheKey = JSON.stringify(keys);

  // get from cache
  const cachedPromise = cacheUtility(cacheKey, fn, timeout);

  // check promise
  if (!(cachedPromise instanceof Promise)) {
    memoryCache.set(cacheKey, cachedPromise);
  }

  // check/reset timeout
  if (timeout) {
    // clear previous timeout
    clearTimeout(timeoutCache.get(cacheKey));

    // add new timeout
    timeoutCache.set(cacheKey, setTimeout(() => {
      memoryCache.delete(cacheKey);
      timeoutCache.delete(cacheKey);
    }, timeout));
  }

  // cache key
  const [key, setKey] = useState(cacheKey);
  const [cached, setCached] = useState(memoryCache.get(cacheKey));
  const [loading, setLoading] = useState(!cached);

  // use effect
  useEffect(() => {
    // check already cached
    if (cacheKey === key && cached) return;

    // set key
    setKey(cacheKey);

    // await done
    let awaitDone = true;

    // load function
    if (!loading) setLoading(true);

    // get from cache
    const newCachedPromise = cacheUtility(cacheKey, fn, timeout);

    // check type
    if (newCachedPromise instanceof Promise) {
      // result
      newCachedPromise.then((result) => {
        // no state set if unloaded
        if (!awaitDone) return;

        // complete async cache function
        memoryCache.set(cacheKey, result);
        setCached(result);
        setLoading(false);
      });
    } else {
      // complete non-async cache function
      memoryCache.set(cacheKey, newCachedPromise);
      setCached(newCachedPromise);
      setLoading(false);
    }

    // return
    return () => {
      // set await done false
      awaitDone = false;
    };
  }, [cacheKey]);

  // return data
  return [cached, loading];
};

// export default
export default useCache;