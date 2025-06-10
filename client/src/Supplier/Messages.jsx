import React from 'react'

function Messages({conversations,User}) {
  return (
     <div className="bg-white rounded-xl shadow-sm p-6">
          <p className="text-lg font-semibold text-gray-900 mb-4">Messages</p>
          <div className="space-y-4">
            {conversations.slice(0, 3).map((conv) => (
              <div key={conv.id} className="flex items-start space-x-3 p-3 border border-gray-100 rounded-lg">
                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 text-gray-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2">
                    <p className="font-medium text-gray-900">Talent #{conv.talentId}</p>
                    {conv.unread && <div className="w-2 h-2 bg-blue-500 rounded-full"></div>}
                  </div>
                  <p className="text-sm text-gray-600 truncate">{conv.lastMessage}</p>
                  <p className="text-xs text-gray-500">{conv.timestamp}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
  )
}

export default Messages