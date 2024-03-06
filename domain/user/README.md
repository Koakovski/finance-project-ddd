User 
```json
{
  "id":"uuid",
  "email":"email@example.com",
  "password":"12345678",
  "terms":[
    {
    "ip":"120.06.09.011",
    "acceptedAt": "2024-03-06T22:00:00.000Z"
    },
    {
    "ip":"120.06.09.011",
    "acceptedAt": "2024-04-06T08:00:00.000Z"
    }
  ]
}
```

### Estructure

- User: Aggregate Root
- id: Value Object
- email: Value Object
- password: Value Object
- ip: Value Object
- acceptedAt: Value Object
