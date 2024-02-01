import { encode } from 'js-base64';
import browser from 'webextension-polyfill';
import config from '../config/config';

export default function apiKeyInvalid(key?: string): string {
  return '';
}

export async function getApiKey(): Promise<string> {
  const storage = await browser.storage.sync.get({
    apiKey: config.apiKey,
  });
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
  const apiKey = encode(storage.apiKey);
  return apiKey;
}
