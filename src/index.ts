import { EventEmitter } from "events";

type MessageEvents = {
  send: (message: string) => void;
  approve: () => void;
  reject: () => void;
};

export class MessageEmitter extends EventEmitter {
  on<K extends keyof MessageEvents>(type: K, listener: MessageEvents[K]): this {
    return super.on(type, listener);
  }
  emit<K extends keyof MessageEvents>(type: K, ...args: Parameters<MessageEvents[K]>): boolean {
    return super.emit(type, ...args);
  }
}
