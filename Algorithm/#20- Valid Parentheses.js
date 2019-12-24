/*
* Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
* 
* An input string is valid if:
* 
* Open brackets must be closed by the same type of brackets.
* Open brackets must be closed in the correct order.
* Note that an empty string is also considered valid.
* 
* Example 1:
* 
* Input: "()"
* Output: true
* Example 2:
* 
* Input: "()[]{}"
* Output: true
* Example 3:
* 
* Input: "(]"
* Output: false
* Example 4:
* 
* Input: "([)]"
* Output: false
* Example 5:
* 
* Input: "{[]}"
* Output: true
*/

var isValid = function(s) {
    const stack = [];
    
    if(s.length % 2 !== 0)
        return false
    
    for(let i = 0; i < s.length; i++){
        handleStack(stack, s[i])
    }
    
    if(stack.length === 0)
        return true
    else
        return false
};

const handleStack = (stack, character) => {
    if(character === '(' || character === '{' || character === '[')
        stack.push(character)
    else if(character === ')' && (stack[stack.length - 1] === '(') )
        stack.pop()
    else if(character === '}' && (stack[stack.length - 1] === '{') )
        stack.pop()
    else if(character === ']' && (stack[stack.length - 1] === '[') )
        stack.pop()
} 