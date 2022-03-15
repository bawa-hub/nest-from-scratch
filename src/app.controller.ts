import { Controller, Get } from "@nestjs/common";

@Controller("/app")
export class AppController {
  @Get("/hi")
  getHelloRoute() {
    return "hello world!";
  }

  @Get("/bye")
  getByeRoute() {
    return "Bye!";
  }
}
