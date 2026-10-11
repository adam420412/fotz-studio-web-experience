import { Buffer } from 'node:buffer';
import { TextDecoder } from 'node:util';

/** Decode the complete SSR byte stream so UTF-8 characters can cross chunks. */
export function decodeRenderedHtml(chunks) {
  const bytes = Buffer.concat(chunks);
  // React 18's Node renderer can insert NUL padding before multibyte text:
  // https://github.com/facebook/react/issues/31134
  // Literal NUL is invalid in HTML. Strip bytes before decoding, while leaving
  // escaped JSON strings ("\\u0000") and every other character untouched.
  const clean = bytes.includes(0) ? bytes.filter(byte => byte !== 0) : bytes;
  return new TextDecoder('utf-8', { fatal: true }).decode(clean);
}
