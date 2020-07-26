# SAMPLE NODE API
Sample Node api is a node js express api application run on node js platform.

# Required Softwares
```Required Softwares
  NodeJS Latest Version
  VSCode
```
# Installation
```Commands
  git clone https://github.com/pavankumarupadhyayula/sample_node_api.git
  cd sample_node_api
  npm install
```
# Run
```Command
   node index.js
```

# Test application in browser
Copy and past below url in web browser

# Get users list
http://localhost:4000/users

# Output
```Json
    [
    {
        "id": 1,
        "name": "Pavankumar",
        "age": 30,
        "company": "Tata Consultancy Services"
    },
    {
        "id": 2,
        "name": "Raghu",
        "age": 32,
        "company": "Tech Mahindra"
    },
    {
        "id": 3,
        "name": "Ravi",
        "age": 40,
        "company": "Tech Mahindra"
    },
    {
        "id": 4,
        "name": "Ram",
        "age": 31,
        "company": "Tata Consultancy Services"
    },
    {
        "id": 5,
        "name": "Krishna",
        "age": 28,
        "company": "Infosys"
    }
]
```

# Get selected user by passing user id as param.
http://localhost:4000/user/1

# Output
```Json
    {
        "id": 1,
        "name": "Pavankumar",
        "age": 30,
        "company": "Tata Consultancy Services"
    }
```

## License
[MIT](https://choosealicense.com/licenses/mit/)
