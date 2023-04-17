import { Popover } from 'antd';

import React from 'react'

function IconPopover({title, content, Icon}) {
  return (
    <Popover 
        content={content}
        title={title}
    >
        {Icon}
    </Popover>
  )
}

export default IconPopover
