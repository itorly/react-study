#### Deep Dive - Objects are not really nested
An object like this appears “nested” in code

However, “nesting” is an inaccurate way to think about how objects behave. When the code executes, there is no such thing as a “nested” object.

The obj1 object is not “inside” obj2. For example, obj3 could “point” at obj1 too:

```javascript
let obj1 = {
  title: 'Blue Nana',
  city: 'Hamburg',
  image: 'https://i.imgur.com/Sd1AgUOm.jpg',
};

let obj2 = {
  name: 'Niki de Saint Phalle',
  artwork: obj1
};

let obj3 = {
  name: 'Copycat',
  artwork: obj1
};
```

If you were to mutate obj3.artwork.city, it would affect both obj2.artwork.city and obj1.city. This is because obj3.artwork, obj2.artwork, and obj1 are the same object. This is difficult to see when you think of objects as “nested”. Instead, they are separate objects “pointing” at each other with properties.
