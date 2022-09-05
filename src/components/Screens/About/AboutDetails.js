import React from "react";
import { useParams } from "react-router-dom";
import "./AboutDetails.css";
export default function AboutDetails() {
  let params = useParams();
  return (
    <div style={{ backgroundColor: "red", marginTop: 50 }}>
      AboutDetails {params.aboutId}{" "}
      <p>
        How to fix the React memory leak warning # react # javascript # webdev #
        beginners If you've ever worked with React function components and the
        useEffect hook, it's almost impossible that you've never faced this
        warning: Warning: Can't perform a React state update on an unmounted
        component. This is a no-op, but it indicates a memory leak in your
        application. To fix, cancel all subscriptions and asynchronous tasks in
        a useEffect cleanup function. This is the warning I'm referring to as
        the React memory leak warning because it is very easy to trigger and
        hard to get rid of if you don't understand what's happening. Explaining
        the warning There are 4 important concepts here: Can't perform a React
        state update on an unmounted component. To fix, cancel all subscriptions
        and asynchronous tasks in a useEffect cleanup function. I won't explain
        what a memory leak is, instead I'll encourage you to read what is my
        go-to article about memory management in Javascript. What is a state
        update? Given the following state initialization: const [isVisible,
        setIsVisible] = useState(true); A state update would be:
        setIsVisible(false); What is an unmounted component? A component is
        unmounted when it is removed from the DOM. It is the final step of a
        React component's life cycle. What are subscriptions and asynchronous
        tasks? Asynchronous tasks are callbacks sent to the queue of callbacks
        of the event loop. They are asynchronous because they won't be executed
        until some conditions are met. Any mechanism that can add a callback to
        the queue of callbacks, thereby deferring its execution until the
        fulfillment of a condition, can be considered as a subscription:
        Promises when fulfilled or rejected setTimeout and setInterval when a
        certain time has elapsed Events when the event occurs I've skipped
        setImmediate since it's not a web standard, and I'm simplifying things
        by referring to a unique queue of callbacks when there's in fact
        multiple queues with different levels of priority. Case 1 - Asynchronous
        task in a Promise handler someAsyncFunction() returns a Promise we can
        subscribe to by calling the then() method with a callback function as
        the task to execute when someAsyncFunction() resolves. Case 2 -
        Asynchronous task in a setTimeout handler setTimeout is usually called
        with a delay as a second argument, but when left empty, the event
        handler will be executed as soon as the event loop starts to process the
        queue of callbacks, but it is still asynchronous and has a significant
        chance to be executed after the component has been unmounted. Case 3 -
        Asynchronous task in an event handler Subscribing to an event is done by
        adding an event listener and passing a callback function to the
        listener. Until the event listener is removed or the event emitter is
        destroyed, the callback function will be added to the queue of callbacks
        on every event occurrence. Asynchronous tasks are side effects In React
        functional components any side effects such as data fetching or event
        handling should be done inside a useEffect: Because we've subscribed to
        a Promise, there's a pending callback, waiting for the Promise to
        settle, regardless of whether it has been fulfilled or rejected. If the
        React component is unmounted before the Promise completion, the pending
        callback stays in the callback queue anyway. And once the Promise has
        settled, it will try to update the state of a component that doesn't
        exist anymore. Case 2 - Asynchronous task in a setTimeout handler This
        code is close to the previous case except that the condition for the
        callback to be executed is to wait 5000ms. If the React component is
        unmounted before this amount of time, it will also try to update the
        state of a component that doesn't exist anymore. Case 3 - Asynchronous
        task in an event handler Attaching handlers to events is different from
        the previous cases because events can occur multiple times and therefore
        can trigger the same callback multiple times. If the event emitter we've
        bound an event handler is not destroyed when the React component is
        unmounted, it still exists and will be executed on every event
        occurrence. In the above example, the event handler is bound to a global
        variable Dimensions, the event emitter, which exists outside of the
        scope of the component. Therefore, the event handler is not unbound or
        garbage collected when the component is unmounted, and the event emitter
        might trigger the callback in the future even though the component
        doesn't exist anymore. Fixing the problem Case 1 - Asynchronous task in
        a Promise handler Since it is not possible to cancel a Promise the
        solution is to prevent the setIsVisible function to be called if the
        component has been unmounted. const [isVisible, setIsVisible] =
        useState(true); By leveraging lexical scoping, we can share a variable
        between the callback function and the cleanup function. We use the
        cleanup function to modify the cancel variable and trigger an early
        return in the callback function to prevent the state update. Case 2 -
        Asynchronous task in a setTimeout handler To remove a callback bound to
        a timer, remove the timer: Case 3 - Asynchronous task in an event
        handler To cancel a subscription to an event, remove the event handler:
        Conclusion Global variables are never garbage collected so don't forget
        to remove event handlers manually if the event emitter is stored in a
        global variable. Remove any event handlers bound to event emitters that
        might not be removed when a component is unmounted. Promises cannot be
        cancelled but you can use lexical scoping to change the behavior of the
        callback from the useEffect cleanup function by triggering an early
        return or short-circuiting the state update. Try to avoid timers, if you
        can't, be sure to always cancel them with clearTimeout or clearInterval.
        Photo by Aarón Blanco Tejedor on Unsplash Discussion (12) Subscribe pic
        Add to the discussion supernova233 profile image Korawit S • May 30
        thank you for explain, this post is useful ! 2 likes Reply muinmundzir
        profile image Muhammad Mu'in Mundzir • Mar 15 Nice, this post save me.
        Thanks! 1 like Reply aalphaindia profile image Pawan Pawar • Apr 15 '21
        keep sharing!! 3 likes Reply thedeveshpareek profile image Devesh pareek
        • Jul 4 nice thanks for the details 2 likes Reply hrafaelalves profile
        image Hugo Rafael Alves • Oct 20 '21 This post was very useful, thanks!
        2 likes Reply uwenayoallain profile image Uwenayo Alain Pacifique • Aug
        13 '21 nice post, thanks 1 like Reply gauravsinghbisht profile image
        Gaurav Singh Bisht • Jul 17 Very detail information about the issue.
        Thanks 1 like Reply stanislusa profile image Stanislaus • Jan 17 Nice!!
        1 like Reply zaselalk profile image Asela • Nov 17 '21 Nice Explanation,
        Thank you 1 like Reply jeromechua profile image Jerome Chua • Jan 4
        Nice, super detailed 👍 Like Reply dk00 profile image Derek Shih • Aug 1
        Hi Jonathan, The warning is removed in React 18. Like Reply Code of
        Conduct • Report abuse Read next mhx profile image Simple Protected
        Routes Middleware in NextJS 12 mhx - Jul 19 noriller profile image Did
        you know you can test the front end without seeing the code? Bruno
        Noriller - Jul 31 itsrakesh profile image The most efficient way to
        internationalize your web app Rakesh Potnuru - Jul 31 jps27cse profile
        image React Router Dom V6 Boilerplate Jack Pritom Soren - Jul 22
        Jonathan Experton Follow I gather and mentor people to deliver well
        crafted softwares LOCATION Montreal, Canada EDUCATION Jeffrey Way, Adam
        Wathan, MPJ, Uncle Bob and many more WORK Deterministic Disorder Manager
        JOINED Nov 13, 2017 More from Jonathan Experton Ref forwarding with
        React function components and Typescript #react #typescript #beginners
        #webdev DEV Community — A constructive and inclusive social network for
        software developers. With you every step of your journey. Built on Forem
        — the open source software that powers DEV and other inclusive
        communities.
      </p>
    </div>
  );
}
