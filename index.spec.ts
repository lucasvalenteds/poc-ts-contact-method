import { send, Message } from "./";

test("It works with Email", () => {
  expect(send("Hello World", "Email")).toStrictEqual({
    text: "Hello World (sent via e-mail)",
    datetime: expect.any(Date),
  } as Message);
});

test("It works with SMS", () => {
  expect(send("Hello World", "SMS")).toStrictEqual({
    text: "Hello World (sent via SMS)",
    datetime: expect.any(Date),
  } as Message);
});

test("It throws for unknown contact method", () => {
  const unknownContactMethod: any = "Phone";

  expect(() => send("Hello World", unknownContactMethod)).toThrowError();
});
