import { MainNav } from "@/components/main-nav"
import { AddEnvVars } from "@/components/add-env-vars"

export default function EnvVarsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <MainNav />
      <main className="flex-1 container py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Environment Variables</h1>
          <p className="text-muted-foreground mb-8">
            Manage environment variables for your application. These variables are used for configuration and to store
            sensitive information like API keys.
          </p>

          <AddEnvVars />

          <div className="mt-8 bg-muted/30 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">How to Add Environment Variables to v0</h2>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
              <li>Enter your environment variable names and values above</li>
              <li>Click the copy button to copy the formatted environment variables</li>
              <li>
                Use the <code className="bg-muted px-1 py-0.5 rounded">AddEnvironmentVariables</code> component in your
                v0 chat to add these variables
              </li>
              <li>
                Example:{" "}
                <code className="bg-muted px-1 py-0.5 rounded">
                  &lt;AddEnvironmentVariables names={["MPESA_CONSUMER_KEY", "MPESA_CONSUMER_SECRET"]} /&gt;
                </code>
              </li>
              <li>Restart your application for the changes to take effect</li>
            </ol>
          </div>
        </div>
      </main>
    </div>
  )
}
