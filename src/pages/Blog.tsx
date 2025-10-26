import React from "react";

const BLOG_URL = "https://aashiishh.hashnode.dev/";

export default function Blog() {
  return (
    <main className="container mx-auto py-16 px-4">
      <header className="max-w-3xl mx-auto text-center mb-10">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-3 text-foreground dark:text-white">
          Blog
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto dark:text-zinc-300">
          My technical posts and notes live on Hashnode. Follow the link below to read my latest articles.
        </p>
      </header>

      <section className="max-w-3xl mx-auto grid gap-6">
        <div className="rounded-2xl p-6
                        bg-white/70 dark:bg-zinc-900/60
                        supports-[backdrop-filter]:backdrop-blur-md
                        border border-gray-200/20 dark:border-gray-700/40
                        shadow-lg">
          <h2 className="text-2xl font-semibold mb-3 text-foreground dark:text-white">
            Ashish Guleria — Hashnode
          </h2>
          <p className="text-sm text-muted-foreground mb-4 dark:text-zinc-300">
            All posts are published on my Hashnode blog. Click the button to open my blog in a new tab.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <a
              href={BLOG_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 font-medium shadow-md transition-all duration-200
                         bg-primary text-white hover:bg-primary/90
                         dark:bg-white dark:text-black dark:hover:bg-gray-200
                         focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2"
            >
              Visit my Hashnode blog
            </a>

            <a
              href={BLOG_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary transition-colors dark:text-zinc-300"
              aria-label="Open Hashnode blog"
            >
              Open in new tab
            </a>
          </div>
        </div>

        
      </section>
    </main>
  );
}
