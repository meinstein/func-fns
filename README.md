# func-fns

Functional utils for your functional needs.

```bash
npm i func-fns
```

## **filter fns**

### _keep_

```js
import keep from 'func-fns/filter/keep'

const res = ['foo', 'bar', 'baz'].filter(keep(1))
console.log(res) // ['bar']
```

### _remove_

```js
import remove from 'func-fns/filter/remove'

const res = ['foo', 'bar', 'baz'].filter(remove(1))
console.log(res) // ['foo', 'baz']
```

### _uniq_

```js
import uniq from 'func-fns/filter/uniq'

const res = ['foo', 'foo', 'bar', 1, 1].filter(uniq())
console.log(res) // ['foo', 'bar', 1]
```

## **flatMap fns**

### _insert_

```js
import insert from 'func-fns/flatMap/insert'

const res = ['foo', 'bar', 'baz'].flatMap(insert('foo', 1))
console.log(res) // ['foo', 'foo', 'bar', 'baz']
```

### _truthy_

```js
import truthy from 'func-fns/flatMap/truthy'

const res = ['foo', undefined, 'baz', null].flatMap(truthy())
console.log(res) // ['foo', 'baz']
```

## **map fns**

### _length_

```js
import length from 'func-fns/map/length'

const res = ['foo', ['bar', 'baz']].map(length())
console.log(res) // [3, 2]
```

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

### _key_

```js
import key from 'func-fns/map/key'

const res = [{ id: 'foo' }, { id: 'bar' }].map(key('id'))
console.log(res) // ['foo', 'bar']
```

## **reduce fns**

### _shuffle_

```js
import shuffle from 'func-fns/reduce/shuffle'

const res = [1, 2, 3, 4, 5].reduce(...shuffle())
console.log(res) // will be shuffled, eg, [5, 2, 1, 4, 3]
```

```js
import sum from 'func-fns/reduce/sum'

const res = [1, 2, 3].reduce(sum())
console.log(res) // 6
```
