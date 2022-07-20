class Contract {
  #signatures = [];

  addSignature(signature) {
    this.#signatures.push(signature);
    return this;
  }

  get signatures() {
    return this.#signatures;
  }
}

export default Contract;
