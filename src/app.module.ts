import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StreamChatCommand } from './command/StreamChatCommand';
import { CommandModule } from 'nestjs-command';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    CommandModule
  ],
  controllers: [AppController],
  providers: [AppService, StreamChatCommand],
})
export class AppModule {}
