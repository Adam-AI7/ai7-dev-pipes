import { Injectable,ErrorHandler } from "@angular/core";
import { LogService } from "./log-service";
@Injectable()
export class GlobalErrorHandlerService implements ErrorHandler {

    constructor(private logger:LogService){

    }
    handleError(error: any): void {
        console.log(error,'from service');
this.logger.log(error.message)
    }
}