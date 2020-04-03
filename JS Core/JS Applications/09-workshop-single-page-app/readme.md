# Single Page App - Exam preparation
## 1. Firebase read and write
*it needs to be done with authentication: *
```json
{
  "rules": {
    ".read": "auth !== null",
    ".write": "auth !== null"
  }
}
```