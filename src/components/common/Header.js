import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
  const { viewStyles, textStyles } = styles;

  return (
    <View style={viewStyles}>
      <Text style={textStyles}>{props.title}</Text>
    </View>
  );
};

const styles = {
  viewStyles: {
    backgroundColor: '#f1f1f1',
    height: 50,
    paddingTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    position: 'relative'
  },
  textStyles: {
    fontSize: 20,
  }
};

export { Header };
