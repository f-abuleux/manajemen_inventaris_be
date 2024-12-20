import * as moduleAlias from 'module-alias';
import path from 'path';

moduleAlias.addAlias('@', path.resolve(__dirname));
