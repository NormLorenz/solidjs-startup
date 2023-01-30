# PRESENTATION

> An introduction to Solidjs and why its the best thing since sliced bread. After we go through this, you might wonder why your daily programming activities are not fun anymore, why you need to think about declarative programming and why reactivity is so important. You might also wonder what's the hype about component and modules. Isn't there just a simpler way?

## OUTLINE
- What problems are we trying to solve
- How did I get here
- Why is the Solid.js framework better
- Demo
- References
- Questions

## WHAT PROBLEMS ARE WE TRYING TO SOLVE
- Building a reactive application in Angular is just too complicated.
- You must know in part NgRx, RxJs, immutable objects, actions, reducers, selectors and effects.
- You must deal with tons of boilerplate.
- You must wonder about events firing mulitple times and refreshing large parts of the DOM.
- You must understand how to create and dispose of observables.
- You must understand how to consume application state from one place to another.
- You may wonder why unit tests are such a nighmare.
- You may wonder if we don’t need NgRx at all and are there just simpler alternatives.
- You may wonder why reactivity isn't baked in to the application framework?

## HOW DID I GET HERE
- I read an article by Mike Pearson called '**I changed my mind. Angular needs a reactive primitive**'. This is the best article I've read in a long time and it challenges what we know and how we use Angular.
- It blah
- and it blah
- A developer, Ryan Carniato is referenced multiple time in the article and his approach to reactivitiy. By the way, Ryan Carniato is the creator of Solidjs.
- So why not Solidjs?

## WHY IS SOLID.JS FRAMEWORK BETTER
- Like React and uses JSX but doesn't use a shadow DOM
- Fine grain reactivity
- Built-in reactive primitives
- Really fast - almost as fast as native javascript
- Small size
- Coding is fun again
- Isophosmeric deployments
- Almost nothing to learn

## DEMO

### Some new fragments
Alert State
```javascript
import { createSignal, createRoot } from "solid-js";

const alertState = () => {
  const [alert, setAlert] = createSignal(false);
  return { alert, setAlert };
}

export default createRoot(alertState);
```

Alert Button
```javascript
const AlertButton = () => {

  return (
    <>
    </>
  )
}

export default AlertButton;
```

Alert Indicator
```javascript
import { Show } from 'solid-js';

import alertState from './alertState';

const AlertIndicator = () => {

  const { alert, setAlert } = alertState;

  return (
    <Show when={alert()} fallback={<div></div>}>
      <div class="blob"></div>
    </Show>
  )
}

export default AlertIndicator;
```

## REFERENCES

## QUESTIONS
