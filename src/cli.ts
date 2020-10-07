import {Application} from 'typedoc';
import * as path from 'path';

const app = new Application()
const inputFiles = app.expandInputFiles([path.resolve(__dirname, '..', 'test')])
const reflection = app.convert(inputFiles)
console.log("Should be 'aa', but actually is 'a', as 'Bar' from 'a.ts' instead of 'b.ts' is being used.")
console.log((reflection as any).children[1]/*b.ts*/.children[1]/*Foo1*/.children[0]/*foo*/.type.reflection.children[0].name/*first property*/)
