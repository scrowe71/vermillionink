import fs from 'node:fs';
const config=JSON.parse(fs.readFileSync(new URL('../version.json',import.meta.url),'utf8'));
if(!/^\d+\.\d+\.\d+$/.test(config.version)||!/^\d{4}-\d{2}-\d{2}$/.test(config.updated))throw Error('Use version x.y.z and date YYYY-MM-DD');
const date=new Intl.DateTimeFormat('en-US',{month:'long',day:'numeric',year:'numeric',timeZone:'UTC'}).format(new Date(config.updated+'T12:00:00Z'));
const label='<p class="release-version" id="release-version">Demo v'+config.version+' · Updated '+date+'</p>';
const dir=new URL('../',import.meta.url);
for(const file of fs.readdirSync(dir).filter(f=>f.endsWith('.html'))){const path=new URL(file,dir);let html=fs.readFileSync(path,'utf8');html=html.includes('id="release-version"')?html.replace(/<p class="release-version" id="release-version">[\s\S]*?<\/p>/,label):html.replace('</footer>',label+'</footer>');fs.writeFileSync(path,html)}
console.log('Updated all footers to demo v'+config.version);
