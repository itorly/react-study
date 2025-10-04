# Chains of computations
## Avoid: Chains of Effects that adjust the state solely to trigger each other
Sometimes you might feel tempted to chain Effects that each adjust a piece of state based on other state:
```js
function Game() {
  const [card, setCard] = useState(null);
  const [goldCardCount, setGoldCardCount] = useState(0);
  const [round, setRound] = useState(1);
  const [isGameOver, setIsGameOver] = useState(false);

  // 🔴 Avoid: Chains of Effects that adjust the state solely to trigger each other
  useEffect(() => {
    if (card !== null && card.gold) {
      setGoldCardCount(c => c + 1);
    }
  }, [card]);

  useEffect(() => {
    if (goldCardCount > 3) {
      setRound(r => r + 1)
      setGoldCardCount(0);
    }
  }, [goldCardCount]);

  useEffect(() => {
    if (round > 5) {
      setIsGameOver(true);
    }
  }, [round]);

  useEffect(() => {
    alert('Good game!');
  }, [isGameOver]);

  function handlePlaceCard(nextCard) {
    if (isGameOver) {
      throw Error('Game already ended.');
    } else {
      setCard(nextCard);
    }
  }

  // ...
```

## Two Major Issues

### 1. Performance Problem
Multiple unnecessary re-renders cascade through the component tree:
- `setCard` → render → `setGoldCardCount` → render → `setRound` → render → `setIsGameOver` → render
- In the worst case: **3 unnecessary re-renders** of the entire tree

### 2. Maintenance Problem
The code becomes rigid and fragile as requirements evolve. Example: Adding a game history feature that sets `card` to a past value would trigger the entire Effect chain again, incorrectly updating all dependent data.

## The Solution: Calculate in Render & Update in Event Handler

```javascript
function Game() {
  const [card, setCard] = useState(null);
  const [goldCardCount, setGoldCardCount] = useState(0);
  const [round, setRound] = useState(1);
  
  // ✅ Calculate what you can during rendering
  const isGameOver = round > 5;

  function handlePlaceCard(nextCard) {
    if (isGameOver) {
      throw Error('Game already ended.');
    }
    
    // ✅ Calculate all the next state in the event handler
    setCard(nextCard);
    if (nextCard.gold) {
      if (goldCardCount <= 3) {
        setGoldCardCount(goldCardCount + 1);
      } else {
        setGoldCardCount(0);
        setRound(round + 1);
        if (round === 5) {
          alert('Good game!');
        }
      }
    }
  }
}
```

## Benefits

- **More efficient:** No cascading re-renders
- **More flexible:** Game history features won't trigger unwanted Effect chains
- **Easier to maintain:** All state updates are co-located in the event handler
- **Reusable logic:** Extract functions to share logic between event handlers

## Important Notes

### State as Snapshot
Inside event handlers, state behaves like a snapshot. After calling `setRound(round + 1)`, the `round` variable still reflects the old value. If you need the next value immediately:

```javascript
const nextRound = round + 1; // Define manually
```