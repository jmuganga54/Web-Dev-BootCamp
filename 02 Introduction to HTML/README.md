## Introduction to HTML

On this section the main point of discussion is introduction to HTML, some basic code to understand. Some of the topics discussed in this section are:

- Introduction to HTML
- The Anatomy of an HTML Tag
- Basic element tags in HTML

<table>
<thead>
<tr>
<th>Keywords</th>
<th>Notes</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>&lt;h1&lt;–&lt;h6&gt;</code><strong>: The HTML Section Heading elements</strong></td>
<td>
HTML elements represent six levels of section headings. &lt;h1&gt; is the highest section level and &lt;/h6&gt;is the lowest.
<pre>
<code>
&lt;h1&gt;Heading level 1&lt;/h1&gt;
&lt;h2&gt;Heading level 2&lt;/h2&gt;
&lt;h3&gt;Heading level 3&lt;/h3&gt;
&lt;h4&gt;Heading level 4&lt;/h4&gt;
&lt;h5&gt;Heading level 5&lt;/h5&gt;
&lt;h6&gt;Heading level 6&lt;/h6&gt;
</code>
</pre>
</td>
</tr>
<tr>
<td><code>&lt;hr&gt;</code> <strong>:  The Thematic Break (Horizontal Rule) element</strong></td>
<td>Break between paragraph-level elements: for example, a change of scene in a story, or a shift of topic within a section.</td>
</tr>
<tr>
<td><strong>Site to read Documentation</strong></td>
<td><a href="https://developer.mozilla.org/en-US/">MDN Web Docs</a>, <a href="https://www.w3schools.com/">w3schools</a>, <a href="https://devdocs.io/">devdocs</a></td>
</tr>
<tr>
<td><code>&lt;br&gt;</code> <strong>:  Line break</strong></td>
<td>This is used to enter break lines</td>
</tr>
<tr>
<td><code>&lt;hr&gt;</code> <strong>:  Horizontal Rule</strong></td>
<td>Inserting a line to separate content</td>
</tr>
<tr>
<td> <strong>Anatomy of an HTML Tag</strong></td>
<td>(start tag) <code>&lt;h1&gt;</code> (Content) <code>&lt;h1&gt;</code> (end tag)</td>
</tr>
<tr>
<td><strong>Self-closing tag</strong></td>
<td><code>&lt;br&gt;</code> Tag with no closing tag(end tag)</td>
</tr>
<tr>
<td><strong>HTML Attribute</strong></td>
<td>Example <code>&lt;hr size="3"&gt;</code> Give more information to the browser modification to that HTML element</td>
</tr>
<tr>
<td><strong>Comments in HTML</strong></td>
<td><code>&lt;!--Coment--&gt;</code> This is how you insert comment in HTML</td>
</tr>
</tr>
<tr>
<td><strong>HTML boiler plate</strong></td>
<td>
<pre>
<code>
&lt;!DOCTYPE html&gt;
&lt;html lang="en";&gt;
&lt;head&gt;
	&lt;meta charset="UTF-8";&gt;
	&lt;meta http-equiv="X-UA-Compatible" content="IE=edge";&gt;
	&lt;meta name="viewport" content="width=device-width, initial-scale=1.0";&gt;
	&lt;title&gt;Document&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
...
&lt;/body&gt;
&lt;/html&gt;
</code>
<pre>
</td>
</tr>
<tr>
<td><pre><code>&lt;!DOCTYPE html&gt;</code></pre></td>
<td>What type of HTML we are using</td>
</tr>
<tr>
<td><pre><code>&lt;html&gt;&lt;/html&gt;</code></pre></td>
<td>It consist of <code>&lt;head&gt;&lt;/head&gt;</code>  and <code>&lt;body&gt;&lt;/body&gt;</code></td>
</tr>
<tr>
<td><code>&lt;head&gt;&lt;/head&gt;</code></td>
<td>
It tells the browser how it should handle the page,
For example, we might have a title tag  <code>&lt;title&gt;</code>  which tells the browser what is the title of this particular page <code> &lt;meta&gt;</code>  tag defines metadata about an HTML document. Metadata is data (information) about data.Metadata will not be displayed on the page, but is machine parsable.<br/>
<pre>
<code>
&lt;meta charset="UTF-8";&gt;
	&lt;name="description" content="Free Web tutorials";&gt;
	&lt;name="keywords" content="HTML, CSS, JavaScript";&gt;
	&lt;name="author" content="John Doe";&gt;
	&lt;meta name="viewport" content="width=device-width, initial-scale=1.0";&gt;
