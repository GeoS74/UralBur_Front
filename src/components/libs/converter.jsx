class Converter {
    constructor(opts) {
        this.regexp = {
            title: /^([-]\s+|\d[).]\s+|\s*)(#+)(\s+)(.*)/,
            image: /!\[\[.+?\]\]/g,
            internalLink: /(^|[^!])(\[\[.+?\]\])/g,
            externalLink: /(\[[^[]*?\])(\(.+?\))/g,
            bold: /(__|\*\*)([^_*].*?)\1/g,
            cursive: /(_|\*)([^_*].*?)\1(\s|$)/g,
            longSpace: /\s+/g,
            ul: /^-\s+(.*)/,
            ol: /^(\d)[.)]\s+(.*)/,
            code: /^\s*?```|\n\s*?```\s*?/,
            shortcode: /`(.*?)`/g,
            paragraph: /^\s*#?([\w\dа-яА-Я]|<[bia][\s>]|<small>|<code>)/,
            blockquote: /^\s*>\s*(.*)/,
            hashtag: /#([\w\dа-яА-Я]+)/g,
            ecsapetag: /<(Buffer.*?)>/g,
        };
        this.codeBlock = false;
        this.tag = {};
        this.prefix = '';
        if (opts?.prefix) {
            this.setPrefix(opts.prefix);
        }
    }
    markdownToHTML(markdown) {
        this.codeBlock = false;
        this.setTag();
        return markdown
            .split('\n')
            .map((line) => this.linePipe(line))
            .join('\n')
            .split(this.regexp.code)
            .map((block, i) => ((i % 2) ? this.code(block) : block))
            .join('\n') + (this.tag.close || '');
    }
    setPrefix(prefix) {
        if (prefix === '/') {
            return;
        }
        this.prefix = prefix[0] === '/' ? prefix : `/${prefix}`;
    }
    setTag(tag, start) {
        switch (tag) {
            case 'ul':
                this.tag = {
                    type: 'ul',
                    open: '<ul>',
                    close: '</li></ul>',
                };
                break;
            case 'ol':
                this.tag = {
                    type: 'ol',
                    open: `<ol start="${start || 1}">`,
                    close: '</li></ol>',
                };
                break;
            case 'blockquote':
                this.tag = {
                    type: 'blockquote',
                    open: '<blockquote>',
                    close: '</p></blockquote>',
                };
                break;
            default:
                this.tag = {};
        }
    }
    list(line) {
        let matched = line.match(this.regexp.ul);
        if (matched) {
            if (this.tag.type !== 'ul') {
                let tags = this.tag.close || '';
                this.setTag('ul');
                tags += this.tag.open;
                return `${tags}<li>${matched[1]}`;
            }
            return `</li><li>${matched[1]}`;
        }
        matched = line.match(this.regexp.ol);
        if (matched) {
            if (this.tag.type !== 'ol') {
                let tags = this.tag.close || '';
                this.setTag('ol', Number.parseInt(matched[1], 10));
                tags += this.tag.open;
                return `${tags}<li>${matched[2]}`;
            }
            return `</li><li>${matched[2]}`;
        }
        return line;
    }
    code(block) {
        const iterator = block.matchAll(this.regexp.ecsapetag);
        const matched = [...iterator];
        if (matched.length) {
            for (const chunk of matched) {
                block = block.replace(chunk[0], chunk[1]);
            }
        }
        return `<pre><code>${block}</code></pre>`;
    }
    paragraph(line) {
        if (!this.regexp.paragraph.test(line) || this.tag.type) {
            return line;
        }
        return `<p>${line}</p>`;
    }
    // bold -> cursive
    linePipe(line) {
        if (this.isCodeBlock(line)) {
            if (this.tag.close) {
                line = `${this.tag.close}\n${line}`;
                this.setTag();
            }
            return line;
        }
        line = line.replace(this.regexp.longSpace, ' ');
        if (!line.trim()) {
            line = (this.tag.close || '') + line;
            this.setTag();
            return line;
        }
        line = this.internalLink(line);
        line = this.externalLink(line);
        line = this.title(line);
        line = this.bold(line);
        line = this.cursive(line);
        line = this.image(line);
        line = this.list(line);
        line = this.hashtag(line);
        line = this.blockquote(line);
        line = this.shortcode(line);
        line = this.paragraph(line);
        return line;
    }
    shortcode(line) {
        const iterator = line.matchAll(this.regexp.shortcode);
        const matched = [...iterator];
        if (!matched.length) {
            return line;
        }
        for (const chunk of matched) {
            line = line.replace(chunk[0], `<code>${chunk[1]}</code>`);
        }
        return line;
    }
    hashtag(line) {
        const iterator = line.matchAll(this.regexp.hashtag);
        const matched = [...iterator];
        if (!matched.length) {
            return line;
        }
        for (const chunk of matched) {
            line = line.replace(chunk[0], `<small>${chunk[0]}</small>`);
        }
        return line;
    }
    blockquote(line) {
        const matched = line.match(this.regexp.blockquote);
        if (matched) {
            if (!matched[1].trim()) {
                return '';
            }
            if (this.tag.type !== 'blockquote') {
                let tags = this.tag.close || '';
                this.setTag('blockquote');
                tags += this.tag.open;
                return `${tags}<p>${matched[1]}`;
            }
            return `</p><p>${matched[1]}`;
        }
        return line;
    }
    isCodeBlock(line) {
        if (this.regexp.code.test(line)) {
            this.codeBlock = !this.codeBlock;
            return true;
        }
        return this.codeBlock;
    }
    bold(line) {
        const iterator = line.matchAll(this.regexp.bold);
        const matched = [...iterator];
        if (!matched.length) {
            return line;
        }
        for (const chunk of matched) {
            line = line.replace(chunk[0], `<b>${chunk[2]}</b>`);
        }
        return line;
    }
    cursive(line) {
        const iterator = line.matchAll(this.regexp.cursive);
        const matched = [...iterator];
        if (!matched.length) {
            return line;
        }
        for (const chunk of matched) {
            line = line.replace(chunk[0], `<i>${chunk[2]}</i>${chunk[3]}`);
        }
        return line;
    }
    image(line) {
        const iterator = line.matchAll(this.regexp.image);
        const matched = [...iterator];
        if (!matched.length) {
            return line;
        }
        for (const chunk of matched) {
            const link = chunk[0]
                .slice(3, -2)
                .split('|');
            const url = link[0].trim();
            const alias = link.length > 1 ? link.slice(1).join('|').trim() : url;
            line = line.replace(chunk[0], `<img src="/${url}" alt="${alias}"/>`);
        }
        return line;
    }
    internalLink(line) {
        const iterator = line.matchAll(this.regexp.internalLink);
        const matched = [...iterator];
        if (!matched.length) {
            return line;
        }
        for (const chunk of matched) {
            const link = chunk[2]
                .slice(2, -2)
                .replace(/#/g, '>')
                .split('|');
            const url = link[0].trim();
            const alias = link.length > 1 ? link.slice(1).join('|').trim() : url;
            line = line.replace(chunk[2], `<a href="${this.prefix}/${url}">${alias}</a>`);
        }
        return line;
    }
    externalLink(line) {
        const iterator = line.matchAll(this.regexp.externalLink);
        const matched = [...iterator];
        if (!matched.length) {
            return line;
        }
        for (const chunk of matched) {
            const alias = chunk[1].slice(1, -1).trim();
            const url = this.getUrl(chunk[2].slice(1, -1).trim());
            const newLink = url ? `<a href="${url}" target="blank">${alias}</a>` : `[${alias}]${chunk[2]}`;
            line = line.replace(chunk[0], newLink);
        }
        return line;
    }
    title(line) {
        const matched = line.match(this.regexp.title);
        if (!matched) {
            return line;
        }
        return `${matched[1]}<h${matched[2].length}>${matched[4]}</h${matched[2].length}>`;
    }
    getUrl(url) {
        try {
            return new URL(url).href;
        }
        catch (error) {
            return null;
        }
    }
}
export default Converter;
