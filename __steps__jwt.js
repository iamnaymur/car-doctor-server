/*
 !JWT : secure you api
 -----------------------------
 create token
 -----------------------------
 ~ server side
 * 1. in the server side: install npm i jsonwebtoken
 * 2. import jsonwebtoken
 * 3. jwt.sign (payload,secret,{expires:})
 * 4. return token to the client side.
 * 
 ~ client side
 * 1. after user login send user basic information to create token
 * 2. after receiving token from the server store it either with httpOnly Cookie or local storage. Local storage is the second best solution.
 * 3. use a general space (onAuthChanged )> AuthProvider. The main reason for using the AuthProvider is,that it is always watching the if the user is available or not.
 
 ~ send token to the server
 * 1. for sensitive api call () send authorization headers {authorization: "Bearer token"} 

 verify token on the server side
 ------------

* 1. Create a function called (verifyJWT) (middleware)
* 2. this function will have three parameters: (req,res, next)
* 3. First check whether the authorization headers exist?
* 4. if not send 401
* 5. get the token out of the authorization header.
* 6. call jwt verify (token,secret, (error, decode))
* 7. if error then send 401.
* 8. set decoded to the req object so that we can retrieve it later.
* 9. call the next to go the next function.


----------
check wether token has the email that matches with the request email
*/ 
