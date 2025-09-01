# Overview

This is a full-stack web application built with React, Express, and TypeScript. The project follows a monorepo structure with shared code between client and server. It features a modern authentication system with a clean, component-based UI built using shadcn/ui and Tailwind CSS. The application is set up for PostgreSQL database integration using Drizzle ORM, though it currently implements an in-memory storage layer for development.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript, using Vite as the build tool
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack React Query for server state management
- **UI Framework**: shadcn/ui components with Radix UI primitives
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **Form Handling**: React Hook Form with Zod validation

## Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript with ES modules
- **API Pattern**: RESTful API with `/api` prefix
- **Storage Interface**: Abstract storage interface (`IStorage`) with pluggable implementations
- **Development**: In-memory storage implementation (`MemStorage`) for rapid prototyping
- **Error Handling**: Centralized error middleware with proper HTTP status codes

## Database Design
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Schema**: Defined in shared directory for type safety between client and server
- **Migrations**: Drizzle Kit for schema management
- **Current Tables**: Users table with UUID primary keys, username/password fields

## Development Workflow
- **Monorepo Structure**: Shared types and schemas between client/server
- **Hot Reload**: Vite dev server with HMR for frontend, tsx for backend auto-restart
- **Build Process**: Vite for client bundling, esbuild for server compilation
- **Type Safety**: Strict TypeScript configuration across the entire stack

## Authentication System
- **UI Flow**: Multi-step authentication forms (login, forgot password, reset password)
- **Form Components**: Modular authentication components with state management
- **User Management**: Basic user CRUD operations through storage interface
- **Security**: Password hashing and session management ready for implementation

# External Dependencies

## Core Framework Dependencies
- **@vitejs/plugin-react**: React plugin for Vite build system
- **express**: Web application framework for Node.js
- **drizzle-orm**: Type-safe database ORM
- **@neondatabase/serverless**: Neon database client for PostgreSQL

## UI and Styling Dependencies
- **@radix-ui/react-***: Comprehensive set of accessible UI primitives
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Utility for managing component variants
- **lucide-react**: Icon library for React applications

## Development and Build Tools
- **typescript**: Type checking and compilation
- **tsx**: TypeScript execution engine for development
- **esbuild**: Fast JavaScript bundler for server builds
- **drizzle-kit**: Database migration and introspection tools

## Client-Side Libraries
- **@tanstack/react-query**: Server state synchronization
- **react-hook-form**: Performant forms with easy validation
- **wouter**: Minimalist routing library for React
- **zod**: TypeScript-first schema validation

## Database and Storage
- **connect-pg-simple**: PostgreSQL session store (configured but not yet implemented)
- **drizzle-zod**: Integration between Drizzle ORM and Zod validation

The application is structured for easy deployment with environment-based configuration and supports both development and production builds. The storage layer abstraction allows for easy switching from in-memory storage to PostgreSQL when needed.