import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from 'react';
import { PlatformColor, SafeAreaView } from 'react-native';
import { Button } from 'components/Button';
import { Flex } from 'components/Flex';
import { TabBar } from 'components/TabBar';
import { TextInput } from 'components/TextInput';

function App() {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <SafeAreaView style={{ flex: 1 }}>
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

      <TabBar>
        <TabBar.Tab
          icon={
            <Ionicons
              color={activeTab === 0 ? PlatformColor('systemBlue') : PlatformColor('systemGray3')}
              name="md-checkmark-circle"
              size={24}
            />
          }
          label="Test"
          onPress={() => setActiveTab(0)}
        />

        <TabBar.Tab
          icon={
            <Ionicons
              color={activeTab === 1 ? PlatformColor('systemBlue') : PlatformColor('systemGray3')}
              name="md-checkmark-circle"
              size={24}
            />
          }
          label="Test 2"
          onPress={() => setActiveTab(1)}
        />
      </TabBar>
    </SafeAreaView>
  );
}

export default App;
