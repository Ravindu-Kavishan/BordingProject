# Project Title

# A short description of your project.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Installation

# Explain how to install your project:
    get the coppy of folder sructire.
    rename MERN folder.
    git initialise
        git init
        git commit -m "first commit"
        git branch -M main
        git remote add origin https://github.com/Ravindu-Kavishan/MERN.git
        git push -u origin main
    make Diagrems and place well.

    start developing backend.
        get new terminel.
        cd Backend
        --cheack wether the package.json file is there
            npm init -y
        npm install express
        npm install dotenv
        --cheack wether index.js is there.
            create index.mjs
        npm install --save-dev nodemon
        npm install mongoose
        -- mack changers in package.json
                "scripts": {
                  "start": "node src/index.mjs",
                  "dev": "nodemon src/index.mjs"
                },
                "type": "module"
        get new terminel.
            cd Backend
            npm run dev
                --the output
                    Server running on http://localhost:3000
                    MongoDB Connected: localhost

    get new terminel.
    start developing Frountend
        cd Frountend
        npm create vite@latest
        cd your-project-name  (optinal)
        npm install
        npm install react-router-dom
        get new terminel.
            npm run dev




/mern-app
|-- /backend
|    |-- /controllers
|    |    └── userController.js
|    |-- /models
|    |    └── userModel.js
|    |-- /routes
|    |    └── userRoutes.js
|    |-- /middleware
|    |    └── authMiddleware.js
|    |-- /config
|    |    └── db.js
|    └── server.js
|
|-- /frontend
|    |-- /src
|         |-- /components
|         |    └── UserProfile.js
|         |-- /pages
|         |    └── HomePage.js
|         |-- /services
|         |    └── userService.js
|         |-- /utils
|         |    └── utils.js
|         |-- /assets
|         |    
|         |-- App.js
|         └── index.js
|
|-- package.json
|-- README.md
