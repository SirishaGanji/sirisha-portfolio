import Image from "next/image"
import Link from "next/link"
import { Separator } from "@/components/ui/separator"

export const mdxComponents = {
  h1: ({ children, ...props }: any) => (
    <h1 className="font-sans text-4xl font-bold text-foreground mb-6 mt-8 first:mt-0" {...props}>
      {children}
    </h1>
  ),
  h2: ({ children, ...props }: any) => (
    <h2 className="font-sans text-3xl font-semibold text-foreground mb-4 mt-8 first:mt-0" {...props}>
      {children}
    </h2>
  ),
  h3: ({ children, ...props }: any) => (
    <h3 className="font-sans text-2xl font-semibold text-foreground mb-3 mt-6" {...props}>
      {children}
    </h3>
  ),
  h4: ({ children, ...props }: any) => (
    <h4 className="font-sans text-xl font-semibold text-foreground mb-2 mt-4" {...props}>
      {children}
    </h4>
  ),
  p: ({ children, ...props }: any) => (
    <p className="text-muted-foreground leading-relaxed mb-4" {...props}>
      {children}
    </p>
  ),
  ul: ({ children, ...props }: any) => (
    <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-1" {...props}>
      {children}
    </ul>
  ),
  ol: ({ children, ...props }: any) => (
    <ol className="list-decimal list-inside text-muted-foreground mb-4 space-y-1" {...props}>
      {children}
    </ol>
  ),
  li: ({ children, ...props }: any) => (
    <li className="text-muted-foreground" {...props}>
      {children}
    </li>
  ),
  blockquote: ({ children, ...props }: any) => (
    <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground mb-4" {...props}>
      {children}
    </blockquote>
  ),
  code: ({ children, ...props }: any) => (
    <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground" {...props}>
      {children}
    </code>
  ),
  pre: ({ children, ...props }: any) => (
    <pre className="bg-muted p-4 rounded-lg overflow-x-auto mb-4 text-sm" {...props}>
      {children}
    </pre>
  ),
  strong: ({ children, ...props }: any) => (
    <strong className="font-semibold text-foreground" {...props}>
      {children}
    </strong>
  ),
  a: ({ children, href, ...props }: any) => (
    <Link href={href} className="text-primary hover:underline" {...props}>
      {children}
    </Link>
  ),
  img: ({ src, alt, ...props }: any) => (
    <div className="my-6">
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        width={800}
        height={400}
        className="rounded-lg border border-border"
        {...props}
      />
    </div>
  ),
  hr: () => <Separator className="my-8" />,
  table: ({ children, ...props }: any) => (
    <div className="overflow-x-auto mb-4">
      <table className="w-full border-collapse border border-border" {...props}>
        {children}
      </table>
    </div>
  ),
  th: ({ children, ...props }: any) => (
    <th className="border border-border bg-muted p-2 text-left font-semibold" {...props}>
      {children}
    </th>
  ),
  td: ({ children, ...props }: any) => (
    <td className="border border-border p-2 text-muted-foreground" {...props}>
      {children}
    </td>
  ),
}
