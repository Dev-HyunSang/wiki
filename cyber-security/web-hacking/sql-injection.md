# SQL Injection

[[toc]]

## What is the SQL(Structured Query Language)?
- 데이터베이스 시스템에서 자료를 처리하는 용도로 사용되는 구조적 데이터 질의 언어.

## What is the Injection?
- SQL Injection이란 악의적인 사용자가 보안상의 취약점을 이용하여, 임의의 SQL 문을 주입하여 실행되게 하여 데이터베이스가 비정상적인 동작을 하도록 조작하는 행위임.
- Injection 공격은 OWASP Top10 중 1위에 해당하는 공격이며, 공격이 비교적 쉬운 편이고 공격에 성공하는 경우 큰 피해를 입힐 수 있는 공격임.

## 공격 종류 및 방법

### Error based SQL Injection

```sql
SELECT * FROM users WHERE id = `INPUT1` AND password = `INPUT2`
```

- 위와 같은 질의문이 있는 경우 해커가 손쉽게 악의적인 코드를 삽입할 수 있음.

```sql
SELECT * FROM users WHERE id = '`OR 1=1--' AND password = 'INPUT2'
-- Result:
SELECT * FROM users
```

-  일반적으로 로그인 시에 사용되는 SQL 구문에 Injection하여 입력값에 대한 검증이 없음을 확인하고, 해커가 임의의 SQL 코드를 주입.
- 주입된 내용은 `' OR 1=1 --'`로 `WHERE`절에 있는 싱글쿼터를 닫아주기 위한 싱글쿼터와 `OR 1=1`라는 구문을 이용해 `WHERE`절을 모두 참으로 만들고, `--`를 넣어줌으로서 뒤의 구문을 주석처리 되도록 만듬.
- 매우 간단한 코드이지만, 사용자의 정보가 담겨 있는 테이블의 모든 정보를 조회하게 됨으로써 취약점이 발생할 수 있음.

### Union based SQL Injection
- SQL에서 `Union` 키워드는 두 개의 쿼리문에 대한 결과를 통합하여 하나의 테이블로 보여주게 하는 코드임.
- 정상적인 쿼리문에서는 `Union` 코드를 사용하여 인젝션에 성공하면, 원하는 쿼리문을 실행할 수 있게 됨. 
- **Union SQL Injection을 성공하기 위해서는 두 가지의 조건이 필요함. Union 하는 두개의 테이블의 컬럼 수가 같아야하며, 데이터형도 같아야 함.**

```sql
SELECT * FROM boards WHERE title LIKE '%INPUT%' OR contents '%INPUT%'

-- Injection
' UNION SELECT null, id, password FROM users--'

SELECT * FROM boards WHERE title LIKE % 'UNION SELECT null, id, password FROM users -- %' AND contents '% UNION SELECT null, id, password FROM users -- %'
```
