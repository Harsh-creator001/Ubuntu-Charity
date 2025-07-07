"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CheckCircle2, Copy, Plus, Trash } from "lucide-react"

export function AddEnvVars() {
  const [envVars, setEnvVars] = useState<{ key: string; value: string }[]>([{ key: "", value: "" }])
  const [copied, setCopied] = useState(false)

  const addEnvVar = () => {
    setEnvVars([...envVars, { key: "", value: "" }])
  }

  const removeEnvVar = (index: number) => {
    const newEnvVars = [...envVars]
    newEnvVars.splice(index, 1)
    setEnvVars(newEnvVars)
  }

  const updateEnvVar = (index: number, field: "key" | "value", value: string) => {
    const newEnvVars = [...envVars]
    newEnvVars[index][field] = value
    setEnvVars(newEnvVars)
  }

  const formatEnvVars = () => {
    return envVars
      .filter((env) => env.key && env.value)
      .map((env) => `${env.key}=${env.value}`)
      .join("\n")
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(formatEnvVars())
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Environment Variables</CardTitle>
        <CardDescription>Add environment variables for your application.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {envVars.map((env, index) => (
            <div key={index} className="flex gap-2 items-start">
              <div className="flex-1">
                <Label htmlFor={`env-key-${index}`} className="sr-only">
                  Environment Variable Key
                </Label>
                <Input
                  id={`env-key-${index}`}
                  placeholder="VARIABLE_NAME"
                  value={env.key}
                  onChange={(e) => updateEnvVar(index, "key", e.target.value)}
                />
              </div>
              <div className="flex-1">
                <Label htmlFor={`env-value-${index}`} className="sr-only">
                  Environment Variable Value
                </Label>
                <Input
                  id={`env-value-${index}`}
                  placeholder="value"
                  value={env.value}
                  onChange={(e) => updateEnvVar(index, "value", e.target.value)}
                />
              </div>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                onClick={() => removeEnvVar(index)}
                disabled={envVars.length === 1}
              >
                <Trash className="h-4 w-4" />
              </Button>
            </div>
          ))}
          <Button type="button" variant="outline" size="sm" className="mt-2" onClick={addEnvVar}>
            <Plus className="h-4 w-4 mr-2" />
            Add Variable
          </Button>
        </div>

        {envVars.some((env) => env.key && env.value) && (
          <div className="mt-6">
            <Label htmlFor="env-output">Environment Variables</Label>
            <div className="relative mt-2">
              <pre id="env-output" className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                {formatEnvVars()}
              </pre>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="absolute top-2 right-2"
                onClick={copyToClipboard}
              >
                {copied ? <CheckCircle2 className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              </Button>
            </div>
          </div>
        )}
      </CardContent>
      <CardFooter>
        <p className="text-sm text-muted-foreground">
          These variables will be available in your application as <code>process.env.VARIABLE_NAME</code>.
        </p>
      </CardFooter>
    </Card>
  )
}
