'use strict';
import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import chalk from 'chalk';

/* eslint-disable no-console */
process.env.NODE_ENV = 'production';

console.log(chalk.blue('Generating minified build for production.'));

webpack(webpackConfig).run(function(err, stats) {
  if(err) {
    console.log(chalk.red(err));
    return 1;
  }

  const jsonStats = stats.toJson();

  if(jsonStats.hasErrors) {
    return jsonStats.errors.map(error=>console.log(chalk.red(error)));
  }
  if(jsonStats.hasWarnings) {
    console.log(chalk.yellow('Webpack warnings: '));
    jsonStats.warnings.map(warning=>console.log(chalk.yellow(warning)));
  }
  console.log(`Webpack stats: ${stats}`);
  console.log(chalk.green('App built successfully and written to dist folder'));


  return 0;

});
