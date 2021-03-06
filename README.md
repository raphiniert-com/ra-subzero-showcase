# ra-subzero-showcase

This repo contains a showcase [React](https://reactjs.org/) application which bases on [react-admin](https://github.com/marmelab/react-admin) for [subzero starter kit](https://github.com/subzerocloud/subzero-starter-kit).

## Installation

### Prerequisites
* [this special version](https://github.com/raphiniert-com/subzero-starter-kit) of the [subZero starter kit](https://github.com/subzerocloud/subzero-starter-kit)
* [Node.js](https://nodejs.org/en/)

### Get it runnin'
First get the api (one of the starter kits) running, then install all the required node packages of this project and run the development server
```
npm i
npm start
```
The web interface will become available at http://localhost:3001 and proxies the api from http://localhost:8080 to http://localhost:3001.
The proxy mechanism is defined in [src/setupProxy.js](https://github.com/raphiniert-com/ra-subzero-showcase/blob/master/src/setupProxy.js) which loads automatically. Read [here](https://create-react-app.dev/docs/proxying-api-requests-in-development/#configuring-the-proxy-manually) for more information about proxy in a react app.

## Deployment
First build the application with 
```
npm run build
```
and move all the build files which are located inside `build` in your project directory into `openresty/nginx/html` inside the [subZero starter kit](https://github.com/subzerocloud/subzero-starter-kit) project which is serving the api. In order to deploy the api and app in once follow the deployment documentation of the starter kit.

## Development & testing

This application bases onto [react-scripts](https://github.com/facebook/create-react-app). Therefore, we refer to the [react scripts documentation](https://github.com/raphiniert-com/ra-subzero-showcase/blob/master/REACT_SCRIPTS.md).

## Contributing
Anyone and everyone is welcome to contribute.

## License

This source code in this repository is licensed under [MIT](https://github.com/raphiniert-com/ra-subzero-showcase/blob/master/LICENSE) license and sponsored by [raphiniert.com](https://raphiniert.com).
