# Post Call - Modern API Testing Tool

A beautiful, modern desktop application for testing API endpoints with a focus on POST requests. Built with Next.js, TypeScript, Tailwind CSS, and Ant Design.

## 🚀 Features

### Core Functionality

- **HTTP Methods**: Support for GET, POST, PUT, DELETE, and PATCH requests
- **Request Configuration**:
  - Custom headers management
  - Request body editor with syntax highlighting
  - Timeout settings
  - Environment variables support
- **Response Handling**:
  - Real-time response display
  - Response time tracking
  - Response size calculation
  - Status code visualization
  - Header inspection

### Modern UI/UX

- **Dark Modern Theme**: Sleek dark interface with accent colors
- **Responsive Design**: Optimized for desktop use (1200px+ width)
- **Smooth Animations**: Micro-interactions and visual feedback
- **Custom Typography**: Inter font family for optimal readability
- **Glass Effects**: Modern backdrop blur and transparency effects

### Advanced Features

- **Environment Variables**: Dynamic variable substitution in URLs and request bodies
- **Request History**: Track and review previous requests
- **Collections**: Organize requests into collections
- **Visual Feedback**:
  - Color-coded status indicators
  - Loading animations
  - Success/error states
  - Progress indicators

## 🎨 Design System

### Colors

- **Primary**: `#00D4AA` (Teal)
- **Secondary**: `#FF6B6B` (Coral)
- **Background**: `#1E1E1E` (Primary), `#2D2D2D` (Secondary)
- **Text**: `#FFFFFF` (Primary), `#B0B0B0` (Secondary)
- **Success**: `#4CAF50`
- **Error**: `#F44336`
- **Warning**: `#FF9800`

### Typography

- **Font Family**: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif
- **Font Sizes**: 12px (xs) to 24px (2xl)
- **Font Weights**: 400 (normal) to 700 (bold)

### Spacing & Layout

- **Base Unit**: 8px
- **Spacing Scale**: 4px (xs) to 48px (2xl)
- **Border Radius**: 4px (sm) to 16px (xl)
- **Shadows**: Subtle depth with multiple levels

## 🛠️ Technology Stack

- **Framework**: Next.js 15.5.0
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Ant Design
- **Icons**: Ant Design Icons
- **Font**: Inter (Google Fonts)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd curl_post
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm start
```

## 📖 Usage

### Making a Request

1. **Enter URL**: Type the endpoint URL in the URL field
2. **Select Method**: Choose the HTTP method from the dropdown
3. **Configure Headers**: Add custom headers in the Headers tab
4. **Add Body**: Enter request body in the Body tab (for POST/PUT/PATCH)
5. **Set Timeout**: Configure request timeout in Settings tab
6. **Send Request**: Click the "Send" button

### Environment Variables

1. **Add Variables**: Use the sidebar to add environment variables
2. **Syntax**: Use `{{variable_name}}` in URLs and request bodies
3. **Enable/Disable**: Toggle variables on/off as needed

### Request History

- Recent requests are automatically saved
- Click on history items to review details
- Status indicators show success/error states

## 🎯 Key Features in Detail

### Request Configuration

- **Dynamic Headers**: Add, remove, and toggle custom headers
- **Body Editor**: Multi-line text editor for request bodies
- **Timeout Control**: Configurable request timeout (default: 30s)
- **Method Selection**: Support for all major HTTP methods

### Response Analysis

- **Status Visualization**: Color-coded status badges
- **Performance Metrics**: Response time and size tracking
- **Content Display**: Formatted JSON/XML/text responses
- **Header Inspection**: View response headers

### Environment Management

- **Variable Substitution**: Dynamic URL and body processing
- **Multiple Environments**: Support for different configurations
- **Toggle Control**: Enable/disable variables as needed

## 🎨 Customization

### Theme Customization

The application uses CSS custom properties for easy theming. Modify the variables in `src/app/globals.css`:

```css
:root {
  --primary: #00d4aa;
  --secondary: #ff6b6b;
  --background-primary: #1e1e1e;
  /* ... other variables */
}
```

### Tailwind Configuration

Custom design tokens are defined in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: { DEFAULT: '#00D4AA', /* ... */ },
      // ... other colors
    },
    // ... other customizations
  }
}
```

## 🔧 Development

### Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and design system
│   ├── layout.tsx           # Root layout with providers
│   ├── page.tsx             # Main application page
│   └── providers.tsx        # Antd theme configuration
├── types/
│   └── index.ts             # TypeScript type definitions
```

### Key Components

- **Request Form**: URL input, method selection, send button
- **Configuration Tabs**: Headers, Body, Settings
- **Response Display**: Status, timing, content viewer
- **Sidebar**: Collections, environment variables
- **History Panel**: Recent requests tracking

## 🚀 Future Enhancements

- **Request Templates**: Pre-configured request templates
- **Authentication**: Built-in auth helpers (Bearer, Basic, OAuth)
- **File Upload**: Support for multipart/form-data
- **WebSocket Support**: Real-time communication testing
- **API Documentation**: Import from OpenAPI/Swagger
- **Request Chaining**: Sequential request execution
- **Data Export**: Export requests and responses
- **Plugin System**: Extensible functionality

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

Built with ❤️ using Next.js, TypeScript, and modern web technologies.
