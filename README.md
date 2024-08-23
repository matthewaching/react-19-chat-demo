# [An Overview of React 19](https://react.dev/blog/2024/04/25/react-19)

## Code for Exercise #2

- `npm install @vitejs/plugin-react`
- `npm install babel-plugin-react-compiler@experimental`
- ```
  {
      babel: {
          plugins: [
              ['babel-plugin-react-compiler'],
          ],
      },
  }
  ```

## Helpful Links

Here's a list of some of the resources that contributed to my presentation:

- [React Compiler by React](https://react.dev/learn/react-compiler): The official React Compiler documentation
- [React Conf 2024: What's new in React 19 by Lydia Hallie](https://www.youtube.com/watch?v=AJOGzVygGcY): Super concise summary of the major changes in React 19. Lydia runs an amazing series on her YouTube channel called JavaScript Visualized that covers various JS concepts in a similar fashion, so if you're a fan of this style, highly recommend checking her other videos out.
- [React Conf 2024: React for Two Computers by Dan Abramov](https://www.youtube.com/watch?v=ozI4V_29fj4): A de/re-constructed perspective on Server-Side React. Dan needs no introduction (co-creator of Redux and CRA, core React team), and this video is just one of those "Dan Abramov" talks that makes everything make sense.
- [React Conf 2024 YouTube channel](https://www.youtube.com/@ReactConfOfficial/videos): Don't want to just list out all of the React Conf 2024 talks but check them out! Amazing overviews, perspectives, and other nuggets of information from people way more qualified than me to talk about them.
- [Making Sense of React Server Components by Josh Comeau](https://www.joshwcomeau.com/react/server-components/): RSCs demystified and a major inspiration for my CSR/SSR/RSC slides. Josh does MAJOR work on the education side of the React community, and this post was one that helped many understand Server-Side React, especially very early on when the concept was still foreign.
- [How React server components work: an in-depth guide by Chung Wu](https://www.plasmic.app/blog/how-react-server-components-work): An overview of RSCs from Chung Wu of the Plasmic team, a React-based CMS. It's another unique perspective on RSCs, especially from a "why it works" approach, but FYI some of the finer details (eg: `.server.jsx` convention) are a bit outdated.

And for your perusal, here are a few links that helped shape my thinking of React:

- [Why React Re-Renders by Josh Comeau](https://www.joshwcomeau.com/react/why-react-re-renders/): A great article from Josh on re-rendering and memoization. Check this out if the memoization section of my presentation didn't quite click, and don't be confused by his Misconception #2! It may sound like the opposite from the common mental model of renders when props/state change, but see if you can reconcile why it's a matter of semantics and why the common model is an easier way to think it.
- [Before you memo() by Dan Abramov](https://overreacted.io/before-you-memo/): Yet another awesome Dan post. He goes over the two main alternatives to memoization and why memoization should be a conscious decision rather than automatic. This ties in to how the need to memoize may indicate a flaw in your underlying data structure. However, the React Compiler will solve this issue entirely!
- [You Might Not Need an Effect by React](https://react.dev/learn/you-might-not-need-an-effect): A must-read for any React developer
- [React.js: The Documentary by Honeypot](https://www.youtube.com/watch?v=8pDqJVdNa44): A must-watch for any React developer

_Last updated: August 23, 2024_
