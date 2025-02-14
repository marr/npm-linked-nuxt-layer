class Foo {
  constructor() {
    console.log('Foo constructor')
  }
  bar() {
    console.log('Foo bar')
  }
}
export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      foo: new Foo()
    }
  }
});