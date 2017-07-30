function Node(val){
    this.val = val;
    this.next = null;
}

function SinglyLinkedList(){
    this.head = null;
    this.tail = null;
    this.length = 0;
}

SinglyLinkedList.prototype.push = function(value) {
  const node = new Node(value)

  if (this.head === null) {
    this.head = node
    this.tail = node
  } else {
    this.tail.next = node
    this.tail = node
  }

  this.length++

  return this
}

SinglyLinkedList.prototype.pop = function() {
  if (this.tail === null) {
    return undefined
  } else if (this.length === 1) {
    const removed = this.tail.val

    this.head = null
    this.tail = null

    this.length--

    return removed
  } else {
    const removed = this.tail.val

    let currentNode = this.head
    for (; currentNode.next !== this.tail; currentNode = currentNode.next) {}

    currentNode.next = null
    this.tail = currentNode
    this.length--

    return removed
  }
}

SinglyLinkedList.prototype.unshift = function(value) {
  const node = new Node(value)

  if (this.head === null) {
    this.head = node
    this.tail = node
  } else {
    node.next = this.head
    this.head = node
  }

  this.length++

  return this
}

SinglyLinkedList.prototype.shift = function () {
  if (this.head === null) {
    return undefined
  } else {
    const removed = this.head.val

    this.head = this.head.next
    this.length--

    return removed
  }
}

SinglyLinkedList.prototype.set = function (index, value) {
  if (index >= this.length) return false

  let currentNode = this.head
  for (let i = 0; i !== index; currentNode = currentNode.next, i++) {}

  currentNode.val = value

  return true
}

SinglyLinkedList.prototype.get = function (index) {
  if (index >= this.length) return null

  let currentNode = this.head
  for (let i = 0; i !== index; currentNode = currentNode.next, i++) {}

  return currentNode.val
}

SinglyLinkedList.prototype.insert = function (index, value) {
  if (index >= this.length) return null

  if (index === 0) return this.unshift(value).length

  const node = new Node(value)

  let currentNode = this.head
  for (let i = 0; i !== index - 1; currentNode = currentNode.next, i++) {}

  const next = currentNode.next
  currentNode.next = node
  node.next = next

  return ++this.length
}

SinglyLinkedList.prototype.remove = function (index) {
  if (index === 0) {
    const removedNode = this.head
    this.head = this.head.next

    if (this.length === 1) this.tail = null

    this.length--

    return removedNode
  }

  let currentNode = this.head
  for (let i = 0; i !== index - 1; currentNode = currentNode.next, i++) {}

  const removedNode = currentNode.next
  currentNode.next = removedNode.next

  if (index === this.length - 1) {
    this.tail = currentNode
  }

  this.length--

  return removedNode.val
}

SinglyLinkedList.prototype.reverse = function () {
  const list = new SinglyLinkedList()

  for (let currentNode = this.head; currentNode !== null ; currentNode = currentNode.next) {
    list.unshift(currentNode.val)
  }

  while (this.length > 0) this.pop()

  for (let currentNode = list.head; currentNode !== null ; currentNode = currentNode.next) {
    this.push(currentNode.val)
  }

  return this
};
