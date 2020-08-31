class AlreadyExists {
  constructor(message, statusCode = 409) {
    this.message = message;
    this.statusCode = statusCode;
  }
}

module.exports = AlreadyExists;
