import fs from 'fs';
import request from 'supertest';
import { expect } from 'chai';
import app from '../src/index';

const api = `${__dirname}/api/`;
const tests = fs.readdirSync(api);

tests.forEach((test) => {
  require(`./api/${test}`)(request, expect, app);
});
