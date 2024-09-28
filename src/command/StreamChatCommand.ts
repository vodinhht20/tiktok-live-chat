import { Command } from 'nestjs-command';
import { Injectable } from '@nestjs/common';
import { WebcastPushConnection } from 'tiktok-live-connector';
import * as process from 'node:process';

@Injectable()
export class StreamChatCommand {
  @Command({
    command: 'stream-chat',
    describe: 'Stream Live Chat Tiktok'
  })
  greet() {
    var Table = require('cli-table3');
    var chalk = require('chalk');

    // Create a table to display chat information
    const table = new Table({
      head: ['Account', 'Comment'],
      colWidths: [20, 50]
    });

    let tiktokLiveConnection = new WebcastPushConnection(process.env.APP_TIKTOK_USERNAME);

    // Listen for chat events
    tiktokLiveConnection.on('chat', data => {
      table.push([chalk.yellow(data.uniqueId), chalk.green(data.comment)]);
      console.log(table.toString());
      table.pop();
    });

    console.log(('Listening to chat event...'));
  }
}
