# try-pinia-repro

## Project Setup

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm dev
```

### Compile and Minify for Production

```sh
pnpm build
```

-----

### Summary

At startup, app crashes and the following console error pops up:

```
Uncaught ReferenceError: Cannot access 'useUserStore' before initialization
```

Here is the most problematic part:

```
import router from '../router'
```
in `user.optionStore.js`

which creates a **circular dependency**...

-----

### Quick notes about stuff I've tried:

Switch to "Setup Stores" instead of "Option Stores"?
→ Same error...
→ Would be a bit time-consuming and error-prone in my current project where we are not yet comfortable with Composition API

Stop using mapState and switch to setup() with storeToRefs
→ Probably our best option but still requires some effort
→ But still some console error at HMR

Never import and use your router in your stores?

Have all components being lazy-loading in your router?


What does not work:

Options API
Option store or Setup store
Use of mapState

Working with HMR console errors:

Options API
Option store or Setup store
Use of storeToRefs

CompositionAPI <script setup>
Option store or Setup store
No mapState nor storeToRefs

Working well:

No router import in store
OR
Lazy-load HomeView component from router
