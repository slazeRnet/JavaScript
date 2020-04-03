# Single Page App - Exam preparation
1. ## Firebase read and write
*it needs to be done with authentication: *
```json
{
  /* Visit https://firebase.google.com/docs/database/security to learn more about security rules. */
  "rules": {
    ".read": "auth !== null",
    ".write": "auth !== null"
  }
}
```