class Unauthorized {
  constructor(message = "Unauthorized", statusCode = 401) {
    this.message = message;
    this.statusCode = statusCode;
  }
}

module.exports = Unauthorized;
