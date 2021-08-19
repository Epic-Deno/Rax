import { createElement } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';

import './index.css';

import List from '../../components/List';

export default function Home() {
  return (
    <View className="home">
      <List />
    </View>
  );
}
