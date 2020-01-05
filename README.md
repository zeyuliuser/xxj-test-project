# xxj-test-project

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


/serv/save
content-type →application/json;charset=UTF-8
methods post
{
	"id":10010,
    "name":"xixi",
    "age":18,
    "vocation":"program",
    "address":"zhongguo",
    "sex":"man",
    "mobile":1008611
}
return
{
    "token": null,
    "code": "1",
    "message": "成功",
    "output": {
        "id": 1,
        "name": "xixi",
        "age": "18",
        "vocation": "program",
        "address": "zhongguo",
        "sex": "man",
        "mobile": "1008611"
    }
}
/serv/query
content-type →application/json;charset=UTF-8
methods post
{
    "name":"xixi"
}
return
{
    "token": null,
    "code": "1",
    "message": "成功",
    "output": {
        "content": [
            {
                "id": 1,
                "name": "xixi",
                "age": "18",
                "vocation": "program",
                "address": "zhongguo",
                "sex": "man",
                "mobile": "1008611"
            }
        ],
        "last": true,
        "totalElements": 1,
        "totalPages": 1,
        "number": 0,
        "size": 10,
        "first": true,
        "sort": [
            {
                "direction": "ASC",
                "property": "id",
                "ignoreCase": false,
                "nullHandling": "NATIVE",
                "ascending": true
            }
        ],
        "numberOfElements": 1
    }
}
/serv/delete
{
    "id":1
}

{
    "token": null,
    "code": "1",
    "message": "成功",
    "output": null
}