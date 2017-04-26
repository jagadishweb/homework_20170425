export class Response {
  status: string;
  errorMessages: string[];

  constructor(status: string, errorMessages: string[]) {
    this.status = status;
    this.errorMessages = errorMessages;
  }
}
