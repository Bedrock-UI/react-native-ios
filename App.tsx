import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { Button } from 'components/Button';
import { Flex } from 'components/Flex';
import { TabBar } from 'components/TabBar';
import { Table } from 'components/Table';
import { TextInput } from 'components/TextInput';
import { TopNavigation } from 'components/TopNavigation';

function App() {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <SafeAreaView style={{ backgroundColor: '#F2F1F6', flex: 1 }}>
      <ScrollView style={{ marginHorizontal: 16 }}>
        <TopNavigation
          left={{ icon: <Ionicons name="chevron-back" size={32} />, title: 'Back' }}
          right={{ title: 'Save' }}
          title="Settings"
        />

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

        <Flex>
          <Table
            header="Networks"
            rows={[{ rightIcon: true, title: 'Z17AHW' }, { title: 'HP24' }, { title: 'My Wifi' }]}
          />
        </Flex>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
