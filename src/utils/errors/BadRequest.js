class BadRequest {
  constructor(message, data, statusCode = 400) {
    this.message = message;
    this.data = data;
    this.statusCode = statusCode;
  }
}

module.exports = BadRequest;
