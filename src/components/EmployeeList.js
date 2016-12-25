import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { employeeFetch } from '../actions';

class EmployeeList extends Component {
  componentWillMount() {
    this.props.employeeFetch();
  }

  render() {
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

export default connect(null, { employeeFetch })(EmployeeList);
