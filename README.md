# npm-linked-nuxt-layer

This is an example way to simulate what I'm seeing in a locally linked nuxt
layer.

Install the layer and the app using normal npm install. Then in the layer dir:
`npm link`
`cd ../app; npm link my-nuxt-layer`
`npm run check`

Now you should see an error:
```
../layer/components/HelloWorld.vue:3:45 - error TS2339: Property 'deep' does not exist on type 'unknown'.

3 const { y } = useRuntimeConfig().public.foo.deep;
                                              ~~~~
```

There is something going on with symlinks and the way .nuxt/tsconfig.json gets
written that I can't figure out.

