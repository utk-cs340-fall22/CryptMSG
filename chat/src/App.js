import React from 'react';
import { StreamChat } from 'stream-chat';
import { Chat, Channel, ChannelHeader, MessageInput, MessageList, Thread, Window } from 'stream-chat-react';

import 'stream-chat-react/dist/css/v2/index.css';

const chatClient = new StreamChat('dz5f4d5kzrue');
const userToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoic2hpbnktdW5pdC00IiwiZXhwIjoxNjY5ODUzOTg5fQ.yiSv4t8SAMwyrTdRhjvElXGBlzKmB2Z3bcpf5NjfqOA';

chatClient.connectUser(
  {
    id: 'shiny-unit-4',
    name: 'shiny',
    image: 'https://getstream.io/random_png/?id=shiny-unit-4&name=shiny',
  },
  userToken,
);

const channel = chatClient.channel('messaging', 'custom_channel_id', {
  // add as many custom fields as you'd like
  image: 'https://www.drupal.org/files/project-images/react.png',
  name: 'Talk about React',
  members: ['shiny-unit-4'],
});

const App = () => (
  <Chat client={chatClient} theme='str-chat__theme-light'>
    <Channel channel={channel}>
      <Window>
        <ChannelHeader />
        <MessageList />
        <MessageInput />
      </Window>
      <Thread />
    </Channel>
  </Chat>
);

export default App;