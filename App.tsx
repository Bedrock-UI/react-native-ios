import { SafeAreaView } from 'react-native';
import { Button } from 'components/Button';
import { Flex } from 'components/Flex';
import { TextInput } from 'components/TextInput';

function App() {
  return (
    <SafeAreaView style={{ margin: 16 }}>
      <SafeAreaView style={{ marginVertical: 16 }}>
        <Flex>
          <Button size="small" title="Filled Small" variant="filled" />
          <Button size="small" title="Gray Small" variant="gray" />
          <Button size="small" title="Plain Small" variant="plain" />
          <Button size="small" title="Tinted Small" variant="tinted" />
        </Flex>
      </SafeAreaView>

      <SafeAreaView style={{ marginVertical: 16 }}>
        <Flex>
          <Button title="Filled Medium" variant="filled" />
          <Button title="Gray Medium" variant="gray" />
          <Button title="Plain Medium" variant="plain" />
          <Button title="Tinted Medium" variant="tinted" />
        </Flex>
      </SafeAreaView>

      <SafeAreaView style={{ marginVertical: 16 }}>
        <Flex>
          <Button size="large" title="Filled Large" variant="filled" />
          <Button size="large" title="Gray Large" variant="gray" />
          <Button size="large" title="Plain Large" variant="plain" />
          <Button size="large" title="Tinted Large" variant="tinted" />
        </Flex>
      </SafeAreaView>

      <Flex>
        <TextInput value="Search" />
      </Flex>
    </SafeAreaView>
  );
}

export default App;
