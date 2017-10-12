import operate from './operate';
import isNumber from './isNumber';

/** Given buttonName and calculator data object, return an updated data object.
 * 
 * Calculator data object contains:
 *    total:String       running total 
 *    next:String        next number to be operated on with total
 *    operation:String   +,-,x,÷, or %
 */

export default function calculate(obj, buttonName) {
  if (buttonName === 'AC') {
    return {
      total: null,
      next: null,
      operation: null
    };
  }

  if (isNumber(buttonName)) {
    // 0 and 0 should return 0
    if (buttonName === '0' && obj.next === '0') {
      return {};
    }

    // If operation, update next
    if (obj.operation) {
      if (obj.next) {
        return { next: obj.next + buttonName };
      }
      return { next: buttonName };
    }
    // If no operation, update next and clear value
    if (obj.next) {
      return {
        next: obj.next + buttonName,
        total: null
      };
    }
    return {
      next: buttonName,
      total: null
    };
  }

  if (buttonName === '.') {
    if (obj.next) {
      if (obj.next.includes('.')) {
        return {};
      }
      return { next: obj.next + '.' };
    }
    if (obj.operation) {
      return { next: '0.' };
    }
    if (obj.total) {
      if (obj.total.includes('.')) {
        return {};
      }
      return { total: obj.total + '.' };
    }
    return { total: '0.' };
  }

  if (buttonName === '=') {
    if (obj.next && obj.operation) {
      return {
        total: operate(obj.total, obj.next, obj.operation),
        next: null,
        operation: null
      };
    } else {
      // '=` with no operation, do nothing
      return {};
    }
  }

  if (buttonName === '+/-') {
    if (obj.next) {
      return { next: (-1 * parseFloat(obj.next)).toString() };
    }
    if (obj.total) {
      return { total: (-1 * parseFloat(obj.total)).toString() };
    }
    return {};
  }

  // save operation and shift "next" to "total"
  return {
    total: obj.next,
    next: null,
    operation: buttonName
  };
}
