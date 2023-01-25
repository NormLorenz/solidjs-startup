# PRESENTATION

## OUTLINE
- How did I get here
- What problems are we trying to solve
- How did I get here (part two)
- Why is the Solid.js framework better
- Demo
- References
- Questions

## HOW DID I GET HERE
- Building a reactive application in Angular is just too complicated.
- You must know in part NgRx, RxJs, immutable objects, modules, directives, actions, reducers, selectors and effects.
- You must deal with tons of boilerplate.
- Unit testing is a nightmare because of dependancy injection.
- You must have a good understand about state and the differences between local storage, remote storage, page state and application state.
- Maybe we don’t need NgRx at all, maybe there are alternative packages like NGXS, Akita or StateAdapt.
- Actually why are we using packages at all, why isn’t reactivity baked in?

## WHAT PROBLEMS ARE WE TRYING TO SOLVE

## HOW DID I GET HERE (PART TWO)
- I read an article by Mike Pearson 'I changed my mind. Angular needs a reactive primitive'. This is a very good article and should challenge what we know and how we use Angular.
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
- 

## DEMO

### Some new fragments
- Alert State
```javascript
import { createSignal, createRoot } from "solid-js";

const alertState = () => {
  const [alert, setAlert] = createSignal(false);
  return { alert, setAlert };
}

export default createRoot(alertState);
```

- Alert Button
```javascript
const AlertButton = () => {

  return (
    <>
    </>
  )
}

export default AlertButton;
```

- Alert Indicator
```javascript
const AlertIndicator = () => {

  return (
    <div class="blob"></div>
  )
}

export default AlertIndicator;
```

## REFERENCES

## QUESTIONS
