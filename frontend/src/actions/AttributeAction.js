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

const editAttribute = (old_id, newAttrs) => {
  return {
    type: ACTIONS.EDIT_ATTRIBUTE,
    newAttrs,
    old_id
  }
}

const deleteAttribute = (id) => {
  return {
    type: ACTIONS.DELETE_ATTRIBUTE,
    id
  }
}

export {addAttribute, addAttributes, editAttribute, deleteAttribute, ACTIONS};