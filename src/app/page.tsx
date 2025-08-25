'use client';

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import {
    SearchOutlined,
    PlusOutlined,
    UploadOutlined,
    SettingOutlined,
    PlayCircleOutlined,
    SafetyOutlined,
    KeyOutlined,
    DeleteOutlined,
    UserOutlined,
    BellOutlined,
    CloudSyncOutlined,
    FolderOutlined,
    GlobalOutlined,
    BranchesOutlined,
    ClockCircleOutlined,
    SaveOutlined,
    ShareAltOutlined,
    CopyOutlined,
    DownloadOutlined,
    EyeOutlined,
    FileTextOutlined,
    CodeOutlined,
    CheckCircleOutlined,
    BarsOutlined,
    IeOutlined,
    CiOutlined,
    MinusOutlined,
    BorderOutlined,
    CloseOutlined,
    CrownOutlined,
    MoreOutlined,
    RocketOutlined
} from '@ant-design/icons';

export default function PostmanClone() {
    const [activeTab, setActiveTab] = useState('params');
    const [activeResponseTab, setActiveResponseTab] = useState('body');
    const [activeResponseSubTab, setActiveResponseSubTab] = useState('pretty');
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
    const [rightSidebarCollapsed, setRightSidebarCollapsed] = useState(true);
    const [consoleCollapsed, setConsoleCollapsed] = useState(true);
    const [url, setUrl] = useState('');

    // Dummy data
    const collections = [
        {
            id: 'col_1',
            name: 'NSSF API Collection',
            description: 'Main API endpoints for NSSF services',
            folders: [
                {
                    id: 'folder_1',
                    name: 'Authentication',
                    requests: [
                        { id: 'req_1', name: 'Login User', method: 'POST', url: 'https://api.nssf.go.ug/auth/login', status: 'saved' },
                        { id: 'req_2', name: 'Refresh Token', method: 'POST', url: 'https://api.nssf.go.ug/auth/refresh', status: 'modified' }
                    ]
                },
                {
                    id: 'folder_2',
                    name: 'User Management',
                    requests: [
                        { id: 'req_3', name: 'Get Users', method: 'GET', url: 'https://api.nssf.go.ug/users', status: 'saved' },
                        { id: 'req_4', name: 'Create User', method: 'POST', url: 'https://api.nssf.go.ug/users', status: 'modified' },
                        { id: 'req_5', name: 'Update Profile', method: 'PUT', url: 'https://api.nssf.go.ug/users/profile', status: 'saved' }
                    ]
                }
            ]
        },
        {
            id: 'col_2',
            name: 'Payment Gateway',
            description: 'Payment processing endpoints',
            folders: [
                {
                    id: 'folder_3',
                    name: 'Transactions',
                    requests: [
                        { id: 'req_6', name: 'Process Payment', method: 'POST', url: 'https://api.nssf.go.ug/payments/process', status: 'saved' },
                        { id: 'req_7', name: 'Get Transaction', method: 'GET', url: 'https://api.nssf.go.ug/payments/transactions/{id}', status: 'saved' }
                    ]
                }
            ]
        }
    ];

    const requestTabs = [
        { id: 'tab_1', method: 'GET', name: 'Get Users', active: true, unsaved: false },
        { id: 'tab_2', method: 'POST', name: 'Create User', active: false, unsaved: true },
        { id: 'tab_3', method: 'PUT', name: 'Update Profile', active: false, unsaved: false }
    ];

    const getMethodColor = (method: string) => {
        const colors: { [key: string]: string } = {
            GET: '#4CAF50',
            POST: '#FF9800',
            PUT: '#2196F3',
            DELETE: '#F44336',
            PATCH: '#9C27B0'
        };
        return colors[method] || '#607D8B';
    };

    const getStatusColor = (status: string) => {
        const colors: { [key: string]: string } = {
            saved: '#4CAF50',
            modified: '#FF9800',
            error: '#F44336'
        };
        return colors[status] || '#B0B0B0';
    };

    return (
        <div className="h-screen bg-[#1E1E1E] text-white overflow-hidden">
            {/* Navbar */}
            <Navbar />

            <div className="flex h-[calc(100vh-50px)]">
                {/* Left Sidebar */}
                <div className={`bg-[#2D2D2D] border-r border-[#404040] transition-all duration-300 ${sidebarCollapsed ? 'w-16' : 'w-70'}`}>
                    {!sidebarCollapsed && (
                        <div className="p-3 border-t border-[#404040]">
                            <div className="grid grid-cols-4 gap-1">
                                {[
                                    { icon: PlusOutlined, tooltip: 'New Request' },
                                    { icon: FolderOutlined, tooltip: 'New Collection' },
                                    { icon: UploadOutlined, tooltip: 'Import' },
                                    { icon: SettingOutlined, tooltip: 'Settings' }
                                ].map((item, index) => (
                                    <div
                                        key={index}
                                        className="w-5 h-5 flex items-center justify-center cursor-pointer hover:bg-white/10 rounded transition-colors"
                                        title={item.tooltip}
                                    >
                                        <item.icon className="text-[#00D4AA] text-sm" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Collections Tree */}
                    {!sidebarCollapsed && (
                        <div className="flex-1 p-3">
                            <div className="relative mb-3">
                                <SearchOutlined className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
                                <input
                                    type="text"
                                    placeholder="Filter collections..."
                                    className="w-full h-8 bg-white/5 border border-white/10 rounded pl-9 pr-3 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-[#00D4AA]"
                                />
                            </div>

                            <div className="space-y-1">
                                {collections.map((collection) => (
                                    <div key={collection.id}>
                                        <div className="h-8 flex items-center px-3 hover:bg-[#00D4AA]/10 rounded cursor-pointer group">
                                            <FolderOutlined className="text-[#00D4AA] text-sm mr-2" />
                                            <span className="text-sm font-semibold flex-1">{collection.name}</span>
                                            <MoreOutlined className="text-xs opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </div>
                                        {collection.folders.map((folder) => (
                                            <div key={folder.id}>
                                                <div className="h-8 flex items-center px-3 pl-8 hover:bg-[#FFB800]/10 rounded cursor-pointer group">
                                                    <FolderOutlined className="text-[#FFB800] text-sm mr-2" />
                                                    <span className="text-sm flex-1">{folder.name}</span>
                                                </div>
                                                {folder.requests.map((request) => (
                                                    <div key={request.id} className="h-8 flex items-center px-3 pl-12 hover:bg-white/5 rounded cursor-pointer group">
                                                        <div
                                                            className="w-10 h-5 rounded text-xs font-semibold flex items-center justify-center mr-2"
                                                            style={{ backgroundColor: getMethodColor(request.method) }}
                                                        >
                                                            {request.method}
                                                        </div>
                                                        <span className="text-sm text-gray-300 flex-1">{request.name}</span>
                                                        <div
                                                            className="w-2 h-2 rounded-full"
                                                            style={{ backgroundColor: getStatusColor(request.status) }}
                                                        ></div>
                                                    </div>
                                                ))}
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Main Content */}
                <div className="flex-1 flex flex-col">
                    {/* Request Builder */}
                    <div className="flex-1 flex flex-col">
                        {/* Request Header */}
                        <div className="bg-gradient-to-r from-[#2D2D2D] to-[#252525] border-b border-[#404040] p-5">
                            <input
                                type="text"
                                defaultValue="Get Users"
                                className="text-lg font-semibold bg-transparent border-none outline-none text-white w-full"
                                aria-label="Request name"
                                placeholder="Enter request name"
                            />
                            <textarea
                                placeholder="Add a description..."
                                className="mt-1 text-sm text-gray-400 bg-transparent border-none outline-none w-full resize-none"
                                rows={1}
                            />
                        </div>

                        {/* URL Section */}
                        <div className="bg-[#1E1E1E] border-b border-[#404040] p-3">
                            <div className="flex items-center space-x-3">
                                <div className="flex-1 flex items-center space-x-0">
                                    <select className="w-30 h-12 bg-[#2D2D2D] border outline-none focus:outline-none focus:border-[#00D4AA] border-[#404040] rounded-none px-3 text-white" aria-label="HTTP method">
                                        <option value="GET">GET</option>
                                        <option value="POST">POST</option>
                                        <option value="PUT">PUT</option>
                                        <option value="DELETE">DELETE</option>
                                        <option value="PATCH">PATCH</option>
                                    </select>
                                    <input
                                        type="text"
                                        onChange={(e) => setUrl(e.target.value)}
                                        value={url}
                                        className="flex-1 h-12 bg-[#2D2D2D] border border-[#404040] rounded-none px-4 text-white placeholder-gray-400 focus:outline-none focus:border-[#00D4AA]"
                                        placeholder="Enter request URL or paste cURL command"
                                        aria-label="Request URL"
                                    />
                                </div>
                                <select className="w-45 h-12 bg-[#2D2D2D] border focus:outline-none focus:border-[#00D4AA] border-[#404040] rounded-none px-3 text-white" aria-label="Environment">
                                    <option value="">No Environment</option>
                                    <option value="development">Development</option>
                                    <option value="staging">Staging</option>
                                    <option value="production">Production</option>
                                </select>
                                <button className="w-24 h-12 bg-gradient-to-r focus:outline-none focus:border-[#00D4AA] from-[#00D4AA] to-[#00B894] text-white font-semibold rounded-none hover:scale-105 transition-transform">
                                    Send
                                </button>
                                <div className="flex space-x-3">
                                    <button className="w-12 h-12 bg-white/5 focus:outline-none focus:border-[#00D4AA] border border-white/10 rounded-none flex items-center justify-center hover:bg-white/10 transition-colors" title="Save Request" aria-label="Save current request">
                                        <SaveOutlined className="text-sm" />
                                    </button>
                                    <button className="w-12 h-12 bg-white/5 focus:outline-none focus:border-[#00D4AA] border border-white/10 rounded-none flex items-center justify-center hover:bg-white/10 transition-colors" title="Share Request" aria-label="Share current request">
                                        <ShareAltOutlined className="text-sm" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Request Tabs */}
                        <div className="flex-1 flex flex-col">
                            <div className="h-12 bg-[#252525] border-b border-[#404040] flex items-center px-5">
                                {[
                                    { id: 'params', label: 'Params', icon: CiOutlined, active: true, badge: 3 },
                                    { id: 'authorization', label: 'Authorization', icon: IeOutlined },
                                    { id: 'headers', label: 'Headers', icon: BarsOutlined, badge: 5 },
                                    { id: 'body', label: 'Body', icon: FileTextOutlined },
                                    { id: 'pre_request', label: 'Pre-request Script', icon: CodeOutlined },
                                    { id: 'tests', label: 'Tests', icon: CheckCircleOutlined },
                                    { id: 'settings', label: 'Settings', icon: SettingOutlined }
                                ].map((tab) => (
                                    <div
                                        key={tab.id}
                                        className={`h-12 flex items-center px-4 cursor-pointer transition-colors ${tab.active ? 'border-b-2 border-[#00D4AA]' : 'hover:bg-white/5'
                                            }`}
                                        onClick={() => setActiveTab(tab.id)}
                                    >
                                        <tab.icon className="text-sm mr-2" />
                                        <span className="text-sm">{tab.label}</span>
                                        {tab.badge && (
                                            <div className="ml-2 bg-[#404040] text-xs px-2 py-1 rounded-full">{tab.badge}</div>
                                        )}
                                    </div>
                                ))}
                            </div>

                            <div className="flex-1 p-5 bg-[#1E1E1E]">
                                {activeTab === 'params' && (
                                    <div>
                                        <h3 className="text-sm font-semibold mb-3">Query Parameters</h3>
                                        <div className="space-y-2">
                                            {[
                                                { key: 'page', value: '1', description: 'Page number', enabled: true },
                                                { key: 'limit', value: '10', description: 'Items per page', enabled: true },
                                                { key: 'search', value: '', description: 'Search term', enabled: false }
                                            ].map((param, index) => (
                                                <div key={index} className="flex items-center space-x-2">
                                                    <input
                                                        type="text"
                                                        value={param.key}
                                                        className="flex-1 h-8 bg-[#2D2D2D] border border-[#404040] rounded px-3 text-sm text-white"
                                                        placeholder="Parameter name"
                                                    />
                                                    <input
                                                        type="text"
                                                        value={param.value}
                                                        className="flex-1 h-8 bg-[#2D2D2D] border border-[#404040] rounded px-3 text-sm text-white"
                                                        placeholder="Parameter value"
                                                    />
                                                    <input
                                                        type="text"
                                                        value={param.description}
                                                        className="flex-1 h-8 bg-[#2D2D2D] border border-[#404040] rounded px-3 text-sm text-white"
                                                        placeholder="Description"
                                                    />
                                                    <input
                                                        type="checkbox"
                                                        checked={param.enabled}
                                                        className="w-4 h-4"
                                                        title="Enable parameter"
                                                        aria-label="Enable parameter"
                                                    />
                                                    <button className="w-8 h-8 bg-red-500/20 text-red-400 rounded flex items-center justify-center hover:bg-red-500/30 transition-colors" title="Remove parameter" aria-label="Remove parameter">
                                                        <CloseOutlined className="text-xs" />
                                                    </button>
                                                </div>
                                            ))}
                                            <button className="text-[#00D4AA] text-sm hover:text-[#00B894] transition-colors">
                                                + Add Parameter
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Response Viewer */}
                    <div className="h-80 border-t border-[#404040] flex flex-col">
                        {/* Response Header */}
                        <div className="h-15 bg-gradient-to-r from-[#252525] to-[#1E1E1E] border-b border-[#404040] p-5 flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                                <div className="bg-[#4CAF50] text-white px-3 py-1 rounded text-base font-bold">200</div>
                                <div className="flex items-center text-[#00D4AA] text-sm">
                                    <ClockCircleOutlined className="mr-1" />
                                    245ms
                                </div>
                                <div className="flex items-center text-[#2196F3] text-sm">
                                    <FileTextOutlined className="mr-1" />
                                    2.1 KB
                                </div>
                                <div className="text-gray-400 text-sm">2 minutes ago</div>
                            </div>
                            <div className="flex items-center space-x-2">
                                <button className="w-8 h-8 bg-white/5 border border-white/10 rounded flex items-center justify-center hover:bg-white/10 transition-colors" title="Copy Response" aria-label="Copy response to clipboard">
                                    <CopyOutlined className="text-sm" />
                                </button>
                                <button className="w-8 h-8 bg-white/5 border border-white/10 rounded flex items-center justify-center hover:bg-white/10 transition-colors" title="Download Response" aria-label="Download response as file">
                                    <DownloadOutlined className="text-sm" />
                                </button>
                                <button className="w-8 h-8 bg-white/5 border border-white/10 rounded flex items-center justify-center hover:bg-white/10 transition-colors" title="Share Response" aria-label="Share response">
                                    <ShareAltOutlined className="text-sm" />
                                </button>
                            </div>
                        </div>

                        {/* Response Tabs */}
                        <div className="h-12 bg-[#252525] border-b border-[#404040] flex items-center px-5">
                            {[
                                { id: 'body', label: 'Body', icon: FileTextOutlined, active: true },
                                { id: 'headers', label: 'Headers', icon: ClockCircleOutlined, badge: 8 },
                                { id: 'cookies', label: 'Cookies', icon: KeyOutlined, badge: 2 },
                                { id: 'test_results', label: 'Test Results', icon: CheckCircleOutlined, badge: '5/5' },
                                { id: 'timeline', label: 'Timeline', icon: ClockCircleOutlined },
                                { id: 'console', label: 'Console', icon: CodeOutlined }
                            ].map((tab) => (
                                <div
                                    key={tab.id}
                                    className={`h-12 flex items-center px-4 cursor-pointer transition-colors ${tab.active ? 'border-b-2 border-[#00D4AA]' : 'hover:bg-white/5'
                                        }`}
                                    onClick={() => setActiveResponseTab(tab.id)}
                                >
                                    <tab.icon className="text-sm mr-2" />
                                    <span className="text-sm">{tab.label}</span>
                                    {tab.badge && (
                                        <div className="ml-2 bg-[#404040] text-xs px-2 py-1 rounded-full">{tab.badge}</div>
                                    )}
                                </div>
                            ))}
                        </div>

                        <div className="flex-1 bg-[#1E1E1E]">
                            {activeResponseTab === 'body' && (
                                <div className="h-full flex flex-col">
                                    <div className="h-12 bg-[#252525] border-b border-[#404040] flex items-center px-5">
                                        {[
                                            { id: 'pretty', label: 'Pretty', active: true },
                                            { id: 'raw', label: 'Raw' },
                                            { id: 'preview', label: 'Preview' }
                                        ].map((subTab) => (
                                            <div
                                                key={subTab.id}
                                                className={`h-12 flex items-center px-4 cursor-pointer transition-colors ${subTab.active ? 'border-b-2 border-[#00D4AA]' : 'hover:bg-white/5'
                                                    }`}
                                                onClick={() => setActiveResponseSubTab(subTab.id)}
                                            >
                                                <span className="text-sm">{subTab.label}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="flex-1 p-5 overflow-auto">
                                        {activeResponseSubTab === 'pretty' && (
                                            <pre className="text-sm text-gray-300 whitespace-pre-wrap">
                                                {`{
  "success": true,
  "data": {
    "users": [
      {
        "id": 1,
        "name": "John Doe",
        "email": "john.doe@nssf.go.ug",
        "role": "admin",
        "created_at": "2024-01-10T08:00:00Z"
      },
      {
        "id": 2,
        "name": "Jane Smith",
        "email": "jane.smith@nssf.go.ug",
        "role": "user",
        "created_at": "2024-01-12T09:15:00Z"
      }
    ],
    "pagination": {
      "page": 1,
      "limit": 10,
      "total": 25,
      "pages": 3
    }
  },
  "message": "Users retrieved successfully"
}`}
                                            </pre>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Right Sidebar */}
                {!rightSidebarCollapsed && (
                    <div className="w-80 bg-[#2D2D2D] border-l border-[#404040] flex flex-col">
                        <div className="h-12 bg-[#252525] border-b border-[#404040] flex items-center justify-between px-4">
                            <span className="text-base font-semibold">Documentation</span>
                            <button
                                onClick={() => setRightSidebarCollapsed(true)}
                                className="w-6 h-6 flex items-center justify-center hover:bg-white/10 rounded transition-colors"
                            >
                                <CloseOutlined className="text-sm" />
                            </button>
                        </div>
                        <div className="flex-1 p-4 overflow-auto">
                            <div className="prose prose-invert max-w-none">
                                <h3 className="text-lg font-semibold mb-3">Get Users API</h3>
                                <p className="text-sm text-gray-300 mb-4">
                                    Retrieve a list of users with pagination support. This endpoint supports filtering and sorting.
                                </p>
                                <div className="bg-[#1E1E1E] p-3 rounded mb-4">
                                    <h4 className="text-sm font-semibold mb-2">Parameters</h4>
                                    <ul className="text-sm text-gray-300 space-y-1">
                                        <li><strong>page</strong> (optional): Page number (default: 1)</li>
                                        <li><strong>limit</strong> (optional): Items per page (default: 10, max: 100)</li>
                                        <li><strong>search</strong> (optional): Search term for filtering users</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Console Panel */}
            {!consoleCollapsed && (
                <div className="h-50 bg-[#1E1E1E] border-t border-[#404040] flex flex-col">
                    <div className="h-10 bg-[#252525] border-b border-[#404040] flex items-center justify-between px-4">
                        <span className="text-sm font-semibold">Console</span>
                        <div className="flex items-center space-x-2">
                            <button
                                className="w-6 h-6 flex items-center justify-center hover:bg-white/10 rounded transition-colors"
                                title="Clear console"
                                aria-label="Clear console"
                            >
                                <DeleteOutlined className="text-xs" />
                            </button>
                            <button
                                onClick={() => setConsoleCollapsed(true)}
                                className="w-6 h-6 flex items-center justify-center hover:bg-white/10 rounded transition-colors"
                            >
                                <CloseOutlined className="text-xs" />
                            </button>
                        </div>
                    </div>
                    <div className="flex-1 p-4 overflow-auto">
                        <div className="text-sm space-y-1">
                            <div className="text-[#4CAF50]">[INFO] Request sent to https://api.nssf.go.ug/users</div>
                            <div className="text-[#2196F3]">[RESPONSE] Status: 200 OK (245ms)</div>
                            <div className="text-[#FF9800]">[WARNING] Rate limit: 99 requests remaining</div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}