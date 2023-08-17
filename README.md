# Setup Details 
## System Requirements

- NodeJs
- Express
- MongoDB

## setup
```
extract your zip file
> cd boo-coding-test-task/server
> npm install
> npm start
```

## test cases run command
```
npxx jest
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Implemented Feature

### Created routes
1. `/profile`
- Types:- `post`,`patch`,`get`

2. `/profile/profileId`
- Types:- `get`

3. `/post`
- Types:- `post`,`patch`,`get`

4. `/comment` or `/comment?filter=best` or `/comment?filter=recent`
- Types:- `post`,`patch`,`get`


4. `/comment?filter=best` or `/comment?filter=recent`
- Types:- `get`


5. `/like`
- Types:- `post`,`patch`,`get`



### Other Details

For the testing aoi i have created the postman collection
where all the routes are there for easy get idea about the request and response