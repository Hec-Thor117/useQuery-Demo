# useQuery-Demo
A simple exercise in using useQuery to fetch data 

## Before
After fetching data, one would set it to a state with the useEffect hook. But, in doing so, one would have to (in a sense) bypass the StrictMode of React which is definitely NOT in compliance with best practices. Not only that, the state would be called twice (once before fetching data and once after) and it would require more steps..

## In comes useQuery
It is important to note that useQuery is NOT a replacement for fetching data with the fetch().then() method or Axios. You still need to fetch the data, but useQuery just handles it in a more efficient way and let's you do more with it. You're not setting the data you receive to a state. You can configure the data in many more ways now-while the data is loading you can add a message or function, if an error occurs you can find out at what time it occurred and set up a message, and etc. all from the useQuery library!
