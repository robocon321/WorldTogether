const ACTIONS = {
  ADD_ATTRIBUTE: 'ADD_ATTRIBUTE',
  ADD_ATTRIBUTES: 'ADD_ATTRIBUTES',
  EDIT_ATTRIBUTE: 'EDIT_ATTRIBUTE',
  DELETE_ATTRIBUTE: 'DELETE_ATTRIBUTE'
}

const addAttribute = (newAttr) => {
  return {
    type: ACTIONS.ADD_ATTRIBUTE,
    newAttr
  }
}

const addAttributes = (newAttrs) => {
  return {
    type: ACTIONS.ADD_ATTRIBUTES,
    newAttrs
  }
}

const editAttribute = (newAttrs) => {
  return {
    type: ACTIONS.EDIT_ATTRIBUTE,
    newAttrs
  }
}

const deleteAttribute = (id) => {
  return {
    type: ACTIONS.DELETE_ATTRIBUTE,
    id
  }
}

export {addAttribute, addAttributes, editAttribute, deleteAttribute, ACTIONS};