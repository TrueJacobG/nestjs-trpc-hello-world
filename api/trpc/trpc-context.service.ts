import {Injectable} from '@nestjs/common';
import {AppController} from "../src/app.controller";

@Injectable()
export class TrpcContextService {
    constructor(
        public readonly appController: AppController,
    ) {
    }

    getContext() {
        return {
            appController: this.appController,
        };
    }
}
