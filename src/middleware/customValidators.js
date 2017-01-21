const customValidators = {
  atLeastOneRequired(...params) {
    const filter = params.filter(param => (typeof param !== 'undefined'));

    return filter.length > 0;
  },
}

export default customValidators;
