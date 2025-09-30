# Adjusting some state when a prop changes

## background: reset or adjust a part of the state on a prop change
Sometimes, you might want to reset or adjust a part of the state on a prop change, but not all of it.

This List component receives a list of items as a prop, and maintains the selected item in the selection state variable. You want to reset the selection to null whenever the items prop receives a different array: