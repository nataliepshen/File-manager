import { up } from './nwd/up.js';
import { list } from './nwd/ls.js';
import { create } from './fs/create.js';
import { getOsInfo } from './os/osInfo.js';
import { read } from './fs/read.js'
import { rn } from './fs/rename.js';

export const actions = {
    up: up,
    ls: list,
    add: create,
    os: getOsInfo,
    cat: read,
    rn: rn,
}