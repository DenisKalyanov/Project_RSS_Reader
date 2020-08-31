class BaseResponse {
  constructor(message, statusCode = 200, data) {
    this.message = message;
    this.statusCode = statusCode;
    if (data) {
      this.data = data;
    }
  }
}

module.exports = BaseResponse;
