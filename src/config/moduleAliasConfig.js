import path from 'path';
import moduleAlias from 'module-alias';

const folders = {
    '@': path.join(__dirname, '..'),
};

moduleAlias.addAliases(folders);
