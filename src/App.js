// in App.js
import React, { Component } from 'react';
import buildGraphQLProvider from 'ra-data-graphql-simple';
import { Admin } from 'react-admin';
import authProvider from "./authProvider";

// import { PostCreate, PostEdit, PostList } from './posts';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { dataProvider: null };
    }
    componentDidMount() {
        buildGraphQLProvider({ clientOptions: { uri: 'http://localhost:8080/graphql/simple' }})
            .then(dataProvider => this.setState({ dataProvider }));
    }

    render() {
        const { dataProvider } = this.state;

        if (!dataProvider) {
            return <div>Loading</div>;
        }

        return (
            <Admin dataProvider={dataProvider} authProvider={authProvider}>
                {/*<Resource name="Post" list={PostList} edit={PostEdit} create={PostCreate} remove={Delete} />*/}
            </Admin>
        );
    }
}

export default App;