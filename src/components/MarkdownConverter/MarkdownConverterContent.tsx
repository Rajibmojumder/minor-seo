import React from 'react';
import { FileText, Code2, Table, Link2, Image, List, Quote, Hash, CheckCircle, Sparkles, Shield, FileEdit } from 'lucide-react';

const MarkdownConverterContent: React.FC = () => {
  return (
    <div className="mt-24 prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">
        Free Markdown to HTML Converter Online Tool
      </h2>

      <div className="bg-white rounded-xl p-8 shadow-sm mb-12">
        <p className="text-gray-600">
          Markdown is a lightweight markup language designed to make writing formatted content easy and readable. 
          Our converter transforms your Markdown into clean, semantic HTML while preserving all formatting and structure. 
          Perfect for creating blog posts, documentation, README files, and more.
        </p>
      </div>

      <h2 className="text-3xl font-bold text-gray-900 mb-6">
        How to Use
      </h2>

      <div className="bg-white rounded-xl p-8 shadow-sm mb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <div className="flex items-center mb-3">
              <FileEdit className="h-6 w-6 text-indigo-600 flex-shrink-0" />
              <h3 className="text-lg font-semibold ml-2 leading-none m-0">1. Write or Paste</h3>
            </div>
            <p className="text-gray-600 mt-2">Enter your Markdown text in the editor or paste existing content</p>
          </div>

          <div>
            <div className="flex items-center mb-3">
              <Sparkles className="h-6 w-6 text-indigo-600 flex-shrink-0" />
              <h3 className="text-lg font-semibold ml-2 leading-none m-0">2. Preview</h3>
            </div>
            <p className="text-gray-600 mt-2">See the rendered HTML output in real-time as you type</p>
          </div>

          <div>
            <div className="flex items-center mb-3">
              <FileText className="h-6 w-6 text-indigo-600 flex-shrink-0" />
              <h3 className="text-lg font-semibold ml-2 leading-none m-0">3. Export</h3>
            </div>
            <p className="text-gray-600 mt-2">Copy or download the generated HTML with optional custom styling</p>
          </div>
        </div>
      </div>

      <h2 className="text-3xl font-bold text-gray-900 mb-6">
        Markdown Syntax Guide
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center mb-3">
            <Hash className="h-6 w-6 text-indigo-600 flex-shrink-0" />
            <h3 className="text-lg font-semibold ml-2 leading-none m-0">Headings</h3>
          </div>
          <div className="space-y-3">
            <pre className="text-sm bg-gray-100 px-2 py-1 rounded text-gray-800 whitespace-pre-wrap"># Heading 1,
              ## Heading 2,
              ### Heading 3,
              #### Heading 4,
              ##### Heading 5,
              ###### Heading 6</pre>
            <p className="text-sm text-gray-600 mt-1">Create headings of different levels</p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center mb-3">
            <Quote className="h-6 w-6 text-indigo-600 flex-shrink-0" />
            <h3 className="text-lg font-semibold ml-2 leading-none m-0">Text Formatting</h3>
          </div>
          <div className="space-y-3">
            <pre className="text-sm bg-gray-100 px-2 py-1 rounded text-gray-800 whitespace-pre-wrap">{`**Bold text**
*Italic text*
***Bold and italic***
~~Strikethrough~~

> Blockquote
> Multiple lines
>> Nested quote`}</pre>
            <p className="text-sm text-gray-600 mt-1">Text emphasis and quotations</p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center mb-3">
            <List className="h-6 w-6 text-indigo-600 flex-shrink-0" />
            <h3 className="text-lg font-semibold ml-2 leading-none m-0">Lists</h3>
          </div>
          <div className="space-y-3">
            <pre className="text-sm bg-gray-100 px-2 py-1 rounded text-gray-800 whitespace-pre-wrap">* Unordered list
* Using asterisks,
  * Nested item
    * Deep nested

1. Ordered list
2. Using numbers
   * Mixed nesting
   * Works too</pre>
            <p className="text-sm text-gray-600 mt-1">Create ordered and unordered lists</p>
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center mb-3">
            <Code2 className="h-6 w-6 text-indigo-600 flex-shrink-0" />
            <h3 className="text-lg font-semibold ml-2 leading-none m-0">Code</h3>
          </div>
          <div className="space-y-3">
            <pre className="text-sm bg-gray-100 px-2 py-1 rounded text-gray-800 whitespace-pre-wrap">{`\`inline code\`

\`\`\`javascript
// Code block with syntax highlighting
function greet(name) {
  console.log(\`Hello, \${name}!\`);
}
\`\`\``}</pre>
            <p className="text-sm text-gray-600 mt-1">Inline and block code formatting</p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center mb-3">
            <Link2 className="h-6 w-6 text-indigo-600 flex-shrink-0" />
            <h3 className="text-lg font-semibold ml-2 leading-none m-0">Links</h3>
          </div>
          <div className="space-y-3">
            <pre className="text-sm bg-gray-100 px-2 py-1 rounded text-gray-800 whitespace-pre-wrap">{`[Inline link](https://example.com)
[Link with title](https://example.com "Title")

[Reference link][ref]
[ref]: https://example.com

&lt;https://example.com&gt;
&lt;email@example.com&gt;`}</pre>
            <p className="text-sm text-gray-600 mt-1">Various link formats and references</p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center mb-3">
            <Image className="h-6 w-6 text-indigo-600 flex-shrink-0" />
            <h3 className="text-lg font-semibold ml-2 leading-none m-0">Images</h3>
          </div>
          <div className="space-y-3">
            <pre className="text-sm bg-gray-100 px-2 py-1 rounded text-gray-800 whitespace-pre-wrap">![Alt text](image.jpg)
![Alt text](image.jpg "Image title")

[![Linked image](image.jpg)](https://example.com)</pre>
            <p className="text-sm text-gray-600 mt-1">Image embedding and linking</p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center mb-3">
            <Table className="h-6 w-6 text-indigo-600 flex-shrink-0" />
            <h3 className="text-lg font-semibold ml-2 leading-none m-0">Tables</h3>
          </div>
          <div className="space-y-3">
            <pre className="text-sm bg-gray-100 px-2 py-1 rounded text-gray-800 whitespace-pre-wrap">| Left | Center | Right |
|:-----|:------:|------:|
| Left | Center | Right |
| aligned | aligned | aligned |</pre>
            <p className="text-sm text-gray-600 mt-1">Tables with alignment options</p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center mb-3">
            <List className="h-6 w-6 text-indigo-600 flex-shrink-0" />
            <h3 className="text-lg font-semibold ml-2 leading-none m-0">Task Lists</h3>
          </div>
          <div className="space-y-3">
            <pre className="text-sm bg-gray-100 px-2 py-1 rounded text-gray-800 whitespace-pre-wrap">- [x] Completed task
- [ ] Pending task
  - [x] Nested completed
  - [ ] Nested pending</pre>
            <p className="text-sm text-gray-600 mt-1">GitHub-style task lists</p>
          </div>
        </div>
      </div>

      {/* Rest of the content (Advanced Features, FAQs, Best Practices) remains the same */}
      <h2 className="text-3xl font-bold text-gray-900 mb-8">
        Advanced Features
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center mb-4">
            <Sparkles className="h-6 w-6 text-indigo-600 flex-shrink-0" />
            <h3 className="text-lg font-semibold ml-2 leading-none m-0">Extended Syntax</h3>
          </div>
          <ul className="space-y-2">
            <li>Footnotes and citations</li>
            <li>Definition lists</li>
            <li>Abbreviations</li>
            <li>Custom containers</li>
            <li>Math equations (LaTeX)</li>
          </ul>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center mb-4">
            <Shield className="h-6 w-6 text-indigo-600 flex-shrink-0" />
            <h3 className="text-lg font-semibold ml-2 leading-none m-0">GitHub Features</h3>
          </div>
          <ul className="space-y-2">
            <li>Task lists</li>
            <li>Mentions (@username)</li>
            <li>Issue references (#123)</li>
            <li>Emoji shortcuts (:smile:)</li>
            <li>Auto-linked references</li>
          </ul>
        </div>
      </div>

      <h2 className="text-3xl font-bold text-gray-900 mb-8">
        Frequently Asked Questions
      </h2>

      <div className="space-y-6 mb-12">
        <details className="group bg-white rounded-xl shadow-sm">
          <summary className="flex items-center justify-between p-6 cursor-pointer">
            <h3 className="text-xl font-semibold">What makes Markdown better than plain HTML?</h3>
            <span className="ml-4 flex-shrink-0">+</span>
          </summary>
          <div className="px-6 pb-6">
            <p>Markdown offers several advantages over HTML:</p>
            <ul className="mt-2 space-y-1">
              <li>Easier to read and write</li>
              <li>More maintainable and cleaner syntax</li>
              <li>Faster content creation</li>
              <li>Platform independent</li>
              <li>Converts to clean, valid HTML</li>
            </ul>
          </div>
        </details>

        <details className="group bg-white rounded-xl shadow-sm">
          <summary className="flex items-center justify-between p-6 cursor-pointer">
            <h3 className="text-xl font-semibold">Can I use HTML within Markdown?</h3>
            <span className="ml-4 flex-shrink-0">+</span>
          </summary>
          <div className="px-6 pb-6">
            <p>Yes! Markdown supports inline HTML when you need more control over formatting. You can mix HTML and Markdown in the same document.</p>
          </div>
        </details>

        <details className="group bg-white rounded-xl shadow-sm">
          <summary className="flex items-center justify-between p-6 cursor-pointer">
            <h3 className="text-xl font-semibold">How do I handle special characters?</h3>
            <span className="ml-4 flex-shrink-0">+</span>
          </summary>
          <div className="px-6 pb-6">
            <p>You can escape special Markdown characters using a backslash:</p>
            <pre className="text-sm bg-gray-100 px-2 py-1 rounded mt-2">\* Not a list item
\# Not a heading
\[Not a link]()</pre>
          </div>
        </details>

        <details className="group bg-white rounded-xl shadow-sm">
          <summary className="flex items-center justify-between p-6 cursor-pointer">
            <h3 className="text-xl font-semibold">What about custom styling?</h3>
            <span className="ml-4 flex-shrink-0">+</span>
          </summary>
          <div className="px-6 pb-6">
            <p>Our converter supports custom CSS for styling your HTML output. You can:</p>
            <ul className="mt-2 space-y-1">
              <li>Add your own CSS rules</li>
              <li>Preview styles in real-time</li>
              <li>Export HTML with embedded styles</li>
              <li>Use CSS classes and IDs</li>
            </ul>
          </div>
        </details>
      </div>

      <h2 className="text-3xl font-bold text-gray-900 mb-8">
        Best Practices
      </h2>

      <div className="bg-white rounded-xl p-8 shadow-sm mb-12">
        <div className="space-y-6">
          <div>
            <div className="flex items-center mb-3">
              <CheckCircle className="h-6 w-6 text-indigo-600 flex-shrink-0" />
              <h3 className="text-lg font-semibold ml-2 leading-none m-0">Document Structure</h3>
            </div>
            <p className="text-gray-600 mt-2">Start with a single H1 heading and maintain a logical heading hierarchy. Don't skip heading levels.</p>
          </div>
          
          <div>
            <div className="flex items-center mb-3">
              <CheckCircle className="h-6 w-6 text-indigo-600 flex-shrink-0" />
              <h3 className="text-lg font-semibold ml-2 leading-none m-0">Accessibility</h3>
            </div>
            <p className="text-gray-600 mt-2">Always include alt text for images and use semantic markup for better accessibility.</p>
          </div>
          
          <div>
            <div className="flex items-center mb-3">
              <CheckCircle className="h-6 w-6 text-indigo-600 flex-shrink-0" />
              <h3 className="text-lg font-semibold ml-2 leading-none m-0">Code Formatting</h3>
            </div>
            <p className="text-gray-600 mt-2">Use language-specific code blocks for proper syntax highlighting and better readability.</p>
          </div>
          
          <div>
            <div className="flex items-center mb-3">
              <CheckCircle className="h-6 w-6 text-indigo-600 flex-shrink-0" />
              <h3 className="text-lg font-semibold ml-2 leading-none m-0">Link Practices</h3>
            </div>
            <p className="text-gray-600 mt-2">Use descriptive link text instead of generic phrases like "click here" or "read more".</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarkdownConverterContent;