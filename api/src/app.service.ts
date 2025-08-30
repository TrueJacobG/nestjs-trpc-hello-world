import {Injectable} from '@nestjs/common';
import {db} from '../db/db';
import {messages} from '../db/schema';

@Injectable()
export class AppService {
    async getHello(): Promise<string> {
        const result = await db.select().from(messages).limit(1);
        if (result.length === 0) {
            await db.insert(messages).values({content: "Hello World from Postgres + Drizzle!"});
            return "Hello World (first insert)!";
        }
        return result[0].content;
    }
}