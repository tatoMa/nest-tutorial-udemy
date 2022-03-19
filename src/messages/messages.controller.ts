import { Controller, Get, Param, Post } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  @Get()
  listMessages() {}

  @Post()
  createMessage() {}

  @Get('/:id')
  getMessage(@Param('id') id: string) {
    console.log(id);
  }
}
