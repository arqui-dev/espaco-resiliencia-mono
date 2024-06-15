import { createClient } from '@sanity/client';

const client = createClient({
  projectId: '8j1hgjyn', // Replace with your Sanity project ID
  dataset: 'production', // Replace with your Sanity dataset
  apiVersion: '2022-03-07', // Use a specific date for the API version
  useCdn: true, // `false` if you want to ensure fresh data
});

export default client;