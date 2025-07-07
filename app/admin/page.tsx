import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { MainNav } from "@/components/main-nav"
import { Settings, CreditCard, Users, FileText, ShieldCheck } from "lucide-react"

export default function AdminDashboard() {
  return (
    <div className="flex flex-col min-h-screen">
      <MainNav />
      <main className="flex-1 container py-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
          <p className="text-muted-foreground mb-8">Manage your Ubuntu Charity website settings and integrations.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CreditCard className="h-5 w-5 mr-2" />
                  Payment Integrations
                </CardTitle>
                <CardDescription>Configure payment methods and donation options.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>
                    <Link href="/admin/mpesa-setup" className="text-primary hover:underline">
                      M-Pesa Integration Setup
                    </Link>
                  </li>
                  <li className="text-muted-foreground">PayPal Integration (Coming Soon)</li>
                  <li className="text-muted-foreground">Stripe Integration (Coming Soon)</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" size="sm">
                  <Link href="/admin/mpesa-setup">Configure M-Pesa</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="h-5 w-5 mr-2" />
                  User Management
                </CardTitle>
                <CardDescription>Manage administrators and user accounts.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">User management features coming soon.</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" disabled>
                  Manage Users
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="h-5 w-5 mr-2" />
                  Content Management
                </CardTitle>
                <CardDescription>Update website content and pages.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Content management features coming soon.</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" disabled>
                  Edit Content
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Settings className="h-5 w-5 mr-2" />
                  Site Settings
                </CardTitle>
                <CardDescription>Configure general website settings.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Site settings features coming soon.</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" disabled>
                  Edit Settings
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <ShieldCheck className="h-5 w-5 mr-2" />
                  Environment Variables
                </CardTitle>
                <CardDescription>Manage application environment variables.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Securely manage environment variables for your application.</p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" size="sm">
                  <Link href="/admin/env-vars">Manage Variables</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
