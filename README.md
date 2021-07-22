# func-fns

Functional utils for your functional needs.

## **filter fns**

### _index_

```js
import index from 'func-fns/filter/index'

const res = ['foo', 'bar', 'baz'].filter(index(1))
console.log(res) // ['foo', 'baz']
```

## **map fns**

### _replace_

```js
import replace from 'func-fns/map/replace'

const res = ['foo', 'bar', 'baz'].map(replace(1, 'foo'))
console.log(res) // ['foo', 'foo', 'baz']
```

### _transpose_

```js
import transpose from 'func-fns/map/transpose'

const res = ['foo', 'bar', 'baz'].map(transpose(1, 2))
console.log(res) // ['foo', 'baz', 'bar']
```

## **reduce fns**

### _insert_

```js
import insert from 'func-fns/reduce/insert'

const res = ['foo', 'bar', 'baz'].reduce(...insert('foo', 1))
console.log(res) // ['foo', 'foo', 'bar', 'baz']
```

### _sum_

```js
import sum from 'func-fns/reduce/sum'

const res = [1, 2, 3].reduce(sum())
console.log(res) // 6
```
