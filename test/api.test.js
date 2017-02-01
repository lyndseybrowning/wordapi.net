import fs from 'fs';
import request from 'supertest';
import { expect } from 'chai';
import app from '../src/index';

const path = `${__dirname}/api`;
const tests = fs.readdirSync(path);

tests.forEach((test) => {
  require(`./api/${test}`)(request, expect, app);
});
