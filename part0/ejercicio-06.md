```mermaid
sequenceDiagram
    Browser->>+Server: makes 1 post request 
    Browser->>+Server: post request contains the new_note as json data
    Server-->>-Browser: answers with status code 201 created
    Server-->>-Browser: doesnt make more requests
    Browser-->>+Browser: displays the new note
    
    
```