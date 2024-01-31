// Connects the Sanity Client to the React App
import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// Define the configuration options for the client
const clientConfig = {
    projectId: 'pu813fj9',
    dataset: 'production',
    apiVersion: '2022-02-01',
    useCdn: true,
    token: process.env.REACT_APP_SANITY_TOKEN,
};

// Create a Sanity client using createClient
export const client = createClient(clientConfig);

// Create an image builder instance
const builder = imageUrlBuilder(client);

// Function to build URLs for images
export const urlFor = (source) => builder.image(source);

/*export const client = SanityClient({
    projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
    dataset: 'production',
    apiVersion: '2022-02-01',
    useCdn: true,
    token: process.env.REACT_APP_SANITY_TOKEN,
});

// Create an image builder instance
const builder = imageUrlBuilder(client);

// Function to build URLs for images
export const urlFor = (source) => builder.image(source);*/