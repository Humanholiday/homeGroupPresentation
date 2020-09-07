import React from "react";
import {
  Appear,
  Box,
  CodePane,
  CodeSpan,
  Deck,
  FlexBox,
  FullScreen,
  Grid,
  Heading,
  Image,
  ListItem,
  Markdown,
  Notes,
  OrderedList,
  Progress,
  Slide,
  SpectacleLogo,
  Stepper,
  Text,
  UnorderedList,
  indentNormalizer,
} from "spectacle";

// SPECTACLE_CLI_THEME_START
export const theme = {
  fonts: {
    header: '"Open Sans Condensed", Helvetica, Arial, sans-serif',
    text: '"Open Sans Condensed", Helvetica, Arial, sans-serif',
  },
};
// SPECTACLE_CLI_THEME_END

// SPECTACLE_CLI_TEMPLATE_START
export const template = () => (
  <FlexBox
    justifyContent="space-between"
    position="absolute"
    bottom={0}
    width={1}
  >
    <Box padding="0 1em">
      <FullScreen />
    </Box>
    <Box padding="1em">
      <Progress />
    </Box>
  </FlexBox>
);
// SPECTACLE_CLI_TEMPLATE_END

export const formidableLogo =
  "https://avatars2.githubusercontent.com/u/5078602?s=280&v=4";

export const cppCodeBlock = indentNormalizer(`
#include <iostream>
#include <cstdlib>
#include <sstream>
#include <pthread.h>
struct thread_data_t
{
   int  thread_id;
   std::string message;
};
void *print_thread_message(void *thread_arg)
{
   struct thread_data_t *thread_data;
   thread_data = (struct thread_data_t *) thread_arg;
   cout << "Thread ID: " << thread_data->thread_id;
   cout << "Message: " << thread_data->message << endl;
   pthread_exit(NULL);
}
int main()
{
  pthread_t threads[NUM_THREADS];
  struct thread_data_t thread_data[NUM_THREADS];
  for (int i = 0; i < NUM_THREADS; i++)
  {
    auto curried_add = [](int x) -> function<int(int)> { return [=](int y) { return x + y; }; };
    auto answer = curried_add(i)(5);
    std::stringstream message;
    message << "The math result is " << answer << "!";
    thread_data.thread_id = i;
    thread_data.message = message.str();
    int err = pthread_create(&threads, NULL, print_thread_message, (void *)&thread_data[i]);
    if (err)
    {
      exit(-1)
    }
  }
  return 0;
}`);
