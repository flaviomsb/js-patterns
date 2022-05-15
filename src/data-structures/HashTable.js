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
    return key
      .split('')
      .reduce(
        (prev, current) => ((prev + current.charCodeAt() * 23) % this.dataMap.length),
        0,
      );
  }
}

export default HashTable;
