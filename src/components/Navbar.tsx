'use client';

import React, { useState, useRef, useEffect } from 'react';
import {
    SearchOutlined,
    PlusOutlined,
    UploadOutlined,
    SettingOutlined,
    PlayCircleOutlined,
    SafetyOutlined,
    DeleteOutlined,
    UserOutlined,
    FolderOutlined,
    GlobalOutlined,
    DownloadOutlined,
    FileTextOutlined,
    BarsOutlined,
    CloseOutlined,
    CrownOutlined,
    TeamOutlined,
    BookOutlined,
    WifiOutlined,
    MoonOutlined,
    CodeOutlined,
    AlertOutlined,
    QuestionCircleOutlined,
    InfoCircleOutlined,
    LogoutOutlined,
    CreditCardOutlined,
    HomeOutlined,
    KeyOutlined
} from '@ant-design/icons';

interface Tab {
    id: string;
    method: string;
    name: string;
    active: boolean;
    unsaved: boolean;
}

interface Workspace {
    id: string;
    name: string;
    type: 'personal' | 'team';
    active: boolean;
    members?: number;
}

interface SearchResult {
    id: string;
    type: 'collection' | 'request' | 'environment' | 'history' | 'documentation';
    name: string;
    description?: string;
    icon: React.ComponentType<{ className?: string }>;
}

