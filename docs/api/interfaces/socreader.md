---
id: "socreader"
title: "Interface: SOCReader"
sidebar_label: "SOCReader"
custom_edit_url: null
hide_title: true
---

# Interface: SOCReader

Interface for downloading single owner chunks

## Hierarchy

* **SOCReader**

  ↳ [*SOCWriter*](socwriter.md)

## Properties

### download

• **download**: (`identifier`: Identifier) =\> *Promise*<SingleOwnerChunk\>

Downloads a single owner chunk

**`param`** The identifier of the chunk

#### Type declaration:

▸ (`identifier`: Identifier): *Promise*<SingleOwnerChunk\>

#### Parameters:

Name | Type |
:------ | :------ |
`identifier` | Identifier |

**Returns:** *Promise*<SingleOwnerChunk\>

Defined in: [bee-js/src/types/index.ts:220](https://github.com/ethersphere/bee-js/blob/430becc/src/types/index.ts#L220)

Defined in: [bee-js/src/types/index.ts:220](https://github.com/ethersphere/bee-js/blob/430becc/src/types/index.ts#L220)