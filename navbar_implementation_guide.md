# Post Man Navbar Implementation Guide

This guide provides detailed specifications for implementing the complete navbar/topbar component for the Post Man application with all functions and interactions.

## Component Overview

**Component Name:** `Navbar`  
**Height:** 48px  
**Position:** Fixed top with z-index 1000  
**Layout:** Three-section horizontal layout (left, center, right)  
**Framework:** Next.js + TypeScript + Tailwind CSS + Ant Design

## Left Section (Auto width, min 400px)

### 1. Workspace Switcher (180px width)

**Implementation:** Ant Design Dropdown + Button

- **Background:** rgba(255, 255, 255, 0.05)
- **Border:** 1px solid rgba(255, 255, 255, 0.1)
- **Hover:** rgba(255, 255, 255, 0.1)
- **Active:** rgba(0, 212, 170, 0.1)

**Content:**

- Current workspace: "Team Workspace" with team icon
- Dropdown chevron on the right

**Dropdown Menu (280px width):**

- **Personal Workspaces Section:**
  - My Workspace (user icon)
- **Team Workspaces Section:**
  - Team Workspace (active, 5 members)
  - NSSF Development (12 members)
- **Footer Actions:**
  - Create Workspace (plus icon)
  - Manage Workspaces (settings icon)

**Functionality:**

- Switch workspace: Updates global state and reloads collections
- Create workspace: Opens workspace creation modal
- Keyboard shortcut: Ctrl+Shift+W

### 2. Global Search (250px width)

**Implementation:** Ant Design AutoComplete + Input

- **Background:** rgba(255, 255, 255, 0.05)
- **Focus border:** 1px solid #00D4AA
- **Focus shadow:** 0 0 0 2px rgba(0, 212, 170, 0.2)

**Features:**

