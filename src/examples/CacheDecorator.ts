import * as NodeCache from 'node-cache';

export const nodeCache = new NodeCache(); // instance of node-cache you should use for storing cached data
interface CachedValue {
    isError?:boolean;
    value:any,
}
export function cache(ttl: number = 10) {
    return function (
        target: any,
        propertyName: string,
        propertyDescriptor: PropertyDescriptor,
    ) {
        const className = target.constructor.name; // class name taken from decorated method's class
        const originalMethod = propertyDescriptor.value; // under value is the original method itself
        propertyDescriptor.value = function (...args: any[]) {
            // only in the body of this function console.log will work for debugging since only this part is executed during the runtime
            // adjust the method to cache values before calling original one
            const genKeysWithType = (args: any):string =>{
                let ret:string = '';
                for(let i=0;i<args.length;i++) {
                    const type = typeof(args[i]);
                    ret+=`${args[i]}_${type}-`
                }
                return ret;
            }
            // generate key with type of arguments
            const keyWithType:string = genKeysWithType(args);
            const key:string = `${className}-${propertyName}${keyWithType}`;

            const cachedValue: CachedValue | undefined = nodeCache.get(key);
            // check if cachedValue is present    
            if(cachedValue) {
                // if cached method response has error then throw error
                if(cachedValue.isError) {
                    throw new Error(cachedValue.value);
                }
                return cachedValue.value;
            } else {
                let result: CachedValue;
                try {
                    // invoke metho with given args
                    result = originalMethod.apply(this, args);
                    // put result in cache only if there is valid value
                    if(result) {
                        nodeCache.set(key, {value: result}, ttl);
                    }
                } catch(e) {
                    // put error message inside cache
                    nodeCache.set(key, {isError:true, value: e.message}, ttl);
                    throw e;
                }
                return result;
            }
        };

        // return decorated descriptor
        return propertyDescriptor;
    };
}
