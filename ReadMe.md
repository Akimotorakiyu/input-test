# Input-test

https://www.w3.org/TR/input-events-2/

## without keyboardevent

### InputEvent.isComposing

| chrome | firefox | safari |
| ------ | ------- | ------ |
| ✅     | ✅      | ❎     |

### input alphabeta

| chrome     | firefox    | safari     |
| ---------- | ---------- | ---------- |
| insertText | insertText | insertText |

### input chinese 你

| chrome                              | firefox                              | safari                                     |
| ----------------------------------- | ------------------------------------ | ------------------------------------------ |
| compositionstart [empty string]     | compositionstart [empty string]      | compositionstart [empty string]            |
| compositionupdate [n]               | compositionupdate [n]                | compositionupdate [n]                      |
| input insertCompositionText true n  | input insertCompositionText true n   | input insertCompositionText undefined n    |
| compositionupdate [ni]              | compositionupdate [ni]               | compositionupdate [ni]                     |
| input insertCompositionText true ni | input insertCompositionText true ni  | input insertCompositionText undefined ni   |
| compositionupdate [你]              | compositionupdate [你]               | input deleteCompositionText undefined null |
| input insertCompositionText true 你 | compositionend [你]                  | input insertFromComposition undefined [你] |
| compositionend [你]                 | input insertCompositionText false 你 | compositionend [你]                        |

#### 综上

处理 input 输入

1. alphabeta 监听 input 事件 inputType 取 insertText
2. 记录 中文组合 状态 监听 compositionstart compositionstend
3. 处理更新事件，监听 compositionupdate
4. 处理 中文 监听 inpute 事件
   1. chrome compositionend
   2. firefox compositionend
   3. safari compositionend

## with keyboard event

### input alphabeta

| chrome                     | firefox                    | safari                     |
| -------------------------- | -------------------------- | -------------------------- |
| keydown [a] false false    | keydown [a] false false    | keydown [a] false false    |
| input insertText false [a] | input insertText false [a] | input insertText false [a] |
| keydown [a] false true     | keydown [a] false true     | keydown [a] false true     |
| input insertText false [a] | input insertText false [a] | input insertText false [a] |
| keyup [a] false false      | keyup [a] false false      | keyup [a] false false      |

### input chinese 你

| chrome                               | firefox                              | safari                                     |
| ------------------------------------ | ------------------------------------ | ------------------------------------------ |
| keydown n false false                | keydown Process false false          |                                            |
| compositionstart [empty string]      | compositionstart [empty string]      | compositionstart [empty string]            |
| compositionupdate [n]                | compositionupdate [n]                | compositionupdate [n]                      |
| input insertCompositionText true n   | input insertCompositionText true n   | input insertCompositionText undefined n    |
|                                      |                                      | keydown n true false                       |
| keyup n true false                   | keyup n true false                   | keyup n true false                         |
| keydown i true false                 | keydown Process true false           |                                            |
| compositionupdate [ni]               | compositionupdate [ni]               | compositionupdate [ni]                     |
| input insertCompositionText true ni  | input insertCompositionText true ni  | input insertCompositionText undefined ni   |
|                                      |                                      | keydown i true false                       |
| keyup i true false                   | keyup i true false                   | keyup i true false                         |
| compositionupdate [你]               | compositionupdate [你]               | input deleteCompositionText undefined null |
| input insertCompositionText false 你 | compositionend [你]                  | input insertFromComposition undefined [你] |
| compositionend [你]                  | input insertCompositionText false 你 | compositionend [你]                        |
|                                      |                                      | keydown [" "] false false                  |
| keyup [" "] false false              | keyup [" "] false false              | keyup [" "] false false                    |

#### 总结

不同浏览器实现的顺序不一致
