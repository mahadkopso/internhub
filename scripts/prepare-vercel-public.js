import { cpSync, existsSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outputDirectory = 'vercel-public';
const staticDirectories = ['css', 'build'];
const staticFiles = ['favicon.ico', 'robots.txt'];

mkdirSync(outputDirectory, { recursive: true });

for (const directory of staticDirectories) {
    const source = join('public', directory);

    if (existsSync(source)) {
        cpSync(source, join(outputDirectory, directory), { recursive: true });
    }
}

for (const file of staticFiles) {
    const source = join('public', file);

    if (existsSync(source)) {
        cpSync(source, join(outputDirectory, file));
    }
}
