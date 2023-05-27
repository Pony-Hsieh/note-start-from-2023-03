{
  function volume(length, width, height) {
    return function (width) {
      return function (height) {
        return length * width * height;
      }
    }
  }
}