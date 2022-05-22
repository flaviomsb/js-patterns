class HashTable {
  /**
   * Begin the hash table by sizing the data nmap
   * @param {number} size
   */
  constructor(size = 7) {
    this.dataMap = new Array(size);
  }

  /**
   * Push the value into the map
   * @param {string} key
   * @param {*} value
   * @returns {HashTable}
   */
  set(key, value) {
    const index = this.#hash(key);
    if (!this.dataMap[index]) {
      this.dataMap[index] = [];
    }
    this.dataMap[index].push([key, value]);
    return this;
  }

  /**
   * Return the value for the given key string
   * Items are stored in hash with format [[key, value], [key, value], ...]
   * @param {String} key
   * @returns {*}
   */
  get(key) {
    /**
     * Imperative implementation
     *
     * let index = this._hash(key)
     * if(this.dataMap[index]) {
     *   for(let i = 0; i < this.dataMap[index].length; i++) {
     *     if(this.dataMap[index][i][0] === key) {
     *       return this.dataMap[index][i][1]
     *     }
     *   }
     * }
     * return undefined
     */
    const index = this.#hash(key);
    return this.dataMap[index]
      .filter(Boolean)
      .filter((k) => k[0] === key)
      .map((v) => v[1])
      .at(0);
  }

  /**
   * Return an array with all existing keys
   * @returns {Array}
   */
  keys() {
    /**
     * Imperative implementation
     *
     * let allKeys = [];
     * for (let i = 0; i < this.dataMap.length; i++) {
     *   if (this.dataMap[i]) {
     *     for (let j = 0; j < this.dataMap[i].length; j++) {
     *       allKeys.push(this.dataMap[i][j][0]);
     *     }
     *   }
     * }
     * return allKeys;
     */
    return this.dataMap
      .filter(Boolean)
      .map((val) => val[0][0]);
  }

  /**
   * Make the hash off of the key value
   * @param {string} key
   * @returns {number}
   */
  #hash(key) {
    /**
     * Imperative implementation of #hash
     *
     * let hash = 0
     * for (let i = 0; i < key.length; i++) {
     *    hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length
     * }
     * return hash
     */
    return key
      .split('')
      .reduce(
        (prev, current) => ((prev + current.charCodeAt() * 23) % this.dataMap.length),
        0,
      );
  }
}

export default HashTable;
