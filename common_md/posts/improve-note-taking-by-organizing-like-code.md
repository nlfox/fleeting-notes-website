---
title: Improve Note-taking by Organizing Notes like Code
tags:
- blog
date: 2022-11-02
lastmod: 2022-11-02
---

Note organization is very opinionated. There is no shortage of ways to organize notes and everyone seems to have their own method of doing it. Although these methods are great for the short term, as the number of notes grows it becomes difficult to manage notes with these self-made systems. 

Funnily enough, the very same thing happens to programmers as well. As code gets more complex, it becomes harder to manage code. Now the difference between the two is that poorly managed code has real tangible consequences (e.g. more developer time = tons of money). Whereas the consequences of poorly managed notes are much less apparent (e.g. longer time to find information). For these reasons, I believe that code organization has innovated much further than note organization. So, there is much note organization can learn from code organization. 

## The Main Principle of Coding

One of the main principles of coding is to write code efficiently. One way to accomplish this is by applying the 3 R's: reuse, recycle, and reduce. By incorporating these three principles, we can make it extremely easy to find what we're looking for. 

### Reuse

Just like how we reuse water bottles, we can reuse our snippets of code with [programming functions](../notes/programming%20functions.md). Instead of copy-pasting or rewriting code, we simply "run the function" and the code snippet runs without any hassle. 

### Recycle

When finished a plastic water bottle, it might be worthwhile to repurpose it for something else (or just dump it in the recycling bin). Here's where recycling comes in.

In programming, recycling is as simple as updating or modifying a function. What's great about this is that updating the function updates all references to it as well.

### Reduce

Using a reusable water bottle at all times eliminates the need for a plastic bottle; reducing overall consumption. When writing code, using functions makes reading code faster and easier. Long code snippets are summarized into a single line, reducing the amount that needs to be read.

### Let's summarize the greatness

* Less code to write (No copy-pasting or rewriting code)
* Updating the function updates all places that reference the function (Update one = Update all)
* Less code to read (Fewer lines of code with functions)

````
# greet function
def greet(name):
	print('Hello ' + name + '. Good morning!')
	print('Hows your day?')

# Let's greet everyone in 2 ways:
## Better way:
greet('Matt')
greet('John')
greet('Ethan')

## Worse way:
print('Hello Matt. Good morning!')
print('Hows your day?')
print('Hello John. Good morning!')
print('Hows your day?')
print('Hello Ethan. Good morning!')
print('Hows your day?')
````

## How to apply these concepts to your note-taking

So you might be wondering, how can we apply these principles to note-taking? By using [wikilinks](../notes/wikilinks.md) in your notes! Wikilinks are essentially [functions](../notes/programming%20functions.md) but for notes.

Currently, in note-taking, most people write "[spaghetti notes](../notes/spaghetti%20code.md)". It's no wonder most people find notes difficult to find and hard to organize.

But, by applying these 3 principles while using a [link-based note-taking app](../notes/link-based%20note-taking%20app.md), you can un-spaghettify your notes! Here's how I incorporate the three principles in my simple workflow:

1. Begin writing a note about anything (e.g. a thought)
1. You come across a topic you want to expand upon (e.g. programming functions, wikilinks, spaghetti code)
1. Search if the topic you want to expand upon already exists. Link it if it does.
1. If it doesn't exist, create the link and expand upon the topic within the new note. 
1. Go back to the previous note and continue writing what you were writing

As you may have noticed by now, I'm [using wikilinks in this blog](writing-connected-and-personalized-blogs.md) post as well. Use it as another example.
