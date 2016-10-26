#! /usr/bin/env node

const shelljs = require('shelljs');

const configFile = './.kss-config.json';
const cssMinified = './.kss-config.json';
const outputDir = "./build/stylesheets";
const minifiedFile = `${outputDir}/ninja-gaiden.css`;
const styleguidePath = './styleguide';

shelljs.exec(`kss --config ${configFile}`);
shelljs.cp(minifiedFile, styleguidePath);
