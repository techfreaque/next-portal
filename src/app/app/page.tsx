"use client";

import {
  ArrowRight,
  Code,
  Database,
  Key,
  Layers,
  RefreshCw,
  ShieldCheck,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { APP_NAME } from "next-vibe/shared/constants";
import type { JSX } from "react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { H1, H2, H3 } from "@/components/ui/heading/heading.core";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { envClient } from "@/config/env-client";

const CodeSnippet = ({
  code,
  language = "typescript",
}: {
  code: string;
  language?: string;
}) => (
  <div className="relative overflow-hidden rounded-lg bg-black">
    <div className="flex items-center justify-between bg-gray-800 px-4 py-2 text-xs text-gray-400">
      <span>Example Code</span>
      <span className="uppercase">{language}</span>
    </div>
    <pre className="overflow-auto p-4 text-sm text-green-400">
      <code>{code}</code>
    </pre>
  </div>
);

export default function Home(): JSX.Element {
  const [activeTab, setActiveTab] = useState("overview");

  const endpointCode = `import { z } from 'zod';
import { createEndpoint, UserRoleValue } from 'next-vibe';

// Define request and response schemas
const requestSchema = z.object({
  name: z.string(),
  email: z.string().email(),
});

// Create the endpoint
export const createUserEndpoint = createEndpoint({
  description: 'Create a new user',
  method: 'POST',
  path: ['users'],
  allowedRoles: [UserRoleValue.ADMIN],
  requestSchema,
  responseSchema, // defined elsewhere
});`;

  const handlerCode = `// app/api/users/route.ts
import { apiHandler } from 'next-vibe';
import { createUserEndpoint } from '@/endpoints/users';

export const POST = apiHandler({
  endpoint: createUserEndpoint,
  handler: async ({ data, user }) => {
    // Implement your logic here
    const newUser = await db.users.create({
      data: {
        name: data.name,
        email: data.email,
        createdBy: user.id,
      }
    });
    
    return {
      success: true,
      data: newUser,
    };
  },
});`;

  const clientCode = `import { useApiQuery, useApiMutation } from 'next-vibe';
import { getUsersEndpoint, createUserEndpoint } from '@/endpoints/users';

function UsersList() {
  // Query users
  const { data: users, isLoading } = useApiQuery(getUsersEndpoint);
  
  // Create user mutation
  const { mutate: createUser } = useApiMutation(createUserEndpoint);
  
  return (
    <div>
      {/* Your UI code */}
    </div>
  );
}`;

  const formCode = `import { useApiForm } from 'next-vibe';
import { createUserEndpoint } from '@/endpoints/users';

function UserForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    submitForm,
    isSubmitting,
  } = useApiForm(createUserEndpoint);
  
  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <input {...register('name')} />
      <input {...register('email')} />
      <button type="submit" disabled={isSubmitting}>
        Create User
      </button>
    </form>
  );
}`;

  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-b from-primary to-primary/80 py-24 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <H1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-6xl">
            Welcome to {APP_NAME}
          </H1>
          <p className="mx-auto mb-8 max-w-3xl text-xl text-primary-foreground/90 md:text-2xl">
            A comprehensive starter template for building Next.js applications
            with strongly typed API endpoints, authentication, and more.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" variant="secondary">
              <Link href="/api-docs">
                Explore API Docs
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white">
              <Link href="/developer">
                Developer Portal
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto py-16">
        <H2 className="mb-12 text-center text-3xl font-bold">Key Features</H2>
        <div className="grid gap-8 md:grid-cols-3">
          <Card>
            <CardHeader className="space-y-1">
              <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Strongly Typed APIs</CardTitle>
              <CardDescription>
                Define endpoints with full TypeScript support and Zod
                validation.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Build type-safe APIs that validate both request and response
                data, providing excellent developer experience and runtime
                safety.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="space-y-1">
              <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <ShieldCheck className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Role-Based Access</CardTitle>
              <CardDescription>
                Integrated user role management and authorization.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Secure your endpoints with built-in role-based access control,
                ensuring users can only access what they're allowed to.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="space-y-1">
              <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Database className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Data Providers</CardTitle>
              <CardDescription>
                Flexible data access with Prisma integration.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Connect to your database with ease using built-in data
                providers, with first-class support for Prisma ORM.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="space-y-1">
              <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <RefreshCw className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Client Hooks</CardTitle>
              <CardDescription>
                React hooks for data fetching and mutation.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Consume your API endpoints with custom React hooks that handle
                loading, error states, and caching.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="space-y-1">
              <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Layers className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Form Integration</CardTitle>
              <CardDescription>
                Form handling with validation and API integration.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Build forms that automatically validate against your API
                schemas, with built-in submission handling.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="space-y-1">
              <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Key className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Authentication</CardTitle>
              <CardDescription>
                Built-in authentication and session management.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                User authentication, JWT handling, and session management come
                pre-configured and ready to use.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Code Examples Section */}
      <section className="container mx-auto py-16">
        <H2 className="mb-4 text-center text-3xl font-bold">How It Works</H2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-muted-foreground">
          Build complete, type-safe applications with minimal boilerplate.
          Here's how to get started:
        </p>

        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="mx-auto max-w-4xl"
        >
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="endpoint">Define Endpoint</TabsTrigger>
            <TabsTrigger value="handler">Create Handler</TabsTrigger>
            <TabsTrigger value="client">Client Usage</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>The next-vibe Workflow</CardTitle>
                <CardDescription>
                  A complete development cycle with type safety at every step
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-center justify-center p-4">
                  <Image
                    src="/placeholder.svg"
                    alt="Next-vibe workflow diagram"
                    width={600}
                    height={300}
                    className="rounded-lg border"
                  />
                  <div className="mt-8 grid gap-6 text-center md:grid-cols-3">
                    <div>
                      <H3 className="text-lg font-medium">1. Define Schemas</H3>
                      <p className="text-sm text-muted-foreground">
                        Create Zod schemas for request and response validation
                      </p>
                    </div>
                    <div>
                      <H3 className="text-lg font-medium">
                        2. Create Endpoints
                      </H3>
                      <p className="text-sm text-muted-foreground">
                        Configure API endpoints with type-safe definitions
                      </p>
                    </div>
                    <div>
                      <H3 className="text-lg font-medium">3. Consume APIs</H3>
                      <p className="text-sm text-muted-foreground">
                        Use strongly-typed hooks in your frontend components
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="endpoint" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Define a Type-Safe Endpoint</CardTitle>
                <CardDescription>
                  Create an endpoint with Zod validation schemas
                </CardDescription>
              </CardHeader>
              <CardContent>
                <CodeSnippet code={endpointCode} />
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button asChild variant="ghost" size="sm">
                  <Link href="/api-docs">
                    View API Docs <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="handler" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Create an API Route Handler</CardTitle>
                <CardDescription>
                  Implement the business logic for your endpoint
                </CardDescription>
              </CardHeader>
              <CardContent>
                <CodeSnippet code={handlerCode} />
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button asChild variant="ghost" size="sm">
                  <Link href="/developer">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="client" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Consume APIs on the Client</CardTitle>
                <CardDescription>
                  Use hooks for data fetching and form handling
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="mb-2 font-medium">Data Fetching</h4>
                  <CodeSnippet code={clientCode} />
                </div>
                <div>
                  <h4 className="mb-2 font-medium">Form Handling</h4>
                  <CodeSnippet code={formCode} />
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button asChild variant="ghost" size="sm">
                  <Link href="/api-docs">
                    View Documentation <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </section>

      {/* Getting Started */}
      <section className="w-full bg-gray-50 py-16">
        <div className="container mx-auto">
          <H2 className="mb-8 text-center text-3xl font-bold">
            Get Started Today
          </H2>
          <div className="mx-auto max-w-md rounded-lg bg-white p-8 shadow-lg">
            <H3 className="mb-4 text-xl font-semibold">Quick Start</H3>
            <div className="mb-6 rounded-md bg-gray-100 p-4">
              <code className="text-sm">
                git clone {envClient.NEXT_PUBLIC_GITHUB_URL}
              </code>
            </div>
            <Button asChild size="lg" className="w-full">
              <Link href="/developer">View Developer Docs</Link>
            </Button>
            <p className="mt-4 text-center text-sm text-muted-foreground">
              Check out the{" "}
              <Link href="/api-docs" className="text-primary hover:underline">
                API Documentation
              </Link>{" "}
              for more details.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
