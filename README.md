#Live Commentery React-Native App (Code Challange)



##Setup
To be able to run application:

``(yarn | npm install) && make start``

* make start:
    - starts json-server
    - runs application on ios

### How it looks?
![minipic](./assets/livecommentery.gif){:width="300px"}


### Used Dependencies
- [Axios](https://github.com/axios/axios) is http client. It is pretty straight forward and has
handy implementations like interceptors. I have used for very simple purpose for get request. 

- [Redux](https://github.com/reduxjs/redux) is a great state management library. Since app doesnt have
too much feature it was not necessary to use it, i might use [Mobx](https://github.com/mobxjs/mobx) which is simpler however since it is 
a challange app i wanted to use Redux
    
- [Redux-Saga](https://github.com/redux-saga/redux-saga) is aiming to make application side effects easier and gives 
more control. Thats why i use it over most of the time [Redux-Thunk](https://github.com/reduxjs/redux-thunk).
However it was not necessary for this application to use it since it is small.

