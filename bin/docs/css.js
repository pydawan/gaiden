#! /usr/bin/env node

const shelljs = require('shelljs');

const sourceDir = "./demo/scss";
const outputDir = "./demo/css";

const options = {
  sass: ` --include-path ${sourceDir} \
    --output-style compressed \
    --sourceComments false \
    -o ${outputDir}`
}

shelljs.exec(`node-sass ${options.sass} ${sourceDir}`);
