![Qventus logo](public/qventus-logo.svg)
# Qventus Take Home App

[![forthebadge](https://forthebadge.com/images/badges/made-with-next-13.svg)](http://forthebadge.com)
[![forthebadge](http://forthebadge.com/images/badges/built-with-love.svg)](http://forthebadge.com)


Next JS application, responsible for validating a password following a Regex approach

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Contact Information](#contact-information)

## Installation

1. Clone the repository:
```shell
$ git clone https://github.com/ser0125/qventus-take-home-app.git
```
2. Move to the folder project
```shell
$ cd qventus-take-home-app
```
3. Install the dependencies
```shell
$ npm install
```

## Usage
To run the application, use the command:
```shell
$ npm run dev
```

If you open the browser in the port indicated by Next usually the 3000, you should see the Password Component:

![image](https://github.com/ser0125/qventus-take-home-app/assets/11180036/986495b7-b02e-4d5b-9b1a-4751416c41b9)

### How it works
In the `app/validations/validations.ts` you can setup all your custom validations associated with a Regexp that would match

![image](https://github.com/ser0125/qventus-take-home-app/assets/11180036/3cb86603-ebea-4372-9fcc-9da68cf42496)

The PasswordComponent inside `app/password/Password.tsx` would receive a `passwordReqs` props that would have all the requirements

![image](https://github.com/ser0125/qventus-take-home-app/assets/11180036/c8598feb-6b13-4ae5-851e-77061718737e)

The `passwordReqs` array would have an `id, label and validation` for each requirement

![image](https://github.com/ser0125/qventus-take-home-app/assets/11180036/c935f1dd-e411-40b8-bc83-00350a497272)

------------------------------------------------------------------------------------------------------------------

**Note**: The PasswordComponent use a custom hook that validate each requirement and returns each requirement with a `isValid` property
![image](https://github.com/ser0125/qventus-take-home-app/assets/11180036/628bc6b7-c7b0-4de4-bd95-9d14f4c55980)

## Contributing
Your contributions are always welcome! 

1. Clone repo and create a new branch: `$ git checkout https://github.com/ser0125/qventus-take-home-app -b name_for_new_branch`.
2. Make changes and test
3. Submit Pull Request with comprehensive description of changes

## Tests
The tests are located on: `app/__tests__`

- For each test we have a snapshot and the test Component

To run the tests use:
```shell
$ npm run test
```


## License
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

The MIT License (MIT) 2023 - Sergio Llanos

## Contact Information
sergio.llanos.garcia@gmail.com
