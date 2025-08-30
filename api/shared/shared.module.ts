import {Module} from '@nestjs/common';
import {AppController} from "../src/app.controller";
import {AppService} from "../src/app.service";

@Module({
    providers: [AppController, AppService],
    exports: [AppController],
})
export class SharedModule {
}