export default function Navbar() {
    const [currentWorkspace, setCurrentWorkspace] = useState('team_1');
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
    const [showSearchDropdown, setShowSearchDropdown] = useState(false);
    const [activeTab, setActiveTab] = useState('tab_1');
    const [showNewDropdown, setShowNewDropdown] = useState(false);
    const [showImportDropdown, setShowImportDropdown] = useState(false);
    const [showSettingsDropdown, setShowSettingsDropdown] = useState(false);
    const [showProfileDropdown, setShowProfileDropdown] = useState(false);
    const [showWorkspaceDropdown, setShowWorkspaceDropdown] = useState(false);

    const searchRef = useRef<HTMLDivElement>(null);
    const tabsRef = useRef<HTMLDivElement>(null);

    // Dummy data
    const workspaces: Workspace[] = [
        { id: 'personal_1', name: 'My Workspace', type: 'personal', active: false },
        { id: 'team_1', name: 'Team Workspace', type: 'team', active: true, members: 5 },
        { id: 'team_2', name: 'NSSF Development', type: 'team', active: false, members: 12 }
    ];

    const tabs: Tab[] = [
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
            PATCH: '#9C27B0',
            HEAD: '#607D8B',
            OPTIONS: '#795548'
        };
        return colors[method] || '#607D8B';
    };

    const handleSearch = (query: string) => {
        setSearchQuery(query);
        if (query.trim()) {
            // Simulate search results
            const results: SearchResult[] = [
                { id: '1', type: 'collection', name: 'NSSF API Collection', icon: FolderOutlined },
                { id: '2', type: 'request', name: 'Get Users', icon: FileTextOutlined },
                { id: '3', type: 'environment', name: 'Development', icon: GlobalOutlined }
            ];
            setSearchResults(results);
            setShowSearchDropdown(true);
        } else {
            setSearchResults([]);
            setShowSearchDropdown(false);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Escape') {
            setShowSearchDropdown(false);
            setShowNewDropdown(false);
            setShowImportDropdown(false);
            setShowSettingsDropdown(false);
            setShowProfileDropdown(false);
            setShowWorkspaceDropdown(false);
        }
    };

    useEffect(() => {
        const handleKeyDownDOM = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setShowSearchDropdown(false);
                setShowNewDropdown(false);
                setShowImportDropdown(false);
                setShowSettingsDropdown(false);
                setShowProfileDropdown(false);
                setShowWorkspaceDropdown(false);
            }
        };
        document.addEventListener('keydown', handleKeyDownDOM);
        return () => document.removeEventListener('keydown', handleKeyDownDOM);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
                setShowSearchDropdown(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="h-12 bg-[#2D2D2D] border-b border-[#404040] flex items-center justify-between px-4 sticky top-0 z-50">
            {/* Left Section */}
            <div className="flex items-center space-x-3 min-w-[400px]">
                {/* Workspace Switcher */}
                <div className="relative">
                    <button
                        onClick={() => setShowWorkspaceDropdown(!showWorkspaceDropdown)}
                        className="w-45 h-8 bg-white/5 border border-white/10 rounded px-3 py-1 flex items-center justify-between hover:bg-white/10 transition-colors"
                        aria-label="Switch workspace"
                    >
                        <div className="flex items-center">
                            <TeamOutlined className="text-sm mr-2" />
                            <span className="text-sm text-white">Team Workspace</span>
                        </div>
                        <CrownOutlined className="text-xs text-gray-400" />
                    </button>

                    {showWorkspaceDropdown && (
                        <div className="absolute top-full left-0 mt-1 w-70 bg-[#2D2D2D] border border-[#404040] rounded-lg shadow-lg z-50">
                            <div className="p-3">
                                <div className="mb-3">
                                    <h4 className="text-xs font-semibold text-gray-400 mb-2">Personal Workspaces</h4>
                                    <div className="space-y-1">
                                        {workspaces.filter(w => w.type === 'personal').map(workspace => (
                                            <div
                                                key={workspace.id}
                                                className="flex items-center px-2 py-1 rounded hover:bg-white/5 cursor-pointer"
                                            >
                                                <UserOutlined className="text-sm mr-2" />
                                                <span className="text-sm text-white">{workspace.name}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <h4 className="text-xs font-semibold text-gray-400 mb-2">Team Workspaces</h4>
                                    <div className="space-y-1">
                                        {workspaces.filter(w => w.type === 'team').map(workspace => (
                                            <div
                                                key={workspace.id}
                                                className={`flex items-center justify-between px-2 py-1 rounded cursor-pointer ${workspace.active ? 'bg-[#00D4AA]/10' : 'hover:bg-white/5'
                                                    }`}
                                            >
                                                <div className="flex items-center">
                                                    <TeamOutlined className="text-sm mr-2" />
                                                    <span className="text-sm text-white">{workspace.name}</span>
                                                </div>
                                                {workspace.members && (
                                                    <span className="text-xs text-gray-400">{workspace.members} members</span>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="border-t border-[#404040] pt-2">
                                    <button className="w-full flex items-center px-2 py-1 rounded hover:bg-white/5 text-sm text-white">
                                        <PlusOutlined className="text-sm mr-2" />
                                        Create Workspace
                                    </button>
                                    <button className="w-full flex items-center px-2 py-1 rounded hover:bg-white/5 text-sm text-white">
                                        <SettingOutlined className="text-sm mr-2" />
                                        Manage Workspaces
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Global Search */}
                <div className="relative" ref={searchRef}>
                    <div className="relative">
                        <SearchOutlined className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => handleSearch(e.target.value)}
                            placeholder="Search APIs/collections"
                            className="w-64 h-8 bg-white/5 border border-white/10 rounded pl-9 pr-8 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-[#00D4AA] focus:shadow-[0_0_0_2px_rgba(0,212,170,0.2)]"
                            aria-label="Search APIs and collections"
                        />
                        {searchQuery && (
                            <button
                                onClick={() => {
                                    setSearchQuery('');
                                    setShowSearchDropdown(false);
                                }}
                                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                                aria-label="Clear search"
                            >
                                <CloseOutlined className="text-xs" />
                            </button>
                        )}
                    </div>

                    {showSearchDropdown && searchResults.length > 0 && (
                        <div className="absolute top-full left-0 mt-1 w-100 bg-[#2D2D2D] border border-[#404040] rounded-lg shadow-lg z-50 max-h-75 overflow-y-auto">
                            {searchResults.map((result) => (
                                <div
                                    key={result.id}
                                    className="flex items-center px-3 py-2 hover:bg-[#00D4AA]/10 cursor-pointer"
                                >
                                    <result.icon className="text-sm mr-3 text-gray-400" />
                                    <div>
                                        <div className="text-sm text-white">{result.name}</div>
                                        {result.description && (
                                            <div className="text-xs text-gray-400">{result.description}</div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center space-x-2">
                    <div className="relative">
                        <button
                            onClick={() => setShowNewDropdown(!showNewDropdown)}
                            className="w-20 h-8 bg-gradient-to-r from-[#00D4AA] to-[#00B894] text-black font-semibold rounded text-sm hover:from-[#00B894] hover:to-[#009A7B] transition-all flex items-center justify-center"
                            aria-label="Create new item"
                        >
                            <PlusOutlined className="text-sm mr-1" />
                            New
                        </button>

                        {showNewDropdown && (
                            <div className="absolute top-full left-0 mt-1 w-50 bg-[#2D2D2D] border border-[#404040] rounded-lg shadow-lg z-50">
                                <div className="p-2">
                                    <button className="w-full flex items-center px-3 py-2 rounded hover:bg-white/5 text-sm text-white">
                                        <GlobalOutlined className="text-sm mr-3" />
                                        HTTP Request
                                        <span className="ml-auto text-xs text-gray-400">Ctrl+N</span>
                                    </button>
                                    <button className="w-full flex items-center px-3 py-2 rounded hover:bg-white/5 text-sm text-white">
                                        <CodeOutlined className="text-sm mr-3" />
                                        GraphQL Request
                                    </button>
                                    <button className="w-full flex items-center px-3 py-2 rounded hover:bg-white/5 text-sm text-white">
                                        <WifiOutlined className="text-sm mr-3" />
                                        WebSocket Request
                                    </button>
                                    <div className="border-t border-[#404040] my-2"></div>
                                    <button className="w-full flex items-center px-3 py-2 rounded hover:bg-white/5 text-sm text-white">
                                        <FolderOutlined className="text-sm mr-3" />
                                        Collection
                                        <span className="ml-auto text-xs text-gray-400">Ctrl+Shift+N</span>
                                    </button>
                                    <button className="w-full flex items-center px-3 py-2 rounded hover:bg-white/5 text-sm text-white">
                                        <GlobalOutlined className="text-sm mr-3" />
                                        Environment
                                    </button>
                                    <div className="border-t border-[#404040] my-2"></div>
                                    <button className="w-full flex items-center px-3 py-2 rounded hover:bg-white/5 text-sm text-white">
                                        <BookOutlined className="text-sm mr-3" />
                                        Documentation
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="relative">
                        <button
                            onClick={() => setShowImportDropdown(!showImportDropdown)}
                            className="w-20 h-8 bg-white/5 border border-white/10 text-white rounded text-sm hover:bg-white/10 transition-colors flex items-center justify-center"
                            aria-label="Import data"
                        >
                            <UploadOutlined className="text-sm mr-1" />
                            Import
                        </button>

                        {showImportDropdown && (
                            <div className="absolute top-full left-0 mt-1 w-55 bg-[#2D2D2D] border border-[#404040] rounded-lg shadow-lg z-50">
                                <div className="p-2">
                                    <button className="w-full flex items-center px-3 py-2 rounded hover:bg-white/5 text-sm text-white">
                                        <FileTextOutlined className="text-sm mr-3" />
                                        <div className="flex-1 text-left">
                                            <div>Postman Collection</div>
                                            <div className="text-xs text-gray-400">Import .json collection</div>
                                        </div>
                                    </button>
                                    <button className="w-full flex items-center px-3 py-2 rounded hover:bg-white/5 text-sm text-white">
                                        <CodeOutlined className="text-sm mr-3" />
                                        <div className="flex-1 text-left">
                                            <div>OpenAPI Specification</div>
                                            <div className="text-xs text-gray-400">Import OpenAPI/Swagger</div>
                                        </div>
                                    </button>
                                    <button className="w-full flex items-center px-3 py-2 rounded hover:bg-white/5 text-sm text-white">
                                        <CodeOutlined className="text-sm mr-3" />
                                        <div className="flex-1 text-left">
                                            <div>cURL Commands</div>
                                            <div className="text-xs text-gray-400">Import from cURL</div>
                                        </div>
                                    </button>
                                    <button className="w-full flex items-center px-3 py-2 rounded hover:bg-white/5 text-sm text-white">
                                        <MoonOutlined className="text-sm mr-3" />
                                        <div className="flex-1 text-left">
                                            <div>Insomnia Collection</div>
                                            <div className="text-xs text-gray-400">Import from Insomnia</div>
                                        </div>
                                    </button>
                                    <div className="border-t border-[#404040] my-2"></div>
                                    <button className="w-full flex items-center px-3 py-2 rounded hover:bg-white/5 text-sm text-white">
                                        <SettingOutlined className="text-sm mr-3" />
                                        Environment Variables
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Center Section - Request Tabs */}
            <div className="flex-1 flex items-center justify-center min-w-[300px] max-w-[800px] mx-4">
                <div className="flex items-center space-x-1 overflow-x-auto scrollbar-hide" ref={tabsRef}>
                    {tabs.map((tab) => (
                        <div
                            key={tab.id}
                            className={`flex items-center px-2 py-1 rounded cursor-pointer transition-colors min-w-[120px] max-w-[200px] ${tab.active
                                ? 'bg-[#00D4AA]/10 border border-[#00D4AA]/30'
                                : 'bg-white/5 hover:bg-white/10'
                                }`}
                            onClick={() => setActiveTab(tab.id)}
                        >
                            <div
                                className={`w-8 h-5 rounded text-xs font-bold flex items-center justify-center mr-2 method-${tab.method.toLowerCase()}`}
                            >
                                {tab.method}
                            </div>
                            <span className="text-sm text-white flex-1 truncate">{tab.name}</span>
                            {tab.unsaved && (
                                <div className="w-1.5 h-1.5 bg-[#FF9800] rounded-full ml-2"></div>
                            )}
                            <button
                                className="ml-2 text-gray-400 hover:text-white hover:bg-red-500/20 rounded p-0.5 opacity-0 group-hover:opacity-100 transition-all"
                                aria-label="Close tab"
                            >
                                <CloseOutlined className="text-xs" />
                            </button>
                        </div>
                    ))}
                    <button
                        className="w-8 h-8 bg-white/5 border border-white/10 rounded flex items-center justify-center hover:bg-white/10 transition-colors"
                        title="New Tab (Ctrl+T)"
                        aria-label="Add new tab"
                    >
                        <PlusOutlined className="text-sm text-gray-400" />
                    </button>
                </div>
            </div>

            {/* Right Section */}
            <div className="flex items-center space-x-1 min-w-[200px]">
                {/* Utility Buttons */}
                <div className="flex items-center space-x-1 mr-3">
                    <button
                        className="w-8 h-8 bg-transparent hover:bg-white/10 rounded flex items-center justify-center transition-colors"
                        title="Collection Runner"
                        aria-label="Open collection runner"
                    >
                        <PlayCircleOutlined className="text-sm text-gray-400 hover:text-white" />
                    </button>
                    <button
                        className="w-8 h-8 bg-transparent hover:bg-white/10 rounded flex items-center justify-center transition-colors"
                        title="Proxy Settings"
                        aria-label="Open proxy settings"
                    >
                        <SafetyOutlined className="text-sm text-gray-400 hover:text-white" />
                    </button>
                    <button
                        className="w-8 h-8 bg-transparent hover:bg-white/10 rounded flex items-center justify-center transition-colors"
                        title="Manage Cookies"
                        aria-label="Open cookie manager"
                    >
                        <KeyOutlined className="text-sm text-gray-400 hover:text-white" />
                    </button>
                    <button
                        className="w-8 h-8 bg-transparent hover:bg-white/10 rounded flex items-center justify-center transition-colors"
                        title="Secret Vault"
                        aria-label="Open secret vault"
                    >
                        <KeyOutlined className="text-sm text-gray-400 hover:text-white" />
                    </button>
                    <button
                        className="w-8 h-8 bg-transparent hover:bg-white/10 rounded flex items-center justify-center transition-colors"
                        title="Trash"
                        aria-label="Open trash"
                    >
                        <DeleteOutlined className="text-sm text-gray-400 hover:text-white" />
                    </button>
                </div>

                {/* Settings Menu */}
                <div className="relative">
                    <button
                        onClick={() => setShowSettingsDropdown(!showSettingsDropdown)}
                        className="w-8 h-8 bg-transparent hover:bg-white/10 rounded flex items-center justify-center transition-colors"
                        title="Settings"
                        aria-label="Open settings menu"
                    >
                        <SettingOutlined className="text-sm text-gray-400 hover:text-white" />
                    </button>

                    {showSettingsDropdown && (
                        <div className="absolute top-full right-0 mt-1 w-55 bg-[#2D2D2D] border border-[#404040] rounded-lg shadow-lg z-50">
                            <div className="p-2">
                                <button className="w-full flex items-center px-3 py-2 rounded hover:bg-white/5 text-sm text-white">
                                    <SettingOutlined className="text-sm mr-3" />
                                    Preferences
                                    <span className="ml-auto text-xs text-gray-400">Ctrl+,</span>
                                </button>
                                <button className="w-full flex items-center px-3 py-2 rounded hover:bg-white/5 text-sm text-white">
                                    <BarsOutlined className="text-sm mr-3" />
                                    Keyboard Shortcuts
                                </button>
                                <button className="w-full flex items-center px-3 py-2 rounded hover:bg-white/5 text-sm text-white">
                                    <AlertOutlined className="text-sm mr-3" />
                                    Theme
                                </button>
                                <div className="border-t border-[#404040] my-2"></div>
                                <button className="w-full flex items-center px-3 py-2 rounded hover:bg-white/5 text-sm text-white">
                                    <UploadOutlined className="text-sm mr-3" />
                                    Import Data
                                </button>
                                <button className="w-full flex items-center px-3 py-2 rounded hover:bg-white/5 text-sm text-white">
                                    <DownloadOutlined className="text-sm mr-3" />
                                    Export Data
                                </button>
                                <div className="border-t border-[#404040] my-2"></div>
                                <button className="w-full flex items-center px-3 py-2 rounded hover:bg-white/5 text-sm text-white">
                                    <QuestionCircleOutlined className="text-sm mr-3" />
                                    Help & Support
                                </button>
                                <button className="w-full flex items-center px-3 py-2 rounded hover:bg-white/5 text-sm text-white">
                                    <InfoCircleOutlined className="text-sm mr-3" />
                                    About Post Man
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                {/* Profile Menu */}
                <div className="relative ml-2">
                    <button
                        onClick={() => setShowProfileDropdown(!showProfileDropdown)}
                        className="w-8 h-8 bg-[#00D4AA] border-2 border-[#404040] hover:border-[#00D4AA] rounded-full flex items-center justify-center transition-colors"
                        title="Profile"
                        aria-label="Open profile menu"
                    >
                        <UserOutlined className="text-sm text-white" />
                    </button>

                    {showProfileDropdown && (
                        <div className="absolute top-full right-0 mt-1 w-60 bg-[#2D2D2D] border border-[#404040] rounded-lg shadow-lg z-50">
                            <div className="p-4 border-b border-[#404040]">
                                <div className="flex items-center">
                                    <div className="w-12 h-12 bg-[#00D4AA] rounded-full flex items-center justify-center mr-3">
                                        <UserOutlined className="text-lg text-white" />
                                    </div>
                                    <div>
                                        <div className="text-sm font-semibold text-white">John Doe</div>
                                        <div className="text-xs text-gray-400">john.doe@nssf.go.ug</div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-2">
                                <button className="w-full flex items-center px-3 py-2 rounded hover:bg-white/5 text-sm text-white">
                                    <UserOutlined className="text-sm mr-3" />
                                    Profile Settings
                                </button>
                                <button className="w-full flex items-center px-3 py-2 rounded hover:bg-white/5 text-sm text-white">
                                    <SettingOutlined className="text-sm mr-3" />
                                    Account Settings
                                </button>
                                <button className="w-full flex items-center px-3 py-2 rounded hover:bg-white/5 text-sm text-white">
                                    <CreditCardOutlined className="text-sm mr-3" />
                                    Billing
                                </button>
                                <div className="border-t border-[#404040] my-2"></div>
                                <button className="w-full flex items-center px-3 py-2 rounded hover:bg-white/5 text-sm text-white">
                                    <TeamOutlined className="text-sm mr-3" />
                                    Team Management
                                </button>
                                <button className="w-full flex items-center px-3 py-2 rounded hover:bg-white/5 text-sm text-white">
                                    <HomeOutlined className="text-sm mr-3" />
                                    Workspace Settings
                                </button>
                                <div className="border-t border-[#404040] my-2"></div>
                                <button className="w-full flex items-center px-3 py-2 rounded hover:bg-red-500/10 text-sm text-red-400">
                                    <LogoutOutlined className="text-sm mr-3" />
                                    Sign Out
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
