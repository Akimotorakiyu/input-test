# Input-test

## without keyboardevent

### InputEvent.isComposing

| chrome | firefox | safari |
| ------ | ------- | ------ |
| ✅     | ✅      | ✅     |

### input alphabeta

| chrome     | firefox    | safari     |
| ---------- | ---------- | ---------- |
| insertText | insertText | insertText |

### input chinese 你

| chrome                               | firefox                              | safari                                     |
| ------------------------------------ | ------------------------------------ | ------------------------------------------ |
| compositionstart [empty string]      | compositionstart [empty string]      | compositionstart [empty string]            |
| compositionupdate [n]                | compositionupdate [n]                | compositionupdate [n]                      |
| input insertCompositionText true n   | input insertCompositionText true n   | input insertCompositionText undefined n    |
| compositionupdate [ni]               | compositionupdate [ni]               | compositionupdate [ni]                     |
| input insertCompositionText true ni  | input insertCompositionText true ni  | input insertCompositionText undefined ni   |
| compositionupdate [你]               | compositionupdate [你]               | input deleteCompositionText undefined null |
| input insertCompositionText false 你 | compositionend [你]                  | input insertFromComposition undefined [你] |
| compositionend [你]                  | input insertCompositionText false 你 | compositionend [你]                        |

#### 综上

处理 input 输入

1. alphabeta 监听 input 事件 inputType 取 insertText
2. 处理中文 监听 inpute 事件
   1. chrome firefox inputType 取 insertCompositionText isComposing 取 false
   2. safari inputType 取 insertFromComposition isComposing

## with keyboard event
