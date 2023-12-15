import { Button, Stack } from '@chakra-ui/react';
import { MdBuild , MdCall } from "react-icons/md"

function App() {
  return (
    <div>
      <Stack direction='row' spacing={4}>
        <Button leftIcon={<MdBuild />} colorScheme='pink' variant='solid'>
          Settings
        </Button>
        <Button rightIcon={<MdCall />} colorScheme='blue' variant='outline'>
          Call us
        </Button>
      </Stack>
    </div>
  );
}

export default App;
