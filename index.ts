export type ContactMethod = "Email" | "SMS";

export interface Message {
  text: string;
  datetime: Date;
}

export type ContactMethods<T> = {
  [type in ContactMethod]: (text: string) => T;
};

export function viaEmail(message: string): Message {
  return {
    text: message.concat(" (sent via e-mail)"),
    datetime: new Date(),
  };
}

export function viaSms(message: string): Message {
  return {
    text: message.concat(" (sent via SMS)"),
    datetime: new Date(),
  };
}

const contactMethods: ContactMethods<Message> = {
  Email: viaEmail,
  SMS: viaSms,
};

export function send(text: string, method: ContactMethod): Message {
  try {
    return contactMethods[method](text);
  } catch (error) {
    throw Error("Unknown contact method");
  }
}

