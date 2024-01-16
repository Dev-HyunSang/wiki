# 2024.01.14 - 어떻게 GROM에서는 SQL Injection을 막을 수 있을까?
본 내용에서 Go언어의 ORM 패키지인 GORM에서 어떻게 SQL Injection을 필터링 하는지와 더불어서 SQL Injection의 정외와 방어에 대해서 서술한다.  

## SQL Injection이란?

## GORM이란?
GORM은 Go언어에서 ORM(Object Relational Mapping)를 할 수 있도록 도와주는 프레임워크이다.  

```shell
go get -u gorm.io/gorm
go get -u gorm.io/driver/sqlite
go get -u gorm.io/driver/mysql
```

위와 같은 명령어를 통해서 설치할 수 있으며, Go언어의 구조체와 함게 손쉽게 마이그레이션 하여 사용할 수 있다.
더 자세한 사항은 [GORM Docs](https://gorm.io//docs/)에서 확인하길 바란다.

## SQL Injection 방어
```go
userInput := "jinzhu;drop table users;"

// safe, will be escaped
db.Where("name = ?", userInput).First(&user)

// SQL injection
db.Where(fmt.Sprintf("name = %v", userInput)).First(&user)
```
공식 문서에서는 `fmt` 패키지를 이용하여 쿼리문을 작성하는 것을 지양하고 있다.   
위 방식의 코드 작성 형식은 SQL Injection에 취약한 부분이며, 좋지 않은 코드 작성 습관이다.  
**왜 그런가?를 본격적으로 살펴보고자 한다,**    

## Inside GORM Package - `where` 문
```go
// Where add conditions
//
// See the [docs] for details on the various formats that where clauses can take. By default, where clauses chain with AND.
//
//	// Find the first user with name jinzhu
//	db.Where("name = ?", "jinzhu").First(&user)
//	// Find the first user with name jinzhu and age 20
//	db.Where(&User{Name: "jinzhu", Age: 20}).First(&user)
//	// Find the first user with name jinzhu and age not equal to 20
//	db.Where("name = ?", "jinzhu").Where("age <> ?", "20").First(&user)
//
// [docs]: https://gorm.io/docs/query.html#Conditions
func (db *DB) Where(query interface{}, args ...interface{}) (tx *DB) {
	tx = db.getInstance()
	if conds := tx.Statement.BuildCondition(query, args...); len(conds) > 0 {
		tx.Statement.AddClause(clause.Where{Exprs: conds})
	}
	return
}
```
어떻게 필터링을 하는지 궁금했습니다. 기본적인 데이터베이스를 다루고 있는 프레임워크에서는 SQL Injection에 대한 필터링을 할 수 있는 기능을 가지고 있습니다.  

## 참고하면 좋은 자료
- [SQL injection in Gorm With using first and find. #2517](https://github.com/go-gorm/gorm/issues/2517)