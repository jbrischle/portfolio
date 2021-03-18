import NodeCache from 'node-cache';

export class CacheService {
    private cache: NodeCache;
    private ttlSeconds: number = 60 * 60;

    constructor() {
        this.cache = new NodeCache({stdTTL: this.ttlSeconds, checkperiod: this.ttlSeconds * 0.2, useClones: false});
    }

    get(key: any) {
        return this.cache.get(key);
    }

    set(key: NodeCache.Key, value: any) {
        return this.cache.set(key, value)
    }

    del(keys: NodeCache.Key | NodeCache.Key[]) {
        this.cache.del(keys);
    }

    delStartWith(startStr = '') {
        if (!startStr) {
            return;
        }

        const keys = this.cache.keys();
        for (const key of keys) {
            if (key.indexOf(startStr) === 0) {
                this.del(key);
            }
        }
    }

    flush() {
        this.cache.flushAll();
    }
}
