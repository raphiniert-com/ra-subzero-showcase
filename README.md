# ra-subzero-showcase

This repo contains a showcase [React](https://reactjs.org/) application which bases on [react-admin](https://github.com/marmelab/react-admin) for [subzero starter kit](https://github.com/subzerocloud/subzero-starter-kit).

## Installation

### Prerequisites
* [subZero starter kit](https://github.com/subzerocloud/subzero-starter-kit)
* [Node.js](https://nodejs.org/en/)

### Get it runnin'
First get the api ([subZero starter kit](https://github.com/subzerocloud/subzero-starter-kit)) running, then install all the required node packages of this project and run the development server
```
npm i
npm start
```
The web interface will become available at http://localhost:3001.

## Deployment
First build the application with 
```
npm run build
```
and move all the build files which are located inside `build` in your project directory into `openresty/nginx/html` inside the [subZero starter kit](https://github.com/subzerocloud/subzero-starter-kit) project which is serving the api. In order to deploy the api and app in once follow the deployment documentation of [subZero starter kit](https://github.com/subzerocloud/subzero-starter-kit).

## Development & testing
This application bases onto [react-scripts](https://github.com/facebook/create-react-app). Therefore, we refer to the [react scripts documentation](https://github.com/scheiblr/ra-subzero-showcase/blob/REACT_SCRIPTS.md).

## Contributing
Anyone and everyone is welcome to contribute.

## License
Copyright © 2019-present Raphael Scheible
This source code in this repository is licensed under [MIT](https://github.com/scheiblr/ra-subzero-showcase/blob/LICENSE) license.
