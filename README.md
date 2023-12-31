![Qventus logo](public/qventus-logo.svg)

# Qventus Take Home App

[![forthebadge](https://forthebadge.com/images/badges/made-with-next-13.svg)](http://forthebadge.com)
[![forthebadge](http://forthebadge.com/images/badges/built-with-love.svg)](http://forthebadge.com)
[![Vercel](https://vercelbadge.vercel.app/api/ser0125/qventus-take-home-app?style=for-the-badge)](https://qventus-take-home-hq5a273ej-ser0125.vercel.app/)
![storybook-badge-optimized](https://github.com/ser0125/qventus-take-home-app/assets/11180036/25a7303d-7795-46d8-ad3a-8157b81fb5f6)


Next JS application, responsible for validating a password following a Regex approach

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Demo](#demo)
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

---

**Note**: The PasswordComponent use a custom hook that validate each requirement and returns each requirement with a `isValid` property
![image](https://github.com/ser0125/qventus-take-home-app/assets/11180036/628bc6b7-c7b0-4de4-bd95-9d14f4c55980)

## Demo

The application is deployed on vercel, so you can take a look there:

https://qventus-take-home-hq5a273ej-ser0125.vercel.app/

## Contributing

Your contributions are always welcome!

1. Clone repo and create a new branch: `$ git checkout https://github.com/ser0125/qventus-take-home-app -b name_for_new_branch`.
2. Make changes and test
3. Submit Pull Request with comprehensive description of changes

## Tests

The **unit tests** are located on: `app/__tests__`

- For each test we have a snapshot and the test Component

To run the unit tests use:

```shell
$ npm run test
```

---

The **e2e** tests are located on: `cypress/e2e/`

- For e2e test we are using cypress and data-cy attributes to identify the elements

To run the e2e tests use:

```shell
$ npm run cypress:open
```

- Select E2E Testing
  
  ![image](https://github.com/ser0125/qventus-take-home-app/assets/11180036/4ad95056-8f92-4870-9802-5812449d0ac6)

- Choose your preferred browser (Chrome recommended)
  
  ![image](https://github.com/ser0125/qventus-take-home-app/assets/11180036/fe319b18-9381-4a85-83d4-ecfffafdbeee)

- Choose `password.cy.js`
  
  ![image](https://github.com/ser0125/qventus-take-home-app/assets/11180036/5a2b0ee5-6055-4d9f-9326-d9023d2fb0ce)

- Finally, you should see the e2e tests running
  
  ![image](https://github.com/ser0125/qventus-take-home-app/assets/11180036/ffa53d9f-88c3-4d25-a14f-f5953bf64ad9)

---

**Storybook**

To run the storybook server, you could run:

```shell
$ npm run storybook
```

- Should be able to see and play with the 3 main components:

  ![image](https://github.com/ser0125/qventus-take-home-app/assets/11180036/a5b201f1-3e2a-4d1a-86d8-b39a175ffa5b)


## License

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

The MIT License (MIT) 2023 - Sergio Llanos

## Contact Information

sergio.llanos.garcia@gmail.com
