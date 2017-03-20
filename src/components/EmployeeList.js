import _ from 'lodash';
import React, { Component } from 'react';
import { ListView, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { employeeFetch } from '../actions';

class EmployeeList extends Component {
    componentWillMount() {
        this.props.employeeFetch();
        this.createDataSource(this.props);
    }

    conponentWillRecieveProps(nextProps) {
        this.createDataSource(nextProps);
    }
    
    createDataSource( { employees } ) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        
        this.dataSource = ds.cloneWithRows(employees);
    }
    
    render() {
        console.log(this.state);
        return (
            <View>
                <Text>Employess List</Text>
                <Text>Employess List</Text>
                <Text>Employess List</Text>
                <Text>Employess List</Text>
                <Text>Employess List</Text>
                <Text>Employess List</Text>
            </View>
        );
    }
}

const mapStateToProps = state => {
    const employees = _.map(state.employees, (val, uid) => {
       return { ...val, uid };
    });
    
    return { employees };
};

export default connect(mapStateToProps, { employeeFetch })(EmployeeList);
