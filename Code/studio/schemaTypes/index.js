// export const schemaTypes = []


import { defineConfig } from 'sanity'; // Main import change
import tweetSchema from './tweetSchema';
import userSchema from './userSchema';

export default defineConfig({
  name: 'default',
  types: [tweetSchema, userSchema],  // Array inside the config object
});
