```mermaid
sequenceDiagram
    Browser->>+Server: request the HTML 
    Server-->>-Browser: asnwers with the HTML
    Browser->>+Server: Requests the css and the js 
    Server-->>-Browser: sends it 
    Browser->>+Server: requests the json data
    Server-->>-Browser: returns the notes list in json format

    
```