/// <reference path="./types.d.ts" />

import * as utils from 'loader-utils';

// We use a custom file since we need private functions
import {setDefaultValue, transform} from './gulp-typescript-angular';

function loader(source:string) {
  this.cacheable();
  var options = utils.getOptions(this) || {};
  setDefaultValue(options);
  var output = transform(source, options);
  this.callback(null, output);
};

export = loader;
