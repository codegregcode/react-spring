# Hello World - learning react spring

This project is itended for me to learn about, experiment and have fun with react spring

## 24/8/23

Today I spent a little time setting up the React project and then animated my first component.

I used the setup guide from react-spring.dev to get started. I followed the Getting Stared section, but I did add an additional feature, which I'll explain in a little more detail.

When the the square is clicked, it'll move horizontally across the screen, and this is as far as the Getting Started section on react-spring.dev takes you, but I wanted the square to return to it's original position when clicked again.

I did this by created a `clicked` state, which is set to false on the intial render:

`const [clicked, setClicked] = useState(false);`

The animation is created using the `useSpring` hook from `@react-spring/web` library, and the animation configuration is defined based on the `clicked` state, which is toggled when the square is clicked.

```
  const handleClick = () => {
    if (!clicked) {
      api.start({
        from: { x: 50 },
        to: { x: 1590 },
      });
      setClicked(true);
    }

    if (clicked) {
      api.start({
        from: { x: 1590 },
        to: { x: 50 },
      });
      setClicked(false);
    }
  };
```

A good start to learning about react spring!

## 5/9/23

It's been a couple weeks since last working on this project (woops 😅), and I haven't really added anything new today, but I did spend about an hour tidying up the project.

I created seperate components for the animations `<Title />` & `<Boxes />` which are then imported into `<App />`

Doing this means that when I add further animations to the project it'll keep the code nice and seperated, and much easier to manage!

I hope that in my next update I will be adding some new content to the project!
