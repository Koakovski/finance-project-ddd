# User

```json
{
  "userId": "uuid",
  "totalValue": 100, // Dinamic Calculations
  "reasonId": "uuid",
  "paymentDate": "2024-03-06T22:00:00.000Z",
  "type": ["Entrada", "Saida"], // Enum
  "status": ["Pendente", "Concluido"], // Enum
  "note": "descripion",
  "attachment": "url",
  "calculations": [
    {
      "budgetBoxId": "uuid",
      "value": 50
    }
  ]
}
```

## Estructure

- type: Value Object
- status: Value Object
- note: Value Object
- attachment: Value Object
- calculations: Value Object
- paymentDate: Value Object
