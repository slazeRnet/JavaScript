# Single Page App - Exam preparation
## 1. Firebase read and write
*it needs to be done with authentication:*
```json
{
  "rules": {
    ".read": "auth !== null",
    ".write": "auth !== null"
  }
}
```

## 2. Error while AJAX request
<details>
<summary>
The character encoding of the plain text document was not declared
</summary>
*The following error occurs when:*

<span style="color:red">
 The character encoding of the plain text document was not declared. The document will render with garbled  text in some browser configurations if the document contains characters from outside the US-ASCII range. The character encoding of the file needs to be declared in the transfer protocol or file needs to use a  byte order mark as an encoding signature.
 </span>

Occurs due to the fact that some DOM elements/ Requests are not loaded on time and this screws up the rest of the functionality.
- Fix:
- Use async/ await for all Promises. 
- Can be caused be Syntax error in the code. So refine the code carefully

</details>
