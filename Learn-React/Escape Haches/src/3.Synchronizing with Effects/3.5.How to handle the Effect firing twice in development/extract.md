### The right question
The right question isn’t “how to run an Effect once”, but “how to fix my Effect so that it works after remounting”.

### What should the cleanup function do?
The cleanup function should stop or undo whatever the Effect was doing.

### The rule of thumb
The rule of thumb is that the user shouldn’t be able to distinguish between the Effect running once (as in production) and a setup → cleanup → setup sequence (as in development).