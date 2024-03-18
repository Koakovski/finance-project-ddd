# User

```json
{
  "id": "uuid",
  "email": "email@example.com",
  "password": "12345678",
  "budgetBoxIds": ["uuid", "uuid"],
  "totalBalanceBoxAvailable": 10.0,
  "terms": [
    {
      "ip": "120.06.09.011",
      "acceptedAt": "2024-03-06T22:00:00.000Z",
      "userAgent": {
        "name": "firefox",
        "version": "86.0.0",
        "os": "Linux",
        "type": "browser"
      }
    }
  ]
}
```

## Estructure

- User: Aggregate Root
- id: Value Object
- email: Value Object
- password: Value Object
- ip: Value Object
- acceptedAt: Value Object
