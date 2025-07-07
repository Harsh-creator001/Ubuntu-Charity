import Image from "next/image"

interface PaymentMethodsDisplayProps {
  className?: string
  showLabels?: boolean
  size?: "small" | "medium" | "large"
}

export function PaymentMethodsDisplay({
  className = "",
  showLabels = false,
  size = "medium",
}: PaymentMethodsDisplayProps) {
  // Define sizes for different options
  const sizes = {
    small: { width: 40, height: 24 },
    medium: { width: 60, height: 36 },
    large: { width: 80, height: 48 },
  }

  const { width, height } = sizes[size]

  const paymentMethods = [
    { name: "M-Pesa", logo: "/images/mpesa-logo.png" },
    { name: "PayPal", logo: "/images/paypal-logo.png" },
    { name: "Visa", logo: "/images/visa-logo.png" },
    { name: "Mastercard", logo: "/images/mastercard-logo.png" },
  ]

  return (
    <div className={`flex flex-wrap items-center gap-4 ${className}`}>
      {paymentMethods.map((method) => (
        <div key={method.name} className="flex flex-col items-center">
          <div className="bg-white p-2 rounded-md shadow-sm">
            <Image
              src={method.logo || "/placeholder.svg"}
              alt={`${method.name} logo`}
              width={width}
              height={height}
              className="object-contain"
            />
          </div>
          {showLabels && <span className="text-xs text-muted-foreground mt-1">{method.name}</span>}
        </div>
      ))}
    </div>
  )
}
