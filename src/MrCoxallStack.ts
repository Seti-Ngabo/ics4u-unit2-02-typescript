/**
 * MrCoxallStack Class
 * By:      Seti Ngabo
 * Version: 1.0
 * Since:   2022-10-03
 */

class MrCoxallStack {
  private readonly stack: number[] = []

  // push - Adds a new item in stack array.
  public push(pushedNumber: number): void {
    this.stack.push(pushedNumber)
  }

  // getter
  public getStack(): number[] {
    return this.stack
  }

  // pop - Returns and removes the last item from the stack array.
  public pop(): void {
    this.stack.pop()
  }
}
export = MrCoxallStack
