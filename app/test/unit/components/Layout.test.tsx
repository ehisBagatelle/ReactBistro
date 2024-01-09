import React from 'react';
import {Text} from 'react-native'
import renderer from 'react-test-renderer';
import Layout from '../../../src/components/Layout';

describe('Layout component', () => {
  it('renders correctly with children', () => {
    const mockChildren = <Text>Mock Child</Text>;
    const tree = renderer.create(<Layout>{mockChildren}</Layout>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly without children', () => {
    const tree = renderer.create(<Layout />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