</code>
<pre>
</td>
</tr>
<tr>
<td><code>&lt;body&gt;&lt;/body&gt</code> <strong>: Defines the document's body</strong></td>
<td>The  <code>&lt;body&gt;</code> element contains all the contents of an HTML document, such as headings, paragraphs, images, hyperlinks, tables, lists, etc</td>
</tr>
<tr>
<td><code>&lt;em&gt;</code> <strong>: The Emphasis element</strong></td>
<td>Element marks text that has stress emphasis</td>
</tr>
<tr>
<td><code>&lt;i&gt;</code> vs. <code>&lt;em&gt;</code> </td>
<td>The <code>&lt;em&gt;</code>  element represents stress emphasis of its contents, while the <code>&lt;i&gt;</code> element represents text that is set off from the normal prose, such a foreign word, fictional character thoughts, or when the text refers to the definition of a word instead of representing its semantic meaning</td>
</tr>
<tr>
<td><code>&lt;strong&gt;</code>  <strong>: The Strong Importance element</strong></td>
<td>Element indicates that its contents have strong importance, seriousness, or urgency</td>
</tr>
<tr>
<td><code>&lt;b&gt;</code> vs. <code>&lt;strong&gt;</code> </td>
<td>The <code>&lt;strong&gt;</code> element is for content that is of greater importance, while the <code>&lt;b&gt;</code>  element is used to draw attention to text without indicating that it's more important.</td>
</tr>
<tr>
<td><code>&lt;ul&gt;</code> <strong>: The Unordered List element</strong></td>
<td>The <code>&lt;ul&gt;</code>  HTML element represents an unordered list of items, typically rendered as a bulleted list.
<pre>
<code>
&lt;ul&gt;
	&lt;li&gt;first item&lt;li&gt;
	&lt;li&gt;second item&lt;li&gt;
	&lt;li&gt;third item&lt;li&gt;
&lt;/ul&gt;
</code>
</pre>
</td>
</tr>
<tr>
<td><code>&lt;ol&gt;</code> <strong>: The Ordered List element</strong></td>
<td>The <code>&lt;ol&gt;</code>  HTML element represents an ordered list of items — typically rendered as a numbered list.
<pre>
<code>
&lt;ol&gt;
	&lt;li&gt;first item&lt;li&gt;
	&lt;li&gt;second item&lt;li&gt;
	&lt;li&gt;third item&lt;li&gt;
&lt;/ol&gt;
</code>
</pre>
</td>
</tr>
<tr>
<td><code>&lt;img&gt;</code> <strong>: The Image Embed element</strong></td>
<td>The <code>&lt;img&gt;</code> HTML element embeds an image into the document.
<pre>
<code>
&lt;img src="https://source-of-image"
alt="if-the-image-failed-to-load"&gt;
</code>
</pre>
</td>
</tr>
<tr>
<td><code>&lt;a&gt;</code> <strong>: The Anchor element</strong></td>
<td>The <code>&lt;a&gt;</code> HTML element (or anchor element), with its href attribute, creates a hyperlink to web pages, files, email addresses, locations in the same page, or anything else a URL can address.
<pre>
<code>
&lt;ul&gt;
	&lt;li&gt;&lt;a href="https://example.com"&gt;Website&lt;/a&gt;li&gt;
	&lt;li&gt;&lt;a href="mailto:m.bluth@example.com"&gt;Email&lt;/a&gt;li&gt;
	&lt;li&gt;&lt;a href="tel:+123456789"&gt;Phone&lt;/a&gt;li&gt;
&lt;/ul&gt;
</code>
</pre>
</td>
</tr>
</tbody>
</table>

## Summary
HTML is the universal markup language for the Web. HTML lets you format text, add graphics, create links, etc., and save it all in a text file that any browser can read and display.

