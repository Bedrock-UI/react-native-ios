import { SafeAreaView } from 'react-native';
import { Button } from 'components/Button';
import { Flex } from 'components/Flex';
import { TextInput } from 'components/TextInput';

function App() {
  return (
    <SafeAreaView style={{ margin: 16 }}>
      <Flex>
        <Button title="Filled" variant="filled" />
        <Button title="Gray" variant="gray" />
        <Button title="Plain" variant="plain" />
        <Button title="Tinted" variant="tinted" />
      </Flex>

      <Flex>
        <TextInput value="Search" />
      </Flex>
    </SafeAreaView>
  );
}

export default App;
