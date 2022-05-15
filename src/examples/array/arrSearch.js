export function br_search() {
    Array.prototype.mySearchIndex = function(target) {
        let half = parseInt(this.length / 2, 10);
        if(target === this[half]) {
            return half;
        }
        if(target > this[half]) {
            return half + this.slice(half, this.length).mySearchIndex(target);
        } else {
            return this.slice(0, half).mySearchIndex(target);
        }
    }
    const ar = [1, 56, 23, 65, 4, 5, 55, 98, 33];
    console.log(`98 found at ${ar.mySearchIndex(98)}`);
}
