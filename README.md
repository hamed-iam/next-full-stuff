## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

[http://localhost:3000](http://localhost:3000) default port.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)

- [the Next.js GitHub repository](https://github.com/vercel/next.js/)

# Processes That Next.Js Simplifies

- File base routing
- Pre rendering
- API routes
- CSS Module (supports out of the box)
- Authentication
- Dev and prod build system

## File Base Routing

- Routes with Pages
  index.js file in pages folder will map to root domain
- Nested routes
- Dynamic routes
  [].ts/js and handling it in page root with useRouter()
- Cath-all routes
- Navigate from UI
- Programmatically navigate b/w Pages

--Link element in next : anchor tag inside and href should be on Link instead of anchor
-- Replace prop in Link will replace the current history state, instead of adding new url to the stack
