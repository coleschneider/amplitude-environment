import sayHello from "../sayHello";
describe("sayHello", () => {
  it("should say hello", () => {
    expect(sayHello("Amplitude")).toEqual("Hello, Amplitude");
  });
});
