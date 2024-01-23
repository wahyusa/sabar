# About

Boring Basic Average Astro JS Blog with Content Collection and Markdown.
Built from official Astro JS tutorials.

## TODO :

- [ ] Tailwindcss Integration
- [x] MDX Integration
- [ ] MDX Shiki Integration
- [ ] New components & layout

## NOTES :

### 1. MDX Integration

It's all pretty simple, just follow docs.

https://docs.astro.build/en/guides/integrations-guide/mdx/

For VSCode extension, I am using official mdx

https://marketplace.visualstudio.com/items?itemName=unifiedjs.vscode-mdx

**VSCode Notes:**

There will be a warning like this

```json
[
  {
    "resource": "/path/to/hello-world.mdx",
    "owner": "_generated_diagnostic_collection_name_#4",
    "code": "link.no-such-reference",
    "severity": 4,
    "message": "No link definition found: '\"astro\", \"blogging\", \"learning in public\"'",
    "startLineNumber": 9,
    "startColumn": 8,
    "endLineNumber": 9,
    "endColumn": 49
  }
]
```

Which is pointing to my frontmatter tags arrays in hello-world.mdx

```mdx
tags: ["astro", "blogging", "learning in public"]
```

To remove that warning I will need to disable a settings called "Vallidate references".

```json
"mdx.validate.validateReferences": "ignore"
```

And now, I believe the MDX integration is working correctly.
