import React, { Component } from 'react';
import { Text } from 'react-native';
import { Container, Header, Title, Content, Button, Icon, List, ListItem } from 'native-base';
import ActionButton from 'react-native-action-button';

export class NativeBaseTest extends Component {
  render() {
        return (
            <Container>
                <Header>
                    <Button transparent>
                        <Icon name='ios-menu' />
                    </Button>
                    <Title>Monte Office</Title>
                </Header>

                <Content>
                  <List>
                    <ListItem >
                        <Text>Simon Mignolet</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Nathaniel Clyne</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Dejan Lovren</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Dejan Lovren</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Dejan Lovren</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Dejan Lovren</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Dejan Lovren</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Dejan Lovren</Text>
                    </ListItem>
                  </List>


                  <ActionButton buttonColor="rgba(231,76,60,1)">
                    <ActionButton.Item buttonColor='#9b59b6' title="New Task" onPress={() => console.log("notes tapped!")}>
                      <Icon name="md-create" />
                    </ActionButton.Item>
                    <ActionButton.Item buttonColor='#3498db' title="Notifications" onPress={() => {}}>
                      <Icon name="md-notifications-off" />
                    </ActionButton.Item>
                    <ActionButton.Item buttonColor='#1abc9c' title="All Tasks" onPress={() => {}}>
                      <Icon name="md-done-all" />
                    </ActionButton.Item>
                  </ActionButton>
                </Content>
            </Container>
        );
    }
}