- Search icon prefix (16px, #B0B0B0)
- Clear icon when has input
- Placeholder: "Search APIs/collections"

**Search Functionality:**

- **Search Types:** Collections, requests, environments, history, documentation
- **Results:** Max 10, grouped by type, highlighted matches
- **Keyboard Navigation:** Arrow keys, Enter to select, Escape to close

**Dropdown Results (400px width):**

- Background: #2D2D2D
- Border: 1px solid #404040
- Result items: 40px height, hover highlighting

**Keyboard Shortcuts:**

- Open search: Ctrl+K
- Navigate: Arrow Up/Down
- Select: Enter
- Close: Escape

### 3. Action Buttons

**New Button (Primary, 80px width):**

- **Background:** Linear gradient #00D4AA to #00B894
- **Hover:** Linear gradient #00B894 to #009A7B
- **Icon:** Plus icon
- **Dropdown Items:**
  - HTTP Request (Ctrl+N)
  - GraphQL Request
  - WebSocket Request
  - Collection (Ctrl+Shift+N)
  - Environment
  - Documentation

**Import Button (Secondary, 80px width):**

- **Background:** rgba(255, 255, 255, 0.05)
- **Border:** 1px solid rgba(255, 255, 255, 0.1)
- **Icon:** Upload icon
- **Dropdown Items:**
  - Postman Collection (.json)
  - OpenAPI Specification
  - cURL Commands
  - Insomnia Collection
  - Environment Variables

## Center Section (Flexible, 300-800px)

### Request Tabs

**Implementation:** Custom Tabs Component

- **Height:** 32px
- **Overflow:** Hidden with smooth scroll
- **Gap:** 4px between tabs

**Tab Container:**

- Horizontal scroll with hidden scrollbar
- Scroll buttons when overflow (chevron-left/right)

**Individual Tab (120-200px width):**

- **Background:** rgba(255, 255, 255, 0.05)
- **Active:** rgba(0, 212, 170, 0.1) with border
- **Hover:** rgba(255, 255, 255, 0.1)
- **Border radius:** 6px

**Tab Content:**

- **Method Badge:** 32px width, colored by HTTP method
  - GET: #4CAF50, POST: #FF9800, PUT: #2196F3
  - DELETE: #F44336, PATCH: #9C27B0
- **Request Name:** Truncated with ellipsis
- **Unsaved Indicator:** Orange dot when changes exist
- **Close Button:** X icon, visible on hover

**Add Tab Button (32px width):**

- Plus icon in center
- Tooltip: "New Tab (Ctrl+T)"

**Tab Functionality:**

- Switch tab: Updates active request in main panel
- Close tab: Prompts save if unsaved changes
- Reorder: Drag and drop
- Context menu: Right-click for duplicate, close options

**Context Menu Items:**

- Duplicate Tab
- Close Tab (Ctrl+W)
- Close Other Tabs
- Close All Tabs
- Save Request (Ctrl+S)

**Keyboard Shortcuts:**

- New tab: Ctrl+T
- Close tab: Ctrl+W
- Next tab: Ctrl+Tab
- Previous tab: Ctrl+Shift+Tab
- Switch to tab 1-9: Ctrl+1-9

## Right Section (Auto width, min 200px)

### 1. Utility Buttons (32px each)

**Button Styling:**

- Background: Transparent
- Hover: rgba(255, 255, 255, 0.1)
- Color: #B0B0B0, hover #FFFFFF
- Border radius: 6px

**Buttons:**

- **Runner:** Play icon, "Collection Runner"
- **Proxy:** Shield icon, "Proxy Settings"
- **Cookies:** Cookie icon, "Manage Cookies"
- **Vault:** Key icon, "Secret Vault"
- **Trash:** Trash icon, "Trash"

### 2. Settings Menu

**Implementation:** Ant Design Dropdown

- **Trigger:** Settings icon button
- **Placement:** Bottom right

**Menu Items:**

- Preferences (Ctrl+,)
- Keyboard Shortcuts
- Theme (submenu: Dark, Light, Auto)
- Import Data
- Export Data
- Help & Support
- About post_call

### 3. Profile Menu

**Implementation:** Ant Design Dropdown

- **Trigger:** 32px avatar with border
- **Border:** 2px solid #404040, hover #00D4AA

**Menu Header:**

- User info: Name, email, 48px avatar
- Border bottom separator

**Menu Items:**

- Profile Settings
- Account Settings
- Billing
- Team Management
- Workspace Settings
- Sign Out (danger style)

## Responsive Behavior

### Mobile (< 768px)

- Hide utility buttons and global search
- Collapse workspace switcher
- Show mobile menu button
- Stack elements vertically if needed

### Tablet (768px - 1024px)

- Reduce spacing between elements
- Smaller button sizes
- Hide button text, show icons only

### Desktop (> 1024px)

- Full layout with all elements visible
- Optimal spacing and sizing

## State Management

### Navbar Store (Zustand)

```typescript
interface NavbarStore {
  currentWorkspace: string;
  openTabs: Tab[];
  activeTab: string;
  searchQuery: string;
  searchResults: SearchResult[];
  userProfile: UserProfile;
  uiPreferences: UIPreferences;
}
```

### Actions

- `switchWorkspace(workspaceId: string)`
- `addTab(requestData: RequestData)`
- `closeTab(tabId: string)`
- `switchTab(tabId: string)`
- `updateSearch(query: string)`
- `toggleTheme(theme: Theme)`

## Implementation Notes

### Component Structure

- Single navbar component with sub-components for each section
- Modular design for easy maintenance and testing

### Styling Approach

- Tailwind utility classes for basic styling
- Custom CSS for complex interactions and animations
- Consistent spacing and color scheme

### Accessibility

- Full keyboard navigation support
- ARIA labels for screen readers
- Focus management for dropdowns and modals
- High contrast mode support

### Performance

- Virtualized tab scrolling for many open tabs
- Debounced search input
- Lazy loading of dropdown content
- Memoized components to prevent unnecessary re-renders

### Testing Strategy

- Unit tests for all button interactions
- Integration tests for search functionality
- E2E tests for complete workflows
- Accessibility testing with screen readers

This comprehensive implementation guide ensures the navbar provides a professional, functional, and accessible user experience that matches modern API development tools.
