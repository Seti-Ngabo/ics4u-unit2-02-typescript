/**
 * This program runs MrCoxallStack.
 *
 * By:      Seti Ngabo
 * Version: 1.0
 * Since:   2022-10-03
 */

import MrCoxallStack from './MrCoxallStack'
import promptSync from 'prompt-sync'

// process and output
const myStack = new MrCoxallStack()

const prompt = promptSync()
const userStr = prompt('Enter an integer: ')
const str = parseInt(userStr)
myStack.push(str)
console.log('Stack before the pop is: ')
console.log(myStack.getStack())

myStack.pop()
console.log('Stack after pop is: ')
console.log(myStack.getStack())
