module.exports = {
  registerName: (req) => {
    return getNameFromParam(req);
  }
}

const getNameFromParam = () => {
  return "Voldemort";
}
