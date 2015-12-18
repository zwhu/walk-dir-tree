# walk-dir-tree

walk-dir-tree is a recursive directory listing command that produces a depth indented listing of files, which like tree(linux).

## install

``` shell
  $: npm install -g walk-dir-tree
```


## example

if we have a dir like this:

```shell
.
├── a.js
├── b.js
└── c
    └── d.js
```

enter

```shell
$: walk-dir-tree
```

![example](http://7xjbj4.com1.z0.glb.clouddn.com/example.png)
