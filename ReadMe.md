# Input-test

## InputEvent.isComposing

| chrome | firefox | safari |
| ------ | ------- | ------ |
| ✅     | ✅      | ✅     |

## input alphabeta

| chrome     | firefox    | safari     |
| ---------- | ---------- | ---------- |
| insertText | insertText | insertText |

## input chinese 你

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
