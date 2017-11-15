import 'babel-polyfill'
import jsdom from 'jsdom-global'
import { use, expect } from 'chai'
import sinonChai from 'sinon-chai'

jsdom()
use(sinonChai)

global.expect = expect
