import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const pathConverter = (...paths) => {
  return path.join(__dirname, '../', ...paths);
}