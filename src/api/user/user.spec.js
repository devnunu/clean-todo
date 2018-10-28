/* 유저 생성
* @method POST
* @param (name, password, validPassword)
*/

/* 성공시
* @return user 객체
* @status 201 ok
*/

/* 실패시
* @case name 값이 없을 때
* @status 400
*/

/* 실패시
* @case password 값이 없을 때
* @status 400
*/

/* 실패시
* @case validPassword 값이 없을 때
* @status 400
*/

/* 실패시
* @case password 값이 다를 때
* @status 400
*/

////////////////////

/* 로그인 
* @method get
* @param (name, password)
*/

/* 성공시
* @return user 객체
* @status 200 ok
*/

/* 실패시
* @case 유저 name이 없을때
* @return message: Incorrect username
* @status 400 ok
*/

/* 실패시
* @case 유저 password가 맞지 않을떄
* @return message: Incorrect password
* @status 400 ok
*/
