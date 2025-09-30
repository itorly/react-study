# Resetting all state when a prop changes

## background
This ProfilePage component receives a userId prop. The page contains a comment input, and you use a comment state variable to hold its value. One day, you notice a problem: when you navigate from one profile to another, the comment state does not get reset. As a result, it’s easy to accidentally post a comment on a wrong user’s profile. To fix the issue, you want to clear out the comment state variable whenever the userId changes:

## Avoid: Resetting state on prop change in an Effect
```js
export default function ProfilePage({ userId }) {
  const [comment, setComment] = useState('');

  // 🔴 Avoid: Resetting state on prop change in an Effect
  useEffect(() => {
    setComment('');
  }, [userId]);
  // ...
}
```
This is inefficient because ProfilePage and its children will first render with the stale value, and then render again. It is also complicated because you’d need to do this in every component that has some state inside ProfilePage. For example, if the comment UI is nested, you’d want to clear out nested comment state too.

## Solution: a different profile, an explicit key
Instead, you can tell React that each user’s profile is conceptually a different profile by giving it an explicit key. 
### Split your component in two and pass a key attribute from the outer component to the inner one:

```js
export default function ProfilePage({ userId }) {
  return (
    <Profile
      userId={userId}
      key={userId}
    />
  );
}

function Profile({ userId }) {
  // ✅ This and any other state below will reset on key change automatically
  const [comment, setComment] = useState('');
  // ...
}
```

###  two different components should not share any state
Normally, React preserves the state when the same component is rendered in the same spot. 

By passing userId as a key to the Profile component, you’re asking React to treat two Profile components with different userId as two different components that should not share any state. 

Whenever the key (which you’ve set to userId) changes, React will recreate the DOM and reset the state of the Profile component and all of its children. 

Now the comment field will clear out automatically when navigating between profiles.