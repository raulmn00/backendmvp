import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from '../common/message/create-message.dto';
import { UpdateMessageDto } from '../common/message/update-message.dto';

@Injectable()
export class MessageService {
  create(createMessageDto: CreateMessageDto) {
    return 'This action adds a new message';
  }

  findAll() {
    return `This action returns all message`;
  }

  findOne(id: number) {
    return `This action returns a #${id} message`;
  }

  update(id: number, updateMessageDto: UpdateMessageDto) {
    return `This action updates a #${id} message`;
  }

  remove(id: number) {
    return `This action removes a #${id} message`;
  }
}