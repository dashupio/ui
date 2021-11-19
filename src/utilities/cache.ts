
// memory cache
const asyncCache = new Map();
const timeoutCache = new Map();

// create use cache hook
const cacheUtility = (key, fn, timeout = false) => {
  // check async
  if (!asyncCache.get(key)) {
    // set key
    asyncCache.set(key, fn());
  }

  // check/reset timeout
  if (timeout) {
    // clear previous timeout
    clearTimeout(timeoutCache.get(key));

    // add new timeout
    timeoutCache.set(key, setTimeout(() => {
      asyncCache.delete(key);
      timeoutCache.delete(key);
    }, timeout));
  }

  if (typeof window !== 'undefined') window.asynCache = asyncCache;

  // return cached
  return asyncCache.get(key);
};

// export default
export default cacheUtility;