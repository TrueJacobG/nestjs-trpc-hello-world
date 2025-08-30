import { Module } from '@nestjs/common';
import { SharedModule } from '../shared/shared.module';
import { TrpcContextService } from './trpc-context.service';

@Module({
    imports: [SharedModule],
    providers: [TrpcContextService],
    exports: [TrpcContextService],
})
export class TrpcModule {}
