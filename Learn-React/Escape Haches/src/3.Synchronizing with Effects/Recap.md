# Recap
1. Unlike events, Effects are caused by rendering itself rather than a particular interaction.

2. Effects let you synchronize a component with some external system (third-party API, network, etc).

3. By default, Effects run after every render (including the initial one).

4. React will skip the Effect if all of its dependencies have the same values as during the last render.

5. You can’t “choose” your dependencies. They are determined by the code inside the Effect.

6. Empty dependency array ([]) corresponds to the component “mounting”, i.e. being added to the screen.

7. In Strict Mode, React mounts components twice (in development only!) to stress-test your Effects.

8. If your Effect breaks because of remounting, you need to implement a cleanup function.

9. React will call your cleanup function before the Effect runs next time, and during the unmount.