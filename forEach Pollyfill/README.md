
# forEach Pollyfill

A custom implementation of the JavaScript forEach method using Array's prototype.

## How It Works

**Input:** A callback function.

**Process:** Calls the callback for each element, passing (elem, index, arr).

**Output**:Always returns undefined (just like the native forEach).

## Notes

* Does not return a new array.
* Does not modify the original array.
* Mimics the behavior of the native Array.prototype.forEach.