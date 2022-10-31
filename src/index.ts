/**
 * This program runs MrCoxallStack.
 *
 * By:      Seti Ngabo
 * Version: 1.0
 * Since:   2022-10-03
 */

import MrCoxallStack from './MrCoxallStack'
import promptSync from 'prompt-sync'

// use MrCoxallStack and promptSync classes
const prompt = promptSync()
const myStack = new MrCoxallStack()

// Input & Process
const input1 = Number(prompt('Enter a first number: '))
myStack.pushItem(input1)

const input2 = Number(prompt('Enter a second number: '))
myStack.pushItem(input2)

const input3 = Number(prompt('Enter a third number: '))
myStack.pushItem(input3)

// Output
console.log(myStack.getStack())

console.log(`\nPopped number: ${String(myStack.popItem())}`)

console.log(myStack.getStack())

console.log('\nDone.')
