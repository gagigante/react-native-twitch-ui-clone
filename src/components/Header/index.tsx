import React from 'react';
import { MaterialIcons, MaterialCommunityIcons, Feather } from '@expo/vector-icons';

import { useTheme } from '../../hooks/theme';

import { Container, Avatar, OnlineStatus, RightSide, Button } from './styles';

const Header: React.FC = () => {
  const { selectedTheme, toggleTheme } = useTheme();

  return (
    <Container>
      <Avatar>
        <OnlineStatus />
      </Avatar>

      <RightSide>
        <Button>
          <MaterialIcons 
            name="notifications-none"
            size={26}
            color={selectedTheme.colors.black}
          />
        </Button>

        <Button>
          <MaterialCommunityIcons 
            name="message-outline"
            size={26}
            color={selectedTheme.colors.black}
          />
        </Button>

        <Button>
          <Feather 
            name="search"
            size={26}
            color={selectedTheme.colors.black}
          />
        </Button>

        <Button onPress={toggleTheme}>
          {selectedTheme.title === 'light' 
          ?
            <Feather 
              name="moon"
              size={26}
              color={selectedTheme.colors.black}
            /> 
          :
            <Feather 
              name="sun"
              size={26}
              color={selectedTheme.colors.black}
            />
          }
        </Button>
      </RightSide>
    </Container>
  );
}

export default Header;