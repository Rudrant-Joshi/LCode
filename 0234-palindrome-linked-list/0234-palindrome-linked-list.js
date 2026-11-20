var isPalindrome = function(head) {
  let list = [];
  let current = head;

  while(current !== null) {
    list.push(current.val);
    current = current.next;
  }

  let i = 0;  
  let j = list.length - 1;

  while(i < j) {
    if(list[i] !== list[j]) return false;

    i++;
    j--;
  }
  return true;
};