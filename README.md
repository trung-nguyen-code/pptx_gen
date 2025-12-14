# AI PowerPoint Generator (Web)

## Project Setup

This project uses Next.js 16+, Tailwind CSS 4, and shadcn/ui.

### Prerequisites

- Node.js installed on your machine.
- Terminal with access to the project folder.

### Installation

1.  Navigate to the web directory:
    ```bash
    cd web
    ```
2.  Install dependencies (if you haven't already):
    ```bash
    npm install
    ```

## Running the Project

**Development Mode (Recommended for coding):**
This starts the development server with hot-reloading.
```bash
npm run dev
```
- Open [http://localhost:3000](http://localhost:3000) in your browser.

**Production Build:**
To build and start the optimized production application:
```bash
npm run build
npm start
```

## Common Issues

- **'next' is not recognized**: You cannot run `next` commands directly in the terminal unless you install it globally. Instead, use `npm run dev` which uses the local installed version.
- **Build Failures**: If the build fails, check the console output. For development, you can usually skip the build step and just use `npm run dev`.
