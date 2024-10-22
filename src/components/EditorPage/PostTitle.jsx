import React from 'react'

function PostTitle({ title, setTitle })  {
  return (
    <input
    type="text"
    value={title}
    onChange={(e) => setTitle(e.target.value)}
    placeholder="제목을 입력하세요"
    className="pl-2 m-4 text-2xl font-bold text-gray-900 outline-none"
  />
  )
}

export default PostTitle