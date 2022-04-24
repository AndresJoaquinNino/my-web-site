let codeText;

codeText = '(p)const(/) AwesomePage = (s) () (/) => (s) { (/)(br)';
    codeText += '(t1) return (s) ( (/)(br)';
        codeText += '(t2) <(p)main(/)>(br)';
            codeText += '(t3) <(p)header(/)>(br)';
                codeText += "(t4) I'am Andrés J. Niño (br)";
            codeText += '(t3) <(l)/(/)(p)header(/)>(br)';
            codeText += '(t3) <(p)hr(/)(l)/(/)>(br)';
            codeText += '(t3) <(p)p(/)>(br)';
                codeText += "(t4) Passionate for the frontend... (br)";
            codeText += '(t3) <(l)/(/)(p)p(/)>(br)';
        codeText += '(t2) <(l)/(/)(p)main(/)>(br)';
    codeText += '(t1)(s) ); (/)(br)';
codeText += '(s) } (/)(br)';
codeText += '(p)export default (/) AwesomePage(s);(/)';

const customTags = {
    '(p)' : '<span class="text-primary">',
    '(s)' : '<span class="text-secondary">',
    '(l)' : '<span class="text-light">',
    '(/)' : '</span>',
    '(br)' : '<br/>',
    '(t1)' : '<span class="ml-1"></span>',
    '(t2)' : '<span class="ml-2"></span>',
    '(t3)' : '<span class="ml-3"></span>',
    '(t4)' : '<span class="ml-4"></span>',
}

for (const tag in customTags){
    codeText = codeText.replaceAll(tag,customTags[tag]);
}

export default codeText;